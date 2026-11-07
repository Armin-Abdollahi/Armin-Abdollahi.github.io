(() => {
  const scene = document.querySelector('[data-signal-scene]');
  if (!scene) return;
  const canvas = scene.querySelector('canvas');
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const modes = {
    motor: { title: 'Motor imagery', subtitle: 'Sensorimotor rhythms · EEG', hue: 166, seed: 31 },
    speech: { title: 'Imagined speech', subtitle: 'Neural timing · silent communication', hue: 188, seed: 73 },
    hci: { title: 'Adaptive HCI', subtitle: 'Human context · system response', hue: 31, seed: 119 }
  };
  let mode = modes.motor;
  let width = 0, height = 0, dpr = 1, frame = 0, raf = 0;
  let rotation = 0, tilt = -.12, targetRotation = 0, targetTilt = -.12;
  let pointer = null, dragging = false, lastX = 0, lastY = 0;
  let points = [], links = [];

  function randomFactory(seed) {
    let value = seed >>> 0;
    return () => { value = (value * 1664525 + 1013904223) >>> 0; return value / 4294967296; };
  }
  function createNetwork() {
    const random = randomFactory(mode.seed);
    const count = Math.max(70, Math.min(155, Math.round(width * height / 4300)));
    points = [];
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const angle = Math.PI * (3 - Math.sqrt(5)) * i;
      points.push({ x: Math.cos(angle) * radius, y, z: Math.sin(angle) * radius, phase: random() * Math.PI * 2, size: .55 + random() * 1.4 });
    }
    links = [];
    points.forEach((p, i) => {
      const close = points.map((q, j) => ({ j, d: (p.x-q.x)**2 + (p.y-q.y)**2 + (p.z-q.z)**2 })).filter(v => v.j !== i).sort((a,b)=>a.d-b.d).slice(0,3);
      close.forEach(v => { if (v.j > i) links.push([i, v.j]); });
    });
  }
  function resize() {
    const box = scene.getBoundingClientRect();
    width = box.width; height = box.height; dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); createNetwork();
  }
  function rotate(p) {
    const cosY = Math.cos(rotation), sinY = Math.sin(rotation);
    const x = p.x * cosY - p.z * sinY, z = p.x * sinY + p.z * cosY;
    const cosX = Math.cos(tilt), sinX = Math.sin(tilt);
    return { x, y: p.y * cosX - z * sinX, z: p.y * sinX + z * cosX, phase: p.phase, size: p.size };
  }
  function render() {
    frame += 1;
    if (!dragging && !reducedMotion) targetRotation += .0015;
    rotation += (targetRotation - rotation) * .06; tilt += (targetTilt - tilt) * .06;
    ctx.clearRect(0,0,width,height);
    if (!width || !height) { raf = requestAnimationFrame(render); return; }
    const radius = Math.min(width, height) * .34;
    const cx = width * .51, cy = height * .48;
    const projected = points.map(p => {
      const r = rotate(p), depth = 2.8 / (2.8 - r.z * .48);
      return { x: cx + r.x * radius * depth, y: cy + r.y * radius * depth, z: r.z, size: r.size, phase: r.phase };
    });
    const hue = mode.hue;
    for (const [a,b] of links) {
      const p=projected[a], q=projected[b], depth=(p.z+q.z+2)/4;
      const pulse = .5 + .5 * Math.sin(frame * .035 + p.phase);
      ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y);
      ctx.strokeStyle = `hsla(${hue}, 75%, 68%, ${(.05 + depth * .18) * (pointer ? .8 + pulse * .6 : 1)})`;
      ctx.lineWidth = .45 + depth * .45; ctx.stroke();
    }
    projected.forEach(p => {
      const depth = (p.z + 1) / 2, pulse = .5 + .5 * Math.sin(frame * .045 + p.phase);
      const r = (1 + depth * 1.5) * p.size;
      ctx.beginPath(); ctx.arc(p.x,p.y,r,0,Math.PI*2);
      ctx.fillStyle = `hsla(${hue}, 82%, ${65 + depth*18}%, ${.28 + depth*.67})`; ctx.fill();
      if (pulse > .94 && depth > .5) {
        ctx.beginPath(); ctx.arc(p.x,p.y,r*3,0,Math.PI*2);
        ctx.strokeStyle = `hsla(${hue}, 85%, 70%, ${(pulse-.94)*5})`; ctx.lineWidth=.7; ctx.stroke();
      }
    });
    // A subtle EEG trace under the network gives the neural geometry a signal context.
    const baseline = height * .77, traceWidth = width * .72, left = width * .14;
    ctx.beginPath();
    for(let x=0;x<=traceWidth;x+=2){
      const t=x/traceWidth, wave=Math.sin(t*30+frame*.035)*4+Math.sin(t*77-frame*.021)*2.3+Math.sin(t*9+frame*.01)*3;
      const y=baseline+wave; if(x===0)ctx.moveTo(left+x,y);else ctx.lineTo(left+x,y);
    }
    ctx.strokeStyle=`hsla(${hue}, 80%, 68%, .42)`;ctx.lineWidth=1;ctx.stroke();
    if(!reducedMotion) raf=requestAnimationFrame(render);
  }
  function setMode(key) {
    if (!modes[key]) return;
    mode = modes[key];
    scene.querySelector('[data-scene-title]').textContent = mode.title;
    scene.querySelector('[data-scene-subtitle]').textContent = mode.subtitle;
    scene.querySelectorAll('.scene-control').forEach(button => {
      const active = button.dataset.scene === key;
      button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active));
    });
    createNetwork();
    if (reducedMotion) render();
  }
  scene.querySelectorAll('.scene-control').forEach(button => button.addEventListener('click', () => setMode(button.dataset.scene)));
  scene.addEventListener('pointerdown', event => { dragging=true;lastX=event.clientX;lastY=event.clientY;scene.setPointerCapture(event.pointerId); });
  scene.addEventListener('pointermove', event => {
    if(dragging){targetRotation+=(event.clientX-lastX)*.008;targetTilt=Math.max(-.75,Math.min(.75,targetTilt+(event.clientY-lastY)*.006));lastX=event.clientX;lastY=event.clientY;}
    pointer={x:event.offsetX,y:event.offsetY};
  });
  const release = () => { dragging=false; };
  scene.addEventListener('pointerup',release);scene.addEventListener('pointercancel',release);scene.addEventListener('pointerleave',()=>{pointer=null;});
  window.addEventListener('resize',resize,{passive:true});
  resize();
  render();
})();

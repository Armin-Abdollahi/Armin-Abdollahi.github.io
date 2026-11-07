const stage = document.querySelector('[data-brain-stage]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Keep the portfolio navigable and the EEG trace alive even if WebGL/CDN is unavailable.
const menuToggle = document.querySelector('.nav-menu');
const nav = document.querySelector('.portfolio-nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('nav-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('nav-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const revealTargets = document.querySelectorAll('.section-heading, .research-card, .project-tile, .publication-row, .journey-photo, .journey-timeline article, .fact-item');
if ('IntersectionObserver' in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  }), { threshold: 0.14, rootMargin: '0px 0px -35px 0px' });
  revealTargets.forEach((el, index) => {
    el.classList.add('reveal-on-scroll');
    if (index % 4) el.classList.add(`delay-${index % 4}`);
    revealObserver.observe(el);
  });
}

const wavePaths = [...document.querySelectorAll('.wave-path')];
let wavePhase = 0;
function animateWaves() {
  wavePhase += reducedMotion ? 0 : 0.035;
  wavePaths.forEach((path, index) => {
    const baseline = index === 0 ? 55 : 72;
    const amplitude = index === 0 ? 20 : 14;
    let d = '';
    for (let x = 0; x <= 460; x += 3) {
      const t = x / 460;
      const envelope = 0.54 + 0.46 * Math.sin(t * Math.PI) ** 2;
      const signal = Math.sin(t * 31 + wavePhase * (index ? -.82 : 1) + index) * .55
        + Math.sin(t * 73 - wavePhase * .67 + index * 2) * .23
        + Math.sin(t * 13 + wavePhase * .34) * .22;
      const y = baseline + signal * amplitude * envelope;
      d += `${x === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(2)} `;
    }
    path.setAttribute('d', d);
  });
}

if (stage) {
  try {
    const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.187.0/build/three.module.js');
    const canvas = stage.querySelector('.brain-webgl');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 60);
    camera.position.set(0, 0, 8.7);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
    renderer.setClearColor(0x000000, 0);
    const network = new THREE.Group();
    scene.add(network);

    const rand = (() => { let seed = 41827; return () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646; })();
    const nodes = [];
    const nodeCount = window.innerWidth < 650 ? 96 : 172;
    for (let i = 0; i < nodeCount; i++) {
      const side = rand() > .5 ? 1 : -1;
      const theta = rand() * Math.PI * 2;
      const u = rand() * 2 - 1;
      const spread = Math.sqrt(1 - u * u);
      const lobe = rand() > .55 ? .76 : .68;
      const x = side * lobe + Math.cos(theta) * spread * 1.14;
      const y = u * .79 + .06;
      const z = Math.sin(theta) * spread * .57;
      nodes.push(new THREE.Vector3(x, y, z));
    }

    const positionArray = new Float32Array(nodes.length * 3);
    const colorArray = new Float32Array(nodes.length * 3);
    const cyan = new THREE.Color(0x43dcff);
    const violet = new THREE.Color(0x9b78ff);
    nodes.forEach((point, i) => {
      positionArray.set([point.x, point.y, point.z], i * 3);
      const color = rand() > .22 ? cyan : violet;
      colorArray.set([color.r, color.g, color.b], i * 3);
    });
    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    const neurons = new THREE.Points(pointsGeometry, new THREE.PointsMaterial({ size: .052, sizeAttenuation: true, vertexColors: true, transparent: true, opacity: .92, blending: THREE.AdditiveBlending, depthWrite: false }));
    network.add(neurons);

    const edgePositions = [];
    const routes = [];
    nodes.forEach((point, i) => {
      const nearest = nodes.map((other, j) => ({ j, d: point.distanceToSquared(other) }))
        .filter(item => item.j !== i).sort((a, b) => a.d - b.d).slice(0, 4);
      nearest.forEach(({ j, d }) => {
        if (j > i && d < .78) {
          edgePositions.push(point.x, point.y, point.z, nodes[j].x, nodes[j].y, nodes[j].z);
          routes.push([i, j]);
        }
      });
    });
    const edgeGeometry = new THREE.BufferGeometry();
    edgeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(edgePositions, 3));
    network.add(new THREE.LineSegments(edgeGeometry, new THREE.LineBasicMaterial({ color: 0x44cfff, transparent: true, opacity: .17, blending: THREE.AdditiveBlending, depthWrite: false })));

    // Tiny light-pulses travel over the graph; they are purely decorative, not EEG data.
    const pulseGeometry = new THREE.SphereGeometry(.025, 8, 8);
    const pulses = Array.from({ length: 26 }, (_, i) => {
      const route = routes[Math.floor(rand() * routes.length)] || [0, 1];
      const light = new THREE.Mesh(pulseGeometry, new THREE.MeshBasicMaterial({ color: i % 4 ? 0x56edff : 0xb08aff, transparent: true, opacity: .86, blending: THREE.AdditiveBlending }));
      network.add(light);
      return { light, route, phase: rand(), speed: .0015 + rand() * .0028 };
    });

    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x40c8ff, transparent: true, opacity: .14, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
    const ringA = new THREE.Mesh(new THREE.TorusGeometry(2.25, .007, 5, 140), ringMaterial);
    ringA.rotation.set(.95, .3, -.22); ringA.scale.set(1.22, .77, 1); network.add(ringA);
    const ringB = new THREE.Mesh(new THREE.TorusGeometry(2.02, .006, 5, 140), new THREE.MeshBasicMaterial({ color: 0xa375ff, transparent: true, opacity: .11, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    ringB.rotation.set(1.35, -.5, .8); ringB.scale.set(1.08, .82, 1); network.add(ringB);

    const resize = () => {
      const rect = stage.getBoundingClientRect();
      const width = Math.max(1, rect.width), height = Math.max(1, rect.height);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.position.z = width < 650 ? 9.5 : 8.7;
      camera.updateProjectionMatrix();
      network.position.set(width < 650 ? .13 : .08, .03, 0);
      network.scale.setScalar(width < 650 ? .9 : 1.04);
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    let targetX = 0, targetY = 0, scrollTurn = 0;
    stage.addEventListener('pointermove', event => {
      const bounds = stage.getBoundingClientRect();
      targetY = ((event.clientX - bounds.left) / bounds.width - .5) * .34;
      targetX = ((event.clientY - bounds.top) / bounds.height - .5) * .2;
    });
    stage.addEventListener('pointerleave', () => { targetX = 0; targetY = 0; });
    window.addEventListener('scroll', () => {
      const rect = stage.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      scrollTurn = progress * .42;
    }, { passive: true });

    const clock = new THREE.Clock();
    let raf = 0, visible = true;
    const render = () => {
      if (!visible || document.hidden) { raf = 0; return; }
      const t = clock.getElapsedTime();
      if (!reducedMotion) {
        network.rotation.y += (targetY + scrollTurn - network.rotation.y) * .025;
        network.rotation.x += (targetX - network.rotation.x) * .025;
        ringA.rotation.z = -.22 + Math.sin(t * .19) * .08;
        ringB.rotation.z = .8 - Math.sin(t * .14) * .07;
        pulses.forEach(({ light, route, phase, speed }) => {
          const amount = (phase + t * speed * 60) % 1;
          light.position.lerpVectors(nodes[route[0]], nodes[route[1]], amount);
          light.material.opacity = .45 + .4 * Math.sin(amount * Math.PI);
        });
        animateWaves();
      }
      renderer.render(scene, camera);
      raf = reducedMotion ? 0 : requestAnimationFrame(render);
    };
    const observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(render);
      if (!visible && raf) { cancelAnimationFrame(raf); raf = 0; }
    }, { threshold: 0.01 });
    observer.observe(stage);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && raf) { cancelAnimationFrame(raf); raf = 0; }
      else if (!document.hidden && visible && !raf) raf = requestAnimationFrame(render);
    });
    if (reducedMotion) { animateWaves(); renderer.render(scene, camera); }
  } catch (error) {
    console.warn('3D neural animation unavailable; showing the static brain artwork.', error);
    document.documentElement.classList.add('webgl-unavailable');
    if (!reducedMotion) setInterval(animateWaves, 50);
  }
}

(() => {
  const dashboard = document.querySelector('.scholar-dashboard');
  if (!dashboard) return;

  const filters = dashboard.querySelectorAll('.sd-filter');
  const works = dashboard.querySelectorAll('.sd-work-list li');

  filters.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filters.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      works.forEach((work) => {
        work.hidden = filter !== 'all' && !work.dataset.topics.split(' ').includes(filter);
      });
    });
  });
})();

(() => {
  const root = document.querySelector('.sd-analytics');
  const payload = root && root.querySelector('#sd-publication-data');
  if (!payload) return;
  let papers = [];
  try { papers = JSON.parse(payload.textContent); } catch (_) { return; }
  const $ = (selector) => root.querySelector(selector);
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const years = [...new Set(papers.map((p) => p.year).filter((y) => /^\d{4}$/.test(y)))].sort();
  const empty = '<p class="sd-no-data">No verified data available yet.</p>';
  const metricFields = [['Citations','citations'],['h-index','hindex'],['g-index','gindex'],['i10-index','i10index']];
  function renderMetrics() {
    const source = root.querySelector('[data-source].is-active')?.dataset.source || 'scholar';
    const srcName = source === 'wos' ? 'wos' : source;
    const metricEl = $('#sd-index-metrics');
    metricEl.innerHTML = metricFields.map(([label,key]) => `<div class="sd-index-metric"><b>${esc(label)}</b><strong>${papers.some(p => p[srcName]?.[key] != null || p[key] != null) ? esc(papers.find(p => p[srcName]?.[key] != null || p[key] != null)[srcName]?.[key] ?? papers.find(p => p[key] != null)[key]) : '—'}</strong></div>`).join('');
    $('#sd-index-cards').innerHTML = [['h-index','hindex'],['g-index','gindex'],['m-index','mindex'],['i10-index','i10index']].map(([n,k]) => `<div><span>${n}</span><b>${papers.find(p => p[k] != null)?.[k] ?? '—'}</b></div>`).join('');
  }
  function renderYears() {
    const counts = Object.fromEntries(years.map(y => [y,papers.filter(p => p.year === y).length]));
    $('#sd-year-chart').innerHTML = years.length ? `<div class="sd-bars">${years.map(y => `<div title="${y}: ${counts[y]} works"><i style="--bar:${Math.max(8,counts[y]/Math.max(...Object.values(counts))*100)}%"></i><span>${y}</span><b>${counts[y]}</b></div>`).join('')}</div>` : empty;
  }
  function renderTable() {
    const query = ($('#sd-paper-search')?.value || '').toLowerCase();
    const year = $('#sd-year-filter')?.value || 'all';
    const sort = root.dataset.sort || 'year';
    const list = papers.filter(p => (year === 'all' || p.year === year) && `${p.title} ${p.venue}`.toLowerCase().includes(query)).sort((a,b) => sort === 'title' ? a.title.localeCompare(b.title) : b.year.localeCompare(a.year));
    $('#sd-paper-rows').innerHTML = list.length ? list.map(p => `<tr><td><a href="${esc(p.url)}">${esc(p.title)}</a></td><td>${esc(p.venue || '—')}</td><td>${esc(p.year || '—')}</td><td>${esc(p.status || '—')}</td></tr>`).join('') : '<tr><td colspan="4">No matching publications.</td></tr>';
    $('#sd-paper-count').textContent = `${list.length} of ${papers.length} works`;
  }
  function renderKeywords() {
    const words = new Map();
    papers.forEach(p => {
      const supplied = Array.isArray(p.keywords) ? p.keywords : String(p.keywords || '').split(/[,;|]/);
      const source = `${supplied.join(' ')} ${p.title} ${p.excerpt || ''}`;
      const tokens = source.toLowerCase().match(/[a-z][a-z-]{3,}/g) || [];
      tokens.filter(w => !['through','using','with','from','study','based','model','analysis','estimation','research'].includes(w)).forEach(w => words.set(w,(words.get(w)||0)+1));
    });
    $('#sd-keyword-cloud').innerHTML = [...words].sort((a,b) => b[1]-a[1]).slice(0,36).map(([w,n]) => `<span style="--weight:${Math.min(3,1+n)}">${esc(w)}</span>`).join('') || empty;
  }
  function renderVenues() {
    const counts = new Map(); papers.forEach(p => { const v=p.venue?.trim(); if(v) counts.set(v,(counts.get(v)||0)+1); });
    $('#sd-venue-chart').innerHTML = [...counts].sort((a,b)=>b[1]-a[1]).map(([v,n]) => `<div><span>${esc(v)}</span><i><b style="width:${n/Math.max(...counts.values())*100}%"></b></i><strong>${n}</strong></div>`).join('') || empty;
  }
  function renderNetwork() {
    const nodes = new Map(); papers.forEach(p => (Array.isArray(p.authors)?p.authors:[]).forEach(a => nodes.set(a,(nodes.get(a)||0)+1)));
    const entries = [...nodes].sort((a,b)=>b[1]-a[1]);
    $('#sd-live-network').innerHTML = entries.length ? `<div class="sd-author-list">${entries.map(([a,n])=>`<span>${esc(a)} <b>${n}</b></span>`).join('')}</div>` : '<p class="sd-no-data">Add an authors list to publication front matter to build the collaboration network.</p>';
  }
  function renderGauges() {
    const fields = [['Impact Factor','impactFactor'],['CiteScore','citeScore'],['SJR','sjr'],['SNIP','snip']];
    $('#sd-gauges').innerHTML = fields.map(([name,key]) => {const value=papers.find(p=>p[key]!=null)?.[key]; return `<div class="sd-gauge" style="--gauge:${value==null?0:65}%"><span>${esc(name)}</span><b>${value==null?'—':esc(value)}</b></div>`;}).join('');
  }
  root.querySelectorAll('[data-source]').forEach(btn => btn.addEventListener('click',()=>{root.querySelectorAll('[data-source]').forEach(x=>x.classList.toggle('is-active',x===btn));renderMetrics();}));
  root.querySelectorAll('[data-map]').forEach(btn=>btn.addEventListener('click',()=>{root.querySelectorAll('[data-map]').forEach(x=>x.classList.toggle('is-active',x===btn));}));
  $('#sd-paper-search').addEventListener('input',renderTable); $('#sd-year-filter').addEventListener('change',renderTable);
  root.querySelectorAll('[data-sort]').forEach(btn=>btn.addEventListener('click',()=>{root.dataset.sort=btn.dataset.sort;renderTable();}));
  years.forEach(y=>$('#sd-year-filter').insertAdjacentHTML('beforeend',`<option value="${esc(y)}">${esc(y)}</option>`));
  renderMetrics(); renderYears(); renderTable(); renderKeywords(); renderVenues(); renderNetwork(); renderGauges();
})();

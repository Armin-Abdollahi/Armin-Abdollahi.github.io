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

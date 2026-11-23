(() => {
  const dashboard = document.querySelector('.research-dashboard');
  if (!dashboard) return;
  const wave = dashboard.querySelector('.rd-wave-line:not(.rd-wave-line-back)');
  if (wave && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const card = wave.closest('.rd-wave-card');
    card?.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      const offset = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
      wave.style.transform = `translateY(${offset.toFixed(1)}px)`;
    });
    card?.addEventListener('pointerleave', () => { wave.style.transform = ''; });
  }
})();

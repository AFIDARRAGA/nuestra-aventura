(() => {
  'use strict';

  // Prevent accidental browser gestures while playing on touch devices.
  document.addEventListener('gesturestart', (e) => e.preventDefault(), { passive: false });
  document.addEventListener('dblclick', (e) => e.preventDefault(), { passive: false });

  // Keep the viewport stable when mobile browser chrome expands/collapses.
  const setViewportUnit = () => {
    document.documentElement.style.setProperty('--app-vh', `${window.innerHeight * 0.01}px`);
  };
  setViewportUnit();
  window.addEventListener('resize', setViewportUnit, { passive: true });
  window.addEventListener('orientationchange', () => setTimeout(setViewportUnit, 120), { passive: true });

  // Register an offline cache when served from http(s). It is intentionally
  // skipped for file://, where all local assets already load directly.
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
})();

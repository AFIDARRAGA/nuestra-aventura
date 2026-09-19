const CACHE = 'duckventure-v4.8.1-core';
const PHASER = 'https://cdn.jsdelivr.net/npm/phaser@3.90.0/dist/phaser.min.js';
const CORE = [
  './',
  './index.html',
  './styles.css',
  './mobile.js',
  './manifest.webmanifest',
  './game.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    for (const url of CORE) {
      try { await cache.add(url); } catch (_) {}
    }
    try {
      const res = await fetch(PHASER, { mode: 'cors' });
      if (res.ok) await cache.put(PHASER, res.clone());
    } catch (_) {}
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(k => k !== CACHE && k.startsWith('duckventure-'))
        .map(k => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isPhaser = event.request.url === PHASER;
  const isSameOrigin = url.origin === self.location.origin;
  if (!isPhaser && !isSameOrigin) return;

  // Browsers normally request audio/video with HTTP byte ranges. Returning a
  // full cached response to a Range request can make <audio>/<video> fail on
  // GitHub Pages, even though the same files work when opened locally.
  // Media is therefore always served directly by GitHub/CDN.
  const isRangeRequest = event.request.headers.has('range');
  const isMedia = /\.(?:mp3|mp4|m4a|ogg|wav|webm)$/i.test(url.pathname);
  if (isRangeRequest || isMedia) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Network-first avoids an old service-worker cache keeping a previous game
  // version after files are updated on GitHub. Cache remains an offline fallback.
  event.respondWith((async () => {
    try {
      const response = await fetch(event.request);
      if (response && response.ok) {
        const cache = await caches.open(CACHE);
        cache.put(event.request, response.clone()).catch(() => {});
      }
      return response;
    } catch (_) {
      const cached = await caches.match(event.request);
      if (cached) return cached;
      if (event.request.mode === 'navigate') {
        return (await caches.match('./index.html')) || new Response('Offline', { status: 503 });
      }
      return new Response('Offline', { status: 503, statusText: 'Offline' });
    }
  })());
});

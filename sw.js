const CACHE = 'duckventure-v4.8-core';
const PHASER = 'https://cdn.jsdelivr.net/npm/phaser@3.90.0/dist/phaser.min.js';
const CORE = [
  './',
  './index.html',
  './styles.css',
  './mobile.js',
  './manifest.webmanifest',
  './game.js',
  './assets/music/wonderwall.mp3',
  './assets/music/yellow.mp3',
  './assets/music/chachacha.mp3',
  './assets/music/come_a_little_closer.mp3',
  './assets/music/kids.mp3',
  './assets/music/electric_love.mp3',
  './assets/music/vamonos_a_marte.mp3'
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
    await Promise.all(keys.filter(k => k !== CACHE && k.startsWith('duckventure-')).map(k => caches.delete(k)));
    self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isPhaser = event.request.url === PHASER;
  const isSameOrigin = url.origin === self.location.origin;
  if (!isPhaser && !isSameOrigin) return;

  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response && (response.ok || response.type === 'opaque')) {
        const cache = await caches.open(CACHE);
        cache.put(event.request, response.clone()).catch(() => {});
      }
      return response;
    } catch (_) {
      return cached || new Response('Offline', { status: 503, statusText: 'Offline' });
    }
  })());
});

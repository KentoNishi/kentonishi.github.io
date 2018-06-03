var CACHE_NAME = 'cache';

var urlsToCache = [
  'https://kentonishi.github.io/apps/gatherapp/',
  'https://kentonishi.github.io/apps/gatherapp/app.js',
  'https://kentonishi.github.io/apps/gatherapp/index.html',
  'https://kentonishi.github.io/apps/gatherapp/worker.js',
  'https://kentonishi.github.io/apps/gatherapp/manifest.json',
  'https://kentonishi.github.io/apps/gatherapp/192x192.png',
  'https://kentonishi.github.io/apps/gatherapp/512x512.png',
  'https://kentonishi.github.io/apps/gatherapp/add.svg',
  'https://kentonishi.github.io/apps/gatherapp/menu.svg',
  'https://kentonishi.github.io/apps/gatherapp/google.png',
  'https://kentonishi.github.io/apps/gatherapp/logo.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
  caches.match(event.request).then(function(response) {
    return response || fetch(event.request);
  })
  );
});

//Delete Caches... ?
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return true;
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

var CACHE_NAME = 'cache';
//RESOURCES
var urlsToCache = [
  'https://kentonishi.github.io/apps/gatherapp/',
  'https://kentonishi.github.io/apps/gatherapp/app.js',
  'https://kentonishi.github.io/apps/gatherapp/index.html',
  'https://kentonishi.github.io/apps/gatherapp/worker.js',
  'https://kentonishi.github.io/apps/gatherapp/manifest.json'
];

self.addEventListener('install', function(event) {
  // Perform install steps
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
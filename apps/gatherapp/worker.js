var version=1;
var CACHE_NAME = new Date().getFullYear().toString()+new Date().getMonth().toString()+new Date().getDay().toString()+version;

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

caches.keys().then(function(cacheNames) {
  return Promise.all(
    cacheNames.map(function(cacheName) {
      if(cacheName != CACHE_NAME) {
        return caches.delete(cacheName);
      }
    })
  );
});

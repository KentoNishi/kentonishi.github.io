var CACHE_NAME = 'cache';

var urlsToCache = [
  'https://kentonishi.github.io/apps/gatherapp/',
  'https://kentonishi.github.io/apps/gatherapp/app.js',
  'https://kentonishi.github.io/apps/gatherapp/index.html',
  'https://kentonishi.github.io/apps/gatherapp/worker.js',
  'https://kentonishi.github.io/apps/gatherapp/manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {/*
        caches.keys().then(function(names) {
        for (let name of names)
            caches.delete(name);
        });*/
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  if(navigator.onLine){
    caches.keys().then(function(names) {
        for (let name of names)
            caches.delete(name);
    });
  }
  console.log(event.request.url);
  event.respondWith(
  caches.match(event.request).then(function(response) {
    return response || fetch(event.request);
  })
  );
});

var CACHE_NAME = 'cache';

//CHECK INTERNET
var urlsToCache = [
  'https://kentonishi.github.io/apps/gatherapp/mobile.html'
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
  console.log(event.request.url);
  event.respondWith(
  caches.match(event.request).then(function(response) {
    return response || fetch(event.request);
  })
  );
});

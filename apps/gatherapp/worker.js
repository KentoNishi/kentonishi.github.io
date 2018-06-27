var CACHE_NAME = "CACHE";

var urlsToCache = [
  '/apps/gatherapp/app.js',
  '/apps/gatherapp/',
  '/apps/gatherapp/index.html',
  '/apps/gatherapp/manifest.json',
  '/apps/gatherapp/192x192.png',
  '/apps/gatherapp/512x512.png',
  '/apps/gatherapp/add.svg',
  '/apps/gatherapp/menu.svg',
  '/apps/gatherapp/google.png',
  '/apps/gatherapp/logo.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        //'Opened cache
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

if(navigator.onLine){
  caches.keys().then(function(names) {
      for (let name of names)
          caches.delete(name);
  });
}

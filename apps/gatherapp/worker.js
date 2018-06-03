var CACHE_NAME = new Date().getFullYear().toString()+new Date().getMonth().toString()+new Date().getDate().toString();

var urlsToCache = [
  '/apps/gatherapp/',
  '/apps/gatherapp/app.js',
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
        console.log('Opened cache');
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

//Remove old caches
caches.keys().then(function(cacheNames) {
  return Promise.all(
    cacheNames.map(function(cacheName) {
      if(cacheName != CACHE_NAME) {
        return caches.delete(cacheName);
      }
    })
  );
});

var CACHE_NAME = 'my-site-cache-v1';

var urlsToCache = [
  'https://kentonishi.github.io/projects/database/app.js',
  'https://kentonishi.github.io/projects/database/',
  'https://kentonishi.github.io/projects/database/index.html'
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

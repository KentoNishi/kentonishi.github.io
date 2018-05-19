var CACHE_NAME = 'cache';
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
self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
  caches.match(event.request).then(function(response) {
    return response || fetch(event.request);
  })
  );
});

self.addEventListener('message', handleMessageFromWorker);

function handleMessageFromWorker(msg) {
    if(msg.data=="CLEAR CACHE"){
      caches.keys().then(function(names) {
          for (let name of names)
              caches.delete(name);
          }             
        console.log('CLEAR CACHE');
    }
}


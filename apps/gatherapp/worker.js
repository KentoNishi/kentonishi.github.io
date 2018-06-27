var CACHE_NAME = "CACHE";

self.importScripts('https://www.gstatic.com/firebasejs/5.0.2/firebase-database.js');

var uid;
self.onmessage=function(e){
    uid=e.data;
    var currentNotification="";
    firebase.database().ref("users/"+uid+"/feed").on("value",function(snapshot){
      var u=0;
      reverseSnapshotOrder(snapshot).forEach(function(child){
          if(u==0&&currentNotification!=child.key&&child.val().content!=null&&loaded==false){
              var options = {
                body: child.val().content,
                icon: "/apps/gatherapp/512x512.png",
                vibrate: [100, 50, 100],
                data: {
                  dateOfArrival: Date.now(),
                  primaryKey: 1
                }
              };
              self.showNotification(child.val().title, options);
             currentNotification=child.key;
          }
        u++;
      });
      u=0;
    });
}

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

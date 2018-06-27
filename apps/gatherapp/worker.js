var CACHE_NAME = "CACHE";

self.importScripts('https://www.gstatic.com/firebasejs/5.0.2/firebase-app.js','https://www.gstatic.com/firebasejs/5.0.2/firebase-auth.js','https://www.gstatic.com/firebasejs/5.0.2/firebase-database.js');

var config = {
    apiKey: "AIzaSyDpWZcmNnF0rmmYJOLgI0-cZJMIvvHngsY",
    authDomain: "gatherapp-1906b.firebaseapp.com",
    databaseURL: "https://gatherapp-1906b.firebaseio.com",
    projectId: "gatherapp-1906b",
    storageBucket: "gatherapp-1906b.appspot.com",
    messagingSenderId: "1038044491990"
};
firebase.initializeApp(config);

var uid="";
var loaded=false;
var currentNotification="";
firebase.auth().onAuthStateChanged(function(me) {
    if (me) {
        uid=me.uid;
        firebase.database().ref("users/"+uid+"/feed").on("value",function(snapshot){
      var u=0;
      reverseSnapshotOrder(snapshot).forEach(function(child){
          if(u==0&&currentNotification!=child.key&&child.val().content!=null&&loaded==false){
             displayNotification(child.val().title,child.val().content);
             currentNotification=child.key;
          }
          if(u>9){
             remove("users/"+uid+"/feed/"+child.key);
          }
        u++;
      });
      loaded=false;
      u=0;
        });
    }
});

function reverseSnapshotOrder (snapshot) {
  let reversed = [];

  snapshot.forEach(child => {
    reversed.unshift(child);
  });

  return reversed;
}

var urlsToCache = [
  '/apps/gatherapp/app.js',
  '/apps/gatherapp/',
  '/apps /gatherapp/index.html',
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

var CACHE_NAME = new Date().getFullYear().toString()+new Date().getMonth().toString()+new Date().getDate().toString()+new Date().getHours().toString()+new Date().getMinutes().toString();

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

function notify(title,content){
    content=decodeURIComponent(content);
    var notification = new Notification(decodeURIComponent(title), {
      icon: '/apps/gatherapp/512x512.png',
      body: content
    });
    notification.onclick = function () {
      window.open("/apps/gatherapp/");      
    };
}

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
var email="";
var name="";
var pic="";
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        uid = user.uid;
        email = user.email;
        name = user.displayName;
        pic = user.photoURL;
        firebase.database().ref('users/' + "feed/"+uid).on('value', function(snapshot) {
          var i = 0;
          var title="";
          var content="";
          snapshot.forEach(function(childSnapshot) {
              var childKey = childSnapshot.key;
              var childData = childSnapshot.val();
              title = childSnapshot.val().title;
              content = childSnapshot.val().content;
              i++;
          });
        notify(title,content);
       });
    }
});

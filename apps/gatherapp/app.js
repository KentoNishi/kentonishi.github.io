  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDofqiHzYbRz8J07H5Vp4_YGaX84kJ-7OQ",
    authDomain: "gatherapp-513ab.firebaseapp.com",
    databaseURL: "https://gatherapp-513ab.firebaseio.com",
    projectId: "gatherapp-513ab",
    storageBucket: "gatherapp-513ab.appspot.com",
    messagingSenderId: "190580601957"
  };
  firebase.initializeApp(config);

  //User Login
  var token;
  var uid;
  var name;
  var pic;
  var email;
  function login(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log("Signed In");
      token=result.credential.accessToken;
      uid=result.user.uid;
      name=result.user.displayName;
      pic=result.user.photoURL;
      email=result.user.email;
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  var CACHE_NAME = 'cache';
  var urlsToCache = [
    '/apps/gatherapp/index.html',
    '/apps/gatherapp/app.js'
  ];

  self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache.');
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

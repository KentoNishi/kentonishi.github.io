self.importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
self.importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
self.importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-database.js');

var config = {
	apiKey: "AIzaSyDpWZcmNnF0rmmYJOLgI0-cZJMIvvHngsY",
	authDomain: "gatherapp-1906b.firebaseapp.com",
	databaseURL: "https://gatherapp-1906b.firebaseio.com",
	projectId: "gatherapp-1906b",
	storageBucket: "gatherapp-1906b.appspot.com",
	messagingSenderId: "1038044491990"
};
firebase.initializeApp(config);

var messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  // Customize notification here
  var notificationTitle = 'Background Message Title';
  var notificationOptions = {
    body: 'Background Message body.',
    icon: '/apps/gatherapp/192x192.png'
  };
  return self.registration.showNotification(notificationTitle,notificationOptions);
});


if(navigator.onLine){
  caches.keys().then(function(names) {
      for (let name of names)
          caches.delete(name);
  });
}

var CACHE_NAME = "CACHE";

var uid="";
var messaging = firebase.messaging();
self.addEventListener('message', function(event){
	uid=me.data;
	messaging.usePublicVapidKey("BAGNHa6lCTJQBrMjFT_lxI37lnvYkGDTwx5nhLMxzp96ROq18LeiarKjUnh2_966QA_YCZMhI8ahn3_pim37psg");
	messaging.requestPermission().then(function() {
	    messaging.getToken().then(function(currentToken) {
		if (currentToken) {
		    firebase.database().ref("users/"+uid+"/info").update({
			token:currentToken
		    });
	//						token=currentToken;
		} else {
		    firebase.database().ref("users/"+uid+"/info").update({
			token:""
		    });
	//						token="";
		}
	    }).catch(function(err) {
		firebase.database().ref("users/"+uid+"/info").update({
		    token:""
		});
	//					token="";
	    });

	    messaging.onTokenRefresh(function() {
		messaging.getToken().then(function(refreshedToken) {
		    firebase.database().ref("users/"+uid+"/info").update({
			token:refreshedToken
		    });
	//						token=refreshedToken;
		}).catch(function(err) {
		    firebase.database().ref("users/"+uid+"/info").update({
			token:""
		    });
	//						token="";
		});
	    });
	}).catch(function(err) {
	});
});

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
  '/apps/gatherapp/logo.png',
  '/apps/gatherapp/loading.gif'
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

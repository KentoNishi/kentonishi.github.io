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

  //Service Worker
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://kentonishi.github.io/projects/database/worker.js').then(function() {console.log('Service Worker Registered');});
  }

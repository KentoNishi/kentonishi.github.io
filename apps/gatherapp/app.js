//Initialize Service Worker
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://kentonishi.github.io/apps/gatherapp/worker.js').then(function() {console.log('Service Worker Registered');});
}

//Initialize FireBase
var config = {
  apiKey: "AIzaSyDpWZcmNnF0rmmYJOLgI0-cZJMIvvHngsY",
  authDomain: "gatherapp-1906b.firebaseapp.com",
  databaseURL: "https://gatherapp-1906b.firebaseio.com",
  projectId: "gatherapp-1906b",
  storageBucket: "",
  messagingSenderId: "1038044491990"
};
firebase.initializeApp(config);

function action(act){
  console.log("Action: "+act);
  if(act=="menu"){
    document.querySelectorAll(".body")[0].innerHTML="HOME SCREEN";
  }else if(act=="add"){
    document.querySelectorAll(".body")[0].innerHTML="ADD SCREEN";
  }
}

function login(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    console.log(result.user.uid+" : "+result.user.displayName+" : "+result.user.photoURL);
  }).catch(function(error) {
    console.log("Sign in error.");
  });
}

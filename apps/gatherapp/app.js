if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://kentonishi.github.io/apps/gatherapp/worker.js').then(function() {console.log('Service Worker Registered');});
}

var config = {
  apiKey: "AIzaSyB5XNbaaKee9GqQ74FjHPHam055_FqrVf4",
  authDomain: "kento-nishi-gi-1525841644617.firebaseapp.com",
  databaseURL: "https://kento-nishi-gi-1525841644617.firebaseio.com",
  projectId: "kento-nishi---gi-1525841644617",
  storageBucket: "kento-nishi---gi-1525841644617.appspot.com",
  messagingSenderId: "939148943087"
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

//Initialize Service Worker
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://kentonishi.github.io/apps/gatherapp/worker.js').then(function() {console.log('Service Worker Registered');});
}

//Initialize FireBase
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
  var content=document.querySelectorAll(".body")[0];
  console.log("Action: "+act);
  if(act=="menu"){
    content.innerHTML="HOME SCREEN";
  }else if(act=="add"){
    content.innerHTML="ADD SCREEN";
  }
}

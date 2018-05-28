if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://kentonishi.github.io/apps/gatherapp/worker.js').then(function() {console.log('Service Worker Registered');});
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

function action(act){
  if(act=="menu"){
    document.querySelectorAll(".body")[0].innerHTML="HOME SCREEN";
  }else if(act=="add"){
    document.querySelectorAll(".body")[0].innerHTML="ADD SCREEN";
  }
}

var uid="";
function login(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    uid=result.user.uid;
    writeUser(result.user.uid,result.user.email,result.user.displayName,result.user.photoURL);
  }).catch(function(error) {
    console.log("Sign in error. "+error.message+" ("+error.code+")");
  });
}

function writeUser(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).update({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

function writeData(userId,data) {
  firebase.database().ref('users/' + userId).update({
    desc: data
  });
}

function readData(user){
  var ref = firebase.database().ref('users/' + user);
  ref.on('value', function(snapshot) {
    console.log(snapshot.val().desc);
    console.log(snapshot.val().username);
    console.log(snapshot.val().email);
    console.log(snapshot.val().profile_picture);
  });
}

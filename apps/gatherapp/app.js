//Register Service Worker
//Clear all caches
if('serviceWorker' in navigator) {
  if(navigator.onLine){
    caches.keys().then(function(names) {
      for (let name of names)
          caches.delete(name);
    });
  }
  navigator.serviceWorker.register('https://kentonishi.github.io/apps/gatherapp/worker.js').then(function() {console.log('Service Worker Registered');});
}

//Initialize FireBase
var config = {
  apiKey: "AIzaSyDpWZcmNnF0rmmYJOLgI0-cZJMIvvHngsY",
  authDomain: "gatherapp-1906b.firebaseapp.com",
  databaseURL: "https://gatherapp-1906b.firebaseio.com",
  projectId: "gatherapp-1906b",
  storageBucket: "gatherapp-1906b.appspot.com",
  messagingSenderId: "1038044491990"
};
firebase.initializeApp(config);

//Log in detection
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    uid=user.uid;
    writeUser(user.uid,user.email,user.displayName,user.photoURL);
  }
});

function action(act){
  if(uid!=""){
    if(act=="menu"){
       readData(uid);
    }else if(act=="add"){
      document.querySelectorAll(".body")[0].innerHTML="ADD SCREEN";
    }
  }
}

var uid="";

function login(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    //CATCH LOGIN
  }).catch(function(error) {
    console.log("Sign in error. "+error.message+" ("+error.code+")");
  });
}

function writeUser(userId, email, name, imageUrl) {
  firebase.database().ref('users/' + userId).update({
    username: name,
    email: email,
    profile_picture : imageUrl
  }).then(function(){readData(uid);});
}

function writeData(userId,data) {
  firebase.database().ref('users/' + userId).update({
    desc: data
  });
}

function loadUser(name,email,pic,desc,user){
  document.querySelectorAll(".body")[0].innerHTML='<div class="card"><span style="font-size:8vh;">'+name+'</span><br /><img class="pic" alt="Profile Picture" src="'+pic+'"></img><br /><br /><span'+checkme(user)+'>'+desc+'</span></div>';
}

function enter(e){
  if (e.keyCode == 13) {
    return true;
  }else{
    return false;
  }
}

var temp="";

function readData(user){
  temp=user;
  var ref = firebase.database().ref('users/' + user);
  ref.on('value', function(snapshot) {
      loadUser(snapshot.val().username,snapshot.val().email,snapshot.val().profile_picture,snapshot.val().desc,temp);
      temp="";
  });
}

function checkme(user){
  if(user==uid){
   return ' contenteditable onkeypress="if(enter(event)){writeData(uid,this.innerHTML)}"';
  }else{
    return "";
  }
}

//Register Service Worker
if('serviceWorker' in navigator) {
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
  document.querySelectorAll(".body")[0].innerHTML='<div class="card"><span style="font-size:8vh;">'+name+'</span><br /><img class="pic" alt="Profile Picture" src="'+pic+'"></img><br /><br /><span'+checkme(user)+'>'+desc+'</span><br /><a href="javascript:signOut();">Sign Out</a></div>';
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

function signOut(){
  firebase.auth().signOut().then(function() {
    location.reload(true);
  }).catch(function(error) {
    console.log("SIGN OUT ERROR!");
  });
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

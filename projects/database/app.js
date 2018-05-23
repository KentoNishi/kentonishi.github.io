  //  document.body.onclick=function(){requestFullScreen(document.body);}
  
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
      token=result.credential.accessToken;
      uid=result.user.uid;
      name=result.user.displayName;
      pic=result.user.photoURL;
      email=result.user.email;
    }).catch(function(error) {
      console.log("SIGN IN ERROR!");
    });
  }

function requestFullScreen(element){
    if (element.requestFullscreen)
        element.requestFullscreen();
    else if (element.msRequestFullscreen)
        element.msRequestFullscreen();
    else if (element.mozRequestFullScreen)
        element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
}

var firestore = firebase.firestore();
var settings = {timestampsInSnapshots: true};
firestore.settings(settings);
function write(path,pass){
  firebase.firestore().collection("users/"+uid+"/"+path).add({
    name:pass
  })
  .then(function(docRef) {
      console.log("Document written.");
  })
  .catch(function(error) {
      console.error("Error adding document.");
  });
}

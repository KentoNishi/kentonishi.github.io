  screen.orientation.lock('portrait').catch(function(error) { console.log("NOT MOBILE!"); });

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB5XNbaaKee9GqQ74FjHPHam055_FqrVf4",
    authDomain: "kento-nishi-gi-1525841644617.firebaseapp.com",
    databaseURL: "https://kento-nishi-gi-1525841644617.firebaseio.com",
    projectId: "kento-nishi---gi-1525841644617",
    storageBucket: "kento-nishi---gi-1525841644617.appspot.com",
    messagingSenderId: "939148943087"
  };

  window.onload=function(){
    firebase.initializeApp(config);
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var database = firebase.database();
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      getUserData(user.uid,true);
      document.querySelectorAll('.wrap')[0].outerHTML='';
    } else {
      // No user is signed in.
    }
    });
  }

  function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
    getUserData(userId,true);
  }

  function my(username,pic){
    console.log(username);
    console.log(pic);
    for(var i=0;i<document.querySelectorAll(".username").length;i++){
      document.querySelectorAll(".username")[i].innerHTML=username;
    }
    for(var i=0;i<document.querySelectorAll(".profile-pic").length;i++){
      document.querySelectorAll(".profile-pic")[i].src=pic;
    }
  }

  function signOut(){
    firebase.auth().signOut().then(function() {
      location.reload();
    }).catch(function(error) {
      console.log("SIGN OUT ERROR!");
    });
  }

  function getUserData(userID,me){
    var ref = firebase.database().ref('users/' + userID);
    ref.once('value').then(function(snapshot) {
      //.on('value', function(snapshot) {
     //.once('value').then(function(snapshot) {
     var username=snapshot.val() && snapshot.val().username;
     var pic=snapshot.val() && snapshot.val().profile_picture;
      if(me){
        my(username,pic);
      }
    });
  }

  function login(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var uid=result.user.uid;
      var name=result.user.displayName;
      var pic=result.user.photoURL;
      var email=result.user.email;
      writeUserData(uid,name,email,pic);
    }).catch(function(error) {
      console.log("SIGN IN ERROR!");
    });
  }

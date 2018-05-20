  //Orientation
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

  //on click
  document.body.onclick=function(){requestFullScreen(document.body);};

  firebase.initializeApp(config);
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var database = firebase.database();
  var messaging = firebase.messaging();
  messaging.usePublicVapidKey("BCKtXl1aH0s1dSXEqoaXi9yAXckJusY1suWxPQPbiELn1z6DEN6hReNdUODWVTR2K4wQGdq-11dWc8x-TUeCKoo");
  messaging.requestPermission().then(function() {
    console.log('Notification permission granted.');
      // Get Instance ID token. Initially this makes a network call, once retrieved
      // subsequent calls to getToken will return from cache.
      messaging.getToken().then(function(currentToken) {
        if (currentToken) {/*
          sendTokenToServer(currentToken);
          updateUIForPushEnabled(currentToken);
          */
          console.log("TOKEN: "+currentToken);
        } else {
          // Show permission request.
          console.log('No Instance ID token available. Request permission to generate one.');
          // Show permission UI.
//          updateUIForPushPermissionRequired();
//          setTokenSentToServer(false);
        }
      }).catch(function(err) {
        console.log('An error occurred while retrieving token. ', err);
        showToken('Error retrieving Instance ID token. ', err);
        setTokenSentToServer(false);
      });

  }).catch(function(err) {
    console.log('Unable to get permission to notify.', err);
  });

  // Callback fired if Instance ID token is updated.
  messaging.onTokenRefresh(function() {
    messaging.getToken().then(function(refreshedToken) {
      console.log('Token refreshed.');
      // Indicate that the new Instance ID token has not yet been sent to the
      // app server.
      console.log(refreshedToken);
//      setTokenSentToServer(false);
      // Send Instance ID token to app server.
//      sendTokenToServer(refreshedToken);
      // ...
    }).catch(function(err) {
      console.log('Unable to retrieve refreshed token ', err);
//      showToken('Unable to retrieve refreshed token ', err);
    });
  });

  
  window.onload=function(){
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      getUserData(user.uid,true);
      document.querySelectorAll('.wrap')[0].outerHTML='';
    } else {//not signed in
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
      document.querySelectorAll("body")[0].style.display="none";
      location.reload(true);
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
//      document.querySelectorAll('.wrap')[0].outerHTML='';
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

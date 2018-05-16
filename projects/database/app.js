  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB5XNbaaKee9GqQ74FjHPHam055_FqrVf4",
    authDomain: "kento-nishi-gi-1525841644617.firebaseapp.com",
    databaseURL: "https://kento-nishi-gi-1525841644617.firebaseio.com",
    projectId: "kento-nishi---gi-1525841644617",
    storageBucket: "kento-nishi---gi-1525841644617.appspot.com",
    messagingSenderId: "939148943087"
  };

  firebase.initializeApp(config);
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var database = firebase.database();

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
  }

  function getUserData(userID,me){
    var ref = firebase.database().ref('users/' + userID);
    ref.on('value', function(snapshot) {
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
    });/*.catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });*/
  }

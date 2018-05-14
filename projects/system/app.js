  //https://firebase.google.com/docs/auth/web/google-signin?authuser=0
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
  
  var uid="";
  
  function put(title, content){
    var ref=storageRef.child("user/"+uid+'/'+title+".txt");
    var input = content;
    var file = new Blob([input], {
      type: 'text/plain'
    });
    ref.put(file).then(function(snapshot) {
//      console.log('Uploaded a blob or file!');
    });
  }
  
var response="";
  function get(title){
    response="";
    storageRef.child('user/'+uid+'/'+title+'.txt').getDownloadURL().then(function(url) {
      $.get(url, function(data, status){
          response=data;
          ui();
      });
    });.catch(function(error) {
      ask("Enter a "+title+":", title);
      // Handle any errors
    });
//    return response;
  }
  
  function login(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      uid=result.user.uid;
      get("username");
//      console.log(token+" - "+user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
//      console.log(errorCode+" - "+errorMessage+" - "+email+" - "+credential);
      // ...
    });
  }

  function ui(){
    for(var i=0;i<document.querySelectorAll(".username").length;i++){
     document.querySelectorAll(".username")[i].innerHTML=response;
    }
  }

  function ask(question, callback){
    document.body.innerHTML+="<div class='prompt'><h1>"+question+"</h1><br /><input class='"+title+"'></input><button onclick='"+title+"(document.querySelectorAll("+'".'+title+'"'+")[0].value);document.querySelectorAll("+'".prompt"'+")[0].outerHTML="+'""'+";'>OK</button></div>";
  }

  function username(value){
    put("username",value);
  }

  window.onload=function(){
    login();
  }

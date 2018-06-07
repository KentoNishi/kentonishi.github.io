/*THE REAL CODE*/
var uid = "";
var desc = "";
var email = "";
var name = "";
var pic = "";

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        uid = user.uid;
        email = user.email;
        set("update","users/"+uid+"/info","email",email);
        name = user.displayName;
        set("update","users/"+uid+"/info","name",name);
        pic = user.photoURL;
        set("update","users/"+uid+"/info","pic",pic);
    }
});

function set(method,path,title,content){
    firebase.database().ref(path)[method]({
        [title]:content
    });
}

function get(method,path,title,callback){
    firebase.database().ref(path)[method](function(snapshot) {
        window[callback](snapshot.val().title);
    });
}

function write(title,content,link,nav){
    var body="";
    body="";
    body+='<div class="card">';
    body+='<span style="font-size:8vh;">';
    body+=title;
    body+='</span>';
    body+='<br />';
    body+='<br />';
    if(content==uid){
       body.innerHTML+="[USER CONTENT]";
    }else{
       body+='<span style="font-size:5vh;">';
       body+=content;
       body+='</span>';
    }
    body+='<br />';
    body+='<br />';
    if(link!=null&&nav!=null){
        body+='<a href="'+link+'">'+nav+'</a>';
        body+='<br />';
    }
    body+='</div>';
    document.body.querySelectorAll(".body")[0].innerHTML=body;
}

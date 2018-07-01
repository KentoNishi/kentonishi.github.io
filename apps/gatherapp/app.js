/*
setInterval(function(){
    console.clear();
    console.log('%c WAIT! ', 'font-size:8vh;background: rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+'1); color: red');
    console.log("%cIF SOMEONE TOLD YOU TO PASTE SOMETHING HERE, DON'T DO IT. DOING SO MAY GIVE THEM ACCESS TO YOUR GATHERAPP ACCOUNT.", 'font-size:4vh;background: magenta; color: black;');
},500);
*/

/*
var alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var myLatLng = {lat: -25.363, lng: 131.044};
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 4,
  center: myLatLng
});
for(var i=0;i<10;i++){
myLatLng.lat+=1;
myLatLng.lng+=1;
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          label: "",//alphabet[i]//HAHA, that's a pretty good joke. Get it, Alphabet?,
          title: i.toString()//,
	      //icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        });
marker.addListener('click', function(){console.log(this.title);});
}
*/

//APIS AND BASIC FUNCTIONS
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://kentonishi.github.io/apps/gatherapp/worker.js').then(function() {
//        Service Worker Registered
    });
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

function login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
    //AuthStateChanged
    }).catch(function(error) {
        console.log("Sign in error. " + error.message + " (" + error.code + ")");
    });
}

function signOut() {
    firebase.auth().signOut().then(function() {
        location.reload(true);
    }).catch(function(error) {
        console.log("Error signing out.");
    });
}

function encode(texte) {
    texte=texte.toString();
    texte = texte.replace(/"/g, '&quot;'); // 34 22
    texte = texte.replace(/&/g, '&amp;'); // 38 26
    texte = texte.replace(/\'/g, '&#39;'); // 39 27
    texte = texte.replace(/</g, '&lt;'); // 60 3C
    texte = texte.replace(/>/g, '&gt;'); // 62 3E
    texte = texte.replace(/\^/g, '&circ;'); // 94 5E
    texte = texte.replace(/‘/g, '&lsquo;'); // 145 91
    texte = texte.replace(/’/g, '&rsquo;'); // 146 92
    texte = texte.replace(/“/g, '&ldquo;'); // 147 93
    texte = texte.replace(/”/g, '&rdquo;'); // 148 94
    texte = texte.replace(/•/g, '&bull;'); // 149 95
    texte = texte.replace(/–/g, '&ndash;'); // 150 96
    texte = texte.replace(/—/g, '&mdash;'); // 151 97
    texte = texte.replace(/˜/g, '&tilde;'); // 152 98
    texte = texte.replace(/™/g, '&trade;'); // 153 99
    texte = texte.replace(/š/g, '&scaron;'); // 154 9A
    texte = texte.replace(/›/g, '&rsaquo;'); // 155 9B
    texte = texte.replace(/œ/g, '&oelig;'); // 156 9C
    //texte = texte.replace(//g,'&#357;'); // 157 9D
    texte = texte.replace(/ž/g, '&#382;'); // 158 9E
    texte = texte.replace(/Ÿ/g, '&Yuml;'); // 159 9F
    // texte = texte.replace(/ /g,'&nbsp;'); // 160 A0
    texte = texte.replace(/¡/g, '&iexcl;'); // 161 A1
    texte = texte.replace(/¢/g, '&cent;'); // 162 A2
    texte = texte.replace(/£/g, '&pound;'); // 163 A3
    //texte = texte.replace(/ /g,'&curren;'); // 164 A4
    texte = texte.replace(/¥/g, '&yen;'); // 165 A5
    texte = texte.replace(/¦/g, '&brvbar;'); // 166 A6
    texte = texte.replace(/§/g, '&sect;'); // 167 A7
    texte = texte.replace(/¨/g, '&uml;'); // 168 A8
    texte = texte.replace(/©/g, '&copy;'); // 169 A9
    texte = texte.replace(/ª/g, '&ordf;'); // 170 AA
    texte = texte.replace(/«/g, '&laquo;'); // 171 AB
    texte = texte.replace(/¬/g, '&not;'); // 172 AC
    texte = texte.replace(/­/g, '&shy;'); // 173 AD
    texte = texte.replace(/®/g, '&reg;'); // 174 AE
    texte = texte.replace(/¯/g, '&macr;'); // 175 AF
    texte = texte.replace(/°/g, '&deg;'); // 176 B0
    texte = texte.replace(/±/g, '&plusmn;'); // 177 B1
    texte = texte.replace(/²/g, '&sup2;'); // 178 B2
    texte = texte.replace(/³/g, '&sup3;'); // 179 B3
    texte = texte.replace(/´/g, '&acute;'); // 180 B4
    texte = texte.replace(/µ/g, '&micro;'); // 181 B5
    texte = texte.replace(/¶/g, '&para'); // 182 B6
    texte = texte.replace(/·/g, '&middot;'); // 183 B7
    texte = texte.replace(/¸/g, '&cedil;'); // 184 B8
    texte = texte.replace(/¹/g, '&sup1;'); // 185 B9
    texte = texte.replace(/º/g, '&ordm;'); // 186 BA
    texte = texte.replace(/»/g, '&raquo;'); // 187 BB
    texte = texte.replace(/¼/g, '&frac14;'); // 188 BC
    texte = texte.replace(/½/g, '&frac12;'); // 189 BD
    texte = texte.replace(/¾/g, '&frac34;'); // 190 BE
    texte = texte.replace(/¿/g, '&iquest;'); // 191 BF
    texte = texte.replace(/À/g, '&Agrave;'); // 192 C0
    texte = texte.replace(/Á/g, '&Aacute;'); // 193 C1
    texte = texte.replace(/Â/g, '&Acirc;'); // 194 C2
    texte = texte.replace(/Ã/g, '&Atilde;'); // 195 C3
    texte = texte.replace(/Ä/g, '&Auml;'); // 196 C4
    texte = texte.replace(/Å/g, '&Aring;'); // 197 C5
    texte = texte.replace(/Æ/g, '&AElig;'); // 198 C6
    texte = texte.replace(/Ç/g, '&Ccedil;'); // 199 C7
    texte = texte.replace(/È/g, '&Egrave;'); // 200 C8
    texte = texte.replace(/É/g, '&Eacute;'); // 201 C9
    texte = texte.replace(/Ê/g, '&Ecirc;'); // 202 CA
    texte = texte.replace(/Ë/g, '&Euml;'); // 203 CB
    texte = texte.replace(/Ì/g, '&Igrave;'); // 204 CC
    texte = texte.replace(/Í/g, '&Iacute;'); // 205 CD
    texte = texte.replace(/Î/g, '&Icirc;'); // 206 CE
    texte = texte.replace(/Ï/g, '&Iuml;'); // 207 CF
    texte = texte.replace(/Ð/g, '&ETH;'); // 208 D0
    texte = texte.replace(/Ñ/g, '&Ntilde;'); // 209 D1
    texte = texte.replace(/Ò/g, '&Ograve;'); // 210 D2
    texte = texte.replace(/Ó/g, '&Oacute;'); // 211 D3
    texte = texte.replace(/Ô/g, '&Ocirc;'); // 212 D4
    texte = texte.replace(/Õ/g, '&Otilde;'); // 213 D5
    texte = texte.replace(/Ö/g, '&Ouml;'); // 214 D6
    texte = texte.replace(/×/g, '&times;'); // 215 D7
    texte = texte.replace(/Ø/g, '&Oslash;'); // 216 D8
    texte = texte.replace(/Ù/g, '&Ugrave;'); // 217 D9
    texte = texte.replace(/Ú/g, '&Uacute;'); // 218 DA
    texte = texte.replace(/Û/g, '&Ucirc;'); // 219 DB
    texte = texte.replace(/Ü/g, '&Uuml;'); // 220 DC
    texte = texte.replace(/Ý/g, '&Yacute;'); // 221 DD
    texte = texte.replace(/Þ/g, '&THORN;'); // 222 DE
    texte = texte.replace(/ß/g, '&szlig;'); // 223 DF
    texte = texte.replace(/à/g, '&aacute;'); // 224 E0
    texte = texte.replace(/á/g, '&aacute;'); // 225 E1
    texte = texte.replace(/â/g, '&acirc;'); // 226 E2
    texte = texte.replace(/ã/g, '&atilde;'); // 227 E3
    texte = texte.replace(/ä/g, '&auml;'); // 228 E4
    texte = texte.replace(/å/g, '&aring;'); // 229 E5
    texte = texte.replace(/æ/g, '&aelig;'); // 230 E6
    texte = texte.replace(/ç/g, '&ccedil;'); // 231 E7
    texte = texte.replace(/è/g, '&egrave;'); // 232 E8
    texte = texte.replace(/é/g, '&eacute;'); // 233 E9
    texte = texte.replace(/ê/g, '&ecirc;'); // 234 EA
    texte = texte.replace(/ë/g, '&euml;'); // 235 EB
    texte = texte.replace(/ì/g, '&igrave;'); // 236 EC
    texte = texte.replace(/í/g, '&iacute;'); // 237 ED
    texte = texte.replace(/î/g, '&icirc;'); // 238 EE
    texte = texte.replace(/ï/g, '&iuml;'); // 239 EF
    texte = texte.replace(/ð/g, '&eth;'); // 240 F0
    texte = texte.replace(/ñ/g, '&ntilde;'); // 241 F1
    texte = texte.replace(/ò/g, '&ograve;'); // 242 F2
    texte = texte.replace(/ó/g, '&oacute;'); // 243 F3
    texte = texte.replace(/ô/g, '&ocirc;'); // 244 F4
    texte = texte.replace(/õ/g, '&otilde;'); // 245 F5
    texte = texte.replace(/ö/g, '&ouml;'); // 246 F6
    texte = texte.replace(/÷/g, '&divide;'); // 247 F7
    texte = texte.replace(/ø/g, '&oslash;'); // 248 F8
    texte = texte.replace(/ù/g, '&ugrave;'); // 249 F9
    texte = texte.replace(/ú/g, '&uacute;'); // 250 FA
    texte = texte.replace(/û/g, '&ucirc;'); // 251 FB
    texte = texte.replace(/ü/g, '&uuml;'); // 252 FC
    texte = texte.replace(/ý/g, '&yacute;'); // 253 FD
    texte = texte.replace(/þ/g, '&thorn;'); // 254 FE
    texte = texte.replace(/ÿ/g, '&yuml;'); // 255 FF
    //all encodings
    return texte;
}

var decode = (function() {
    // this prevents any overhead from creating the object each time
    var element = document.createElement('div');

    // regular expression matching HTML entities
    var entity = /&(?:#x[a-f0-9]+|#[0-9]+|[a-z0-9]+);?/ig;

    return function decodeHTMLEntities(str) {
        // find and replace all the html entities
        str = str.replace(entity, function(m) {
            element.innerHTML = m;
            return element.textContent;
        });

        // reset the value
        element.textContent = '';

        return str;
    }
})();

//THE REAL CODE
var uid = "";
var name = "";
var email = "";
var pic = "";
var city="";
var lat;
var long;

function pos(coord){
    lat=coord.coords.latitude;
    long=coord.coords.longitude;
}

firebase.auth().onAuthStateChanged(function(me) {
    if (me) {
      firebase.database().ref("users/"+me.uid+"/info").once("value",function(shot){
        if(me.email.split("@")[1]=="gmail.com"){
            try{
              stall(shot.val().email);
            }catch(TypeError){
                send(me.uid,"Welcome!","Welcome to GatherApp!");
            }
            uid = me.uid;
            get("once","users/"+uid+"/info","desc","assign");
            email = me.email;
            set("update","users/"+uid+"/info","email",email);
            name = me.displayName;
            set("update","users/"+uid+"/info","name",name);
            pic = me.photoURL;
            set("update","users/"+uid+"/info","pic",pic);
            $.get("https://ipinfo.io", function(response) {
                city=response.city+", "+response.country;
                set("update","users/"+uid+"/info","city",response.city+", "+response.country);
            }, "jsonp");
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos);
            } else {
            }
            if(window.location.hash.replace("#","")=="advertise"){
                /*
                clear("body");
                write("Advertising","Your business can advertise on gather-up selections.","javascript:signUp();","Learn More");
                */
            }else{
                clear("body");
                feed();
            }
        }else{
            write("Invalid Account","Your email address cannot be from a custom domain. Please use a normal Google account.");
        }
      });
    }
});

function pend(){
    var title="";
    var description="";
    title=prompt("Group Name:","");
    while(title!=null&&title.replace(" ","")==""){
        title=prompt("Please enter a valid group name.\nGroup Name:","");
    }
    if(title!=null){
        description=prompt("Group Description:","");
        while(description!=null&&description.replace(" ","")==""){
            description=prompt("Please enter a valid group description.\nGroup Description:","");
        }
        if(description!=null){
            create(title,description);
        }else{
        }
    }else{
    }
}

function signUp(){

}

function search(){
    find(prompt("Group Name:"));
}

function find(title){
    if(title!=null){
        var i=0;
        var cleared=false;
        clear("body");
        write("Search Results","There were no relevent results.");
        firebase.database().ref("groups/").orderByChild("info/search").startAt(title.toLowerCase()).endAt(title.toLowerCase()+"\uf8ff").limitToFirst(25).once('value', snapshot => {
            snapshot.forEach(child => {
                if(child.val().stats.popularity!=0&&!cleared){clear("body");cleared=true;}
                if(child.val().stats.popularity!=0){
                  write(child.val().info.group,child.val().info.desc,"group('"+child.key+"');",null,null,child.val().stats.popularity.toString()+" members");
                }
                i++;
            });
        });
    }
}

function action(act) {
    if(uid!=""){
        if (act == "menu") {
//            console.log("menu");
            user(uid);
        } else if (act == "add") {
//            console.log("add");
            clear("body");
            write("New Group","","pend();");
            write("Find Groups","","finder();");
            write("My Groups","","groups(uid);");
        } else if (act == "home") {
            feed();
//console.log("home");
        }
    }
}

function finder(){
    clear("body");
    write("Search Groups","","search();");
    write("Near Me","Current location:","byCity();",null,null,city);
    write("Most Popular","","popularity(uid);");
}

function clear(element){
    document.querySelectorAll("."+element)[0].innerHTML="";
} 

function user(id){
    if(id==uid){
        clear("body");
        write(name,uid,"javascript:signOut();","Sign Out");
    }
}

function feed(){
    var i=0;
    clear("body");
    write("Notifications","Your notifications appear here.");
    firebase.database().ref("users/"+uid+"/feed").once("value",function(snapshot){
        snapshot.forEach(function(childSnapshot){
            if(i==0){
                clear("body");
            }
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            write(childSnapshot.val().title,childSnapshot.val().content);
            i++;
        });
        if(i!=0){
          write("Clear Feed","","javascript:remove('users/"+uid+"/feed','feed','')","Clear my notifications");
        }
    });
}

function send(id,title,content){
    var key=firebase.database().ref("users/"+id+"/feed").push().key;
    set("update","users/"+id+"/feed/"+key,"title",title);
    set("update","users/"+id+"/feed/"+key,"content",content);
}

function remove(path,callback,param){
    firebase.database().ref(path).remove();
    if(callback!=null){
        window[callback](param);
    }
}

function popularity(callback){
    clear("body");
    write("Popular Groups","The most popular groups appear here.");
    var i=0;
    firebase.database().ref("groups/").orderByChild("stats/popularity").limitToLast(25).once('value', snapshot => {
        (snapshot).forEach(child => {
//            console.log(child.key, child.val().stats.popularity);
            if(child.val().stats.popularity>0){
                if(i==0){clear("body");}
                if(child.val().stats.popularity!=0){
                    write(child.val().info.group,child.val().info.desc,"group('"+child.key+"');",null,null,child.val().stats.popularity.toString()+" members");
                }
                i++;
            }
        });
    });
}

function group(id,leave){
  var bool=(leave!="leave");
  if(bool){
    firebase.database().ref("groups/"+id+"/info").once("value",function(shot){
      firebase.database().ref("groups/"+id+"/users").once("value",function(snap){
        if(!snap.val()[uid]){
          send(uid,"Joined "+shot.val().group,"Joined on "+(new Date().getMonth()+1)+"/"+(new Date().getDate())+"/"+(new Date().getFullYear()));
        }
      });
    });
  }
  firebase.database().ref("groups/"+id+"/users").once('value', function(snapshot){
      if(bool){
        set("set","users/"+uid+"/groups/"+id,"group",id);
      }
//      console.log(leave);
//      console.log(bool);
      firebase.database().ref("groups/"+id+"/users").update({
            [uid]:bool
      }).then(function(){
        load(id);
      });
  });
}

function leave(id){
    group('"+id+"','leave');
    remove('users/'+uid+"/groups/"+id,'groups', uid);
}

function groups(id){
    if(id==uid){
        var i = 0;
        var myGroups=[];
        clear("body");
        write("Your Groups","Your groups appear here.");
        firebase.database().ref('users/'+uid+"/groups/").once('value', function(snapshot){
            snapshot.forEach(function(childSnapshot) {
                if(i==0){
                    clear("body");
                }
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                myGroups[i]=childSnapshot.val().group;
                firebase.database().ref('groups/'+myGroups[i]).once('value', function(snap) {
                    write(snap.val().info.group,(snap.val().info.desc||"Description Here"),null,null,"load('"+childSnapshot.val().group+"');",snap.val().stats.popularity+" members");
                });
                i++;
            });
        });
    }
}

function reverseSnapshotOrder (snapshot) {
  let reversed = [];

  snapshot.forEach(child => {
    reversed.unshift(child);
  });

  return reversed;
}

function create(name,info){
    var key=firebase.database().ref("users/"+uid+"/groups").push().key;
    set("set","users/"+uid+"/groups/"+key,"group",key);
    set("update","groups/"+key+"/info","group",name);
    set("update","groups/"+key+"/info","search",name.toLowerCase());
    set("update","groups/"+key+"/info","desc",info);
    set("update","groups/"+key+"/info","city",city);
    set("update","groups/"+key+"/users",uid,true);
    set("update","groups/"+key+"/stats","popularity",1);
    set("update","cities/"+city+"/"+key+"/stats","popularity",1);
    group(key);
}

function set(method,path,title,content){
    firebase.database().ref(path)[method]({
        [title]:content
    });
}

function byCity(){
    var i=0;
    var cleared=false;
    var names=[];
    var ages=[];
    clear("body");
    write("Search Results","There were no relevant results near "+encode(city).split(",")[0]+".");
    firebase.database().ref("cities/"+city).orderByChild("stats/popularity").limitToLast(25).once('value', snapshot => {
        snapshot.forEach(child => {/*
            if(child.val().stats.popularity!=0){
                names[i]=child.key;
                ages[i]=child.val().stats.popularity;
                i++;
            }*/
            if(child.val().stats.popularity!=0&&!cleared){clear("body");cleared=true;}
            if(child.val().stats.popularity!=0){
               firebase.database().ref("groups/"+child.key).once("value",function(kid){
                   write(kid.val().info.group,kid.val().info.desc,"group('"+kid.key+"');",null,null,kid.val().stats.popularity.toString()+" members");
               });
           }
        });/*
        var list = [];
        for (var j = 0; j < names.length; j++) 
            list.push({'name': names[j], 'age': ages[j]});
        //2) sort:
        list.sort(function(a, b) {
            return ((a.age < b.age) ? -1 : ((a.age == b.age) ? 0 : 1));
            //Sort could be modified to, for example, sort on the age 
            // if the name is the same.
        });
        //3) separate them back out:
        for (var k = 0; k < list.length; k++) {
            names[k] = list[k].name;
            ages[k] = list[k].age;
        }
        for(var p=0;p<names.length;p++){
            if(!cleared){clear("body");cleared=true;}
            firebase.database().ref("groups/"+names[p]).once("value",function(child){
                write(child.val().info.group,child.val().info.desc,"group('"+child.key+"');",null,null,child.val().stats.popularity.toString()+" members");
            });
        }*/
    });
}

function get(method,path,title,callback){
    firebase.database().ref(path)[method]("value", function(snapshot) {
        window[callback](title,snapshot.val()[title]);
    });
}

function write(title,content,link,nav,href,extra){
    var body="";
    if(link!=null&&nav==null){
        body+='<div class="card" onclick="javascript:'+link+'">';
    }else if(href!=null){
        body+='<div class="card" onclick="javascript:'+href+'">';
    }else{
        body+='<div class="card">';
    }
    body+='<span style="font-size:5.5vh;"><strong>';
    body+=encode(title).replace(/&amp;quot;/g,'"');
    body+='</strong></span>';
    body+='<span style="font-size:4vh;">';
    if(content==uid){
       body+='<br />';
       body+='<img src="'+pic+'" class="pic"></img>';
       body+='<br />';
       body+="<span>@"+encode(email.split("@")[0])+"</span>";
       body+='<br />';/*
       firebase.database().ref('users/'+uid+"/info").once('value', function(snapshot){
           document.querySelectorAll(".desc")[0].innerHTML=encode(snapshot.val().desc||"Description Here").replace(/&amp;quot;/g,'"');
       });*/
       body+="<span>"+encode(city)+"</span>";//contenteditable onkeyup='"+decodeURIComponent("set(%22update%22%2C%22users%2F%22%2Buid%2B%22%2Finfo%22%2C%22desc%22%2Cdecode(this.innerHTML))%3B")+"' onkeypress='key13(event)'></span>";
       body+='<br />';
    }else{
       if(content!=""){
           body+='<br />';
           body+=encode(content).replace(/&amp;quot;/g,'"');
       }
           body+='<br />';
    }
    if(extra!=null){
        body+=encode(extra).replace(/&amp;quot;/g,'"');
        body+='<br />';
    }
    if(link!=null&&nav!=null){
        body+='<a href="'+link+'">'+encode(nav).replace(/&amp;quot;/g,'"')+'</a>';
    }
    body+='</span>';
    body+='</div>';
    document.body.querySelectorAll(".body")[0].innerHTML=body+document.body.querySelectorAll(".body")[0].innerHTML;
}

function key13(event){
    if(event.keyCode==13){
        document.querySelectorAll("span[contenteditable]")[0].blur();
        if(document.querySelectorAll("span[contenteditable]")[0].innerHTML==""){
            document.querySelectorAll("span[contenteditable]")[0].innerHTML="Description Here";
        }
        return null;
    }else{
        return event.keyCode;
    }
}

function assign(variable,value){
    window[variable]=value||"["+variable.replace("desc","Description")+" Here]";
}

function stall(param){
}

function confirmLeave(title){
	if(confirm("Are you sure you want to leave "+decodeURIComponent(title)+"?")){
		return true;
	}else{
		return false;
	}
}

function load(id){
//    console.log(id);
    var i=0;
    var stay=true;
    firebase.database().ref("groups/"+id+"/users").once("value",function(snap){
	snap.forEach(function(child){
	    if(child.val()==true){
	      i++;
	    }
 //           console.log(i);
	    set("update","groups/"+id+"/stats","popularity",i);
	    set("update","cities/"+city+"/"+id+"/stats","popularity",i);
	    if(child.key==uid&&child.val()==false){
	      stay=false;
	    }
	});
	if(i==0){
		remove("groups/"+id);
	}
	firebase.database().ref("groups/"+id).once("value",function(shot){
	    if(stay){
		clear("body");
		try{
		    firebase.database().ref("groups/"+id+"/gatherups").once("value",function(events){
		       events.forEach(function(kid){
			 if(new Date(kid.val().time)>Date.now()){
			    write(kid.val().location,toDateTime(kid.val().time));
			 }
		       });
		       write("New Gather-up","Schedule a gather-up.","request('"+id+"');");
		       write(shot.val().info.group,shot.val().info.desc,"javascript:if(confirmLeave('"+encodeURIComponent(shot.val().info.group)+"')){group('"+id+"','leave');remove('users/"+uid+"/groups/"+id+"','action', 'add');}","Leave Group",null,i.toString()+" members");
		   });
		}catch(TypeError){
		}
		}else{
		    groups(uid);
	    }
	});
    });
}

var map;
function request(id){
    var body="";
    body+='<div class="card">';
    body+='<div style="font-size:5.5vh;"><strong>New Gather-Up</strong></div>';
//    body+='<input onchange="activate()" onkeypress="activate()" type="text" placeholder="Location"></input>';
    body+='<div id="map" style="width: 75vw; height: 75vw;margin-bottom:1vh;"></div>';
    body+='<span class="inputs"><input onchange="activate()" onkeypress="activate()" type="text" style="font-size:2.5vh;margin-bottom:1vh;display:none;"></input>';
    body+='<input onchange="activate()" onkeypress="activate()" type="datetime-local" style="font-size:2.5vh;margin-bottom:1vh;"></input><br />';
    body+='<span style="font-size:4vh;padding-top:1vh;" class="now">Pick a place and time.</span><br />';
    body+='<button disabled="true" onclick="newGather('+"'"+id+"'"+');">Schedule</button>';
    body+='</span></div>';
    document.querySelectorAll(".body")[0].innerHTML=body;
    if(lat!=null&&long!=null){
//	var alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var myLatLng = {lat: lat, lng: long};

        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: myLatLng
        });/*
	for(var i=0;i<10;i++){
		myLatLng.lat+=1;
		myLatLng.lng+=1;*/
		var marker = new google.maps.Marker({
		  position: myLatLng,
		  map: map,
		  draggable:true,
		  label: "",//alphabet[i]/*HAHA, that's a pretty good joke. Get it, Alphabet?*/,
		  title: "Current Location"//,
		      //icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
		});
	var interval=setInterval(function(){if($('div[style*="width: calc(100% - 60px)"]').remove().length!=0){clearInterval(interval);}},100);
//	marker.addListener('click', function(){console.log(this.title);});
	google.maps.event.addListener(marker, 'dragend', function(evt){
	    map.panTo(marker.getPosition());
	    updateControls(evt.latLng.lat(),evt.latLng.lng());
	});
	updateControls(lat,long);
//	}
    }else{
        alert("GatherApp needs your location. Please enable it in your browser settings.");
        load(id);
    }
}

function updateControls(lati,longi) {
    if(lati!=null&&longi!=null){
	lati=parseFloat(lati);
	longi=parseFloat(longi);
        document.querySelectorAll(".inputs")[0].querySelectorAll("input")[0].value=zeros(lati)+", "+zeros(longi);
    }
    activate();
}

function newGather(id){
    var loc=document.querySelectorAll(".inputs")[0].querySelectorAll("input")[0].value;
    var date=new Date(document.querySelectorAll(".inputs")[0].querySelectorAll("input")[1].value);
    if(loc!=null&&date!=null){
        firebase.database().ref("groups/"+id+"/gatherups").push().update({
            location:loc,
            time:date
        }).then(function(){
           firebase.database().ref("groups/"+id+"/info").once("value",function(shot){
             firebase.database().ref("groups/"+id+"/users").once("value",function(snap){
               snap.forEach(function(input){
                 send(input.key,shot.val().group,"Gather-up at "+loc+" on "+toDateTime(new Date(date)).split(",")[0]+", at"+toDateTime(new Date(date)).split(",")[1]+".");
               });
             });
           });
           load(id);
        });
    }
}

function zero(str){
    if(str.length==1){
        return "0"+str;
    }else{
        return str;
    }
}

function activate(){
    if(document.querySelectorAll(".inputs")[0].querySelectorAll("input")[0].value!=""&&document.querySelectorAll(".inputs")[0].querySelectorAll("input")[0].value!=null&&document.querySelectorAll(".inputs")[0].querySelectorAll("input")[1].value!=null&&document.querySelectorAll(".inputs")[0].querySelectorAll("input")[1].value!=""&&new Date(document.querySelectorAll(".inputs")[0].querySelectorAll("input")[1].value)>Date.now()){
        document.querySelectorAll(".inputs")[0].querySelectorAll("button")[0].disabled=false;
    }else{
        document.querySelectorAll(".inputs")[0].querySelectorAll("button")[0].disabled=true;
    }
    if(document.querySelectorAll(".inputs")[0].querySelectorAll("input")[1].value!=null&&document.querySelectorAll(".inputs")[0].querySelectorAll("input")[1].value!=""&&new Date(document.querySelectorAll(".inputs")[0].querySelectorAll("input")[1].value)>Date.now()&&document.querySelectorAll(".inputs")[0].querySelectorAll("input")[0].value!=null&&document.querySelectorAll(".inputs")[0].querySelectorAll("input")[0].value!=""){
        document.querySelectorAll(".now")[0].innerHTML=toDateTime(new Date(document.querySelectorAll(".inputs")[0].querySelectorAll("input")[1].value));
            document.querySelectorAll(".now")[0].innerHTML+=",<br />"+document.querySelectorAll(".inputs")[0].querySelectorAll("input")[0].value;
    }else{
        document.querySelectorAll(".now")[0].innerHTML="Pick a place and time.";
    }
}

function toDateTime(str){
    var date=new Date(str);
    return (date.getMonth()+1)+"/"+(date.getDate())+"/"+(date.getFullYear())+", "+time2412((date.getHours())+":"+(date.getMinutes()));
}

function time2412(str){
    if(parseInt(str.split(":")[0])==0){
        return "12:"+":"+zero((parseInt(str.split(":")[1])).toString())+" AM";
    }
    else if(parseInt(str.split(":")[0])>13){
        return zero((parseInt(str.split(":")[0])%12).toString())+":"+zero((parseInt(str.split(":")[1])).toString())+" PM";
    }else{
        return zero((parseInt(str.split(":")[0])).toString())+":"+zero((parseInt(str.split(":")[1])).toString())+" AM"
    }
}

function zeros(int){
	var rtn=int.toString();/*
	if(rtn.indexOf(".")==-1){
		rtn+=".";
	}
	while(rtn.split(".")[1].length<3){
		rtn+="0";
	}*/
	return rtn;
}

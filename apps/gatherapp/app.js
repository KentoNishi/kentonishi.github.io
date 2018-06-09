/*
//COPYRIGHT 2018 Kento Nishi (GatherApp).
console.warn('Copyright 2018 Kento Nishi (GatherApp) Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.');

(function() {
    try {
        var $_console$$ = console;
        Object.defineProperty(window, "console", {
            get: function() {
                if ($_console$$._commandLineAPI)
                    throw "Uncaught TypeError: Anonymous (Line 1)";
                return $_console$$
            },
            set: function($val$$) {
                $_console$$ = $val$$
            }
        })
    } catch ($ignore$$) {
    }
})();

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
        console.log("SIGN OUT ERROR!");
    });
}

function encode(texte) {
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
var desc = "";

firebase.auth().onAuthStateChanged(function(me) {
    if (me) {
        uid = me.uid;
        get("once","users/"+uid+"/info","desc","assign");
        email = me.email;
        set("update","users/"+uid+"/info","email",email);
        name = me.displayName;
        set("update","users/"+uid+"/info","name",name);
        pic = me.photoURL;
        set("update","users/"+uid+"/info","pic",pic);
        clear("body");
    }
});


function action(act) {
    if (act == "menu") {
        console.log("menu");
        user(uid);
    } else if (act == "add") {
        console.log("add");
        clear("body");
        write("Most Popular","View Most Popular","popularity(uid);");
        write("My Groups","View All","groups(uid);");
    } else if (act == "home") {
        console.log("home");
    }
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

function remove(path,callback,param){
    firebase.database().ref(path).remove();
    window[callback](param);
}

function popularity(callback){
    clear("body");
    firebase.database().ref("groups/").orderByChild("stats/popularity").limitToLast(25).once('value', snapshot => {
        snapshot.forEach(child => {
//            console.log(child.key, child.val().stats.popularity);
            write(child.val().info.group,child.val().stats.popularity.toString()+" members","group('"+child.key+"');");
        });
    });
}

function group(id,leave){
  leave=leave||"join";
  firebase.database().ref('groups/'+id).transaction(function(post) {
    if (post) {
      if (leave=="leave") {
        post.stats.popularity--;
        if(post.stats.popularity==0){remove("groups/"+id,"stall",0)}
        post.users[uid] = null;
      } else {
        if(!post.users[uid]){
            set("set","users/"+uid+"/groups/"+id,"groups",uid);
            post.stats.popularity++;
        }
        if (!post.users) {
          post.users = {};
        }
        post.users[uid] = true;
      }
    }
    return post;
  });
}

function groups(id){
    if(id==uid){
        clear("body");
        var i = 0;
        var myGroups=[];
        firebase.database().ref('users/'+uid+"/groups/").once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                myGroups[i]=childSnapshot.val().group;
                firebase.database().ref('groups/'+myGroups[i]+"/info").once('value', function(snap) {
                    write(snap.val().group,snap.val().desc||"[Description Here]","javascript:remove('"+'users/'+uid+"/groups/"+childSnapshot.val().group+"','groups', uid);group('"+childSnapshot.val().group+"','leave');","Leave Group");
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
    set("set","groups/"+key+"/info","group",name);
    set("update","groups/"+key+"/info","desc",info);
    set("update","groups/"+key+"/users",uid,true);
    set("update","groups/"+key+"/stats","popularity",1);
    group(key);
}

function set(method,path,title,content){
    firebase.database().ref(path)[method]({
        [title]:content
    });
}

function get(method,path,title,callback){
    firebase.database().ref(path)[method]("value", function(snapshot) {
        window[callback](title,snapshot.val()[title]);
    });
}

function write(title,content,link,nav){
    var body="";
    if(link!=null&&nav==null){
        body+='<div class="card" onclick="javascript:'+link+';">';
    }else{
        body+='<div class="card">';
    }
    body+='<span style="font-size:8vh;">';
    body+=encode(title);
    body+='</span>';
    body+='<br />';
    body+='<br />';
    body+='<span style="font-size:4vh;">';
    if(content==uid){
       body+='<img src="'+pic+'" class="pic"></img>';
       body+='<br />';
       body+='<br />';
       body+="<span class='desc'>"+encode(desc||"[Description Here]")+"</span>";
    }else{
       body+=encode(content);
    }
    body+='<br />';
    if(link!=null&&nav!=null){
        body+='<br />';
        body+='<a href="'+link+'">'+encode(nav)+'</a>';
    }
    body+='</span>';
    body+='</div>';
    body+='<br />';
    document.body.querySelectorAll(".body")[0].innerHTML=body+document.body.querySelectorAll(".body")[0].innerHTML;
}

function assign(variable,value){
    window[variable]=value||"["+variable.replace("desc","Description")+" Here]";
}

function stall(param){
}

*/

var _0x3d34=['\x67\x61\x74\x68\x65\x72\x61\x70\x70\x2d\x31\x39\x30\x36\x62\x2e\x66\x69\x72\x65\x62\x61\x73\x65\x61\x70\x70\x2e\x63\x6f\x6d','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x61\x74\x68\x65\x72\x61\x70\x70\x2d\x31\x39\x30\x36\x62\x2e\x66\x69\x72\x65\x62\x61\x73\x65\x69\x6f\x2e\x63\x6f\x6d','\x67\x61\x74\x68\x65\x72\x61\x70\x70\x2d\x31\x39\x30\x36\x62\x2e\x61\x70\x70\x73\x70\x6f\x74\x2e\x63\x6f\x6d','\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x41\x70\x70','\x61\x75\x74\x68','\x47\x6f\x6f\x67\x6c\x65\x41\x75\x74\x68\x50\x72\x6f\x76\x69\x64\x65\x72','\x73\x69\x67\x6e\x49\x6e\x57\x69\x74\x68\x50\x6f\x70\x75\x70','\x63\x61\x74\x63\x68','\x6c\x6f\x67','\x6d\x65\x73\x73\x61\x67\x65','\x63\x6f\x64\x65','\x74\x68\x65\x6e','\x53\x49\x47\x4e\x20\x4f\x55\x54\x20\x45\x52\x52\x4f\x52\x21','\x72\x65\x70\x6c\x61\x63\x65','\x26\x71\x75\x6f\x74\x3b','\x26\x61\x6d\x70\x3b','\x26\x23\x33\x39\x3b','\x26\x6c\x74\x3b','\x26\x67\x74\x3b','\x26\x63\x69\x72\x63\x3b','\x26\x6c\x73\x71\x75\x6f\x3b','\x26\x72\x73\x71\x75\x6f\x3b','\x26\x6c\x64\x71\x75\x6f\x3b','\x26\x72\x64\x71\x75\x6f\x3b','\x26\x6e\x64\x61\x73\x68\x3b','\x26\x6d\x64\x61\x73\x68\x3b','\x26\x74\x69\x6c\x64\x65\x3b','\x26\x74\x72\x61\x64\x65\x3b','\x26\x73\x63\x61\x72\x6f\x6e\x3b','\x26\x72\x73\x61\x71\x75\x6f\x3b','\x26\x6f\x65\x6c\x69\x67\x3b','\x26\x23\x33\x38\x32\x3b','\x26\x59\x75\x6d\x6c\x3b','\x26\x63\x65\x6e\x74\x3b','\x26\x70\x6f\x75\x6e\x64\x3b','\x26\x79\x65\x6e\x3b','\x26\x62\x72\x76\x62\x61\x72\x3b','\x26\x73\x65\x63\x74\x3b','\x26\x63\x6f\x70\x79\x3b','\x26\x6f\x72\x64\x66\x3b','\x26\x6e\x6f\x74\x3b','\x26\x72\x65\x67\x3b','\x26\x64\x65\x67\x3b','\x26\x70\x6c\x75\x73\x6d\x6e\x3b','\x26\x73\x75\x70\x32\x3b','\x26\x73\x75\x70\x33\x3b','\x26\x61\x63\x75\x74\x65\x3b','\x26\x6d\x69\x63\x72\x6f\x3b','\x26\x70\x61\x72\x61','\x26\x6d\x69\x64\x64\x6f\x74\x3b','\x26\x63\x65\x64\x69\x6c\x3b','\x26\x73\x75\x70\x31\x3b','\x26\x66\x72\x61\x63\x31\x34\x3b','\x26\x66\x72\x61\x63\x33\x34\x3b','\x26\x69\x71\x75\x65\x73\x74\x3b','\x26\x41\x61\x63\x75\x74\x65\x3b','\x26\x41\x74\x69\x6c\x64\x65\x3b','\x26\x41\x75\x6d\x6c\x3b','\x26\x41\x72\x69\x6e\x67\x3b','\x26\x41\x45\x6c\x69\x67\x3b','\x26\x43\x63\x65\x64\x69\x6c\x3b','\x26\x45\x67\x72\x61\x76\x65\x3b','\x26\x45\x61\x63\x75\x74\x65\x3b','\x26\x45\x63\x69\x72\x63\x3b','\x26\x45\x75\x6d\x6c\x3b','\x26\x49\x67\x72\x61\x76\x65\x3b','\x26\x49\x61\x63\x75\x74\x65\x3b','\x26\x49\x75\x6d\x6c\x3b','\x26\x45\x54\x48\x3b','\x26\x4e\x74\x69\x6c\x64\x65\x3b','\x26\x4f\x67\x72\x61\x76\x65\x3b','\x26\x4f\x61\x63\x75\x74\x65\x3b','\x26\x4f\x63\x69\x72\x63\x3b','\x26\x4f\x74\x69\x6c\x64\x65\x3b','\x26\x4f\x75\x6d\x6c\x3b','\x26\x74\x69\x6d\x65\x73\x3b','\x26\x4f\x73\x6c\x61\x73\x68\x3b','\x26\x55\x67\x72\x61\x76\x65\x3b','\x26\x55\x61\x63\x75\x74\x65\x3b','\x26\x55\x63\x69\x72\x63\x3b','\x26\x59\x61\x63\x75\x74\x65\x3b','\x26\x73\x7a\x6c\x69\x67\x3b','\x26\x61\x61\x63\x75\x74\x65\x3b','\x26\x61\x63\x69\x72\x63\x3b','\x26\x61\x74\x69\x6c\x64\x65\x3b','\x26\x61\x75\x6d\x6c\x3b','\x26\x61\x65\x6c\x69\x67\x3b','\x26\x63\x63\x65\x64\x69\x6c\x3b','\x26\x65\x67\x72\x61\x76\x65\x3b','\x26\x65\x61\x63\x75\x74\x65\x3b','\x26\x65\x75\x6d\x6c\x3b','\x26\x69\x61\x63\x75\x74\x65\x3b','\x26\x69\x63\x69\x72\x63\x3b','\x26\x69\x75\x6d\x6c\x3b','\x26\x65\x74\x68\x3b','\x26\x6e\x74\x69\x6c\x64\x65\x3b','\x26\x6f\x67\x72\x61\x76\x65\x3b','\x26\x6f\x61\x63\x75\x74\x65\x3b','\x26\x6f\x63\x69\x72\x63\x3b','\x26\x6f\x74\x69\x6c\x64\x65\x3b','\x26\x6f\x75\x6d\x6c\x3b','\x26\x64\x69\x76\x69\x64\x65\x3b','\x26\x6f\x73\x6c\x61\x73\x68\x3b','\x26\x75\x67\x72\x61\x76\x65\x3b','\x26\x75\x63\x69\x72\x63\x3b','\x26\x75\x75\x6d\x6c\x3b','\x26\x74\x68\x6f\x72\x6e\x3b','\x26\x79\x75\x6d\x6c\x3b','\x64\x69\x76','\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c','\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74','\x6f\x6e\x41\x75\x74\x68\x53\x74\x61\x74\x65\x43\x68\x61\x6e\x67\x65\x64','\x6f\x6e\x63\x65','\x75\x73\x65\x72\x73\x2f','\x61\x73\x73\x69\x67\x6e','\x75\x70\x64\x61\x74\x65','\x2f\x69\x6e\x66\x6f','\x64\x69\x73\x70\x6c\x61\x79\x4e\x61\x6d\x65','\x70\x69\x63','\x62\x6f\x64\x79','\x4d\x6f\x73\x74\x20\x50\x6f\x70\x75\x6c\x61\x72','\x56\x69\x65\x77\x20\x4d\x6f\x73\x74\x20\x50\x6f\x70\x75\x6c\x61\x72','\x70\x6f\x70\x75\x6c\x61\x72\x69\x74\x79\x28\x75\x69\x64\x29\x3b','\x4d\x79\x20\x47\x72\x6f\x75\x70\x73','\x67\x72\x6f\x75\x70\x73\x28\x75\x69\x64\x29\x3b','\x68\x6f\x6d\x65','\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c','\x53\x69\x67\x6e\x20\x4f\x75\x74','\x64\x61\x74\x61\x62\x61\x73\x65','\x72\x65\x66','\x72\x65\x6d\x6f\x76\x65','\x6f\x72\x64\x65\x72\x42\x79\x43\x68\x69\x6c\x64','\x6c\x69\x6d\x69\x74\x54\x6f\x4c\x61\x73\x74','\x76\x61\x6c\x75\x65','\x66\x6f\x72\x45\x61\x63\x68','\x76\x61\x6c','\x67\x72\x6f\x75\x70','\x73\x74\x61\x74\x73','\x70\x6f\x70\x75\x6c\x61\x72\x69\x74\x79','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x67\x72\x6f\x75\x70\x28\x27','\x6b\x65\x79','\x27\x29\x3b','\x67\x72\x6f\x75\x70\x73\x2f','\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e','\x6c\x65\x61\x76\x65','\x73\x74\x61\x6c\x6c','\x75\x73\x65\x72\x73','\x2f\x67\x72\x6f\x75\x70\x73\x2f','\x64\x65\x73\x63','\x5b\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x20\x48\x65\x72\x65\x5d','\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a\x72\x65\x6d\x6f\x76\x65\x28\x27','\x27\x2c\x27\x67\x72\x6f\x75\x70\x73\x27\x2c\x20\x75\x69\x64\x29\x3b\x67\x72\x6f\x75\x70\x28\x27','\x4c\x65\x61\x76\x65\x20\x47\x72\x6f\x75\x70','\x75\x6e\x73\x68\x69\x66\x74','\x70\x75\x73\x68','\x73\x65\x74','\x2f\x75\x73\x65\x72\x73','\x2f\x73\x74\x61\x74\x73','\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x61\x72\x64\x22\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a','\x3b\x22\x3e','\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x61\x72\x64\x22\x3e','\x3c\x73\x70\x61\x6e\x20\x73\x74\x79\x6c\x65\x3d\x22\x66\x6f\x6e\x74\x2d\x73\x69\x7a\x65\x3a\x38\x76\x68\x3b\x22\x3e','\x3c\x2f\x73\x70\x61\x6e\x3e','\x3c\x62\x72\x20\x2f\x3e','\x3c\x69\x6d\x67\x20\x73\x72\x63\x3d\x22','\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x70\x69\x63\x22\x3e\x3c\x2f\x69\x6d\x67\x3e','\x3c\x61\x20\x68\x72\x65\x66\x3d\x22','\x3c\x2f\x61\x3e','\x3c\x2f\x64\x69\x76\x3e','\x2e\x62\x6f\x64\x79','\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e','\x20\x48\x65\x72\x65\x5d','\x43\x6f\x70\x79\x72\x69\x67\x68\x74\x20\x32\x30\x31\x38\x20\x4b\x65\x6e\x74\x6f\x20\x4e\x69\x73\x68\x69\x20\x28\x47\x61\x74\x68\x65\x72\x41\x70\x70\x29\x20\x4c\x69\x63\x65\x6e\x73\x65\x64\x20\x75\x6e\x64\x65\x72\x20\x74\x68\x65\x20\x41\x70\x61\x63\x68\x65\x20\x4c\x69\x63\x65\x6e\x73\x65\x2c\x20\x56\x65\x72\x73\x69\x6f\x6e\x20\x32\x2e\x30\x20\x28\x74\x68\x65\x20\x22\x4c\x69\x63\x65\x6e\x73\x65\x22\x29\x3b\x20\x79\x6f\x75\x20\x6d\x61\x79\x20\x6e\x6f\x74\x20\x75\x73\x65\x20\x74\x68\x69\x73\x20\x66\x69\x6c\x65\x20\x65\x78\x63\x65\x70\x74\x20\x69\x6e\x20\x63\x6f\x6d\x70\x6c\x69\x61\x6e\x63\x65\x20\x77\x69\x74\x68\x20\x74\x68\x65\x20\x4c\x69\x63\x65\x6e\x73\x65\x2e\x20\x59\x6f\x75\x20\x6d\x61\x79\x20\x6f\x62\x74\x61\x69\x6e\x20\x61\x20\x63\x6f\x70\x79\x20\x6f\x66\x20\x74\x68\x65\x20\x4c\x69\x63\x65\x6e\x73\x65\x20\x61\x74\x20\x68\x74\x74\x70\x3a\x2f\x2f\x77\x77\x77\x2e\x61\x70\x61\x63\x68\x65\x2e\x6f\x72\x67\x2f\x6c\x69\x63\x65\x6e\x73\x65\x73\x2f\x4c\x49\x43\x45\x4e\x53\x45\x2d\x32\x2e\x30\x20\x55\x6e\x6c\x65\x73\x73\x20\x72\x65\x71\x75\x69\x72\x65\x64\x20\x62\x79\x20\x61\x70\x70\x6c\x69\x63\x61\x62\x6c\x65\x20\x6c\x61\x77\x20\x6f\x72\x20\x61\x67\x72\x65\x65\x64\x20\x74\x6f\x20\x69\x6e\x20\x77\x72\x69\x74\x69\x6e\x67\x2c\x20\x73\x6f\x66\x74\x77\x61\x72\x65\x20\x64\x69\x73\x74\x72\x69\x62\x75\x74\x65\x64\x20\x75\x6e\x64\x65\x72\x20\x74\x68\x65\x20\x4c\x69\x63\x65\x6e\x73\x65\x20\x69\x73\x20\x64\x69\x73\x74\x72\x69\x62\x75\x74\x65\x64\x20\x6f\x6e\x20\x61\x6e\x20\x22\x41\x53\x20\x49\x53\x22\x20\x42\x41\x53\x49\x53\x2c\x20\x57\x49\x54\x48\x4f\x55\x54\x20\x57\x41\x52\x52\x41\x4e\x54\x49\x45\x53\x20\x4f\x52\x20\x43\x4f\x4e\x44\x49\x54\x49\x4f\x4e\x53\x20\x4f\x46\x20\x41\x4e\x59\x20\x4b\x49\x4e\x44\x2c\x20\x65\x69\x74\x68\x65\x72\x20\x65\x78\x70\x72\x65\x73\x73\x20\x6f\x72\x20\x69\x6d\x70\x6c\x69\x65\x64\x2e\x20\x53\x65\x65\x20\x74\x68\x65\x20\x4c\x69\x63\x65\x6e\x73\x65\x20\x66\x6f\x72\x20\x74\x68\x65\x20\x73\x70\x65\x63\x69\x66\x69\x63\x20\x6c\x61\x6e\x67\x75\x61\x67\x65\x20\x67\x6f\x76\x65\x72\x6e\x69\x6e\x67\x20\x70\x65\x72\x6d\x69\x73\x73\x69\x6f\x6e\x73\x20\x61\x6e\x64\x20\x6c\x69\x6d\x69\x74\x61\x74\x69\x6f\x6e\x73\x20\x75\x6e\x64\x65\x72\x20\x74\x68\x65\x20\x4c\x69\x63\x65\x6e\x73\x65\x2e','\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x79','\x5f\x63\x6f\x6d\x6d\x61\x6e\x64\x4c\x69\x6e\x65\x41\x50\x49','\x55\x6e\x63\x61\x75\x67\x68\x74\x20\x54\x79\x70\x65\x45\x72\x72\x6f\x72\x3a\x20\x41\x6e\x6f\x6e\x79\x6d\x6f\x75\x73\x20\x28\x4c\x69\x6e\x65\x20\x31\x29','\x73\x65\x72\x76\x69\x63\x65\x57\x6f\x72\x6b\x65\x72','\x72\x65\x67\x69\x73\x74\x65\x72','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6b\x65\x6e\x74\x6f\x6e\x69\x73\x68\x69\x2e\x67\x69\x74\x68\x75\x62\x2e\x69\x6f\x2f\x61\x70\x70\x73\x2f\x67\x61\x74\x68\x65\x72\x61\x70\x70\x2f\x77\x6f\x72\x6b\x65\x72\x2e\x6a\x73'];(function(_0x332235,_0xb02cb8){var _0x4f9754=function(_0x9f586a){while(--_0x9f586a){_0x332235['\x70\x75\x73\x68'](_0x332235['\x73\x68\x69\x66\x74']());}};_0x4f9754(++_0xb02cb8);}(_0x3d34,0xad));var _0x43d3=function(_0x19495b,_0x1eeb5f){_0x19495b=_0x19495b-0x0;var _0x43f5a7=_0x3d34[_0x19495b];return _0x43f5a7;};console['\x77\x61\x72\x6e'](_0x43d3('0x0'));(function(){try{var _0x491a15=console;Object[_0x43d3('0x1')](window,'\x63\x6f\x6e\x73\x6f\x6c\x65',{'\x67\x65\x74':function(){if(_0x491a15[_0x43d3('0x2')])throw _0x43d3('0x3');return _0x491a15;},'\x73\x65\x74':function(_0x4cfed6){_0x491a15=_0x4cfed6;}});}catch(_0x41f738){}}());if(_0x43d3('0x4')in navigator){navigator[_0x43d3('0x4')][_0x43d3('0x5')](_0x43d3('0x6'))['\x74\x68\x65\x6e'](function(){});}var config={'\x61\x70\x69\x4b\x65\x79':'\x41\x49\x7a\x61\x53\x79\x44\x70\x57\x5a\x63\x6d\x4e\x6e\x46\x30\x72\x6d\x6d\x59\x4a\x4f\x4c\x67\x49\x30\x2d\x63\x5a\x4a\x4d\x49\x76\x76\x48\x6e\x67\x73\x59','\x61\x75\x74\x68\x44\x6f\x6d\x61\x69\x6e':_0x43d3('0x7'),'\x64\x61\x74\x61\x62\x61\x73\x65\x55\x52\x4c':_0x43d3('0x8'),'\x70\x72\x6f\x6a\x65\x63\x74\x49\x64':'\x67\x61\x74\x68\x65\x72\x61\x70\x70\x2d\x31\x39\x30\x36\x62','\x73\x74\x6f\x72\x61\x67\x65\x42\x75\x63\x6b\x65\x74':_0x43d3('0x9'),'\x6d\x65\x73\x73\x61\x67\x69\x6e\x67\x53\x65\x6e\x64\x65\x72\x49\x64':'\x31\x30\x33\x38\x30\x34\x34\x34\x39\x31\x39\x39\x30'};firebase[_0x43d3('0xa')](config);function login(){var _0x2e6fc0=new firebase[_0x43d3('0xb')][_0x43d3('0xc')]();firebase['\x61\x75\x74\x68']()[_0x43d3('0xd')](_0x2e6fc0)['\x74\x68\x65\x6e'](function(_0x18d94c){})[_0x43d3('0xe')](function(_0x1b6ca9){console[_0x43d3('0xf')]('\x53\x69\x67\x6e\x20\x69\x6e\x20\x65\x72\x72\x6f\x72\x2e\x20'+_0x1b6ca9[_0x43d3('0x10')]+'\x20\x28'+_0x1b6ca9[_0x43d3('0x11')]+'\x29');});}function signOut(){firebase[_0x43d3('0xb')]()['\x73\x69\x67\x6e\x4f\x75\x74']()[_0x43d3('0x12')](function(){location['\x72\x65\x6c\x6f\x61\x64'](!![]);})['\x63\x61\x74\x63\x68'](function(_0x2b1db3){console[_0x43d3('0xf')](_0x43d3('0x13'));});}function encode(_0x356b47){_0x356b47=_0x356b47[_0x43d3('0x14')](/"/g,_0x43d3('0x15'));_0x356b47=_0x356b47[_0x43d3('0x14')](/&/g,_0x43d3('0x16'));_0x356b47=_0x356b47[_0x43d3('0x14')](/\'/g,_0x43d3('0x17'));_0x356b47=_0x356b47[_0x43d3('0x14')](/</g,_0x43d3('0x18'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/>/g,_0x43d3('0x19'));_0x356b47=_0x356b47[_0x43d3('0x14')](/\^/g,_0x43d3('0x1a'));_0x356b47=_0x356b47[_0x43d3('0x14')](/‘/g,_0x43d3('0x1b'));_0x356b47=_0x356b47[_0x43d3('0x14')](/’/g,_0x43d3('0x1c'));_0x356b47=_0x356b47[_0x43d3('0x14')](/“/g,_0x43d3('0x1d'));_0x356b47=_0x356b47[_0x43d3('0x14')](/”/g,_0x43d3('0x1e'));_0x356b47=_0x356b47[_0x43d3('0x14')](/•/g,'\x26\x62\x75\x6c\x6c\x3b');_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/–/g,_0x43d3('0x1f'));_0x356b47=_0x356b47[_0x43d3('0x14')](/—/g,_0x43d3('0x20'));_0x356b47=_0x356b47[_0x43d3('0x14')](/˜/g,_0x43d3('0x21'));_0x356b47=_0x356b47[_0x43d3('0x14')](/™/g,_0x43d3('0x22'));_0x356b47=_0x356b47[_0x43d3('0x14')](/š/g,_0x43d3('0x23'));_0x356b47=_0x356b47[_0x43d3('0x14')](/›/g,_0x43d3('0x24'));_0x356b47=_0x356b47[_0x43d3('0x14')](/œ/g,_0x43d3('0x25'));_0x356b47=_0x356b47[_0x43d3('0x14')](/ž/g,_0x43d3('0x26'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/Ÿ/g,_0x43d3('0x27'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/¡/g,'\x26\x69\x65\x78\x63\x6c\x3b');_0x356b47=_0x356b47[_0x43d3('0x14')](/¢/g,_0x43d3('0x28'));_0x356b47=_0x356b47[_0x43d3('0x14')](/£/g,_0x43d3('0x29'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/¥/g,_0x43d3('0x2a'));_0x356b47=_0x356b47[_0x43d3('0x14')](/¦/g,_0x43d3('0x2b'));_0x356b47=_0x356b47[_0x43d3('0x14')](/§/g,_0x43d3('0x2c'));_0x356b47=_0x356b47[_0x43d3('0x14')](/¨/g,'\x26\x75\x6d\x6c\x3b');_0x356b47=_0x356b47[_0x43d3('0x14')](/©/g,_0x43d3('0x2d'));_0x356b47=_0x356b47[_0x43d3('0x14')](/ª/g,_0x43d3('0x2e'));_0x356b47=_0x356b47[_0x43d3('0x14')](/«/g,'\x26\x6c\x61\x71\x75\x6f\x3b');_0x356b47=_0x356b47[_0x43d3('0x14')](/¬/g,_0x43d3('0x2f'));_0x356b47=_0x356b47[_0x43d3('0x14')](/­/g,'\x26\x73\x68\x79\x3b');_0x356b47=_0x356b47[_0x43d3('0x14')](/®/g,_0x43d3('0x30'));_0x356b47=_0x356b47[_0x43d3('0x14')](/¯/g,'\x26\x6d\x61\x63\x72\x3b');_0x356b47=_0x356b47[_0x43d3('0x14')](/°/g,_0x43d3('0x31'));_0x356b47=_0x356b47[_0x43d3('0x14')](/±/g,_0x43d3('0x32'));_0x356b47=_0x356b47[_0x43d3('0x14')](/²/g,_0x43d3('0x33'));_0x356b47=_0x356b47[_0x43d3('0x14')](/³/g,_0x43d3('0x34'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/´/g,_0x43d3('0x35'));_0x356b47=_0x356b47[_0x43d3('0x14')](/µ/g,_0x43d3('0x36'));_0x356b47=_0x356b47[_0x43d3('0x14')](/¶/g,_0x43d3('0x37'));_0x356b47=_0x356b47[_0x43d3('0x14')](/·/g,_0x43d3('0x38'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/¸/g,_0x43d3('0x39'));_0x356b47=_0x356b47[_0x43d3('0x14')](/¹/g,_0x43d3('0x3a'));_0x356b47=_0x356b47[_0x43d3('0x14')](/º/g,'\x26\x6f\x72\x64\x6d\x3b');_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/»/g,'\x26\x72\x61\x71\x75\x6f\x3b');_0x356b47=_0x356b47[_0x43d3('0x14')](/¼/g,_0x43d3('0x3b'));_0x356b47=_0x356b47[_0x43d3('0x14')](/½/g,'\x26\x66\x72\x61\x63\x31\x32\x3b');_0x356b47=_0x356b47[_0x43d3('0x14')](/¾/g,_0x43d3('0x3c'));_0x356b47=_0x356b47[_0x43d3('0x14')](/¿/g,_0x43d3('0x3d'));_0x356b47=_0x356b47[_0x43d3('0x14')](/À/g,'\x26\x41\x67\x72\x61\x76\x65\x3b');_0x356b47=_0x356b47[_0x43d3('0x14')](/Á/g,_0x43d3('0x3e'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/Â/g,'\x26\x41\x63\x69\x72\x63\x3b');_0x356b47=_0x356b47[_0x43d3('0x14')](/Ã/g,_0x43d3('0x3f'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Ä/g,_0x43d3('0x40'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Å/g,_0x43d3('0x41'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Æ/g,_0x43d3('0x42'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Ç/g,_0x43d3('0x43'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/È/g,_0x43d3('0x44'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/É/g,_0x43d3('0x45'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Ê/g,_0x43d3('0x46'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Ë/g,_0x43d3('0x47'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/Ì/g,_0x43d3('0x48'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Í/g,_0x43d3('0x49'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Î/g,'\x26\x49\x63\x69\x72\x63\x3b');_0x356b47=_0x356b47[_0x43d3('0x14')](/Ï/g,_0x43d3('0x4a'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Ð/g,_0x43d3('0x4b'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Ñ/g,_0x43d3('0x4c'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/Ò/g,_0x43d3('0x4d'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/Ó/g,_0x43d3('0x4e'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Ô/g,_0x43d3('0x4f'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Õ/g,_0x43d3('0x50'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Ö/g,_0x43d3('0x51'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/×/g,_0x43d3('0x52'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/Ø/g,_0x43d3('0x53'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Ù/g,_0x43d3('0x54'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Ú/g,_0x43d3('0x55'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Û/g,_0x43d3('0x56'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Ü/g,'\x26\x55\x75\x6d\x6c\x3b');_0x356b47=_0x356b47[_0x43d3('0x14')](/Ý/g,_0x43d3('0x57'));_0x356b47=_0x356b47[_0x43d3('0x14')](/Þ/g,'\x26\x54\x48\x4f\x52\x4e\x3b');_0x356b47=_0x356b47[_0x43d3('0x14')](/ß/g,_0x43d3('0x58'));_0x356b47=_0x356b47[_0x43d3('0x14')](/à/g,_0x43d3('0x59'));_0x356b47=_0x356b47[_0x43d3('0x14')](/á/g,_0x43d3('0x59'));_0x356b47=_0x356b47[_0x43d3('0x14')](/â/g,_0x43d3('0x5a'));_0x356b47=_0x356b47[_0x43d3('0x14')](/ã/g,_0x43d3('0x5b'));_0x356b47=_0x356b47[_0x43d3('0x14')](/ä/g,_0x43d3('0x5c'));_0x356b47=_0x356b47[_0x43d3('0x14')](/å/g,'\x26\x61\x72\x69\x6e\x67\x3b');_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/æ/g,_0x43d3('0x5d'));_0x356b47=_0x356b47[_0x43d3('0x14')](/ç/g,_0x43d3('0x5e'));_0x356b47=_0x356b47[_0x43d3('0x14')](/è/g,_0x43d3('0x5f'));_0x356b47=_0x356b47[_0x43d3('0x14')](/é/g,_0x43d3('0x60'));_0x356b47=_0x356b47[_0x43d3('0x14')](/ê/g,'\x26\x65\x63\x69\x72\x63\x3b');_0x356b47=_0x356b47[_0x43d3('0x14')](/ë/g,_0x43d3('0x61'));_0x356b47=_0x356b47[_0x43d3('0x14')](/ì/g,'\x26\x69\x67\x72\x61\x76\x65\x3b');_0x356b47=_0x356b47[_0x43d3('0x14')](/í/g,_0x43d3('0x62'));_0x356b47=_0x356b47[_0x43d3('0x14')](/î/g,_0x43d3('0x63'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/ï/g,_0x43d3('0x64'));_0x356b47=_0x356b47[_0x43d3('0x14')](/ð/g,_0x43d3('0x65'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/ñ/g,_0x43d3('0x66'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/ò/g,_0x43d3('0x67'));_0x356b47=_0x356b47[_0x43d3('0x14')](/ó/g,_0x43d3('0x68'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/ô/g,_0x43d3('0x69'));_0x356b47=_0x356b47[_0x43d3('0x14')](/õ/g,_0x43d3('0x6a'));_0x356b47=_0x356b47[_0x43d3('0x14')](/ö/g,_0x43d3('0x6b'));_0x356b47=_0x356b47[_0x43d3('0x14')](/÷/g,_0x43d3('0x6c'));_0x356b47=_0x356b47[_0x43d3('0x14')](/ø/g,_0x43d3('0x6d'));_0x356b47=_0x356b47['\x72\x65\x70\x6c\x61\x63\x65'](/ù/g,_0x43d3('0x6e'));_0x356b47=_0x356b47[_0x43d3('0x14')](/ú/g,'\x26\x75\x61\x63\x75\x74\x65\x3b');_0x356b47=_0x356b47[_0x43d3('0x14')](/û/g,_0x43d3('0x6f'));_0x356b47=_0x356b47[_0x43d3('0x14')](/ü/g,_0x43d3('0x70'));_0x356b47=_0x356b47[_0x43d3('0x14')](/ý/g,'\x26\x79\x61\x63\x75\x74\x65\x3b');_0x356b47=_0x356b47[_0x43d3('0x14')](/þ/g,_0x43d3('0x71'));_0x356b47=_0x356b47[_0x43d3('0x14')](/ÿ/g,_0x43d3('0x72'));return _0x356b47;}var decode=function(){var _0x20b0bc=document['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74'](_0x43d3('0x73'));var _0x5a7796=/&(?:#x[a-f0-9]+|#[0-9]+|[a-z0-9]+);?/gi;return function decodeHTMLEntities(_0x575002){_0x575002=_0x575002[_0x43d3('0x14')](_0x5a7796,function(_0x31a371){_0x20b0bc[_0x43d3('0x74')]=_0x31a371;return _0x20b0bc[_0x43d3('0x75')];});_0x20b0bc[_0x43d3('0x75')]='';return _0x575002;};}();var uid='';var name='';var email='';var pic='';var desc='';firebase[_0x43d3('0xb')]()[_0x43d3('0x76')](function(_0x2991a7){if(_0x2991a7){uid=_0x2991a7['\x75\x69\x64'];get(_0x43d3('0x77'),_0x43d3('0x78')+uid+'\x2f\x69\x6e\x66\x6f','\x64\x65\x73\x63',_0x43d3('0x79'));email=_0x2991a7['\x65\x6d\x61\x69\x6c'];set(_0x43d3('0x7a'),'\x75\x73\x65\x72\x73\x2f'+uid+_0x43d3('0x7b'),'\x65\x6d\x61\x69\x6c',email);name=_0x2991a7[_0x43d3('0x7c')];set(_0x43d3('0x7a'),_0x43d3('0x78')+uid+_0x43d3('0x7b'),'\x6e\x61\x6d\x65',name);pic=_0x2991a7['\x70\x68\x6f\x74\x6f\x55\x52\x4c'];set('\x75\x70\x64\x61\x74\x65',_0x43d3('0x78')+uid+_0x43d3('0x7b'),_0x43d3('0x7d'),pic);clear(_0x43d3('0x7e'));}});function action(_0x12bd3c){if(_0x12bd3c=='\x6d\x65\x6e\x75'){console['\x6c\x6f\x67']('\x6d\x65\x6e\x75');user(uid);}else if(_0x12bd3c=='\x61\x64\x64'){console[_0x43d3('0xf')]('\x61\x64\x64');clear(_0x43d3('0x7e'));write(_0x43d3('0x7f'),_0x43d3('0x80'),_0x43d3('0x81'));write(_0x43d3('0x82'),'\x56\x69\x65\x77\x20\x41\x6c\x6c',_0x43d3('0x83'));}else if(_0x12bd3c=='\x68\x6f\x6d\x65'){console[_0x43d3('0xf')](_0x43d3('0x84'));}}function clear(_0x76d939){document[_0x43d3('0x85')]('\x2e'+_0x76d939)[0x0][_0x43d3('0x74')]='';}function user(_0x43bba6){if(_0x43bba6==uid){clear(_0x43d3('0x7e'));write(name,uid,'\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a\x73\x69\x67\x6e\x4f\x75\x74\x28\x29\x3b',_0x43d3('0x86'));}}function remove(_0x3a19c1,_0x1ab2c6,_0x171b64){firebase[_0x43d3('0x87')]()[_0x43d3('0x88')](_0x3a19c1)[_0x43d3('0x89')]();window[_0x1ab2c6](_0x171b64);}function popularity(_0x4f8c7b){clear(_0x43d3('0x7e'));firebase[_0x43d3('0x87')]()[_0x43d3('0x88')]('\x67\x72\x6f\x75\x70\x73\x2f')[_0x43d3('0x8a')]('\x73\x74\x61\x74\x73\x2f\x70\x6f\x70\x75\x6c\x61\x72\x69\x74\x79')[_0x43d3('0x8b')](0x19)[_0x43d3('0x77')](_0x43d3('0x8c'),_0x36fce7=>{_0x36fce7[_0x43d3('0x8d')](_0x5c0be3=>{write(_0x5c0be3[_0x43d3('0x8e')]()['\x69\x6e\x66\x6f'][_0x43d3('0x8f')],_0x5c0be3[_0x43d3('0x8e')]()[_0x43d3('0x90')][_0x43d3('0x91')][_0x43d3('0x92')]()+'\x20\x6d\x65\x6d\x62\x65\x72\x73',_0x43d3('0x93')+_0x5c0be3[_0x43d3('0x94')]+_0x43d3('0x95'));});});}function group(_0x1be333,_0xbeaaab){_0xbeaaab=_0xbeaaab||'\x6a\x6f\x69\x6e';firebase[_0x43d3('0x87')]()[_0x43d3('0x88')](_0x43d3('0x96')+_0x1be333)[_0x43d3('0x97')](function(_0x51d101){if(_0x51d101){if(_0xbeaaab==_0x43d3('0x98')){_0x51d101[_0x43d3('0x90')]['\x70\x6f\x70\x75\x6c\x61\x72\x69\x74\x79']--;if(_0x51d101[_0x43d3('0x90')][_0x43d3('0x91')]==0x0){remove(_0x43d3('0x96')+_0x1be333,_0x43d3('0x99'),0x0);}_0x51d101[_0x43d3('0x9a')][uid]=null;}else{if(!_0x51d101[_0x43d3('0x9a')][uid]){set('\x73\x65\x74',_0x43d3('0x78')+uid+_0x43d3('0x9b')+_0x1be333,'\x67\x72\x6f\x75\x70\x73',uid);_0x51d101[_0x43d3('0x90')][_0x43d3('0x91')]++;}if(!_0x51d101[_0x43d3('0x9a')]){_0x51d101[_0x43d3('0x9a')]={};}_0x51d101['\x75\x73\x65\x72\x73'][uid]=!![];}}return _0x51d101;});}function groups(_0x33859f){if(_0x33859f==uid){clear(_0x43d3('0x7e'));var _0x20a1ae=0x0;var _0x47543b=[];firebase[_0x43d3('0x87')]()['\x72\x65\x66'](_0x43d3('0x78')+uid+_0x43d3('0x9b'))[_0x43d3('0x77')](_0x43d3('0x8c'),function(_0x5aa9c1){_0x5aa9c1[_0x43d3('0x8d')](function(_0x4f6746){var _0x16ac58=_0x4f6746[_0x43d3('0x94')];var _0x5cad58=_0x4f6746[_0x43d3('0x8e')]();_0x47543b[_0x20a1ae]=_0x4f6746['\x76\x61\x6c']()[_0x43d3('0x8f')];firebase[_0x43d3('0x87')]()[_0x43d3('0x88')](_0x43d3('0x96')+_0x47543b[_0x20a1ae]+_0x43d3('0x7b'))[_0x43d3('0x77')](_0x43d3('0x8c'),function(_0x6cdb80){write(_0x6cdb80['\x76\x61\x6c']()[_0x43d3('0x8f')],_0x6cdb80['\x76\x61\x6c']()[_0x43d3('0x9c')]||_0x43d3('0x9d'),_0x43d3('0x9e')+_0x43d3('0x78')+uid+_0x43d3('0x9b')+_0x4f6746[_0x43d3('0x8e')]()[_0x43d3('0x8f')]+_0x43d3('0x9f')+_0x4f6746[_0x43d3('0x8e')]()[_0x43d3('0x8f')]+'\x27\x2c\x27\x6c\x65\x61\x76\x65\x27\x29\x3b',_0x43d3('0xa0'));});_0x20a1ae++;});});}}function reverseSnapshotOrder(_0x396da3){let _0x19eaf6=[];_0x396da3[_0x43d3('0x8d')](_0x2ff88b=>{_0x19eaf6[_0x43d3('0xa1')](_0x2ff88b);});return _0x19eaf6;}function create(_0x4f9682,_0x540eba){var _0x21cc2b=firebase[_0x43d3('0x87')]()[_0x43d3('0x88')](_0x43d3('0x78')+uid+'\x2f\x67\x72\x6f\x75\x70\x73')[_0x43d3('0xa2')]()[_0x43d3('0x94')];set(_0x43d3('0xa3'),_0x43d3('0x78')+uid+_0x43d3('0x9b')+_0x21cc2b,_0x43d3('0x8f'),_0x21cc2b);set(_0x43d3('0xa3'),_0x43d3('0x96')+_0x21cc2b+_0x43d3('0x7b'),_0x43d3('0x8f'),_0x4f9682);set(_0x43d3('0x7a'),_0x43d3('0x96')+_0x21cc2b+_0x43d3('0x7b'),_0x43d3('0x9c'),_0x540eba);set(_0x43d3('0x7a'),_0x43d3('0x96')+_0x21cc2b+_0x43d3('0xa4'),uid,!![]);set(_0x43d3('0x7a'),_0x43d3('0x96')+_0x21cc2b+_0x43d3('0xa5'),'\x70\x6f\x70\x75\x6c\x61\x72\x69\x74\x79',0x1);group(_0x21cc2b);}function set(_0x3d5e70,_0xb95c2c,_0x58db95,_0x236904){firebase[_0x43d3('0x87')]()[_0x43d3('0x88')](_0xb95c2c)[_0x3d5e70]({['\x74\x69\x74\x6c\x65']:_0x236904});}function get(_0x58ea3d,_0x4237ca,_0x281921,_0x3e9ba7){firebase[_0x43d3('0x87')]()['\x72\x65\x66'](_0x4237ca)[_0x58ea3d](_0x43d3('0x8c'),function(_0x5cbfb3){window[_0x3e9ba7](_0x281921,_0x5cbfb3[_0x43d3('0x8e')]()[_0x281921]);});}function write(_0x44ad70,_0x34aa9b,_0x121d7c,_0x237ee2){var _0x55d9b9='';if(_0x121d7c!=null&&_0x237ee2==null){_0x55d9b9+=_0x43d3('0xa6')+_0x121d7c+_0x43d3('0xa7');}else{_0x55d9b9+=_0x43d3('0xa8');}_0x55d9b9+=_0x43d3('0xa9');_0x55d9b9+=encode(_0x44ad70);_0x55d9b9+=_0x43d3('0xaa');_0x55d9b9+='\x3c\x62\x72\x20\x2f\x3e';_0x55d9b9+=_0x43d3('0xab');_0x55d9b9+='\x3c\x73\x70\x61\x6e\x20\x73\x74\x79\x6c\x65\x3d\x22\x66\x6f\x6e\x74\x2d\x73\x69\x7a\x65\x3a\x34\x76\x68\x3b\x22\x3e';if(_0x34aa9b==uid){_0x55d9b9+=_0x43d3('0xac')+pic+_0x43d3('0xad');_0x55d9b9+=_0x43d3('0xab');_0x55d9b9+='\x3c\x62\x72\x20\x2f\x3e';_0x55d9b9+='\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x27\x64\x65\x73\x63\x27\x3e'+encode(desc||_0x43d3('0x9d'))+_0x43d3('0xaa');}else{_0x55d9b9+=encode(_0x34aa9b);}_0x55d9b9+=_0x43d3('0xab');if(_0x121d7c!=null&&_0x237ee2!=null){_0x55d9b9+=_0x43d3('0xab');_0x55d9b9+=_0x43d3('0xae')+_0x121d7c+'\x22\x3e'+encode(_0x237ee2)+_0x43d3('0xaf');}_0x55d9b9+=_0x43d3('0xaa');_0x55d9b9+=_0x43d3('0xb0');_0x55d9b9+=_0x43d3('0xab');document[_0x43d3('0x7e')][_0x43d3('0x85')]('\x2e\x62\x6f\x64\x79')[0x0][_0x43d3('0x74')]=_0x55d9b9+document[_0x43d3('0x7e')]['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c'](_0x43d3('0xb1'))[0x0][_0x43d3('0x74')];}function assign(_0xe00c74,_0x1b5152){window[_0xe00c74]=_0x1b5152||'\x5b'+_0xe00c74[_0x43d3('0x14')](_0x43d3('0x9c'),_0x43d3('0xb2'))+_0x43d3('0xb3');}function stall(_0x398d59){}

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
    email=user.email;
    name=user.displayName;
    pic=user.photoURL;
    document.querySelectorAll(".body")[0].innerHTML="";
    writeUser(null,true);
  }
});

function login(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
  }).catch(function(error) {
    console.log("Sign in error. "+error.message+" ("+error.code+")");
  });
}

function action(act){
  if(act=="menu"){
    loadFeed();
    console.log("menu");
  }else if(act=="add"){
    console.log("add");
  }
}

var uid="";
var desc="";
var email="";
var name="";
var pic="";

function writeUser(content,callback) {
  callback=callback||false;
  content=content||"";
  if(content==""){
    firebase.database().ref('users/' + uid).update({
      name: name,
      email: email,
      pic : pic
    }).then(function(){
      if(callback==true){loadUser(uid);}
    });
  }else{
    firebase.database().ref('users/' + uid).update({
      desc: content
    }).then(function(){
      if(callback==true){loadUser(uid);}
    });
  }
}

function loadUser(id){
  var editable="";
  var signOut="";
  if(id==uid){editable='contenteditable onkeypress="function(event){if(event.keyCode==13){writeUser(document.querySelectorAll("+'"span[contenteditable]"'+")[0].innerHTML);return false;}}"';signOut="<br /><a href='javascript:writeUser(document.querySelectorAll("+'"span[contenteditable]"'+")[0].innerHTML);'>Save</a><br /><br /><a href='javascript:signOut();'>Sign Out</a>";}
  firebase.database().ref('users/' + id).on('value', function(snapshot) {
    if(snapshot.val().desc==null||snapshot.val().desc.length<1){
      desc="[Description Here]";
    }else{
      desc=snapshot.val().desc;
    }
    document.querySelectorAll(".body")[0].innerHTML=('<div class="card"><span style="font-size:8vh;">'+snapshot.val().name+'</span><br /><img class="pic" alt="Profile Picture" src="'+snapshot.val().pic+'"></img><br /><br /><span '+editable+'>'+desc+'</span>'+signOut+'</div>');
  });
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

function loadFeed(){
}

function encode(texte) {
  texte = texte.replace(/"/g,'&quot;'); // 34 22
  texte = texte.replace(/&/g,'&amp;'); // 38 26
  texte = texte.replace(/\'/g,'&#39;'); // 39 27
  texte = texte.replace(/</g,'&lt;'); // 60 3C
  texte = texte.replace(/>/g,'&gt;'); // 62 3E
  texte = texte.replace(/\^/g,'&circ;'); // 94 5E
  texte = texte.replace(/‘/g,'&lsquo;'); // 145 91
  texte = texte.replace(/’/g,'&rsquo;'); // 146 92
  texte = texte.replace(/“/g,'&ldquo;'); // 147 93
  texte = texte.replace(/”/g,'&rdquo;'); // 148 94
  texte = texte.replace(/•/g,'&bull;'); // 149 95
  texte = texte.replace(/–/g,'&ndash;'); // 150 96
  texte = texte.replace(/—/g,'&mdash;'); // 151 97
  texte = texte.replace(/˜/g,'&tilde;'); // 152 98
  texte = texte.replace(/™/g,'&trade;'); // 153 99
  texte = texte.replace(/š/g,'&scaron;'); // 154 9A
  texte = texte.replace(/›/g,'&rsaquo;'); // 155 9B
  texte = texte.replace(/œ/g,'&oelig;'); // 156 9C
  //texte = texte.replace(//g,'&#357;'); // 157 9D
  texte = texte.replace(/ž/g,'&#382;'); // 158 9E
  texte = texte.replace(/Ÿ/g,'&Yuml;'); // 159 9F
  // texte = texte.replace(/ /g,'&nbsp;'); // 160 A0
  texte = texte.replace(/¡/g,'&iexcl;'); // 161 A1
  texte = texte.replace(/¢/g,'&cent;'); // 162 A2
  texte = texte.replace(/£/g,'&pound;'); // 163 A3
  //texte = texte.replace(/ /g,'&curren;'); // 164 A4
  texte = texte.replace(/¥/g,'&yen;'); // 165 A5
  texte = texte.replace(/¦/g,'&brvbar;'); // 166 A6
  texte = texte.replace(/§/g,'&sect;'); // 167 A7
  texte = texte.replace(/¨/g,'&uml;'); // 168 A8
  texte = texte.replace(/©/g,'&copy;'); // 169 A9
  texte = texte.replace(/ª/g,'&ordf;'); // 170 AA
  texte = texte.replace(/«/g,'&laquo;'); // 171 AB
  texte = texte.replace(/¬/g,'&not;'); // 172 AC
  texte = texte.replace(/­/g,'&shy;'); // 173 AD
  texte = texte.replace(/®/g,'&reg;'); // 174 AE
  texte = texte.replace(/¯/g,'&macr;'); // 175 AF
  texte = texte.replace(/°/g,'&deg;'); // 176 B0
  texte = texte.replace(/±/g,'&plusmn;'); // 177 B1
  texte = texte.replace(/²/g,'&sup2;'); // 178 B2
  texte = texte.replace(/³/g,'&sup3;'); // 179 B3
  texte = texte.replace(/´/g,'&acute;'); // 180 B4
  texte = texte.replace(/µ/g,'&micro;'); // 181 B5
  texte = texte.replace(/¶/g,'&para'); // 182 B6
  texte = texte.replace(/·/g,'&middot;'); // 183 B7
  texte = texte.replace(/¸/g,'&cedil;'); // 184 B8
  texte = texte.replace(/¹/g,'&sup1;'); // 185 B9
  texte = texte.replace(/º/g,'&ordm;'); // 186 BA
  texte = texte.replace(/»/g,'&raquo;'); // 187 BB
  texte = texte.replace(/¼/g,'&frac14;'); // 188 BC
  texte = texte.replace(/½/g,'&frac12;'); // 189 BD
  texte = texte.replace(/¾/g,'&frac34;'); // 190 BE
  texte = texte.replace(/¿/g,'&iquest;'); // 191 BF
  texte = texte.replace(/À/g,'&Agrave;'); // 192 C0
  texte = texte.replace(/Á/g,'&Aacute;'); // 193 C1
  texte = texte.replace(/Â/g,'&Acirc;'); // 194 C2
  texte = texte.replace(/Ã/g,'&Atilde;'); // 195 C3
  texte = texte.replace(/Ä/g,'&Auml;'); // 196 C4
  texte = texte.replace(/Å/g,'&Aring;'); // 197 C5
  texte = texte.replace(/Æ/g,'&AElig;'); // 198 C6
  texte = texte.replace(/Ç/g,'&Ccedil;'); // 199 C7
  texte = texte.replace(/È/g,'&Egrave;'); // 200 C8
  texte = texte.replace(/É/g,'&Eacute;'); // 201 C9
  texte = texte.replace(/Ê/g,'&Ecirc;'); // 202 CA
  texte = texte.replace(/Ë/g,'&Euml;'); // 203 CB
  texte = texte.replace(/Ì/g,'&Igrave;'); // 204 CC
  texte = texte.replace(/Í/g,'&Iacute;'); // 205 CD
  texte = texte.replace(/Î/g,'&Icirc;'); // 206 CE
  texte = texte.replace(/Ï/g,'&Iuml;'); // 207 CF
  texte = texte.replace(/Ð/g,'&ETH;'); // 208 D0
  texte = texte.replace(/Ñ/g,'&Ntilde;'); // 209 D1
  texte = texte.replace(/Ò/g,'&Ograve;'); // 210 D2
  texte = texte.replace(/Ó/g,'&Oacute;'); // 211 D3
  texte = texte.replace(/Ô/g,'&Ocirc;'); // 212 D4
  texte = texte.replace(/Õ/g,'&Otilde;'); // 213 D5
  texte = texte.replace(/Ö/g,'&Ouml;'); // 214 D6
  texte = texte.replace(/×/g,'&times;'); // 215 D7
  texte = texte.replace(/Ø/g,'&Oslash;'); // 216 D8
  texte = texte.replace(/Ù/g,'&Ugrave;'); // 217 D9
  texte = texte.replace(/Ú/g,'&Uacute;'); // 218 DA
  texte = texte.replace(/Û/g,'&Ucirc;'); // 219 DB
  texte = texte.replace(/Ü/g,'&Uuml;'); // 220 DC
  texte = texte.replace(/Ý/g,'&Yacute;'); // 221 DD
  texte = texte.replace(/Þ/g,'&THORN;'); // 222 DE
  texte = texte.replace(/ß/g,'&szlig;'); // 223 DF
  texte = texte.replace(/à/g,'&aacute;'); // 224 E0
  texte = texte.replace(/á/g,'&aacute;'); // 225 E1
  texte = texte.replace(/â/g,'&acirc;'); // 226 E2
  texte = texte.replace(/ã/g,'&atilde;'); // 227 E3
  texte = texte.replace(/ä/g,'&auml;'); // 228 E4
  texte = texte.replace(/å/g,'&aring;'); // 229 E5
  texte = texte.replace(/æ/g,'&aelig;'); // 230 E6
  texte = texte.replace(/ç/g,'&ccedil;'); // 231 E7
  texte = texte.replace(/è/g,'&egrave;'); // 232 E8
  texte = texte.replace(/é/g,'&eacute;'); // 233 E9
  texte = texte.replace(/ê/g,'&ecirc;'); // 234 EA
  texte = texte.replace(/ë/g,'&euml;'); // 235 EB
  texte = texte.replace(/ì/g,'&igrave;'); // 236 EC
  texte = texte.replace(/í/g,'&iacute;'); // 237 ED
  texte = texte.replace(/î/g,'&icirc;'); // 238 EE
  texte = texte.replace(/ï/g,'&iuml;'); // 239 EF
  texte = texte.replace(/ð/g,'&eth;'); // 240 F0
  texte = texte.replace(/ñ/g,'&ntilde;'); // 241 F1
  texte = texte.replace(/ò/g,'&ograve;'); // 242 F2
  texte = texte.replace(/ó/g,'&oacute;'); // 243 F3
  texte = texte.replace(/ô/g,'&ocirc;'); // 244 F4
  texte = texte.replace(/õ/g,'&otilde;'); // 245 F5
  texte = texte.replace(/ö/g,'&ouml;'); // 246 F6
  texte = texte.replace(/÷/g,'&divide;'); // 247 F7
  texte = texte.replace(/ø/g,'&oslash;'); // 248 F8
  texte = texte.replace(/ù/g,'&ugrave;'); // 249 F9
  texte = texte.replace(/ú/g,'&uacute;'); // 250 FA
  texte = texte.replace(/û/g,'&ucirc;'); // 251 FB
  texte = texte.replace(/ü/g,'&uuml;'); // 252 FC
  texte = texte.replace(/ý/g,'&yacute;'); // 253 FD
  texte = texte.replace(/þ/g,'&thorn;'); // 254 FE
  texte = texte.replace(/ÿ/g,'&yuml;'); // 255 FF
  //all encodings
  return texte;
}

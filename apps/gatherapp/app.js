if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('https://kentonishi.github.io/apps/gatherapp/worker.js').then(function() {
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

function login(provider) {
	var provider;
	if(provider=="Google"){
		provider = new firebase.auth.GoogleAuthProvider();
	}
	firebase.auth().signInWithPopup(provider).then(function(result) {
	}).catch(function(error) {
	});
}

function signOut() {
	firebase.auth().signOut().then(function() {
		location.reload(true);
	}).catch(function(error) {
	});
}

var uid = "";
var name = "";
var pic = "";
var city="";
var lat;
var long;

function pos(coord){
	lat=coord.coords.latitude;
	long=coord.coords.longitude;
	var latlng=new google.maps.LatLng(lat,long);

	new google.maps.Geocoder().geocode({'latLng' : latlng}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			if (results[0]) {
				var country = null, countryCode = null, loc = null, locAlt = null;
				var c, lc, component;
				for (var r = 0, rl = results.length; r < rl; r += 1) {
					var result = results[r];
					if (!loc && result.types[0] === 'locality') {
						for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
							component = result.address_components[c];
							if (component.types[0] === 'locality') {
								loc = component.long_name;
								break;
							}
						}
					}
					else if (!loc && !locAlt && result.types[0] === 'administrative_area_level_1') {
						for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
							component = result.address_components[c];
							if (component.types[0] === 'administrative_area_level_1') {
								locAlt = component.long_name;
								break;
							}
						}
					} else if (!country && result.types[0] === 'country') {
						country = result.address_components[0].long_name;
						countryCode = result.address_components[0].short_name;
					}
					if (loc && country) {
						break;
					}
				}
				city=(loc + ", " + countryCode);
				firebase.database().ref("users/"+uid+"/info").update({
					city:city
				});
			}
		}
	});
}

firebase.auth().onAuthStateChanged(function(me) {
	if (me) {
		firebase.database().ref("users/"+me.uid+"/info").once("value",function(shot){
			uid = me.uid;
			name = me.displayName;
			pic = me.photoURL;
			$.get("https://ipinfo.io", function(response) {
				city=response.city+", "+response.country;
				lat=parseFloat(response.loc.split(",")[0]);
				long=parseFloat(response.loc.split(",")[1]);
				city=response.city+", "+response.country;
				firebase.database().ref("users/"+uid+"/info").update({
					name:name,
					pic:pic,
					city:city
				});
			}, "jsonp");
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(pos);
			}
			action("home");
		});
	}
});

function action(act) {
    if(uid!=""){
        if (act == "menu") {
		menu();
        } else if (act == "add") {
        } else if (act == "home") {
            feed();
        }
    }
}

function menu(){
	clear();
	write(name,[{html:"<img src='"+pic+"' class='pic'></img>"}],[{href:"signOut();",text:"Sign Out"}]);
}

function clear(e){
    document.querySelectorAll(".body")[0].innerHTML="";
} 

function feed(){
    clear();
    write("Welcome!",[{text:"Welcome to GatherApp, "+name+"!"}]);
}


function reverse(snapshot) {
  let reversed = [];
  snapshot.forEach(child => {
    reversed.unshift(child);
  });
  return reversed;
}

function write(title,contents,links,href){
	try{
		var body="";
		contents=contents||[];
		links=links||[];
		if(href!=null){
			body+="<div class='card' href='javascript:"+href+"'>";
		}else{
			body+="<div class='card'>";
		}
		body+="<span style='font-size:5.5vh;'>";
		body+="<strong>";
		body+=encode(title);
		body+="</strong>";
		body+="</span>";
		body+="<br />";
		if(contents!=null){
			for(var i=0;i<contents.length;i++){
				if(contents[i].html!=null){
					body+=contents[i].html;
				}else if(contents[i].text!=null){
					body+="<span style='font-size:4vh'>";
					body+=encode(contents[i].text);
					body+="</span>";
				}
				body+="<br />";
			}
		}
		if(links!=null){
			for(var i=0;i<links.length;i++){
				if(links[i].href!=null&&links[i].text!=null){
					body+="<span style='font-size:4vh'>";
					body+="<a href='"+links[i].href+"'>";
					body+=encode(links[i].text);
					body+="</a>";
					body+="</span>";
				}
				body+="<br />";
			}
		}
		body+="</div>";
		document.querySelectorAll(".body")[0].innerHTML+=body;
	}catch(TypeError){
		write("Corrupted Card",{text:"The data on this card is corrupted."});
	}
}

function encode(e){
	return e.replace(/[^]/g,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/&amp;quot;/g,'"');
}

function decode(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

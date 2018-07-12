/*
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      "$uid": {
        "info": {
          ".read": "auth.uid===$uid",
          ".write": "auth.uid===$uid"
        },
        "groups": {
          ".read": "auth.uid===$uid",
          ".write": "auth.uid===$uid"
        },
        "feed": {
          ".read": "auth.uid===$uid",
          ".write": "auth.uid===$uid||(newData.val()!==null&&!data.exists())"
        }
      }
    },
    "groups": {
      ".read": true,
      ".write": false,
      ".indexOn": [
        "info/search"
      ],
      "$id": {
        ".write": "(!root.child('groups/'+$id+'/members').exists()&&newData.val()===null)||newData.val()!=null",
        "feed": {
          ".read": true,
          ".write": "root.child('groups/$id/members/uid').val()!==null"
        },
      	"info": {
          ".read": true,
          ".write": "root.child('groups/$id/members/uid').val()!==null"
        },
        "members": {
          "$uid": {
            ".read": true,
            ".write": "$uid===auth.uid"
          }
        }
      }
    }
  }
}
*/

var config = {
	apiKey: "AIzaSyDpWZcmNnF0rmmYJOLgI0-cZJMIvvHngsY",
	authDomain: "gatherapp-1906b.firebaseapp.com",
	databaseURL: "https://gatherapp-1906b.firebaseio.com",
	projectId: "gatherapp-1906b",
	storageBucket: "gatherapp-1906b.appspot.com",
	messagingSenderId: "1038044491990"
};
firebase.initializeApp(config);

var uid = "";
var name = "";
var pic = "";
var city="";
var lat;
var lng;
var worker;
//var token="";
//var access="";

function menu(){
	clear();
	write(name,[{html:"<img src='"+pic+"' class='pic'></img>"},{text:"Standard User"}],[{href:"signOut();",text:"Sign Out"}]);
}

function feed(){
	clear();
	firebase.database().ref("users/"+uid+"/feed").once("value",function(notifications){
		write("Clear Feed",null,null,"clearFeed();");
		if(notifications.val()==null){
			write("Welcome!",[{text:"Welcome to GatherApp, "+name+"!"}]);
		}
		notifications.forEach(function(notification){
			write(notification.val().title,[{text:notification.val().content}]);
		});
	});
}

function clearFeed(){
	firebase.database().ref("users/"+uid+"/feed").remove().then(function(){
		feed();
	});
}

function sendFeed(path,title,content){
	firebase.database().ref(path+"/feed").push().update({
		title:title,
		content:content
	});
}

function start(){
	clear();
	write("New Group",null,null,"newGroup();");
	write("Find Groups",null,null,"findGroups();");
	write("My Groups",null,null,"myGroups();");
}

function findGroups(){
	clear();
	write("Search Groups",[{text:"Search groups by query."}],null,"searchGroups();");
	write("Near Me",[{text:"Current Location:"},{text:city}],null,"byCity();");
	write("Join Group",[{text:"Join a group by code."}],null,"byCode();");
}

function searchGroups(){
	var query=prompt("Search Query:");
	if(query!=null&&query.replace(/ /g,"")!=""){
		clear();
		write("Loading...");//,[{html:"<img src='/apps/gatherapp/loading.gif' class='pic'></img>"}]);
		firebase.database().ref("groups").orderByChild("info/search").startAt(query.replace(/ /g,"").toLowerCase()).endAt(query.replace(/ /g,"").toLowerCase()+"\uf8ff").limitToFirst(100).once("value",function(results){
			clear();
			if(results.val()==null){
				write("No Results",[{text:"There were no relevant results."}]);
			}
			reverse(results).forEach(function(group){
				var memberCount=Object.keys(group.val().members).length;
				write(group.val().info.title,[{text:memberCount+" members"}],null,"loadGroup('"+group.key+"');");
			});
		});
	}
}

function myGroups(){
	clear();
	write("Loading...");//,[{html:"<img src='/apps/gatherapp/loading.gif' class='pic'></img>"}]);
	firebase.database().ref("users/"+uid+"/groups").once("value",function(groups){
		clear();
		if(groups.val()==null){
			write("No Groups",[{text:"You have not joined any groups."}]);
		}
		groups.forEach(function(item){
			firebase.database().ref("groups/"+item.key).once("value",function(group){
				write(group.val().info.title,[{text:Object.keys(group.val().members).length.toString()+" members"}],null,"loadGroup('"+group.key+"');");
			});
		});
	});
}

function loadGroup(id){
	clear();
	firebase.database().ref("groups/"+id).once("value",function(group){
		var memberCount=Object.keys(group.val().members).length;
		var status=[{text:"Join Group",href:"joinGroup('"+group.key+"');"}];
		if(group.val().members[uid]!=null){
			status=[{text:"Leave Group",href:"leaveGroup('"+group.key+"');"}];
		}
		write(group.val().info.title,[{text:memberCount+" members"}],status);
	});
}

function joinGroup(id){
	firebase.database().ref("groups/"+id+"/members").update({
		[uid]:Date.now()
	}).then(function(){
		firebase.database().ref("users/"+uid+"/groups/").update({
			[id]:0
		}).then(function(){
			loadGroup(id);
		});
	});
}

function leaveGroup(id){
	firebase.database().ref("groups/"+id+"/members").update({
		[uid]:null
	}).then(function(members){
		if(members==null){
			firebase.database().ref("groups/"+id).remove();
		}
		firebase.database().ref("users/"+uid+"/groups/"+id).remove().then(function(){
			start();
		});
	});
}

function newGroup(){
	var title=prompt("Group Name:");
	if(title!=null&&title.replace(/ /g,"")!=""){
		var id=firebase.database().ref("groups").push().key;
		firebase.database().ref("groups/"+id).update({
			info:{
				search:title.toLowerCase().replace(/ /g,""),
				title:title
			}
		}).then(function(){
			joinGroup(id);
		});
	}
}

/*Processing functions*/

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/apps/gatherapp/worker.js').then(function(reg){
		firebase.messaging().useServiceWorker(reg);
		worker=reg;
	});
}

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

function pos(coord){
	lat=coord.coords.latitude;
	lng=coord.coords.longitude;
	var latlng=new google.maps.LatLng(lat,lng);

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
			if(worker!=null){
				worker.active.postMessage(uid);
			}
			name = me.displayName;
			pic = me.photoURL;
			me.getIdToken().then(function(userToken) {
//				access=userToken;
			});
			$.get("https://ipinfo.io", function(response) {
				city=response.city+", "+response.country;
				lat=parseFloat(response.loc.split(",")[0]);
				lng=parseFloat(response.loc.split(",")[1]);
				city=response.city+", "+response.country;
				firebase.database().ref("users/"+uid+"/info").update({
					name:name,
					search:name.toLowerCase().replace(/ /g,""),
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
		start();
        } else if (act == "home") {
		feed();
        }
    }
}

function clear(e){
    document.querySelectorAll(".body")[0].innerHTML="";
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
		var body='';
		contents=contents||[];
		links=links||[];
		if(href!=null){
			body+='<div class="card" onclick="'+href+'">';
		}else{
			body+='<div class="card">';
		}
		body+='<span style="font-size:5.5vh;">';
		body+='<strong>';
		body+=encode(title);
		body+='</strong>';
		body+='</span>';
		body+='<br />';
		for(var i=0;i<contents.length;i++){
			if(contents[i].html!=null){
				body+=contents[i].html;
			}else if(contents[i].text!=null){
				body+='<span style="font-size:4vh">';
				body+=encode(contents[i].text);
				body+='</span>';
			}
			body+='<br />';
		}
		for(var i=0;i<links.length;i++){
			if(links[i].href!=null&&links[i].text!=null){
				body+='<span style="font-size:4vh">';
				body+='<a href="#" onclick="'+links[i].href+';return false;">';
				body+=encode(links[i].text);
				body+='</a>';
				body+='</span>';
			}
			body+='<br />';
		}
		body+='</div>';
		document.querySelectorAll('.body')[0].innerHTML=body+document.querySelectorAll('.body')[0].innerHTML;
	}catch(TypeError){
		write('Error',[{text:'GatherApp encountered an error.'}]);
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

window.onerror = function (message, file, line, col, error) {
	clear();
	write();
};

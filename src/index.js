console.log("Kento Nishi on GitHub. "+document.domain);
if(window.location.hash.indexOf("404")!=-1){error(404)}
else if(window.location.hash.indexOf("webos")!=-1){dir("projects/webos", "WebOS", "<a href='/projects/webos/run'>Run Demo</a>")}
else if(window.location.hash.indexOf("src")!=-1){dir("src", "Source Repository", "<a href='https://github.com/KentoNishi/kentonishi.github.io'>View Source</a>")}
else if(window.location.hash.indexOf("projects")!=-1){
  var proj=["WebOS", "/projects/webos"];
  var projects="";
  for(var i=0;i<proj.length/2;i++){projects+="<a href='"+proj[i+1]+"'>"+proj[i]+"</a><br />"}
  projects+="<a href='https://github.com/KentoNishi/kentonishi.github.io/tree/master/projects'>All Projects</a>";
  dir("projects", "Projects", projects);
}
function dir(name, dir, desc){
  document.querySelectorAll(".name")[0].innerHTML=dir;
  document.querySelectorAll(".path")[0].innerHTML=desc;
  history.pushState("", window.location.pathname.substr(1)+" - "+document.title, "/"+name.toLowerCase());
}
function error(code){
  document.querySelectorAll(".name")[0].innerHTML="Error "+code.toString();
  path=window.location.pathname;
  document.querySelectorAll(".path")[0].innerHTML='Could not find "'+path.substr(1)+'".';
  history.pushState("", "404 - "+window.location.pathname.substr(1)+" - "+document.title, "/");
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

function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

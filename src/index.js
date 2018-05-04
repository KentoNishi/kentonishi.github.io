console.log("Kento Nishi on GitHub. "+document.domain);
if(window.location.hash.indexOf("404")!=-1){error(404)}
else if(window.location.hash.indexOf("webos")!=-1){dir("projects/webos", "WebOS", "<a href='/projects/webos/run'>Run Demo</a>")}
else if(window.location.hash.indexOf("src")!=-1){dir("src", "Source Repository", "<a href='https://github.com/KentoNishi/kentonishi.github.io'>View Source</a>")}
else if(window.location.hash.indexOf("projects")!=-1){
  var proj=;//["WebOS", "/projects/webos"];
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
//fullscreen api
function isFullScreen()
{
    return (document.fullScreenElement && document.fullScreenElement !== null)
         || document.mozFullScreen
         || document.webkitIsFullScreen;
}


function requestFullScreen(element)
{
    if (element.requestFullscreen)
        element.requestFullscreen();
    else if (element.msRequestFullscreen)
        element.msRequestFullscreen();
    else if (element.mozRequestFullScreen)
        element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
}

function exitFullScreen()
{
    if (document.exitFullscreen)
        document.exitFullscreen();
    else if (document.msExitFullscreen)
        document.msExitFullscreen();
    else if (document.mozCancelFullScreen)
        document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen)
        document.webkitExitFullscreen();
}

function toggleFullScreen(element)
{
  /*
    if (isFullScreen())
        if(mode!=true){
          exitFullScreen();
        }
    else
        requestFullScreen(element || document.documentElement);
    */
  requestFullScreen(element || document.documentElement);
}
function getDomain(url) {
    var dom = "", v, step = 0;
    for(var i=0,l=url.length; i<l; i++) {
        v = url[i]; if(step == 0) {
            //First, skip 0 to 5 characters ending in ':' (ex: 'https://')
            if(i > 5) { i=-1; step=1; } else if(v == ':') { i+=2; step=1; }
        } else if(step == 1) {
            //Skip 0 or 4 characters 'www.'
            //(Note: Doesn't work with www.com, but that domain isn't claimed anyway.)
            if(v == 'w' && url[i+1] == 'w' && url[i+2] == 'w' && url[i+3] == '.') i+=4;
            dom+=url[i]; step=2;
        } else if(step == 2) {
            //Stop at subpages, queries, and hashes.
            if(v == '/' || v == '?' || v == '#') break; dom += v;
        }
    }
    return dom;
}

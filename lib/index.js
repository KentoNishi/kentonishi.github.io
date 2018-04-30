console.log("Kento Nishi on GitHub. "+document.domain);
if(window.location.hash.indexOf("404")!=-1){error(404)}
else if(window.location.hash.indexOf("WebOS")!=-1){dir("WebOS", "Kento Nishi")};
else if(window.location.hash.indexOf("lib")!=-1){dir("Source Library", "<a href='https://github.com/KentoNishi/kentonishi.github.io'>View Library</a>")};
function dir(dir, desc){
  document.querySelectorAll(".name")[0].innerHTML=dir;
  document.querySelectorAll(".path")[0].innerHTML=desc;
  history.pushState("", window.location.pathname.substr(1)+" - "+document.title, "/"+dir.toLowerCase());
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

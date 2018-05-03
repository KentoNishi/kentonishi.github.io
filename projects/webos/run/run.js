window.onload=function(){
    document.querySelectorAll(".gesturearea")[0].scrollTo(0, 0);
document.querySelectorAll(".gesturearea")[0].onscroll = function(ev) {
    if ((document.querySelectorAll(".gesturearea")[0].innerHeight + document.querySelectorAll(".gesturearea")[0].scrollY) >= document.querySelectorAll(".gesturearea")[0].offsetHeight) {
        // you're at the bottom of the page
        alert("home");
    }
};
    /*
var node = document.getElementsByClassName("home")[0];
var longpress = false;
var presstimer = null;
var longtarget = null;

var cancel = function(e) {
    if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
    }
    
    this.classList.remove("longpress");
};
var clickCount=0;
var click = function(e) {
    if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
    }
    
    this.classList.remove("longpress");
    
    if (longpress) {
        return false;
    }
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function() {
            clickCount = 0;
            action("home");
        }, 250);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        clickCount = 0;
        action("apps");
    }
};

var start = function(e) {
   // console.log(e);
    
    if (e.type === "click" && e.button !== 0) {
        return;
    }
    
    longpress = false;
    
    this.classList.add("longpress");
    
    presstimer = setTimeout(function() {
        action("back");
        longpress = true;
    }, 250);
    
    return false;
};

node.addEventListener("mousedown", start);
node.addEventListener("touchstart", start);
node.addEventListener("click", click);
node.addEventListener("mouseout", cancel);
node.addEventListener("touchend", cancel);
node.addEventListener("touchleave", cancel);
node.addEventListener("touchcancel", cancel);
}

function action(action){
    console.log(action);
    */
}

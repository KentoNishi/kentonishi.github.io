window.onload=function(){
document.querySelectorAll('.gesturearea')[0].scrollTop=(2);
jQuery(function($) {
    $('.gesturearea').on('scroll', function() {
        if($(this).scrollTop() + $(this).innerHeight()>= $(this)[0].scrollHeight) {
//            document.querySelectorAll('.gesturecontainer')[0].scrollIntoView();
            action("home");
        }
    })
});
var el = $('.gesturearea');
el.on('scroll', function(){
    if(el.scrollTop() == 0){//document.querySelectorAll('.gesturearea')[0].scrollIntoView();
        action("apps");}
});
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
    */
function action(action){
    document.querySelectorAll('.gesturearea')[0].scrollTop=(2);
    alert(action);
}
}

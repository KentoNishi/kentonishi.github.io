window.onload=function(){
$('.gesturearea').on("scroll", gesture);
$('.gesturearea').on("touchmove", gesture);
var timer = null;
document.body.onmouseup=function(){recalibrate();}; 
setTimeout(function(){document.querySelectorAll(".gesturearea")[0].scrollTop=(document.querySelectorAll(".gesturearea")[0].clientHeight/2)+document.querySelectorAll(".gesturebar")[0].clientHeight/2}, 1);
}
function recalibrate(){

    setTimeout(function(){document.querySelectorAll(".gesturearea")[0].scrollTop=(document.querySelectorAll(".gesturearea")[0].clientHeight/2)+document.querySelectorAll(".gesturebar")[0].clientHeight/2}, 1);

}    
    //setTimeout(function(){document.querySelectorAll(".gesturearea")[0].scrollTop=(document.querySelectorAll(".gesturearea")[0].clientHeight/2)+document.querySelectorAll(".gesturebar")[0].clientHeight/2}, 1);

function gesture(){
    if(timer !== null) {
            clearTimeout(timer);        
        }
        timer = setTimeout(function() {
              recalibrate();
        }, 150);
    if(document.querySelectorAll(".gesturearea")[0].scrollTop+1<(document.querySelectorAll(".gesturearea")[0].clientHeight/2)+document.querySelectorAll(".gesturebar")[0].clientHeight/2){
        action("apps");
    }
    else if(document.querySelectorAll(".gesturearea")[0].scrollTop-1>(document.querySelectorAll(".gesturearea")[0].clientHeight/2)+document.querySelectorAll(".gesturebar")[0].clientHeight/2){
        action("home");
    }
}
function action(action){
    document.getElementById("action").innerHTML=(action);
}

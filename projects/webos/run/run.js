window.onload=function(){
$('.gesturearea').on("scroll", gesture);
$('.gesturearea').on("touchmove", gesture);
document.body.onmouseup=function(){recalibrate();};
recalibrate();
}
function recalibrate(){
setTimeout(function(){document.querySelectorAll(".gesturearea")[0].scrollTop=(document.querySelectorAll(".gesturearea")[0].clientHeight/2)+document.querySelectorAll(".gesturebar")[0].clientHeight/2}, 1);
}
function gesture(){
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

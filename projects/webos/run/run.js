window.onload=function(){
$('.gesturearea').on("scroll", gesture);
$('.gesturearea').on("touchmove", gesture);
document.querySelectorAll(".gesturearea")[0].scrollTop=(document.querySelectorAll(".gesturearea")[0].clientHeight/2)+document.querySelectorAll(".gesturebar")[0].clientHeight/2;

}
function gesture(){
    if(document.querySelectorAll(".gesturearea")[0].scrollTop==0){
        action("apps");
    }
    else if(document.querySelectorAll(".gesturearea")[0].scrollTop-document.querySelectorAll(".gesturearea")[0].clientHeight==document.querySelectorAll(".gesturescroller")[0].clientHeight){
        action("home");
    }
    else{
        document.querySelectorAll(".gesturearea")[0].scrollTop=(document.querySelectorAll(".gesturearea")[0].clientHeight/2)+document.querySelectorAll(".gesturebar")[0].clientHeight/2;
    }
}
function action(action){
    document.querySelectorAll(".gesturearea")[0].scrollTop=(document.querySelectorAll(".gesturearea")[0].clientHeight/2)+document.querySelectorAll(".gesturebar")[0].clientHeight/2;
    document.getElementById("action").innerHTML=(action);
}

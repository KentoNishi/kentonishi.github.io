window.onload=function(){
$('.gesturearea').on("scroll", gesture);
$('.gesturearea').on("touchmove", gesture);
}
function gesture(){
    if(document.querySelectorAll(".gesturearea")[0].scrollTop==0){
        action("apps");
    }
    else if(document.querySelectorAll(".gesturearea")[0].scrollTop-document.querySelectorAll(".gesturearea")[0].clientHeight==document.querySelectorAll(".gesturescroller")[0].clientHeight){
        action("home");
    }
    
}
function action(action){
    document.getElementById("action").innerHTML=(action);
}

window.onload=function(){
$('.gesturearea').on("scroll", gesture);
$('.gesturearea').on("touchmove", gesture);
}
function gesture(){
    if(document.querySelectorAll('.gesturearea')[0].scrollTop==0){
        action("apps");
       }else if(document.querySelectorAll('.gesturearea')[0].scrollTop>1){
           action("home");
       }
}
function action(action){
    document.getElementById("action").innerHTML=(action);
    document.querySelectorAll('.gesturearea')[0].scrollTop=1;
}

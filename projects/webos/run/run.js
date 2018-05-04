window.onload=function(){
function action(action){
    console.log(action);
}
$('.gesturearea')[0].on("scroll", gesture);
$('.gesturearea')[0].on("touchmove", gesture);
}
function gesture(){
    if(document.querySelectorAll('.gesturearea')[0].scrollTop<1){
        action("apps");
       }else{
           action("home");
       }
}

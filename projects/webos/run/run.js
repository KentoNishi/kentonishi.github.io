window.onload=function(){
$('.gesturearea').on("scroll", gesture);
$('.gesturearea').on("touchmove", gesture);
}
function gesture(){
    if(document.querySelectorAll('.gesturearea')[0].scrollTop<1){
        action("apps");
       }else{
           action("home");
       }
}
function action(action){
    console.log(action);
}

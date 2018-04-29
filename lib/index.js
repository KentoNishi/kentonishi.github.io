console.log("Kento Nishi on GitHub");
function error(code){
  document.querySelectorAll(".code")[0].innerHTML="Error "+code.toString();
  document.querySelectorAll(".path")[0].innerHTML='An error occured at "'+window.location.pathname.substr(1)+'".';
}

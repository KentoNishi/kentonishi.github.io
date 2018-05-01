document.querySelectorAll("taskbar")[0].addEventListener("scroll", function(event) {
  
    var top = this.scrollY,
        left = this.scrollX;
    console.log(top+" - "+left);
  
}, false);

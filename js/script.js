//alert("Connection Establised");

function openNav() {
    document.getElementById("myNav").style.width = "100%";

  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

document.getElementsByClassName("banner")[0].addEventListener("click" ,
 
  function(){
    var size = window.pageYOffset;
    var banner = document.getElementsByClassName("banner")[0];
        console.log(banner.offsetHeight);
    console.log("Hello")
  } );
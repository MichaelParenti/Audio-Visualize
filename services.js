//Declarations
var header = document.querySelector('header');
var header_img = document.getElementById("logo");

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
    // Navigation Animation
    setInterval (() => {
        if(window.scrollY > 50){
            header_img.style.height = '50px';
            header_img.style.width = 'auto';
            header.style.height = '53px';

        } else {
            header_img.style.height = '60px';
            header_img.style.width = 'auto'; 
            header.style.height = '62px';
        }
    }, 1);

    //Navigation Hamburger Menu
    function toggleNav() {
        var nav = document.querySelector('nav');
        nav.classList.toggle('active');
      }
  


"use strict"; // JavaScript  in strict mode



// Mobile navigation
(function(){

    let menuButton = document.getElementById("menu");

    menuButton.addEventListener("click", toggleMenu);

    let toggle = false; // hidden at first
    function toggleMenu(){
        if (toggle){ // true: it's visible
            navMenu.classList.remove("show-menu"), // hide it
                toggle = false
        }
        else { // false: it's hidden
            navMenu.classList.add("show-menu"), // show it
                toggle = true
        }
    }
})();

function openNav() {

    // Get screen width to size the navigation bar
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (width >= 500 ) {
        document.getElementById("nav-menu").style.width = "40%";
        document.getElementById("overlay").style.display = 'block'
    }
    else {
        document.getElementById("nav-menu").style.width = "80%";
        document.getElementById("overlay").style.display = 'block'
    }
}

function closeNav() {
    document.getElementById("nav-menu").style.width = "0";
    document.getElementById("overlay").style.display = 'none'
}
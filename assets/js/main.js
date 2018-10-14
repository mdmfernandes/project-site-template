(function() {
    "use strict";

    const navScroll = 60;   // Toggle nav color at this y offset    

    let mainNav = document.getElementById('mainNav');
    let pageHeader = document.getElementById('pageHeader');
    let sideBar = document.getElementById('sideBar');
    let toc = document.getElementById('tocToggler');
    let topBtn = document.getElementById("topBtn");

    let navScrolled = false;
    
    function changeNavbarColor() {
        if (window.scrollY < navScroll) {
           mainNav.classList.add('nav-no-scrolled');
        } else {
            mainNav.classList.remove('nav-no-scrolled');
        }
    }

    function changeSidebarPos() {
        if (window.scrollY > (pageHeader.offsetHeight - mainNav.offsetHeight)) {
            sideBar.classList.add('fixed');
        } else {
            sideBar.classList.remove('fixed');
        }
    }

    function showTOCSideBar() {
        let sideBarContent = document.getElementById('sidebarContent');

        sideBarContent.innerHTML = toc.innerHTML;
    }

    function scrollFunction() {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }
    
    // Events
    window.onscroll = () => {
        changeNavbarColor();
        if (sideBar) {
            changeSidebarPos();
        }
        scrollFunction();
    }

    window.onload = () => {
        changeNavbarColor();
        if (toc) {
            showTOCSideBar();
        }
    }
}());

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

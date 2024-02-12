'use strict'

let searchButton = document.querySelector('.search-button button');
let searchArea = document.querySelector('.search-area');
let closeButton = document.querySelector('.search-area i');
let filteredProductsForSearchArea = document.querySelector('.search-area .filtered-products');
let body = document.querySelector('body')

searchButton.addEventListener("click", function () {
    searchArea.classList.add('active-search-area');
    body.style.overflow = "hidden"
})

closeButton.addEventListener('click', function () {
    searchArea.classList.remove('active-search-area')
})

document.body.addEventListener("keyup", function (e) {
    if (e.key == "Escape") {
        if (searchArea.classList.contains('active-search-area')) {
            searchArea.classList.remove('active-search-area');
        }
    }
    if (e.key == "Enter") {
        filteredProductsForSearchArea.classList.remove('de-active-filtered-products');
    }
})


let currentPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
let navLinks = document.querySelectorAll("header ul li a");
let dropdownNavLinks = document.querySelectorAll('.menu ul li a')
for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].getAttribute("href") == currentPage) {
        navLinks[i].classList.add('active-nav')
        break;
    }
   
}
// idlerle islemelidi backendde bax !!!
for (let j = 0; j < dropdownNavLinks.length; j++) {
    if (dropdownNavLinks[j].getAttribute("href") == currentPage) {
        dropdownNavLinks[j].classList.add('active-nav')
        break;
    }
}

// burger menu
let burgerMenu = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu-side');
let openSubmenues = document.querySelectorAll(".open-submenu");
let overlay = document.querySelector('.overlay');
let secondLine = document.querySelector('.burger-menu .second-line')

burgerMenu.addEventListener("click", function () {
    menu.classList.toggle("active-menu");
    overlay.style.display = "block";
    secondLine.classList.toggle("active-line")
    body.style.overflow = "hidden"
})

overlay.addEventListener("click", function () {
    menu.classList.remove("active-menu");
    overlay.style.display = "none";
    secondLine.classList.remove("active-line")
    body.style.overflow = "visible"
})

for (let i = 0; i < openSubmenues.length; i++) {
    openSubmenues[i].addEventListener("click", function () {
        let submenu = this.parentElement.nextElementSibling;
        submenu.classList.toggle("d-none");
    })
}


// scroll to top button
let scrollToTop = document.getElementById('scroll-to-top')
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 400) {
        scrollToTop.style.opacity = '1';
        scrollToTop.style.visibility = 'visible';
    } else {
        scrollToTop.style.opacity = '0';
        scrollToTop.style.visibility = 'hidden';
    }
});

scrollToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

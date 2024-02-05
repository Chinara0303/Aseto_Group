'use strict'

let searchButton = document.querySelector('.search-button button');
let searchArea = document.querySelector('.search-area');
let closeButton = document.querySelector('.search-area i');

searchButton.addEventListener("click", function () {
    searchArea.classList.add('active-search-area');
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
})

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
})

overlay.addEventListener("click", function () {
    menu.classList.toggle("active-menu");
    overlay.style.display = "none";
    secondLine.classList.remove("active-line")

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

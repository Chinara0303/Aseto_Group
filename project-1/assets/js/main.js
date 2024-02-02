$(function () {
    $('.slider-area').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.products-area').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    //modal
    $(document).on("click", ".learn-more-area", function (e) {
        e.preventDefault()
        $(".product-modal").removeClass("d-none");
        $("body").css("overflow", "hidden");
        $(".fixed-modal").css("display", "block");
        $(".fixed-modal").removeClass("d-none");
        $(".overlay").css("display", "block");

    })

    $(document).on("click", ".close-icon", function () {
        $(".product-modal").removeClass("d-none");
        $("body").css("overflow", "unset");
        $(".fixed-modal").css("display", "none");
        $(".overlay").css("display", "none");
        $(".menu-side").removeClass("active-menu")
    })
})


// tab menu
var tabMenus = document.querySelectorAll(".tab-menu-heading");
var contents = document.querySelectorAll("#our-products .content");

for (var tabMenu of tabMenus) {
    tabMenu.addEventListener("click", function () {
        let index = this.getAttribute("data-index");
        document.querySelector(".tab-menu .active").classList.remove("active");
        this.classList.add("active");

        for (let content of contents) {
            content.classList.add("d-none");
            if (content.getAttribute("data-index") === index) {
                content.classList.remove("d-none");
            }
        }
    });
}




//swiper slider for products
const swiper = new Swiper('.swiper', {
    grabCursor: true,
    effect: "creative",
    // autoplay: {
    //     delay: 2000,
    //   },
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
        },
        next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
        },
    },
});
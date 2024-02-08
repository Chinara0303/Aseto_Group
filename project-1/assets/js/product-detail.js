$('.img-slider-area').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

    
    
});

$('.products-area').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                autoplay:true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay:true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay:true,
                autoplaySpeed: 2000,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// set container content text
let btnContents = document.querySelectorAll('.area.contents .content');
let containerContent = document.querySelector('.area .container-content');
for (let i = 0; i < btnContents.length; i++) {
    btnContents[i].addEventListener("click", function () {
        let content = this.children[0].innerText;
        containerContent.innerText = content
    })
}

// set image src
let images = document.querySelectorAll(".img-slider-area img");
let image = document.querySelector(".img-area img");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        let src = this.getAttribute("src");
        image.setAttribute("src", src)
    })
}

// zoom
let modalArea = document.querySelector('.zoom-modal-area img');
let zoomIcon = document.querySelector('.zoom');
let fixedZoomModal = document.querySelector(".fixed-zoom-modal");
let closeIcon = document.querySelector(".zoom-modal .close-icon");
let body = document.querySelector("body");
zoomIcon.addEventListener("click", function () {
    let src = this.previousElementSibling.getAttribute("src");
    modalArea.setAttribute('src', src);
    fixedZoomModal.classList.remove("d-none");
    body.style.overflow = "hidden"
})

closeIcon.addEventListener("click", function () {
    fixedZoomModal.classList.add("d-none")
    body.style.overflow = "initial"
})

fixedZoomModal.addEventListener("click", function () {
    fixedZoomModal.classList.add("d-none");
    body.style.overflow = "initial"
})

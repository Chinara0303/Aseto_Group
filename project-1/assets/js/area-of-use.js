let select1 = document.getElementById("select1");
let select2 = document.getElementById("select2");
let select3 = document.getElementById("select3");
let filteredProducts = document.querySelector('.filtered-products');
let selectionArea = document.querySelector('.selection-area');

select1.addEventListener("change", function () {
    if (select1.value !== '') {
        select2.disabled = false;
    }
});

select2.addEventListener("change", function () {
    if (select2.value !== '') {
        select3.disabled = false;
    }
});

select3.addEventListener("change", function () {
    if(select3.value !== ''){
        selectionArea.classList.add('active-height')
        filteredProducts.classList.remove('de-active-filtered-products')
    }
});


$('.recommend-products').slick({
    dots: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    infinite:true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
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

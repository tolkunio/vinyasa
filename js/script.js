document.addEventListener('DOMContentLoaded', function () {
    //banner
    const swiperBanner = new Swiper('.swiper-banner', {
        speed: 700,
        spaceBetween: 0,
        navigation:{
            prevEl:'.swiper-banner .swiper-button-prev',
            nextEl:'.swiper-banner .swiper-button-next'
        },
        pagination:{
            el:'.swiper-banner .swiper-pagination',
            clickable: true
        }
    });


    //gallery START
    // init Masonry
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        // use element for option
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter:20,
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });

    //gallery END
}, false);


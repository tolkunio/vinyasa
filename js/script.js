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

    $('.magnific-image-popup').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 500, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    //gallery END
}, false);


const swiperSettings = {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    mousewheel: {
        invert: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    autoplay: {
        delay: 5000,
    },


    speed: 3000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    // freeMode: true,

    // pauseOnMouseEnter: true,
    //
    // enabled: true
}

const swiper = new Swiper('.swiper', swiperSettings);
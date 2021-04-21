// mobile menu
document.getElementById('mobile-menu-trigger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('navigation').classList.toggle('active');
});

// reviews swiper

const swiper = new Swiper('.reviews-swiper', {
    // by default .swiper-container, bet dedu saco klase, kad galeciau pernaudoti
    slidesPerView: 1,
    // slidesPerGroup: 3,
    // spaceBetween: 120,
    // neveikia kai nurodom margin ant elementu

    autoHeight: true,

    breakpoints: {
        // kai langas yra daugiau nei 600px
        600: {
            slidesPerView: 2,
        },
        // kai langas daugiau nei 1000px
        1000: {
            slidesPerView: 3,
        }
    },

    // autoplay: {
    //     delay: 3000,
    // },

    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});
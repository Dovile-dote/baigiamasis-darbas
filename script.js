// mobile menu
document.getElementById('mobile-menu-trigger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('navigation').classList.toggle('active');
});

// tab navigation 

let tabNavigationBlocks = document.querySelectorAll('.tab-section nav ul li');
let tabContentBlocks = document.querySelectorAll('.tab-section .tab-content')

function removeActiveNavigation() {
    for (let tab of tabNavigationBlocks) {
        tab.classList.remove('active');
    }
}

function removeActiveTabs() {
    for (let tab of tabContentBlocks) {
        tab.classList.remove('active');
    }
}

for (let tab of tabNavigationBlocks) {
    tab.addEventListener('click', function () {

        removeActiveNavigation();
        removeActiveTabs();

        this.classList.add('active');

        let index = this.dataset.slide;

        document.querySelector('.tab-section .tab-content[data-slide="' + index + '"]').classList.add('active');

        // swiper.slideTo(index - 1);
        // su situo reguliuojasi apatinis swiperis. reiktu nauja pasikurt
    })
}

// reviews swiper

const swiper = new Swiper('.reviews-swiper', {
    // by default .swiper-container, bet dedu savo klase, kad galeciau pernaudoti
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
// mobile menu
document.getElementById('mobile-menu-trigger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('navigation').classList.toggle('active');
});

document.getElementById('ul').addEventListener('click', function () {
    document.getElementById('navigation').classList.toggle('active');
    document.getElementById('mobile-menu-trigger').classList.toggle('active');
});

// form

let sendButton = document.getElementById('send');
let firstName = document.getElementById('first_name');
let lastName = document.getElementById('last_name');
let phoneNumber = document.getElementById('phone_number');
let radioMonthly = document.getElementById('monthly');
let rezultatas = document.getElementById('first-form');


sendButton.addEventListener('click', function () {
    console.log(firstName.value);

    if (firstName.value.trim() && lastName.value.trim() && Number(phoneNumber.value) && Boolean(radioMonthly.value = true)) {
        // console.log(firstName.value);
        rezultatas.classList.add('okok');
        firstName.classList.remove('red');
        lastName.classList.remove('red');
        phoneNumber.classList.remove('red');
        radioMonthly.classList.remove('red');
    }


    else {
        console.log('wrong');
        firstName.classList.add('red');
        lastName.classList.add('red');
        phoneNumber.classList.add('red');
        radioMonthly.classList.add('.red');
        rezultatas.classList.remove('okok');
    }

    // firstName.value = '';
    // lastName.value = '';
    // phoneNumber.value = '';
});

// tab navigation 

let tabNavigationBlocks = document.querySelectorAll('.tab nav ul li');
let tabContentBlocks = document.querySelectorAll('.tab .tab-content')

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

        document.querySelector('.tab .tab-content[data-slide="' + index + '"]').classList.add('active');

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

    autoplay: {
        delay: 3000,
    },

    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});
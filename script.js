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
let radioYearly = document.getElementById('yearly');
let rezultatas = document.getElementById('first-form');
let errorMessage = document.getElementById('errorMessage');

sendButton.addEventListener('click', function () {

    if (firstName.value.trim() && lastName.value.trim() && Number(phoneNumber.value) && (radioMonthly.checked || radioYearly.checked) > 0) {

        if (radioMonthly.checked === true) {
            let subscription = "subscription monthly";
            errorMessage.classList.add('hidden');

            console.log(firstName.value + ' ' + lastName.value + ' ' + phoneNumber.value + ' ' + subscription);
            rezultatas.classList.add('okok');
        }


        else {
            let subscription = "subscription yearly"
            rezultatas.classList.add('okok');
            errorMessage.classList.add('hidden');
        }
    }

    else {
        firstName.classList.add('red');
        lastName.classList.add('red');
        phoneNumber.classList.add('red');
        radioMonthly.classList.add('red');
        errorMessage.classList.remove('hidden');
    }
});

// contact form 

let btn = document.getElementById('go');
let first = document.getElementById('first');
let last = document.getElementById('last');
let phone = document.getElementById('phone');
let personal = document.getElementById('personal');
let company = document.getElementById('company');
let error = document.getElementById('error');


btn.addEventListener('click', function () {
    if (first.value.trim() && last.value.trim() && Number(phone.value) && (personal.checked || company.checked) > 0) {

        if (personal.checked === true) {
            let subscribe = "subscription personal";
            error.classList.add('hidden');
            //     setTimeout(function () { alert("Please contact me: " + first.value + " " + last.value + ", " + phone.value + ", " + subscribe); }, 1500);
            // }
        }

        else {
            let subscribe = "subscription company"
            // rezultatas.classList.add('okok');
            error.classList.add('hidden');
        }
    }

    else {
        error.classList.remove('hidden');
    }
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
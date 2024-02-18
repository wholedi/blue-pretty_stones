const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');
})

const reviewsSlider = document.querySelector('.reviews');
if (reviewsSlider) {
    new Swiper('.reviews__swiper', {
        // Optional parameters
        loop: true,
        autoHeight: true,
        speed: 800,
        spaceBetween: 30,
        slidesPerView: 2,
        // Navigation arrows
        pagination: {
            el: '.reviews__pagination',
            clickable: true
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        breakpoints: {
            // when window width is >= 320px
            // when window width is >= 480px
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
        }
    });
}
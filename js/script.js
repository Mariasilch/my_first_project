$(document).ready(function () {
    $('.mobile-menu').on('click', function () {
        $('.menu').slideToggle();
    })

    const swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 400,
        }
    });
})



$(document).ready(function () {
    $('.mobile-menu').on('click', function () {
        $('.menu').slideToggle();
    })

    const swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 400,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            560: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            900: {
                slidesPerView: 4
            }
        },
    });
    //Tab script
    $(function() {
        var tab = $('#tabs .tabs-items > div'); 
        tab.hide().filter(':first').show(); 
        
        $('#tabs .tabs-nav a').click(function(){
            tab.hide(); 
            tab.filter(this.hash).show(); 
            $('#tabs .tabs-nav a').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
    });

    //Anchor links
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
})

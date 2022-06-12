$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 300) {
            $('.scroll_up_btn').addClass("show");
        }
        else {
            $('.scroll_up_btn').removeClass("show");
        }
    });

    // side up script
    $('.scroll_up_btn').click( () => {
        $('html').animate({scrollTop: 0})
    });

    // toggle menu / navebar script
    $('.menu_btn').click( () => {
        $('.navbar .menu').toggleClass("active");
        $('.menu_btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed( ".typing", {
        strings: ["Fresher", "Developer", "Designer", "Freelancer", "Blogger", "YouTuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed( ".typing_2", {
        strings: ["Fresher", "Developer", "Designer", "Freelancer", "Blogger", "YouTuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel ({
        margin: 20,
        loop: true,
        autoPlayTimeOut: 2000,
        autoPlayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
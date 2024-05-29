$(document).ready(() => {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-button').addClass('show');
        } else {
            $('.scroll-up-button').removeClass('show');
        }
    }
    );


    // slide up Script
    $('.scroll-up-button').click(function () {
        $('html').animate({ scrollTop: 0 });
    }
    );


    // toggle menu/navbar script
    $('.menu-btn').click(() => {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    }
    );


    // typeing animation effect
    var typed = new Typed(".typing", {
        strings: ["Developer ", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 150,
        backSpeed: 90,
        loop: true
    }
    );



    var typed = new Typed(".typing-2", {
        strings: ["Developer ", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlcarousel({
        margin: 20,
        loop: true,
        autoPlayTimeOut: 2000,
        autoPlayHoverPause: true,
        resposive: {
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
            },
        }
    });
}
);


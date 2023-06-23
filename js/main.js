$(function () {


    // 스크롤 시 헤더 
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 130) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }
    });

    // 스크롤 시 애니메이션 효과
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._sec_scroll').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        })
    })

    // 메인 슬라이드 스크롤 버튼
    $('.scroll').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st - 100 }, 600);
    })


    // 스와이퍼 메인 슬라이드
    const MainSlide = new Swiper('.main_slide', {
        loop: true,

        pagination: {
            el: ".swiper-pagination01",
            type: "fraction",
        }

    });

    $('.main_visual .arrows .left').on('click', function () {
        MainSlide.slidePrev();
    })


    $('.main_visual .arrows .right').on('click', function () {
        MainSlide.slideNext();
    })


    // 탭 섹션
    $('.screen_tab_btn').on('click', function (event) {
        event.preventDefault();
        let idx = $(this).index();
        $('.screen_tab_btn').eq(idx).addClass('on').siblings().removeClass('on');
        $('.tab_content .sub_slide').eq(idx).addClass('on').siblings().removeClass('on');

        console.log(event, event.target, event.currentTarget, $(this), $(this).index());

    });



    // 스와이퍼 탭 슬라이드
    const ProgramSlide = new Swiper('.sub_slide', {
        // loop: true,   // 슬라이드 반복 여부
        // loopAdditionalSlides: 3,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",

        },
    });

    // 스와이퍼 배너 슬라이드
    const Banner = new Swiper('.main_service .banner', {
        loop: true,   // 슬라이드 반복 여부
        loopAdditionalSlides: 3,
        slidesPerView: 'auto',
        speed: 2000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // 스와이퍼 카드 뉴스 슬라이드
    const newsSlide = new Swiper('.news_slide', {
        loop: true,
        slidesPerView: 1,
        slidesPerGroupSkip: 1,
        spaceBetween: 0,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        pagination: {
            el: ".swiper-pagination02",
            type: "fraction",
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            }

        }
    });

    // 스와이퍼 카드 뉴스 버튼
    $('.main_news .arrows_n .left').on('click', function () {
        newsSlide.slidePrev();
    })


    $('.main_news .arrows_n .right').on('click', function () {
        newsSlide.slideNext();
    })




    // 탑 스크롤 
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    })
    // 탑 스크롤 없앴다가 나타나게 만들기
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        sct > 400 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    })



});

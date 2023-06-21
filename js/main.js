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
        $('._se_').each(function () {
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


    // 스와이퍼 슬라이드
    const MainSlide = new Swiper('.main_slide', {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
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
    $('.tab_link li').on('click', function (event) {
        event.preventDefault();

        let idx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        $('.tab_content .con').eq(idx).addClass('on').siblings().removeClass('on');
        console.log(event, event.target, event.currentTarget, $(this), $(this).index());


    });



    $('.history_menu li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.history_content li').eq(idx).addClass('on').siblings().removeClass('on');
    })

    // 패밀리링크 주소 받고 창 오픈
    $('#fl').on('change', function () {
        const lnk = $(this).val();
        // console.log(lnk, '바뀌네~~~');
        //val() 이 있을 때만...
        // if (lnk) { window.open(lnk); }
        // 리액트에서 쓰는 방식
        lnk && window.open(lnk);
    });


    // 탑 스크롤 
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    })
    // 탑 스크롤 없앴다가 나타나게 만들기
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        // sct > 1000 ? $('.to_top').show() : $('.to_top').hide();
        // sct > 1000 ? $('.to_top').fadeIn(1000) : $('.to_top').fadeOut();
        sct > 1000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    })





});
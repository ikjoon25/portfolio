$(function(){
    // 모바일버튼
    $('.app-btn').on({click:function(){
            $('.bar').toggleClass('addAppBtn');
            $('.mobile-nav').slideToggle(1000);
        }
    });

    // news
    const newsBanner=$('.news-wrap .news-wraps');
    let current=0;
    let newsInterval;

    newsSlide();
    function newsSlide(){
        newsInterval=setInterval(function(){
            let prev=newsBanner.eq(current);
            newsMove(prev, 0, '-100%');
            current++;
            if(current==3){current=0}
            let next=newsBanner.eq(current);
            newsMove(next, '100%', 0);
        },2000);
    }
    function newsMove(tg, start, end){
        tg.css("top", start).stop().animate({top:end},500)
    }

    $('.news-wrap').hover(function(){
        clearInterval( newsInterval);
    },function(){
        newsSlide();
    });

    /* 버튼 */
    var bottonRadius=$('.btn li');
    var line=$('.templat-line .title li');
    bottonRadius.click(function(){
        bottonRadius.removeClass('on');
        $(this).addClass('on');
        var lines= $(this).index();
        line.removeClass('on');
        line.eq(lines).addClass('on')

    });

    //배너 슬라이드
    var slideBanner=$('.bannerArea .area'),
        slideList=$('.bannerArea .area li'),
        slideWidth=slideList.width(),
        setIntervalId;
    
    bannerSlide();
    function bannerSlide(){
        setIntervalId=setInterval(() => {
            slideBanner.stop().animate({left:-(slideWidth+15)},500, function(){
                $('.bannerArea .area li:first').insertAfter('.bannerArea .area li:last');
                slideBanner.css({left:0});
            });
        }, 2000);
    } 

    function rightBtn(){
        slideBanner.stop().animate({left:-(slideWidth+15)},500, function(){
            $('.bannerArea .area li:first').insertAfter('.bannerArea .area li:last');
            slideBanner.css({left:0});
        });
    }
    function leftBtn(){
        $('.bannerArea .area li:last').insertBefor('.bannerArea .area li:first');
        slideBanner.css({left:-(slideWidth+15)}).stop().animate({left:0},500);
    }
    
    $('.bannerLeftBtn, .bannerRightBtn, .bannerArea').on('mouseover focus', function(){
        clearInterval(setIntervalId);
    });
    $('.bannerLeftBtn, .bannerRightBtn, .bannerArea').on('mouseout leave', function(){
        bannerSlide();
    });

    $('.bannerRightBtn').click(function(){
        rightBtn();
    });
    $('.bannerLeftBtn').click(function(){
        leftBtn();
    });

    /* swiper */
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        
        slidesPerView: 2,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
        // when window width is >= 320px
        768: {
        slidesPerView: 2,
        spaceBetween: 30
        },
        // when window width is >= 480px
        960: {
        slidesPerView: 4,
        spaceBetween: 20
        },
        // when window width is >= 640px
        1200: {
        slidesPerView: 5,
        spaceBetween: 10
        },
        
    },
    autoplay: {
        delay: 5000,
      },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
      //bxslider
      $('.bxslider').bxSlider({
        auto: true,
        mode: 'fade',
        stopAutoOnClick: true,
        pager: true
      });



});
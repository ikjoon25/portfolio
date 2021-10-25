// 메뉴

var t=winW=vidW=0;

$('.appbarBt').on({click:function(){
        $('.header-menu-bar').stop().animate({left:100+'%'},500)
        $('.mobile-modal-menu').stop().animate({left: 0},500);
    }
});

$('.appbarCloseBt').on({click:function(){
    $('.header-menu-bar').stop().animate({left:0+'%'},500)
    $('.mobile-modal-menu').stop().animate({left:'-100%'},500);
}
});
$(window).resize(function(){
    windowResizeFn();
});

function windowResizeFn(){
    if($(window).innerWidth() >1090){
        if(t==0){
            $('.appbarCloseBt').trigger('click');
            t=1;
        }
    }else{
        t=0;
    }
}


/* video control */
var winH=$(window).innerHeight();
var winW=$(window).innerWidth();
var vidW=$('#mainVideo').innerWidth();
var vidH=$('#mainVideo').innerHeight();
var videoPlay='on'; //기본은 켜진(on)상태 비디오
var soundMuted='off';//기본은 꺼진(off)상태 소리

console.log(vidH)

$('#mainVideo').get(0).autoplay=true;// 호환성
$('#mainVideo').get(0).loop=0;// 비디오재생 loop=0 Once(한번)
$('#mainVideo').get(0).muted=true;// 소리끄기(true) 켜기(false)


$(window).resize(function(){
    videoResizeFn();
});
function videoResizeFn(){
    winH=$(window).innerHeight();
    winW=$(window).innerWidth();
    vidW=$('#mainVideo').innerWidth();
    vidH=$('#mainVideo').innerHeight();

    $('.section1-main-video').css({width:100+'%', height: winH});
    if(winH>vidH){//창 높이보다 비디오 높이가 작을떄
        $('#mainVideo').css({width: 'auto', height: winH });
    }
    if(winW>vidW){ //창의 너비보다 비디오 너비가 작으면
        $('#mainVideo').css({width: winW, height: 'auto' });
    }

    /* 비디오 수직 수평 가운데 정렬 */
    $('#mainVideo').css({marginTop:(winH-vidH)/2, marginLeft:(winW-vidW)/2})
}

//정지 버튼을 누르면 플레이버튼을 누르면
$('.playPauseIconBt').on('click',function(){
    if(videoPlay==='on'){
        $('#mainVideo').get(0).pause();
        videoPlay='off';
        $(this).find('img').attr('src','./img/icon-player-play.png')
    }else{
        $('#mainVideo').get(0).play();
        videoPlay='on';
        $(this).find('img').attr('src','./img/icon-player-play.png')
    }


});

//소리
$('.mutedIconBt').on({click:function(){
    if(soundMuted==='off'){
        soundMuted='on';
        $('#mainVideo').get(0).muted=false;
        $(this).find('i').attr('class','fas fa-volume-off')
    }else{
        soundMuted='off';
        $('#mainVideo').get(0).muted=false;
        $(this).find('i').attr('class','fas fa-volume-mute')
    }
}

});

//비디오 시간
let setId=setInterval(videoTimeFn,100)

function videoTimeFn(){
    //console.log('현재 진행 비디오 시간 :' + $('#mainVideo').get(0).currentTime);
    //console.log('전체 시간길이 :' + $('#mainVideo').get(0).duration);
    //console.log('비디오 정지여부 :' + $('#mainVideo').get(0).ended);

    if($('#mainVideo').get(0).ended==true){
        $('.section1-watch-again').show();

        videoPlay='off';
        $('playPauseIconBt').find('img').attr('src','./img/icon-player-play.png');
        clearInterval(setId);
    }
}

$('.watchagainBt').on('click',function(){
    $('#mainVideo').get(0).play();
    videoPlay='on';
    $('.playPauseIconBt').find('img').attr('src','./img/icon-player-play.png')
    $('.section1-watch-again').hide();
});

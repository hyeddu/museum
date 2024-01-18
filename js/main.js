/*main.js 파일입니다.*/
$(document).ready(function(){

    //메인 비주얼 swiper
    var swiper = new Swiper(".mainSlide", {
        
        loop : true ,

        autoplay : {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
      });

    //데스크탑 gnb
    let oneDepth = $('#header .gnbArea .gnb > li'),
        twoDepth = $(oneDepth).children('.twoD'),
        thrBtn = $(twoDepth).find('.thrBt'),
        gnbBg = $('#header .gnbBg');

    $(oneDepth).mouseenter(function(){
        $(twoDepth).show();
        $(gnbBg).show();
        $(this).addClass('on');

    });
    $(oneDepth).mouseleave(function(){
        $(twoDepth).hide();
        $(gnbBg).hide();
        $(this).removeClass('on');
    });
    $(thrBtn).click(function(){
        
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $(this).next().hide();
        }else{
            $(this).addClass('on');
            $(this).next().show();
        }
    });

    //모바일메뉴
    let openBt = $('.mHeader .menuBtn'),
        mMArea = $('.mMenuArea'),
        closeBt = $(mMArea).find('.closeBt'),
        gnbArea = $(mMArea).children('.gnbArea'),
        oneD = $(gnbArea).children('.oneD'),
        twoD = $(gnbArea).children('.twoD'),
        thrBt = $(twoD).children('.thrBt'),
        thrD = $(twoD).children('.thrD');
    
    openBt.click(function(){
        mMArea.animate({'left' : '0' }, 600 );
    });

    closeBt.click(function(){
        mMArea.animate({'left' : '-100%' }, 600 );
    });

    //oneD 클릭시 twoD 열리게
    oneD.click(function(){
        
        twoD.slideUp();
        oneD.removeClass('on');

        if(!$(this).next('.twoD').is(':visible')){ 
            $(this).next().slideDown();
            $(this).addClass('on');
        }
    });

    //thrBt를 클릭하면 thrD가나타나게
    $(thrBt).click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('on');
    });

    //전시영역 배경이미지 교체    
    let mCon1Li= $('.mainCon1List > li'),
        mCon1Bg = $('.mainCon1Bg > div');

    $(mCon1Li).each(function(idx){
        $(this).hover(function(){ 
            mCon1Bg.eq(idx).fadeIn(600);
        },function(){
            mCon1Bg.eq(idx).fadeOut(300);
        });
    });

    //top버튼을 클릭하면 다큐먼트 이동 애니메이션
    let topBtn = $("#wrapper .topBtn");

    topBtn.click(function(e){
        e.preventDefault();
        $('html, body').animate({'scrollTop': '0'}, 800,'easeInOutCubic');
    });

    //윈도우가 스크롤되면 헤더고정
    $(window).scroll(function(){
        let winscrollT = $(window).scrollTop(),
        mCon1T = $('.mainCon1').offset().top,
        mCon2T = $('.mainCon2').offset().top,
        mCon3T = $('.mainCon3').offset().top,
        footT = $('#footer').offset().top;


        if(winscrollT >= mCon1T && winscrollT <= mCon2T){
            //mainCon1 애니메이션
            $('.mainCon1 .mainTit').animate({'opacity':'1','top':'0'},600,'swing')
            $('.mainCon1 .mainTxt').delay(200).animate({'opacity':'1','top':'0'},600,'swing')
            $('.mainCon1 .mainCon1List').delay(400).animate({'opacity':'1','top':'0'},600,'swing')

        }else if(winscrollT >= mCon2T && winscrollT <= mCon3T){
            //mainCon2 애니메이션
            $('.mainCon2 .mainTit').animate({'opacity':'1','top':'0'},600,'swing')
            $('.mainCon2 .mainTxt').delay(200).animate({'opacity':'1','top':'0'},600,'swing')
            $('.mainCon2 .mainCon2List').delay(400).animate({'opacity':'1','top':'0'},600,'swing')

        }else if(winscrollT >= mCon3T && winscrollT <= footT){
            //mainCon3 애니메이션
            $('.mainCon3 .mainTit').animate({'opacity':'1','top':'0'},600,'swing')
            $('.mainCon3 .mainTxt').delay(200).animate({'opacity':'1','top':'0'},600,'swing')
            $('.mainCon3 .mainNews').delay(400).animate({'opacity':'1','top':'0'},600,'swing')
        }

        if(winscrollT > 100){
            $('#header').css('position','fixed');
            $('#header').addClass('on');
        }else{
            $('#header').css('position','relative');
            $('#header').removeClass('on');
        }
    });
});
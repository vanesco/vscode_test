
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
});

$(document).ready(function (){

    var deviceWidth = $(document).width();
    if (deviceWidth < 620){
        var gnbHei = $('#gnb ul li.item').height();
        $('#gnb ul li.logo').height(gnbHei);        

        $('#intro').delay(2000).animate({left: -2000},1500);
        $('.notice-sub').delay(2500).animate({height: 240},300);

        $('#gnb a').click(function (event){
            event.preventDefault();
        });

        $('.sub-close').click(function (){
            $('.bar-sub').animate({height: 0},300);
            $('#gnb ul.menu-bar li').removeClass('share-on');
            $('#gnb ul.menu-bar li').removeClass('call-on');
        });

        $('.menu-bar .call').click(function (){
            $(this).addClass('call-on');
            $('#gnb ul.menu-bar li').removeClass('share-on');
            $('.bar-sub').animate({height: 0},300);
            $('.call-sub').animate({height: 240},300);
        });

        $('.menu-bar .share').click(function (){
            $(this).addClass('share-on');
            $('#gnb ul.menu-bar li').removeClass('call-on');
            $('.bar-sub').animate({height: 0},300);
            $('.share-sub').animate({height: 240},300);
        });

        $('#gnb .toggle-btn').css('display','none')
    } else{
        $('#gnb a').click(function (event){
            event.preventDefault();
        });

        $('#pcver_notice').bPopup();

        $('.menu-bar .call').click(function (){
            alert('스마트폰에서 사용가능합니다');
        });

        $('.menu-bar .share').click(function (){
            $('.share-sub').bPopup();
        });

        $('.toggle').css('display','block');

        var onOff = 1;
        $('.toggle').click(function (){
            if(onOff==1){
                $(this).css({
                    'background-image': 'url(http://www.ecard21.co.kr/hi_flyer_test/image/gnb-toggle-btn.png)',
                    'border': 'none',
                    'border-radius' : 0
                });
                $('#gnb').hide();
                onOff = 0;
            } else {
                $(this).css({
                    'background-image': 'url(http://www.ecard21.co.kr/hi_flyer_test/image/gnb-toggle-btn-off.png)',
                    'border': '2px solid #000',
                    'border-radius' : 10
                });
                $('#gnb').show();
                onOff = 1;
            }
        });
    }

});
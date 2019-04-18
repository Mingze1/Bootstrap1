$(function(){

    $('.property-set-sale dd a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    $('#one').click(function(){
        var boot = $('#Booth').find('img')
        boot.attr('src','images/prodoct/shop1.jpg');
        var img1 = $('.preview-thumb li').find('.img1');
        var img2 = $('.preview-thumb li').find('.img2');
        var img3 = $('.preview-thumb li').find('.img3');
        var img4 = $('.preview-thumb li').find('.img4');

        img1.attr('src','images/prodoct/shop1.jpg')
        img2.attr('src','images/prodoct/shop2.jpg')
        img3.attr('src','images/prodoct/shop3.jpg')
        img4.attr('src','images/prodoct/shop4.jpg')

    })

    $('#two').click(function(){
        var boot = $('#Booth').find('img')
        boot.attr('src','images/prodoct/shop5.jpg');
        var img1 = $('.preview-thumb li').find('.img1');
        var img2 = $('.preview-thumb li').find('.img2');
        var img3 = $('.preview-thumb li').find('.img3');
        var img4 = $('.preview-thumb li').find('.img4');

        img1.attr('src','images/prodoct/shop5.jpg')
        img2.attr('src','images/prodoct/shop6.jpg')
        img3.attr('src','images/prodoct/shop7.jpg')
        img4.attr('src','images/prodoct/shop8.jpg')
    })

    $('.preview-thumb li').click(function(){
        var imgUrl = $(this).find('img').attr('src');
        $('#Booth').find('img').attr('src',imgUrl)
    })

    var minu = $('.zhi').val();
    console.log(minu);


    $('.vm-minus').click(function(){
       $(this).nextAll('.zhi').val(parseInt($(this).nextAll('.zhi').val())-1);
    if ($('.zhi').val() == 1 ) {
       $('.vm-minus').css({display:'none'})
    }
    })
    $('.vm-plus').click(function(){
       $(this).prevAll('.zhi').val(parseInt($(this).prevAll('.zhi').val())+1);
       if(minu >= 2){
       $('.vm-minus').css({display:'block'})
    }
    })



    // 轮播图
    $('#yao').click(function(){
        $(this).addClass('flex-active').parent('li').siblings().find('a').removeClass('flex-active');
        $('.slider-wrap').css({
            transform:'translate3d(0px, 0px, 0px)',
            transitionDuration: '0.6s'

        })
    })
    $('#er').click(function(){
        $(this).addClass('flex-active').parent('li').siblings().find('a').removeClass('flex-active');
        $('.slider-wrap').css({
            transform: 'translate3d(-1250px, 0px, 0px)',
            transitionDuration: '0.6s'
        })
    })

    $('#san').click(function(){
        $(this).addClass('flex-active').parent('li').siblings().find('a').removeClass('flex-active');
        $('.slider-wrap').css({
            transform: 'translate3d(-2500px, 0px, 0px)',
            transitionDuration: '0.6s'
        })
    })



})
$(function(){


    $('.item-slide li').click(function(){
        var thes = $(this).data('img');
        $(this).parents('.item-slide').prev().attr('src',thes)
        $(this).addClass('active').siblings().removeClass('active')
    })

    // 轮播图
    $('#one').click(function(){
        $(this).addClass('flex-active').parent('li').siblings().find('a').removeClass('flex-active');
        $('.slider-wrap').css({
            transform:'translate3d(0px, 0px, 0px)',
            transitionDuration: '0.6s'

        })
    })
    $('#two').click(function(){
        $(this).addClass('flex-active').parent('li').siblings().find('a').removeClass('flex-active');
        $('.slider-wrap').css({
            transform: 'translate3d(-1250px, 0px, 0px)',
            transitionDuration: '0.6s'
        })
    })

    $('#three').click(function(){
        $(this).addClass('flex-active').parent('li').siblings().find('a').removeClass('flex-active');
        $('.slider-wrap').css({
            transform: 'translate3d(-2500px, 0px, 0px)',
            transitionDuration: '0.6s'
        })
    })







})
$(function(){

    $('.input1').focus(function(){
       $('.filel1').css({borderColor:"#387AFF"})

})
    $('.input1').blur(function(){
       $('.filel1').css({borderColor:"#dadada"})
    })

    $('.input2').focus(function(){
       $('.filel').css({borderColor:"#387AFF"});
})
    $('.input2').blur(function(){
       $('.filel').css({borderColor:"#dadada"})
    });
/* 手机号获取焦点时*/
    $('.ipt-ipone').focus(function(){
        $('.normalInput').css({borderColor:"#387AFF"});
    })
/* 手机号失去焦点时*/
    function Phone(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
    }
    $('.ipt-ipone').blur(function(){

        $('.normalInput').css({borderColor:"#dadada"})

      if(Phone($(this).val()) == false){
            $('#Phone').css({ visibility:'visible'})
        }else if(Phone($(this).val()) == true){
            $('#Phone').css({ visibility:'hidden'})
        }
    })
// 手机号输入错误里面的×号
  $('.err-ico2').click(function(){
    $('#Phone').css({visibility:'hidden'})
  })

// 选择号码前缀
  var cycode = $('.cycode-container')
$('.cycodePhone').click(function(){

    if(cycode.is(':hidden')){
       cycode.show(400);
    }else{
      cycode.hide(400);
    }
})

$('.country-code .container-fluid ul li').click(function(){
    var shou = $('input[name=shouji]').val();
    var thes = $(this).find('.record-code');
    $('input[name=shouji]').val(thes.text());
    $('.cycode-container').hide(500)
})




$('.icon1').click(function(){
    $('.icon1').hide();
    $('.check_unchk .icon2').css({display:'block'})
})

$('.icon2').click(function(){
    $(this).css({display:'none'})
    $('.icon1').show();

})

// hover 颜色
$('.transferField a').mouseover(function(){
    $(this).css({color:'blue'})
}).mouseout(function(){
    $(this).css({color:'#387aff'})
})

// 选项卡切换
$('.linkABlack').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
    $('.bank').show();
    $('.code').hide();
})
$('.linkAGray').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
    $('.code').show();
    $('.bank').hide();
})

// 账户 和 手机切换
$('.qr-btn').click(function(){
    $('.mo').hide();
    $('.code').hide();
    $('.bank').hide();
    $('.auth').show();
})

$('.qr-btn2').click(function(){
    $('.mo').show();
    $('.bank').show();
    $('.auth').hide();
})

/*  */


         // 调用冒泡函数
            function Bubble(e){
           var e = e || window.event;
           if(e.cancelBubble){
               //IE下
               e.cancelBubble = true;
           }else{
               e.stopPropagation();
           }
        }

})
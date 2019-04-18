$(function(){


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
    $('#yzm').css({visibility:'hidden'})
    $('#pwd').css({visibility:'hidden'})
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


// 验证码页面
// 获取验证码焦点
$('.ipt-ipone2').focus(function(){
    $('.normalInput2').css({borderColor:"#387AFF"});
})
// 失去验证码焦点
$('.ipt-ipone2').blur(function(){
    $('.normalInput2').css({borderColor:"#dadada"});
})
// 点击 验证码判断倒计时 和 手机号是否为空
      $('#next').click(function(){
        var sed = $('#getkey');
            // alert(1)
              // 判断倒计时验证码
             timer = 61;
            var dsq =  setInterval(function(){
               timer--;
                sed.attr('disabled',true);
                sed.val("重新发送(" + timer + ")");
                sed.nextAll('.yzm').css({visibility:'visible'});
                sed.nextAll('.voice').find('span,a').css({visibility:'visible'});
                if(timer == 0){
                sed.attr('disabled',false);
                sed.val('获取短信验证码')
                clearInterval(dsq);
                }
            },1000)
      })
// 判断下一步 手机号是否正确然后执行
  $('#next').click(function(e){
    if(Phone($('input[name="ipone"]').val()) == true){
        $('#next').hide();
        $('#zhuce').css({display:'block'});
        $('.normalInput2').css({visibility:'visible'});
        $('.normalInput').css({visibility:'hidden'});
        $('.tip-box2').css({visibility:'visible'});
        $('.rememberField').hide();
  // 判断传值
          var shouji = $('#phoneNum');
          var ipone = $('input[name=ipone]').val();
          shouji.text(ipone)

    }else{
        $('#Phone').css({visibility:'visible'})
    }
  })

  // 判断验证码输入后 进行下一步
  $('#zhuce').click(function(e){
    var cood = $('input[name=yz]').val().length;
    if(cood == 6){
        $('#next').hide();
        $('#zhuce').hide();
        $('.normalInput2').css({visibility:'hidden'});
        $('.normalInput').css({visibility:'hidden'});
        $('.tip-box2').css({visibility:'hidden'});
        $('.rememberField').hide();
        $('#submit').css({display:'block'});
        $('.normalInput3').css({visibility:'visible'});
        $('#yzm').css({visibility:'hidden'})
        $('#mima').css({visibility:'visible'});
    }else{
       $('#yzm').css({visibility:'visible'})
    }

  })
// 判断提交 密码是否输入正确
  $('#submit').click(function(e){
    var mid = /^(?=.{6,16})[0-9A-Za-z]*[^0-9A-Za-z][0-9A-Za-z]*$/;
       if($('input[name="password"]').val().length >= '8'){
            window.open('login.html')
      }else{
        $('.tip-box4').css({visibility:'visible'})
      }
  })
// 点击小眼睛 进行隐藏
$('.biyan').click(function(){
    $(this).hide();
    $('.yan').css({display:'block'});
    $('input[name=password]').attr('type','text')
})
$('.yan').click(function(){
    $(this).hide();
    $('.biyan').show();
    $('input[name=password]').attr('type','password');

})

// 密码设置 正则判断
      $('input[name="password"]').bind("input propertychange",function(){
        var as = /^[0-9A-Za-z]{4,16}$/;
        var mid = /^(?=.{6,16})[0-9A-Za-z]*[^0-9A-Za-z][0-9A-Za-z]*$/;
        var str = /^(?=.{6,16})([0-9A-Za-z]*[^0-9A-Za-z][0-9A-Za-z]*){2,}$/;
          if(str.test($(this).val()) == true){
            // alert(3)
             $('.s1').css({ background:'#FFAA00'});
             $('.s2').css({ background:'#FFAA00'});
             $('.s3').css({ background:'#FFAA00'});
             $('.level').show();
          }
          if(mid.test($(this).val()) == true){
            // alert(2)
            $('.s1').css({background:'#FFAA00'});
            $('.s2').css({background:'#FFAA00'});
            $('.s3').css({background:'#CACACA'});
            $('.level').show();
          }
          if(as.test($(this).val()) == true){
            // alert(1)
            $('.s1').css({background:'#FFAA00'});
            $('.s2').css({background:'#CACACA'});
            $('.s3').css({background:'#CACACA'});
            $('.level').show();
          }
          if($(this).val().length <= 5){
              $('.level').hide();
             $('.s2').css({background:'#CACACA'});
             $('.s2').css({background:'#CACACA'});
             $('.s2').css({background:'#CACACA'});
          }
})



// hover 颜色
$('.transferField a').mouseover(function(){
    $(this).css({color:'blue'})
}).mouseout(function(){
    $(this).css({color:'#387aff'})
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
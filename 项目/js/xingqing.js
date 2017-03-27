$(function(){
    
     //toubu
     // fanhui
	    $("#he1").click(function(){
	    	location.href = "shouye.html";
	    })
     // 扫一扫
	    $("#he2").click(function(){
	    	alert("暂不支持扫一扫功能");
	    })
	    // 搜索
	    $("#he3").click(function(){
	    	location.href = "sousu.html";
	    })
	     // 购物袋
	    $("#he4").click(function(){
	    	location.href = "gouwuche.html";
	    })
// 详情尺寸
    $('.size_box a').click(function(){
        $('.det_size').val($(this).html());
        $('.size_box').stop(true,false).slideUp();
        b=false;
    });
    var b=false;
    $('.size_btn').click(function(){
        if(b==false){
            $('.size_box').stop(true,false).slideDown();
            b=true;
        }else{
            $('.size_box').stop(true,false).slideUp();
            b=false;
        }
    });
    //    详情切换查看商品图片
    $('.det_bigImg img').attr("src",$('._smallImg img:eq(0)').attr('src'));
    $('._smallImg img').click(function(){
        $('.det_bigImg img').attr("src",$(this).attr('src'));
        $('._smallImg img').css({'border':'1px solid #fff'});
        $(this).css({'border':'1px solid #999'});
    });
// 订单数量
    var i=$('.det_num span').html();
    $('.jia').click(function(){
        i++;
       if($('.det_num span').html()>=222){
           i=222;
           $('.det_num span').html(222)
       }else{
           $('.det_num span').html(i)
       }
    });
    $('.jian').click(function(){
        i--;
        if($('.det_num span').html()<=0){
            i=0;
            $('.det_num span').html(0)
        }else{
            $('.det_num span').html(i)
        }
    });
//购物分享
    var c=false;
    $('#car-fen').click(function(){
        if(c==false){
            $('.fen').stop(true,false).slideDown();
            c=true;
        }else{
            $('.fen').stop(true,false).slideUp();
            c=false;
        }
    });
    //加入购物车
    $('.join').click(function(){
//  	console.log(11111)
        $('.xiangqing').show();
        $('.huoping span').html($('.det_boxone p:eq(1)').html())
        $('.shoujia span').html($('.det_boxtwo p span:eq(0)').html())
        $('.size span').html($('.det_size').val())
        $('.num span').html($('.det_num span:eq(0)').html())
    });
    $('.xiangqing-one a').click(function(){
        $('.xiangqing').hide();
    });
    // 购物车货品数量
    var q=$('.car-num').html();
    $('.car-jia').click(function(){
        q++;
        if($('.car-num').html()>=99){
            q=99;
            $('.car-num').html(99);
        }else{
            $('.car-num').html(q)
        }
    });
    $('.car-jian').click(function(){
        q--;
        if($('.car-num').html()<=0){
            i=0;
            $('.car-num').html(0);
        }else{
            $('.car-num').html(q)
        }
    });
    //移除商品
    $('.re-btn').click(function(){
        $(this).parent().parent().remove();
    });
    //全选
    $('.quan').click(function(){
       $.each($(':checkbox'),function(){
           this.checked=true;
       })
    });
//    分类切换
    var type_set;
    $('.type_goods').hide().eq(0).show();
    $('.type_tab a').eq(0).css({"border-bottom":"4px solid black"});
    $('.type_tab a').mouseover(function(){
        clearTimeout(type_set);
        var l=$(this).index();
        type_set=setTimeout(function(){
            $('.type_goods').hide().eq(l).show();
            $('.type_tab a').eq(l).css({"border-bottom":"4px solid black"}).siblings().css({"border-bottom":"1px solid #999"});
        },500);
    });
});
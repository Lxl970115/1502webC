
$(function(){
	$.ajax({
		type:"get",
		url:"./js/jso.json",
		async:true,
		dataType:"json",
		success:function(data){
			var datajson=data;
			$.each(datajson,function(i,v){				
				 	 $(".h-nav>.nav").append('<li><a href="#">'+v.name+'</a></li>');	
				 	 //导航二级
				 	 	$(".h-nav>.nav").on("mouseover","li>a",function(){				 	 		
				 	 		var txt = $(this).html();	
				 	 		var _index=($(this).parent().index())-1;
				 	 		$(".navs").css("left",(_index*48+80)+"px");
		 					if(txt==v.name){
		 						$(".navs>ul").children().remove();
		 						if(v.list.length>0){
		 							$(".navs").show();		 						
			 						$.each(v.list, function(i,v) {		 							
			 							$(".navs ul").append('<li><a href="#">'+v+'</a></li>');
			 						});
		 						}
		 					}
						})
				 	 	//推荐品牌
				 	 	$.each(v.brand,function(i,v){
				 	 			//推荐品牌
				 	 			$.each(v.stropt, function(i,v) {
				 	 				$(".list .brand").append('<li><a href="#">'+v+'</a></li>');
				 	 			});
				 	 			//女装
				 	 			$.each(v.dress, function(i,v) {
				 	 				$(".list .dress").append('<li><a href="#">'+v+'</a></li>');
				 	 			});
				 	 	})
						//最新
						$.each(v.zxdt,function(i,v){
							   $(".new-l>ul").append('<li><a href="#">'+v.news+'</a></li>')
						})
			})
		}
	});
	//导航
	$(".h-nav>.nav").on("mouseout","li>a",function(){
		$(".navs").hide();	
	})
	$(".navs").mouseover(function(){
		$(this).show();
	})
	$(".navs").mouseout(function(){
		$(this).hide();
	})
	//切换背景
	$(".css-b>li").click(function(){
			var color=$(this).attr("id");
			var lis=$(".css-b li")
			var _index = $(this).index()*20;
			for(var i=0; i<lis.length;i++){
				 lis.eq(i).css("background-position",""+-(i*20)+"px 0");
			}		
			$(this).css("background-position",""+-_index+"px -14px");
			$(".h-nav, .m-nav>.title").css("background","#"+color);				
	})
	
	//轮播
	$(".lunbo>.imgs>li:gt(0)").hide();	
	var _num=0;
	var timer;
	var _length=$(".imgs>li").length;
	
	  function move(){
	  	if(_num==4){
	  		_num=-1;
	  	 }	
	  		$(".lunbo>.imgs>li").eq(_num+1).fadeIn("slow").siblings("li").fadeOut("slow");
	  		$(".lunbo>.img-list>li").eq(_num+1).addClass("active").siblings("li").removeClass("active");
	  		_num++	 
	  }	; 
	  move();
	timer=setInterval(move,1000);
	$(".lunbo").mouseover(function(){
		clearInterval(timer);
	});
	$(".lunbo").mouseout(function(){
		timer=setInterval(move,1000);
	})
	$(".lunbo>.img-list>li").mouseover(function(){
		_num=$(this).index();
		$(".lunbo>.imgs>li").eq(_num).fadeIn("slow").siblings("li").fadeOut("slow");
	  	$(".lunbo>.img-list>li").eq(_num).addClass("active").siblings("li").removeClass("active");
	  	
	})
	
	//tab
	var aul=$(".m-bottom .box ul");
	var _length =aul.length;
	var _width=aul.eq(0).width() 
	$(".m-bottom .box").css({width:""+_width*_length+"px"});
	$(".m-bottom .btn li").click(function(){
		var _index = $(this).index();
		$(".m-bottom .box").animate({"left":-(_index*_width)},400);
		$(this).addClass("active").siblings().removeClass("active");
	})
	
	
	//最新动态
	movers(".new-l",'.list1','.list2');
	var otimer;
	function movers(name1,name2,name3){
		var slid1 = $(name1);
		var slid2 = $(name2);
		var slid3 = $(name3);		
//		slid3.html(slid2.html());
		function  doTo(){
			if(slid1.scrollTop()>=slid2.height()){
				slid1.scrollTop(0);
			}else{
				slid1.scrollTop(slid1.scrollTop()+1);
			}
		}
		otimer=setInterval(doTo,50);	
		$(".new-l").mouseover(function(){
			clearInterval(otimer);
		})
		
		$(".new-l").mouseout(function(){
			otimer=setInterval(doTo,50);		
		})
		$(".new-l").on("mouseover","ul li",function(){
			   var txt = $(this).find("a").html();
			   $(this).append("<div class='mo'></div>")
			   $(".mo").html("");
			   $(".mo").html(txt);			   
			   $(".new-l").mousemove(function(e){
			   			var movex = e.pageX - $(this).offset().left;
			   			var movey = e.pageY - $(this).offset().top-10;
			   			 $(".mo").css({
			   			 		"left":movex,
			   			 		"top": moveBy
			   			 })
			   			
			   })
			   $(this).mouseout(function(){
			   		$(".mo").hide();
			   })
		})
		
	}
	
	//品牌活动
	$(".box ul>.a").mouseover(function(ev){
		 $(this).append('<img src="../img/img/zoom.gif"/ class="imgt">');
		 $(this).find(".imgt").show();
		 $(this).css("opacity","0.5").siblings().css("opacity","1");
		 var oImg = $(".imgt"); 
		 var disX =$(this).offset().left;
		 var disY =$(this).offset().top;
		 	 $(document).mousemove(function(ev){
		 	 	 	var moveX = ev.pageX - disX ;
		 	 	 	var moveY = ev.pageY - disY;
		 	 	 	var maxX = $(this).width() - oImg.width();
		 	 	 	var maxY = $(this).height() - oImg.height();
		 	 	 	if(moveX>=maxX){
		 	 	 		moveX=maxX;
		 	 	 	}
		 	 	 	if(moveX<=0){
		 	 	 		moveX=0;
		 	 	 	}
		 	 	 	if(moveY>=maxY){
		 	 	 		moveY=maxY;
		 	 	 	}
		 	 	 	if(moveY<=0){
		 	 	 		moveY=0;
		 	 	 	}
		 	 	 	oImg.css({
		 	 	 		"left":moveX+"px",
		 	 	 		"top":moveY+"px"
		 	 	 	})
		 	 })
		 	 
		 	 $(document).mouseout(function(){
		 	 	 $(document).off();
		 	 	 oImg.hide();
		 	 	 return false;
		 	 })
	})
	$(".box ul>li").mouseout(function(){
		      $(this).css("opacity","1");
	})
		
})

	




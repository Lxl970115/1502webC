$(function(){
	//数据
	var datas=[];
	$.ajax({
		url:"./js/city.json",
		type:"get",
		dataType:"json",
		data:{},
		async:true,
		success:function(data){
			datas = data;
			//省份
			$.each(datas, function(i,v) {
				 $(".address>#g-province").append('<option value="'+v.name+'">'+v.name+'</option>');
				 //市
				 $("#g-province").change(function(){
				 	var _txt = $(this).val();				 					 	
				 	if(_txt==v.name){
				 		$("#g-city").html("");
				 		if(v.sub.length>0){
				 			$("#g-city").show();
					 		$.each(v.sub, function(i,v) {
					 			 $(".address>#g-city").append('<option value="'+v.name+'">'+v.name+'</option>');
					 		});
				 		}else{
				 			$("#g-city").hide();
				 		}
				 	
				 	}
				 })
				 //区
				 $.each(v.sub, function(i,v) {
				 	 $("#g-city").change(function(){				 	 			 	 	
				 	 	var c_txt = $(this).val();
				 	 	if(c_txt==v.name){
				 	 		$("#g-area").html("");	
				 	 		if(v.sub.length>0){
				 	 			$("#g-area").show();
				 	 			$.each(v.sub, function(i,v) {
				 	 		 	 $(".address>#g-area").append('<option value="'+v.name+'">'+v.name+'</option>');
				 	 		 });
				 	 		}else{
				 	 			$("#g-area").hide();
				 	 		}
				 	 		 
				 	 	}
				 	 })
				 })
			});
		}
	})
	//tab
	 
	$(".show-btn>li").click(function(){
		    var _index=$(this).index();
		     
		    $(this).addClass("active").siblings().removeClass("active");
		    $(".show-tab>.div>.show-info").eq(_index).slideDown().siblings(".show-info").slideUp();
	})
	
	//图片
	$(".show-list").on("click","li",function(){
		 var _index = $(this).index();
		 $(this).addClass("active").siblings().removeClass("active");
		 $(".g-show>div>img").eq(_index).show().siblings("img").hide();
		  $(".bigImg>img").eq(_index).show().siblings("img").hide();
		  $(".z-img>.ig>img").eq(_index).show().siblings("img").hide();
	})
	
	//尺寸
	$(".size>.g-size-list>li").click(function(){
		  var s_txt = $(this).html();
		  $(".size>.g-size>span").html(s_txt);
		  $(this).css("border-color","#ef57ea").siblings().css("border-color","#666666");
	})
	
	//数量
	for(var i=1;i<30;i++){
		 $("#g-nums").append('<option value="'+i+'">'+i+'</option>')
	}
	
	//总计
	$("#g-nums").change(function(){
			var num=$(this).val();
			var _price=$(".sales>span").html();
			$(".g-gross>span").html(num*_price);
	})
	//颜色数据
	var gdata=[];
	$.ajax({
		url:"./js/good.json",
		type:"get",
		dataType:"json",
		data:{},
		async:true,
		success:function(data){
			 gdata=data;
			 $.each(gdata[0].colors, function(i,v) {
			 	 $(".color-list").append('<li title="'+v.color+'"><img src="'+v.img+'"/></li>')
			 	 $.each(v.gshow, function(i,v) {
					  	 		$(".g-show>div").append('<img src="'+v.img+'"/>');					  	 		
					  	 		$(".bigImg>img:gt(0)").hide();
					  	 		$(".z-img>.ig").append('<img src="'+v.img+'"/>');
					  	 });
				$.each(v.bigImg, function(i,v) {
					  	 		$(".bigImg").append('<img src="'+v.img+'"/>');
					  	 		$(".bigImg>img:gt(0)").hide();
					  	 });
				$.each(v.list, function(i,v) {
					  	 	  $(".show-list").append('<li><img src="'+v.img+'"/></li>');
					  	 });
				 //颜色联动
				$(".colors>.color-list>li").click(function(){
					  var color = $(this).attr("title");
					  var _index=$(this).index();
					  $(".colors>.color>span").html(color);
					  $(this).css("border","1px solid #d51e70").siblings().css("border","none");
					  if(color==v.color){
					  	$(".g-show>div").html("");
					  	$(".show-list").html("");
					  	$(".bigImg").html("");
					  	$(".z-img>.ig").html("");
					  	 $.each(v.gshow, function(i,v) {
					  	 		$(".g-show>div").append('<img src="'+v.img+'"/>');
					  	 		$(".z-img>.ig").append('<img src="'+v.img+'"/>');
					  	 });
					  	 
					  	 $.each(v.bigImg, function(i,v) {
					  	 		$(".bigImg").append('<img src="'+v.img+'"/>');
					  	 		$(".bigImg>img:gt(0)").hide();
					  	 });
					  	 
					  	 $.each(v.list, function(i,v) {
					  	 	  $(".show-list").append('<li><img src="'+v.img+'"/></li>');
					  	 });
					  }
				})
						 	 
			 });
			 
			 $.each(gdata[0].cp, function(i,v) {
			 	  $(".div").append('<div class="show-info show">'+v.chanps+'</div>');
			 	  $(".show-tab>.div>.show-info:gt(0)").hide();
			 });
		}
	})
	
	//图片遮罩
	$(".gq>img").click(function(){			
			$(".zz").show();
			$(".z-img").show();
			$(".zz").css({
				"width":$(document).width(),
				"height":$(document).width()
			})
//			$(document).css("position","relative");
			
			$('body').css("overflow","hidden")
	})
	
	//关闭遮罩
	$(".z-img>button").click(function(){
		$(".zz").hide();
			$(".z-img").hide();
			$('body').css("overflow","visible")
	})
	
	//放大镜
	
	var oSpan =$(".g-show>.fd");
	var _width = oSpan.width();
	var _heigth = oSpan.height();
	$(".g-show").mouseover(function(e){
			oSpan.show();
			$(".bigImg").show();
		    var disX =$(this).offset().left;
		    var disY =$(this).offset().top;
		    	$(document).mousemove(function(e){
		    		 var moveX =  e.pageX - disX-_width/2;
		    		 var moveY = e.pageY -disY-_heigth/2;
		    		 
		    		 var maxX = $(".g-show").width()-_width;
		    		 var maxY=$(".g-show").width()-_heigth;
		    		 if(moveX>=maxX){
		    		 	 moveX=maxX
		    		 }
		    		 if(moveX<=0){
		    		 	moveX=0
		    		 }
		    		 if(moveY>=maxY){
		    		 	moveY=maxY
		    		 }
		    		 if(moveY<=0){
		    		 	moveY=0
		    		 }
		    		 
		    		 var psnum = $(".bigImg>img").width()/$(".g-show>div>img").width();

		    		 
		    		 $(".bigImg>img").css({
		    		 	"left": -moveX*psnum +"px",
		    		 	"top": -moveY*psnum + "px"
		    		 })
		    		 oSpan.css({
		    		 	"left": moveX + "px",
		    		 	"top": moveY + "px"
		    		 })
		    	})
		    	
		    	$(document).mouseout(function(){
		    		$(document).off();
		    		oSpan.hide();
					$(".bigImg").hide();
					return false;
		    	})
	})
	
			//购物车
		$(".shop-btn").click(function(){
				var  s_color = $(".colors>.color>span").html();//颜色
				var  s_size   = $(".size>.g-size>span").html();//尺寸
				var  s_num   = $(".g-num>#g-nums").val();//数量
				var  s_prov  = $(".address>#g-province").val();//省份
				var  s_city   = $(".address>#g-city").val();//城市
				var  s_area   = $(".address>#g-area").val();//区，县
				var s_price = $(".g-gross>span").html();
				if(s_color=="未选择"){
					 alert("请选择颜色");
					 return false;
				}
				if(s_size=="未选择"){
					alert("请选择尺寸");
					return false;
				}
				if(s_prov=="请选择"){
					alert("请选择地址");
					return false;
				}
				if(s_city=="请选择"){
					alert("请选择地址");
					return false;
				}
				if(s_area=="请选择"){
					alert("请选择地址");
					return false;
				}
					$(".shop").show();
					$(".shop-content").show();
					$(".shops .s-color").html(s_color);
					$(".shops .s-size").html(s_size);
					$(".shops .s-num").html(s_num);
					$(".shops .s-price").html(s_price);
					$(".shops .s-address").html(s_prov+"省 "+s_city+"市 "+s_area);
					$('body').css("overflow","hidden")
					$(".shop").css({
							"width":$(document).width(),
							"height":$(document).width()
						})
				
		})
	
		//关闭购物车遮罩
		$(".s-btn").click(function(){
					$(".shop").hide();
					$(".shop-content").hide();
					$('body').css("overflow","visible")
		})
		
		//评分
		var sta =true;
		$(".star>em").bind({
				"mouseover":function(){
					 var _index=$(this).index()+1;
					 if(sta){
					 	$(".g-grade>span").html(_index+"分");
					 	 $(".star").css({
							"background-position-y": -_index * 16+96
						});
					 }					
				},
				"click":function(){
					sta =false;
					var _index=$(this).index()+1
					 $(".star").css({
							"background-position-y": -_index * 16
						});
						
						$(".g-grade>span").html(_index+"分");
				}
		})

})

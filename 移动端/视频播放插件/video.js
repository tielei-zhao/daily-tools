(function(){
		var pageChange = function (){
			var width=$(window).width();
			var height=$(window).height();
			// 横屏
			if(width>414&&width<760){
				$(".wrap").css("height",height);
				$(".menu").css("height",height-40);
				$(".menu").css("background-size","cover");
				// 横屏并且有下边的黑条
				if(window.name==1){
					$(".menu").css("height",height-40);//横屏下滑让其还原
				}
				// 横屏
				else if(window.name==0){
					$(".menu").css("height",height);//横屏的时候占满全屏
				}
			}else if(width>760&&width<900){//平板竖屏
				$(".wrap").css("height",height);
				$(".menu").css("height",height-40);
				$(".menu").css("background-size","cover");
				if(window.name==1){
		  			$(".menu").css("bottom",40);//竖屏menu上移
				}
				else if(window.name==0){
		  			$(".menu").css("bottom",0);//竖屏让其处于底部
				}
			}else if(width>900){
				$(".wrap").css("height",height);
				$(".menu").css("height",height-40);
				$(".menu").css("background-size","cover");
				// 横屏并且有下边的黑条
				if(window.name==1){
					$(".menu").css("height",height-40);//横屏下滑让其还原
				}
				// 横屏
				else if(window.name==0){
					$(".menu").css("height",height);//横屏的时候占满全屏
				}
			}
			else{
				$(".wrap").css("height","auto");
				$(".menu").css("height","1.709rem");
				$(".menu").css("bottom",40);
				$(".menu").css("background-size","cover");
				if(window.name==1){
					$(".menu").css("height","1.709rem");
		  			$(".menu").css("bottom",40);//竖屏menu上移
				}
				else if(window.name==0){
					$(".menu").css("height","1.709rem");
		  			$(".menu").css("bottom",0);//竖屏让其处于底部
				}
			}
		}
		pageChange();
	    $(window).resize(function() {
	    	pageChange();
	    	var video_height=$(window).height();
			console.log(video_height)
	    	// window.location.reload();
	    	$("#jp_container_1").height(video_height)
			$(".video_close").click(function(event) {
				$("#jp_container_1").css("display","none");
			});
			$(".openbtn").click(function(){
				$("#jp_container_1").css("display","block");
			})
	   	});
	    touch.on(document, 'swipeup', function() {
	        window.name=0;
			pageChange();
			console.log(window.name)
		});
	    touch.on(document, 'swipedown', function() {
	        window.name=1;
			pageChange();
			console.log(window.name)
		});
	    var list=["http://cms.zulong.com/jeecms/yxxw/727.jhtml"];
	    $(".con .list").click(function(){
	    	var index=$(this).index();
	    	window.location.href=list[index];
	    })
	    $(".news>ul>li").click(function(){
	    	var index=$(this).index();
	    	window.location.href=list[index];
	    })
})()





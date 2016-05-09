$(document).ready(function () {
	    var activePos = $('.tabs-header .active').position();

	    function changePos() {
	        activePos = $('.tabs-header .active').position();
	        console.log(activePos)
	        $('.border').stop().css({
	            left: activePos.left,
	            width: $('.tabs-header .active').width()
	        });
	    }
	    changePos();
	    // var tabHeight = $('.tab.active').height();
	    
	    function animateTabHeight() {
	        // tabHeight = $('.tab.active').height();
	        var tabHeight=585;
	        console.log(tabHeight)
	        $('.tabs-content').stop().css({ height: tabHeight + 'px' });
	    }
	    animateTabHeight();
	    function changeTab() {
	        var getTabId = $('.tabs-header .active a').attr('tab-id');
	        $('.tab').stop().fadeOut(300, function () {
	            $(this).removeClass('active');
	        }).hide();
	        $('.tab[tab-id=' + getTabId + ']').stop().fadeIn(300, function () {
	            $(this).addClass('active');
	            animateTabHeight();
	        });
	    }
	    $('.tabs-header a').on('click', function (e) {
	        e.preventDefault();
	        var tabId = $(this).attr('tab-id');
	        if(tabId==3){
	        	tabHeight=712;
	        }else{
	        	tabHeight=625;
	        }
	        console.log(tabId)
	        $(".place-main").slideUp('slow');
	        
	        $('.tabs-header a').stop().parent().removeClass('active');
	        $(this).stop().parent().addClass('active');
	        changePos();
	        tabCurrentItem = tabItems.filter('.active');
	        $('.tab').stop().fadeOut(300, function () {
	            $(this).removeClass('active');
	        }).hide();
	        $('.tab[tab-id="' + tabId + '"]').stop().fadeIn(300, function () {
	            $(this).addClass('active');
	            $('.tabs-content').stop().css({ height: tabHeight + 'px' });
	        });
	        $(".place-left .place-item").addClass("animated fadeInLeft");
	        $(".place-right .place-item").addClass("animated fadeInRight");
	    });
	    var tabItems = $('.tabs-header ul li');
	    var tabCurrentItem = tabItems.filter('.active');
	    $('#next').on('click', function (e) {
	        e.preventDefault();
	        var nextItem = tabCurrentItem.next();
	        tabCurrentItem.removeClass('active');
	        if (nextItem.length) {
	            tabCurrentItem = nextItem.addClass('active');
	        } else {
	            tabCurrentItem = tabItems.first().addClass('active');
	        }
	        changePos();
	        changeTab();
	    });
	    $('#prev').on('click', function (e) {
	        e.preventDefault();
	        var prevItem = tabCurrentItem.prev();
	        tabCurrentItem.removeClass('active');
	        if (prevItem.length) {
	            tabCurrentItem = prevItem.addClass('active');
	        } else {
	            tabCurrentItem = tabItems.last().addClass('active');
	        }
	        changePos();
	        changeTab();
	    });
	    $('[ripple]').on('click', function (e) {
	        var rippleDiv = $('<div class="ripple" />'), rippleOffset = $(this).offset(), rippleY = e.pageY - rippleOffset.top, rippleX = e.pageX - rippleOffset.left, ripple = $('.ripple');
	        rippleDiv.css({
	            top: rippleY - ripple.height() / 2,
	            left: rippleX - ripple.width() / 2,
	            background: $(this).attr('ripple-color')
	        }).appendTo($(this));
	        window.setTimeout(function () {
	            rippleDiv.remove();
	        }, 1500);
	    });


	    //推荐切换
	    var $tabs = $('ul.place-nav');
	    $tabs.click(function(e){
	        var target = e.target;
	        if(target.tagName != "LI"){
	            target = target.parentNode;
	        }
	        e.preventDefault();
	        var $this = $(target);
	        if(!$this.is('.nav-active')){
	            $this.addClass('nav-active').siblings().removeClass('nav-active');
	            var $blocks = $this.parents('.tab3').find('.go-wrapper');
	            
	            $blocks.hide().eq($(this).find('li').index($this)).show();
	        }
	    });
	    //点击显示详情
	    $(".place-item a").click(function(){
			// $(".go-wrapper").slideUp('slow');
			$(".tab.active").slideUp('slow');
			var title=$(this).find(".place-title").text();
			var infoon=$(this).find(".info-on").text();
			var infotw=$(this).find(".info-tw").text();
			var address=$(this).find(".info-ad").text();
			var traffic=$(this).find(".info-tra").text();
			var ticket=$(this).find(".info-ti").text();
			var time=$(this).find(".info-time").text();
			var tel=$(this).find(".info-tel").text();
			var imgurl=[];
			$(".info-imgurl").empty();

			$(this).find("ul li").each(function(index) {
			    // imgurl.push($(this).find('img').attr("src"));
			    console.log($(this))
			     $(this).clone().appendTo(".info-imgurl");
			     
			  });
			// $('.am-slider').flexslider(
			// 	{  
		 //        playAfterPaused: 300,  
		 //        animation: "fade",  
		 //        animationLoop: true,  
		        
		 //        controlNav: false,
		 //        slideshow: true, 
		 //        animationSpeed: 500  
		 //        }
		 //        );
			//轮播
		var $prev = $(".prev");
        var $next = $(".next");
        var $imgurl = $(".info-imgurl");
        var $imgitem = $(".info-imgurl li");


        
        // 复制第一张图片并添加到末尾
        var cloneimg = $(".info-imgurl li").first().clone();
        $(".info-imgurl").append(cloneimg);
        var i = 0;
        // 获取图片数量
        var imgnum = $(".info-imgurl").children().length;

        // 左按钮点击轮播
        $prev.on("click", function() {
            i--;
            move()

        })


        // 右按钮点击轮播
        $next.on("click", function() {
                i++;
                move()
            })
            // 运动
        function move() {


            // 当点击到第一张图时，将索引变成最后一张
            if (i == -1) {
                $imgurl.stop().css({
                    "margin-left": -(imgnum - 1) * 525 + "px"
                })
                i = imgnum - 2;
                console.log(i);
            }
            // 当点击到最后一张图时，将索引变成第一张
            if (i == imgnum) {

                $imgurl.stop().css({
                    "margin-left": "0"
                })
                i = 1;
            }
            $imgurl.stop().animate({
                    "margin-left": -i * 525 + "px"
                }, 500)
                // 按钮移动样式变化
                // 判断达到最后一张图时按钮显示
            
        }


        

        //自动轮播
        var t = setInterval(function() {
            i++;
            move();
        }, 3000)
		    

			// imgurl=$(this).find("ul li img").attr("src");
			// console.log(imgurl)
			// var infourl=[];

			// $(".info-imgurl").find("li").each(function(index) {
			//     infourl.push($(this).find('img').attr("src"));
			//   });

			// for(var i in imgurl){
			// 	var $li=$("<li></li>");
			// 	var $img=$("<img>");
			// 	$img.attr("src",imgurl[i]);
			// 	$img.appendTo($li);
			// 	$li.appendTo(".info-imgurl")
			// 	console.log($li)
			// 	infourl[i]=imgurl[i];
			// }
			// $.each(imgurl,function(n,value) {  
   //           infourl[n].find("img").attr("src",imgurl[n]);
            
   //          });
			// imgurl.each(function(index){
			// 	infourl[index].find("img").attr("src",imgurl[index]);	
			// });
			// console.log(infourl)
			
			$(".info-title").text(title);
			$(".info-one").text(infoon);
			$(".info-two").text(infotw);
			$(".address-content").text(address);
			$(".traffic-content").text(traffic);
			$(".ticket-content").text(ticket);
			$(".time-content").text(time);
			$(".tel-content").text(tel);
			// var activeHeight= $('.tab.active').height();
			// console.log(activeHeight);
			// $('.tabs-content').stop().css({ height: activeHeight + 'px' });
			$(".place-main").show().addClass("animated fadeInUp");
			// setTimeout(() => {
			// 	//$(".place-main").css('display', 'block');
			// }, 1000);
			$(".tabs-content").addClass("tabs-bg");
			//轮播
    
		    
			// $(".logo-top-margin").animate({marginLeft:'45%'}, "slow");
			// $(".logo-top-margin").animate({marginTop:'120px'}, "slow");
			
		});
    

    //滚动侦测
   
  $('.my-scrollspy').scrollspy({
    animation: 'slide-right',
    
  });

  //切换主页面
  $(".button-go").click(function(){
  	$(".button-go").addClass("active").siblings().removeClass("active");
  	$(".eat-wrap").addClass('animated fadeOutDown').hide().removeClass('fadeInUp');
  	$(".go-wrap").show().addClass("animated fadeInDown").removeClass('fadeOutDown');
  });
  $(".button-eat").click(function(){
  	$(".button-eat").addClass("active").siblings().removeClass("active");
  	$(".go-wrap").hide().addClass('animated fadeOutDown').removeClass('fadeInDown');
  	$(".eat-wrap").show().addClass("animated fadeInUp").removeClass('fadeOutDown');
  	$("#bestpoilist").show().addClass("animated fadeInUp");
  	$(".page").show();
  });
  //美食详情
	    $(".eat-link").click(function(){
			// $(".go-wrapper").slideUp('slow');
			$("#bestpoilist").slideUp('slow');
			var eattitle=$(this).find(".title").text();
			var eattext=$(this).find(".hide-eat-text").text();
			var eatshop=$(this).find(".hide-shop").text();
			var eataddress=$(this).find(".hide-address").text();
			var eatremark=$(this).find(".hide-remark").text();
			var eatmoney=$(this).find(".hide-money").text();
			var eatimg=$(this).parent().siblings().find("li.large img").attr("src");
			console.log(eatremark);
			$(".show-eattitle").text(eattitle);
			$(".shop-name").text(eatshop);
			$(".eat-text").text(eattext);
			$(".eat-imgitem img").attr("src",eatimg);
			$(".eat-address-text").text(eataddress);
			$(".eat-remark-text").text(eatremark);
			$(".eat-money-text").text(eatmoney);
			
			// var activeHeight= $('.tab.active').height();
			// console.log(activeHeight);
			// $('.tabs-content').stop().css({ height: activeHeight + 'px' });
			$(".eat-main").show().addClass("animated fadeInUp");
			$(".page").hide();
			// setTimeout(() => {
			// 	//$(".place-main").css('display', 'block');
			// }, 1000);
			// $(".tabs-content").addClass("tabs-bg");
			// $(".logo-top-margin").animate({marginLeft:'45%'}, "slow");
			// $(".logo-top-margin").animate({marginTop:'120px'}, "slow");
			
		});
	//显示美食
	$(".navbar-text").click(function(){
		$(".eat-main").hide();
		$("#bestpoilist").show().addClass("animated fadeInUp");
		$(".page").show();
	});

	//Loading
	


});
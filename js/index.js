$(function(){
	//top的上下轮播
	var top_tt = document.getElementsByClassName('top_tt')[0];
	var top_ttTopoffset = top_tt.offsetTop;
	var run;
	function autoRun(){
		clearInterval(run);
		run = setInterval(function(){
			top_ttTopoffset--;
			if(top_ttTopoffset<=-110){
				top_ttTopoffset=0;
			}
		top_tt.style.top = top_ttTopoffset + 'px';
		},30)
	}
	//第一次进网页调用计时器
	autoRun();
	$('.top_nav_r').hover(function(){
		clearInterval(run);
	},function(){
		autoRun();
	})
	//广告移出移入事件
	$('.add').hover(function(){
		$(this).find('.add-img').hide();
		$('.add_img').show();
	},function(){
		$(this).find('.add-img').show();
		$('.add_img').hide();
	});
	//网易游戏全目录的悬浮显示事件
	$('.top_munn').mouseover(function(){
		$('#mulushow').height(450);
	}).mouseout(function(){
		$('#mulushow').height(0);
	});

	//更多游戏的单击事件
	$('#lookmore').click(function(){
		$('#shouyoubian').width(798);
		$('#shouyoubian').css({left:30});
		$('#mulub_center').width(818);
		$('#mulub_center').css({left:30});
		$('#mulub_c_right').width(621);
		$(this).hide();
		$('#shortlook').show();
	})
	//尖括号单击事件
	$('#shortlook').click(function(){
		$('#shouyoubian').width(583);
		$('#shouyoubian').css({left:247});
		$('#mulub_center').width(603);
		$('#mulub_center').css({left:247});
		$('#mulub_c_right').width(406);
		$(this).hide();
		$('#lookmore').show();
	})
	//hover 字体颜色变
	$('#mulu_bottom a').mouseover(function(){

		$(this).css({color:'#B4181B'})
	}).mouseout(function(){
		$(this).css({color:'#696867'})
	});

	//轮播图
	//获取图片li长度
	var len = $('.shou_lun li').length;
	//图片添加class属性
	$('.shou_lun li').eq(0).show();
	//下面对应的小图
	$('.show_bottom>a').eq(0).addClass('show_bottom_active');
	
	//给小图a设置鼠标移入事件
	$('.show_bottom>a').mouseover(function(){
		//给自己添加class  其他兄弟移出class
		$(this).addClass('show_bottom_active').siblings().removeClass('show_bottom_active');
		//获取当前的索引值
	    var index = $(this).index();
	    //让i变为全局变量
	    i = index;
	    //console.log(index);
	   	//给图片自己添加下滑显示其他同级兄弟淡出
	   	$('.shou_lun li').eq(index).fadeIn(800).siblings().fadeOut(100);
	});
	 	//自动
	    //设置全局变量i从0开始
	    var i = 0;
	    // run定时器调用核心右走的函数
	    var run = setInterval(move,3000);
	    //运动函数
	    function move() {
	            i++;
	            if (i == len) {
	                i = 0;
	            }
	            //console.log($('.shou_lun li').eq(i))
	            $('.show_bottom>a').eq(i).addClass('show_bottom_active').siblings().removeClass('show_bottom_active');
	            $('.shou_lun li').eq(i).fadeIn(800).siblings().fadeOut(100);
	        }

	     $(".show").hover(function() {
	            clearInterval(run);
	        }, function() {
	            run = setInterval(move, 3000)
	        });

	     //新闻类选择项卡
	     //菜单第一个添加class  第一次进网页
	     $('.news-nav-item').eq(0).addClass('news-nav-active');
	     //菜单a文字颜色激活状态
	     $('.news-nav-item').eq(0).css({color:'#fff'});
	     //第一个ul初始化显示
	     $('.text-list1').eq(0).show();
	     $('.news-nav-item').mouseover(function(){
	     	$('.news-nav-item').css({color:'#333'});
	     	//ul初始化全部隐藏
	     	$('.text-list1').hide();
	     	$(this).css({color:'#fff'})
	     	$(this).addClass('news-nav-active').siblings().removeClass('news-nav-active');
	     	$('.text-list1').eq($(this).index()).show();
	     });

	     //大话头条选择项卡
	     //初始化第一次进网页
	     $('.player-box_item').eq(0).css({'border-bottom-color':'#C41E20'});
	     $('.dhtt-box-wrapper-item').eq(0).show();
	     $('.player-box_item').mouseover(function(){
	     	$('.player-box_item').css({'border-bottom-color':'transparent'});
	     	$('.dhtt-box-wrapper-item').hide();
	     	$(this).css({'border-bottom-color':'#C41E20'});
	     	$('.dhtt-box-wrapper-item').eq($(this).index()).show();
	     });

	     //推荐模块选项卡
	      $('.tuijian-news-nav>a').eq(0).addClass('news-nav-active');
	     //菜单a文字颜色激活状态
	     $('.tuijian-news-nav>a').eq(0).css({color:'#fff'});
	     //第一个ul初始化显示
	     $('.tuijian-text-list').eq(0).show();
	     $('.tuijian-news-nav>a').mouseover(function(){
	     	$('.tuijian-news-nav>a').css({color:'#333'});
	     	//ul初始化全部隐藏
	     	$('.tuijian-text-list').hide();
	     	$(this).css({color:'#fff'})
	     	$(this).addClass('news-nav-active').siblings().removeClass('news-nav-active');
	     	$('.tuijian-text-list').eq($(this).index()).show();
	     });

	     /*客服处理选项卡*/
	     $('.btn-entry>a').eq(0).addClass('entry-nav-active');
	     $('.btn-entry>a').eq(0).find('i').addClass('i0');
	     $('.entry-box-item').eq(0).show();
	     $('.btn-entry>a').click(function(){
	     	var v =  $(this).index();
	     	$('.entry-box-item').hide();
	     	$('.btn-entry>a').eq(0).find('i').css({'text-decoration':'none'});
	     	$('.btn-entry>a').find('i').removeClass();
	     	$('.btn-entry>a').removeClass('entry-nav-active');
	     	$(this).addClass('entry-nav-active');
	     	var b = 'i'+v
	     	console.log(b);
	     	$(this).find('i').addClass(b);
	     	$('.entry-box-item').eq(v).show();
	     });

	     //点击滑动轮播
	     $('.huodong-left').click(function(){
	     	$('.entry-box-lun ul').animate({marginLeft:'-385px'},600,function(){
	  			$('.entry-box-lun>ul>li').eq(0).appendTo($('.entry-box-lun ul'));  
	  			$('.entry-box-lun ul').css('marginLeft','0px');
	     	});
	     });

	     $('.huodong-right').click(function(){
	     	$('.entry-box-lun ul').css('marginLeft','-385px'); 
	     	$('.entry-box-lun>ul>li').eq(3).prependTo($('.entry-box-lun ul'));
	     	$(".entry-box-lun ul").animate({marginLeft:"0px"},600);  
	     });

	     //图片库选项卡
	     $('.tuku-nav-one').mouseover(function(){
	     	$(this).css({background:'url(./img/rmnt_h_9c0d87f.jpg)no-repeat'});
	     	$('.tuku-nav-two').css({background:'url(./img/dhzn_f48b915.jpg)no-repeat'});
	     });
	     $('.tuku-nav-two').mouseover(function(){
	     	$(this).css({background:'url(./img/dhzn_h_7049beb.jpg)no-repeat'});
	     	$('.tuku-nav-one').css({background:'url(./img/rmnt_095873e.jpg)no-repeat'});
	     });
	     $('.tuku-nav-one').css({background:'url(./img/rmnt_h_9c0d87f.jpg)no-repeat'});
	     $('.tuku-list').eq(0).show();
	     $('.tuku-nav>a').mouseover(function(){
	     	$('.tuku-list').hide();
	     	$('.tuku-list').eq($(this).index()).fadeIn(400);
	     });
	     //最新推荐选项卡
	     //推拉门
	     $('.fea-item').eq(0).css({width:'558px'});
	     $('.fea-item-left').eq(0).attr('id','f0');
	     $('.fea-item').click(function(){
	     	var a = $(this).index();
	     	//拼接id名
	     	var c = 'f'+a;
	     	//console.log(c);
	     	$('.fea-item-left').removeAttr('id');
	     	$(this).find('.fea-item-left').attr('id',c);
	     	$(this).css({width:'558px'}).siblings().css({width:'106px'});
	     });
	     //同人专区选项卡
	     $('.tongren-nav-one').mouseover(function(){
	     	$(this).css({background:'url(./img/zrx_h_a9ff171.jpg)no-repeat'});
	     	$('.tongren-nav-two').css({background:'url(./img/dhhl_4b8b55a.jpg)no-repeat'});
	     });
	     $('.tongren-nav-two').mouseover(function(){
	     	$(this).css({background:'url(./img/dhhl_h_01528c2.jpg)no-repeat'});
	     	$('.tongren-nav-one').css({background:'url(./img/zrx_17ef947.jpg)no-repeat'});
	     });
	     $('.tongren-nav-one').css({background:'url(./img/zrx_h_a9ff171.jpg)no-repeat'});

	     $('.tongren-item').eq(0).show();
	     $('.tongren-nav>a').mouseover(function(){
	     	$('.tongren-item').hide();
	     	$('.tongren-item').eq($(this).index()).fadeIn(400);
	     });

	     //同人专区轮播图一
	     //代码初始化
	     var len_one = $(".lun-one .tongren-list").length;
        //console.log(len);
          $(".lun-one .tongren-list").eq(0).show();
          $(".lun-one-nav li").eq(0).addClass("tr-nav-active");
          $(".lun-one-nav li").mouseover(function(){
          	
          	//给自己添加class  给其他所有兄弟移出class
            $(this).addClass("tr-nav-active").siblings().removeClass("tr-nav-active");
            var index = $(this).index();
            //让n变为全局变量
            n=index;
            $(".lun-one .tongren-list").eq(index).fadeIn(800).siblings().fadeOut(300);
          });

            //自动
        var n = 0;
        var t = setInterval(moveR,5000);

          //核心向左的函数
        function moveL() {
            n--;
            if (n == -1) {
                  n = len_one-1;
            }
            $(".lun-one-nav li").eq(n).addClass("tr-nav-active").siblings().removeClass("tr-nav-active");
            $(".lun-one .tongren-list").eq(n).fadeIn(800).siblings().fadeOut(300);

        }
        //核心向右的函数
        function moveR() {
            n++;
            if (n == len_one) {
                n = 0;
            }
           $(".lun-one-nav li").eq(n).addClass("tr-nav-active").siblings().removeClass("tr-nav-active");
           $(".lun-one .tongren-list").eq(n).fadeIn(800).siblings().fadeOut(300);

        }
          //定时器的开始与结束
        $(".tongren-wrapper").hover(function() {
            clearInterval(t);
        }, function() {
            t = setInterval(moveR,5000)
        });
        //左边按钮的点击事件
        $(".tr-nav-left").click(function(){
            moveL();
        })
        //右边按钮的点击事件
        $(".tr-nav-right").click(function(){
            moveR();
        });

        //同人专区轮播图二
	     //代码初始化
	     var len_two = $(".lun-two .tongren-list").length;
        //console.log(len);
          $(".lun-two .tongren-list").eq(0).show();
          $(".lun-two-nav li").eq(0).addClass("tr-nav-active");
          $(".lun-two-nav li").mouseover(function(){
          	
          	//给自己添加class  给其他所有兄弟移出class
            $(this).addClass("tr-nav-active").siblings().removeClass("tr-nav-active");
            var index = $(this).index();
            //让n变为全局变量
            r=index;
            $(".lun-two .tongren-list").eq(index).fadeIn(800).siblings().fadeOut(300);
          });

            //自动
        var r = 0;
        var auto = setInterval(moveRR,5000);

          //核心向左的函数
        function moveLL() {
            r--;
            if (r == -1) {
                  r = len_two-1;
            }
            $(".lun-two-nav li").eq(r).addClass("tr-nav-active").siblings().removeClass("tr-nav-active");
            $(".lun-two .tongren-list").eq(r).fadeIn(800).siblings().fadeOut(300);

        }
        //核心向右的函数
        function moveRR() {
            r++;
            if (r == len_two) {
                r = 0;
            }
           $(".lun-two-nav li").eq(r).addClass("tr-nav-active").siblings().removeClass("tr-nav-active");
           $(".lun-two .tongren-list").eq(r).fadeIn(800).siblings().fadeOut(300);

        }
          //定时器的开始与结束
        $(".tongren-wrapper").hover(function() {
            clearInterval(auto);
        }, function() {
            auto = setInterval(moveRR,5000)
        });
        //左边按钮的点击事件
        $(".tr-nav-left").click(function(){
            moveLL();
        })
        //右边按钮的点击事件
        $(".tr-nav-right").click(function(){
            moveRR();
        });

        //产品推荐小轮播图
         function att(){
         	$('.product-box-lun').animate({marginLeft:'-192px'},1200,function(){
	  			$('.product-box-lun a').eq(0).appendTo($('.product-box-lun'));  
	  			$('.product-box-lun').css('marginLeft','0px');
	     	});
         }
         var attrun = setInterval(att,3000);
         var kk = 0;
         function att2(){
         	kk++;
         	if(kk==($('.product-nav a').length)){
         		kk=0;
         	}
         	$('.product-nav a').eq(kk).addClass("product-nav-active").siblings().removeClass("product-nav-active");
         }
         var att2run = setInterval(att2,3100);

         //常用资料选项卡
         $('.cyzi-box-item').eq(0).show();
         $('.cyzi-news-nav a').eq(0).addClass('cyzi-active');
         $('.cyzi-news-nav a').mouseover(function(){
         	$('.cyzi-box-item').hide();
         	$(this).addClass('cyzi-active').siblings().removeClass('cyzi-active');
         	$('.cyzi-box-item').eq($(this).index()).show();
         });

         //下边官方团队
         var p = 0;
         $('.btn-team').click(function(){
         	p++;
         	if(p%2==1){
         		$('.team-box').css({width:'1200px'});
         		$('.btn-team').css({'background-position':'-159px -575px'});
         	}else{
         		$('.team-box').css({width:'0px'});
         		$('.btn-team').css({'background-position':'-81px -575px'});
         	}
         	
         });

         //下方的推荐
         var o = 0;
         $('.fixed-btn').click(function(){
         	o++;
         	if(o%2==1){
         		$('.fixed').css({height:'0px'});
         		$(this).css({background:'url(./img/down-btn_bac1136.jpg)'});
         	}else{
         		$('.fixed').css({height:'83px'});
         		$(this).css({background:'url(./img/up-btn_3ec53d8.jpg)'})
         	}
         });
         




	     	
	     








});
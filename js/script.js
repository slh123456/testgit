$(document).ready(function(){
//nav 
	$('.type .subnav').hover(function(){
		$('.m_nav').hide();
		$('.type .subnav').removeClass('on');
		$(this).addClass('on');
		$(this).parent().find('.m_nav').show();
	});
	$('.type .m_nav').mouseleave(function(){
		$('.m_nav').hide();
		$('.type .subnav').removeClass('on');
	});
	$('.fashion_nav').mouseleave(function(){
		$('.m_nav').hide();
		$('.type .subnav').removeClass('on');
	});	   
						   
//幻灯片代码
void function() {
	var n = 0;
	var $arrPics = $("#arrpisc>li");
	var $arrBtns = $("#sliderbtn>a");
	var $hotLink = $("#hotlink");
	var arrImgPos = [["-65px", "0px"],["-200px", "-135px"],["-348px", "-283px"],["-485px", "-420px"],["-617px", "-552px"]];
	function playEnter(i) {
		$arrPics.eq(i).fadeIn().siblings().hide();
		$hotLink.attr("href", $("a",$arrPics.eq(i)).attr("href")).html($("a img",$arrPics.eq(i)).attr("alt"));
		for (var j = 0; j < arrImgPos.length; j++) {
			if (j == i) {
				$arrBtns.eq(i).css({"background-position" : "0px " + arrImgPos[j][1]});
			} else {
				$arrBtns.eq(j).css({"background-position" : "0px " + arrImgPos[j][0]});
			}
		}
		n = i;
	}
	
	$arrBtns.mouseenter(function(){
		var i = $arrBtns.index(this);
		playEnter(i);
	});
	
	if (autoSlider) {
		if (window.timer) {
			clearInterval(window.timer);
		} 
		window.timer = setInterval(function() {
			if (n == $arrPics.length) {
				n = 0;
			}
			playEnter(n);
			n++;
		}, delayTime);
	}					   
	playEnter(n);
}();

void function () {
	
	function GallaryData(data) {
			this.Data = data;
			this.getData(6);//init
	}
	GallaryData.prototype = {
		getData : function (n) {
			
			$.each(this.Data.slice(n, this.Data.length), function(key,obj){
				$(obj).fadeOut(function(){
					$(this).attr("class", "imgs").css('display','');
				});
			});
			
			var mydata = this.Data.slice(0,n);
			/*
			for (var i = 0; i<n;i++) {
				$(mydata[i]).show();
			}*/
			//$(mydata[0]).hide();
			return mydata;
		},
		freshData : function(n) {
			return this.Data = this.Data.slice(n, this.Data.length).concat(this.Data.slice(0,n));
		}
	}
	var doms = (function(){
		var doms = [];
		var s = $("#picwall>div");
		for (var i=0;i<s.length;i++) {
			doms.push(s[i]);
		}
		return doms;
	})();
	var g = new GallaryData(doms);
	
	var arrDivPos = ["imgs1","imgs2","imgs3","imgs4","imgs5","imgs6"]; 
	var domsPosition = [
		{
			left:20,
			top : 92,
			width : 205,
			height : 255
		},
		{
			left:80,
			top : 70,
			width : 240,
			height : 305
		},
		{
			left:160,
			top : 50,
			width : 260,
			height : 355
		},
		{
			left:430,
			top : 50,
			width : 260,
			height : 355
		},
		{
			left:530,
			top : 70,
			width : 240,
			height : 305
		},
		{
			left:630,
			top : 92,
			width : 205,
			height : 255
		}
	];
	var zindex_reset = [1,2,3,3,2,1];
	function go(flag) {
		g.freshData(flag);
		var d = g.getData(6);
		var n = 0;
		for (var j = 0; j<6; j++) {
			$(d[j]).css("z-index",zindex_reset[j]);
		}
		for (var i = 0; i < 6; i++) {
			if ( i == 2 && flag > 0 ) { 
				$(d[i]).css("z-index", 4);
			} 
			if (i == 5 || i == 0) {
				$(d[i]).css(domsPosition[i]).css({
					"z-index" :zindex_reset[i]
				});
				$(d[i]).attr("class", arrDivPos[i]);
			} else {
				$(d[i]).animate({
					"left" : domsPosition[i].left
				}, 300, function(){
					if ( i == 2 && flag > 0 ) { 
						$(d[i]).css("z-index", 3);
					} 
				}).css({
					"top" : domsPosition[i].top
				});
				$(d[i]).attr("class", arrDivPos[i]);
			}
		}	
		//alert(n);
		
	}
	$("#arrowright").click(function(){
		go(-1);
	});
	
	$("#arrowleft").click(function(){
		go(1);
	});
	}();
});
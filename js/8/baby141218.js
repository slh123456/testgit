
//显示与隐藏列表
function showList(id,num){
	if(num == 1){
		document.getElementById(id).style.display = "block";
	}
	else{
		document.getElementById(id).style.display = "none";
	}
}

//选项卡切换1
	<!--
	/* 更换显示样式*/
	function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
	var menu=document.getElementById(name+i);
	var con=document.getElementById(name+"_"+i);
	menu.className=i==cursel?"hover":"";
	con.style.display=i==cursel?"block":"none";
	}
	}
	//-->


//焦点图
 var n=0;
function Mea(value){
                        n=value;
                        setBg(value);
                        plays(value);
                        conaus(n);
                        }
                    function setBg(value){
                        for(var i=0;i<6;i++)
                            document.getElementById("t"+i+"").className="bg";
                            document.getElementById("t"+value+"").className="active";
                        } 
                    function plays(value){
                        try
                        {
                            with (hotpic){
                                filters[0].Apply();
                                for(i=0;i<6;i++)i==value?children[i].style.display="block":children[i].style.display="none"; 
                                filters[0].play(); 		
                                }
                        }
                        catch(e)
                        {
                            var d = document.getElementById("hotpic").getElementsByTagName("div");
                            for(i=0;i<6;i++)i==value?d[i].style.display="block":d[i].style.display="none"; 
                        }
                    }
                    function conaus(value){
                        try
                        {
                            with (conau){
                                    for(i=0;i<6;i++)i==value?children[i].style.display="block":children[i].style.display="none"; 
                                    }
                        }
                        catch(e)
                        {
                            var d = document.getElementById("conau").getElementsByTagName("div");
                            for(i=0;i<6;i++)i==value?d[i].style.display="block":d[i].style.display="none"; 
                        }
                    }
                    function clearAuto(){clearInterval(autoStart)}
                    function setAuto(){autoStart=setInterval("auto(n)", 4000)}
                    function auto(){
                        n++;
                        if(n>5)n=0;
                        Mea(n);
                        conaus(n);
                    } 
                    setAuto(); 

//top line bar
$(function(){
  $(".lineBar li:eq(1) dl").show().children("dd:not(:first)").hide();
  $(".barL2 dt").mouseover(function(){
  $(this).next().show().parent().siblings("dl").children("dd").hide();
  });
  $(".bar1:not(:first)").mouseover(function(){
  $(this).parent().siblings("li").find("dl").hide();
  $(this).nextAll().show();
  $(this).nextAll("dl:not(:first)").children("dd").hide();
  $(this).next().children("dd").show();
  });
  $(".lineBar dd a").hover(function(){
	  $(this).append("<i>" + $(this).attr("title") + "</i>");
  },function(){
	  $(this).empty();
  });
  

// other jq  
  $(".formBut,.olBut").hover(function(){
	  $(this).toggleClass("hover");
  });
  $(".right210 .box210:last").css("margin-bottom","0");
  
  //$('.mod-hotkey .tabs').tabs('.mod-hotkey .panes>ul', {event:'mouseover'});
});


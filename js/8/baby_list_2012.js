$(document).ready(function () {

    //搜索按钮鼠标悬浮效果
    $(".list-search-btn1").mouseover(function () {
        $(this).addClass("list-search-btn1-over");
    });
    $(".list-search-btn1").mouseout(function () {
        $(this).removeClass("list-search-btn1-over");
    });

    //文章列表鼠标悬浮效果
    $(".list-arts li").mouseover(function () {
        $(this).addClass("li-over");
    });
    $(".list-arts li").mouseout(function () {
        $(this).removeClass("li-over");
    });

    //分享下拉
    $("#g_nav").mouseover(function () {
        $(this).children("li").addClass("over");
    });
    $("#g_nav").mouseout(function () {
        $(this).children("li").removeClass("over");
    });

    //top line bar
    $(".lineBar li:eq(1) dl").show().children("dd:not(:first)").hide();
    $(".barL2 dt").mouseover(function () {
        $(this).next().show().parent().siblings("dl").children("dd").hide();
    });
    $(".bar1:not(:first)").mouseover(function () {
        $(this).parent().siblings("li").find("dl").hide();
        $(this).nextAll().show();
        $(this).nextAll("dl:not(:first)").children("dd").hide();
        $(this).next().children("dd").show();
    });
    $(".lineBar dd a").hover(function () {
        $(this).append("<i>" + $(this).attr("title") + "</i>");
    }, function () {
        $(this).empty();
    });


    //输入框内容提示
    $(".formtexts").focus(function () {
        if ($(this).val() == this.defaultValue) {
            $(this).val("").addClass("formtexts2");
        }
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).val(this.defaultValue).removeClass("formtexts2");
        }
    });

    //按钮鼠标划过效果
    $(".formbtns").hover(function () {
        $(this).addClass("btn_hover");
    }, function () {
        $(this).removeClass("btn_hover");
    });
    $(".formbtns2").hover(function () {
        $(this).addClass("btn2_hover");
    }, function () {
        $(this).removeClass("btn2_hover");
    });

});

//选项卡切换
function kushowTab(n1, n2) {
    var h = document.getElementById("Tab" + n1).getElementsByTagName("strong");
    var d = document.getElementById("Tab" + n1).getElementsByTagName("div");
    for (var i = 0; i < h.length; i++) {
        if (n2 - 1 == i) {
            h[i].className += " ku_over_n";
            d[i].className += " block";
        }
        else {
            h[i].className = " ";
            d[i].className = " ";
        }
    }
}

//选项卡切换
function showTab(n1, n2) {
    var h = document.getElementById("tab" + n1).getElementsByTagName("h3");
    var d = document.getElementById("tab" + n1).getElementsByTagName("div");
    for (var i = 0; i < h.length; i++) {
        if (n2 - 1 == i) {
            h[i].className += " up";
            d[i].className += " block";
        }
        else {
            h[i].className = " ";
            d[i].className = " ";
        }
    }
}


//收藏本页
var isIE = (document.all && document.getElementById && !window.opera) ? true : false;
var isMozilla = (!document.all && document.getElementById && !window.opera) ? true : false;
var isOpera = (window.opera) ? true : false;
var seturl = 'url(#default#homepage)';
var weburl = window.location.href;
var webname = document.title;

function addfavorite() {

    if (isMozilla) {
        if (document.all) { window.external.addFavorite(weburl, webname); }
        else if (window.sidebar) { window.sidebar.addPanel(webname, weburl, ""); }
    }
    if (isIE) { window.external.AddFavorite(weburl, webname); }
}




  

var keyvalue1 = "请输入您要查询的疾病";
var keyvalue2 = "请输入您要查询的症状";
var keyvalue3 = "请输入您要查询的医院";
var keyvalue4 = "请输入您要查询的医生";
var keyvalue5 = "请输入您要查询的药品";
var keyvalue6 = "服务员 营业员 普工 客服 等";

var color999 = "#999";
var color666 = "#666";

//showTab(选项卡ID,数量,元素ID,是否开启content)
function showTabSearch(Tid, Num, NavID, isCon) {
    var sTab;
    var sTabContent;
    var sUrl = "http://";

    //更改tab的样式
    for (var i = 1; i < Num + 1; i++) {
        sTab = document.getElementById("tab_" + Tid + i);
        sTab.className = "";
    }
    sTab = document.getElementById("tab_" + Tid + NavID);
    sTab.className = "current";

    //更改sTabContent的显隐
    if (isCon == true) {
        for (var i = 1; i < Num + 1; i++) {
            sTabContent = document.getElementById("tab_con_" + Tid + i);
            sTabContent.style.display = "none";
        }
        sTabContent = document.getElementById("tab_con_" + Tid + NavID);
        sTabContent.style.display = "block";
    }

    if (Tid == "search") {

        //更改tab对应的表单的action地址
        if (NavID == 1) { document.SearchForm.action = sUrl + "jbk.aspx"; }
        if (NavID == 2) { document.SearchForm.action = sUrl + "zzk.aspx"; }
        if (NavID == 3) { document.SearchForm.action = sUrl + "yyk.aspx"; }
        if (NavID == 4) { document.SearchForm.action = sUrl + "ysk.aspx"; }
        if (NavID == 5) { document.SearchForm.action = sUrl + "ypk.aspx"; }
        if (NavID == 6) { document.SearchForm.action = "http://"; }

        //更改tab对应的表单的input的value值
        var s_keyword = document.getElementById("words");
        if (NavID == 1) { s_keyword.value = keyvalue1; s_keyword.style.color = color999; s_keyword.name = 'words' }
        if (NavID == 2) { s_keyword.value = keyvalue2; s_keyword.style.color = color999; s_keyword.name = 'words' }
        if (NavID == 3) { s_keyword.value = keyvalue3; s_keyword.style.color = color999; s_keyword.name = 'words' }
        if (NavID == 4) { s_keyword.value = keyvalue4; s_keyword.style.color = color999; s_keyword.name = 'words' }
        if (NavID == 5) { s_keyword.value = keyvalue5; s_keyword.style.color = color999; s_keyword.name = 'words' }
        if (NavID == 6) { s_keyword.value = keyvalue6; s_keyword.style.color = color999; s_keyword.name = 'q' }
    }

}

//搜索栏input的onblur与onfocus事件
function chkonfocus() {
    var s_keyword = document.getElementById("w");

    if (s_keyword.value == keyvalue1) {
        s_keyword.value = "";
        s_keyword.style.color = color666;
        s_keyword.onblur = function () {
            if (s_keyword.value == "") {
                s_keyword.value = keyvalue1;
                s_keyword.style.color = color999;
            }
        }

    }

    if (s_keyword.value == keyvalue2) {
        s_keyword.value = "";
        s_keyword.style.color = color666;
        s_keyword.onblur = function () {
            if (s_keyword.value == "") {
                s_keyword.value = keyvalue2;
                s_keyword.style.color = color999;
            }
        }

    }

    if (s_keyword.value == keyvalue3) {
        s_keyword.value = "";
        s_keyword.style.color = color666;
        s_keyword.onblur = function () {
            if (s_keyword.value == "") {
                s_keyword.value = keyvalue3;
                s_keyword.style.color = color999;
            }
        }

    }

    if (s_keyword.value == keyvalue4) {
        s_keyword.value = "";
        s_keyword.style.color = color666;
        s_keyword.onblur = function () {
            if (s_keyword.value == "") {
                s_keyword.value = keyvalue4;
                s_keyword.style.color = color999;
            }
        }

    }

    if (s_keyword.value == keyvalue5) {
        s_keyword.value = "";
        s_keyword.style.color = color666;
        s_keyword.onblur = function () {
            if (s_keyword.value == "") {
                s_keyword.value = keyvalue5;
                s_keyword.style.color = color999;
            }
        }

    }

    if (s_keyword.value == keyvalue6) {
        s_keyword.value = "";
        s_keyword.style.color = color666;
        s_keyword.onblur = function () {
            if (s_keyword.value == "") {
                s_keyword.value = keyvalue6;
                s_keyword.style.color = color999;
            }
        }

    }
}

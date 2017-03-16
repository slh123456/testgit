function add() {
    //    $("#loading").show();
    var gangwei = $('#gangwei').val();
    if (gangwei == "") {
        alert("请填写岗位");
        return;
    }
    $.ajax({
        type: "POST",
        url: "add.ashx",
        datatype: "json",
        data: {
          'gongsi': $("#gongsi").val()
        , 'gangwei': $("#gangwei").val()
        , 'renshu': $("#renshu").val()
        , 'xingbie': GetSex()
        , 'nianling1': $("#nianling1 option:selected").val()
        , 'nianling2': $("#nianling2 option:selected").val()
//        , 'gongzi': $("#gongzi").val()
        , 'shijian': $("#shijian").val()
        , 'daiyu': $("#daiyu").val()
        , 'yaoqiu': $("#yaoqiu").val()
        , 'zhize': $("#zhize").val()
        , 'dizhi': $("#dizhi").val()
        , 'lianxi': $("#lianxi").val()
        , 'jianjie': $("#jianjie").val()
        , 'qzjz': $("#qzjz option:selected").val()
        },
        error: function () { alert('Error'); },
        success: function (data) {
            var json = eval("(" + data + ")");
            if (json.Status == 200) { window.location.href = "asucc2.aspx?sid=" + json.sid; }
            else { alert('发布错误,请重新发布!'); }
        }
    });
}

function modi(sid) {
    $.ajax({
        type: "POST",
        url: "modi.ashx",
        datatype: "json",
        data: {
          'sid': sid
        , 'gongsi': $("#gongsi").val()
        , 'gangwei': $("#gangwei").val()
        , 'xingbie': GetSex()
        , 'nianling1': $("#nianling1 option:selected").val()
        , 'nianling2': $("#nianling2 option:selected").val()
        , 'shijian': $("#shijian").val()
        , 'daiyu': $("#daiyu").val()
        , 'yaoqiu': $("#yaoqiu").val()
        , 'zhize': $("#zhize").val()
        , 'dizhi': $("#dizhi").val()
        , 'lianxi': $("#lianxi").val()
        , 'jianjie': $("#jianjie").val()
        , 'qzjz': $("#qzjz option:selected").val()
        },
        error: function () { alert('Error'); },
        success: function (data) {
            var json = eval("(" + data + ")");
            if (json.Status == 200) { window.location.href = "asucc2.aspx?sid=" + json.sid; }
            else { alert('发布错误,请重新发布!'); }
        }
    });
}

function sech() {
    $.ajax({
        type: "POST",
        url: "yzm.ashx",
        datatype: "json",
        data: {
            'yzm': $("#yzm").val()
        },
        error: function () { alert('Error'); },
        success: function (data) {
            var json = eval("(" + data + ")");
            if (json.Status == 200) { window.location.href = "l2.aspx?f=1"; }
            else { alert('发布错误,请重新发布!'); }
        }
    });
}

function wx1(sid) {
    $.ajax({
        type: "POST",
        url: "/wx1.ashx",
        datatype: "json",
        data: {
            'sid': sid
        },
        error: function () { alert('Error'); },
        success: function (data) {
            var json = eval("(" + data + ")");
            if (json.Status == 200) { alert('发布成功'); }
            else { alert('发布错误!'); }
        }
    });
}
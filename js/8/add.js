function add() {
    var gangwei = $('#gangwei').val();
    if (gangwei == "") {
        alert("请填写岗位");
        return;
    }
    var val = $("#sheng option:selected").val();
    if (val == '') {
        alert('请选择省');
        return;
    }
    var val = $("#shi option:selected").val();
    if (val == '') {
        alert('请选择市');
        return;
    }
    var val = $("#qu option:selected").val();
    if (val == '') {
        alert('请选择区');
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
        , 'shijian': $("#shijian").val()
        , 'daiyu': $("#daiyu").val()
        , 'yaoqiu': $("#yaoqiu").val()
        , 'zhize': $("#zhize").val()
        , 'sheng': $("#sheng option:selected").val()
        , 'shi': $("#shi option:selected").val()
        , 'qu': $("#qu option:selected").val()
        , 'dizhi': $("#dizhi").val()
        , 'lianxi': $("#lianxi").val()
        , 'youxiang': $("#youxiang").val()
        , 'jianjie': $("#jianjie").val()
        , 'qzjz': $("#qzjz option:selected").val()
        , 'bc': $("#cbbc").is(":checked")
        , 'bz': $("#cbbz").is(":checked")
        },
        error: function () { alert('Error'); },
        success: function (data) {
            var json = eval("(" + data + ")");
            if (json.Status == 200) { window.location.href = "asucc.aspx?sid=" + json.sid; }
            else { alert('发布错误,请重新发布!'); }
        }
    });
};

function modi(sid) {
    var gangwei = $('#gangwei').val();
    if (gangwei == "") {
        alert("请填写岗位");
        return;
    }
    var val = $("#sheng option:selected").val();
    if (val == '') {
        alert('请选择省');
        return;
    }
    var val = $("#shi option:selected").val();
    if (val == '') {
        alert('请选择市');
        return;
    }
    var val = $("#qu option:selected").val();
    if (val == '') {
        alert('请选择区');
        return;
    }

    $.ajax({
        type: "POST",
        url: "modi.ashx",
        datatype: "json",
        data: {
          'sid': sid
        , 'gongsi': $("#gongsi").val()
        , 'gangwei': $("#gangwei").val()
        , 'renshu': $("#renshu").val()
        , 'xingbie': GetSex()
        , 'nianling1': $("#nianling1 option:selected").val()
        , 'nianling2': $("#nianling2 option:selected").val()
        , 'shijian': $("#shijian").val()
        , 'daiyu': $("#daiyu").val()
        , 'yaoqiu': $("#yaoqiu").val()
        , 'zhize': $("#zhize").val()
        , 'sheng': $("#sheng option:selected").val()
        , 'shi': $("#shi option:selected").val()
        , 'qu': $("#qu option:selected").val()
        , 'dizhi': $("#dizhi").val()
        , 'sheng': $("#sheng option:selected").val()
        , 'shi': $("#shi option:selected").val()
        , 'qu': $("#qu option:selected").val()
        , 'lianxi': $("#lianxi").val()
        , 'youxiang': $("#youxiang").val()
        , 'jianjie': $("#jianjie").val()
        , 'qzjz': $("#qzjz option:selected").val()
        , 'bc': $("#cbbc").is(":checked")
        , 'bz': $("#cbbz").is(":checked")
        },
        error: function () { alert('Error'); },
        success: function (data) {
            var json = eval("(" + data + ")");
            if (json.Status == 200) { window.location.href = "asucc.aspx?sid=" + json.sid; }
            else { alert('发布错误,请重新发布!'); }
        }
    });
}

function add_qz() {
    //    $("#loading").show();
    var gangwei = $('#gangwei').val();
    if (gangwei == "") {
        alert("请填写岗位");
        return;
    }
    var val = $("#sheng option:selected").val();
    if (val == '') {
        alert('请选择省');
        return;
    }
    var val = $("#shi option:selected").val();
    if (val == '') {
        alert('请选择市');
        return;
    }
    var val = $("#qu option:selected").val();
    if (val == '') {
        alert('请选择区');
        return;
    }

    $.ajax({
        type: "POST",
        url: "add_qz.ashx",
        datatype: "json",
        data: {
          'gangwei': $("#gangwei").val()
        , 'xingming': $("#xingming").val()
        , 'xingbie': GetSex()
        , 'nianling1': $("#nianling1 option:selected").val()
        , 'daiyu': $("#daiyu").val()
        , 'yaoqiu': $("#yaoqiu").val()
        , 'sheng': $("#sheng option:selected").val()
        , 'shi': $("#shi option:selected").val()
        , 'qu': $("#qu option:selected").val()
        , 'dizhi': $("#dizhi").val()
        , 'lianxi': $("#lianxi").val()
        , 'qzjz': $("#qzjz option:selected").val()
        },
        error: function () { alert('Error'); },
        success: function (data) {
            var json = eval("(" + data + ")");
            if (json.Status == 200) { window.location.href = "asucc_qz.aspx?sid=" + json.sid; }
            else { alert('发布错误,请重新发布!'); }
        }
    });
}

function modi_qz(sid) {
    var gangwei = $('#gangwei').val();
    if (gangwei == "") {
        alert("请填写岗位");
        return;
    }
    var val = $("#sheng option:selected").val();
    if (val == '') {
        alert('请选择省');
        return;
    }
    var val = $("#shi option:selected").val();
    if (val == '') {
        alert('请选择市');
        return;
    }
    var val = $("#qu option:selected").val();
    if (val == '') {
        alert('请选择区');
        return;
    }

    $.ajax({
        type: "POST",
        url: "modi_qz.ashx",
        datatype: "json",
        data: {
          'sid': sid
        , 'gangwei': $("#gangwei").val()
        , 'xingming': $("#xingming").val()
        , 'xingbie': GetSex()
        , 'nianling1': $("#nianling1 option:selected").val()
        , 'shijian': $("#shijian").val()
        , 'daiyu': $("#daiyu").val()
        , 'yaoqiu': $("#yaoqiu").val()
        , 'sheng': $("#sheng option:selected").val()
        , 'shi': $("#shi option:selected").val()
        , 'qu': $("#qu option:selected").val()
        , 'dizhi': $("#dizhi").val()
        , 'lianxi': $("#lianxi").val()
        , 'qzjz': $("#qzjz option:selected").val()
        },
        error: function () { alert('Error'); },
        success: function (data) {
            var json = eval("(" + data + ")");
            if (json.Status == 200) { window.location.href = "asucc_qz.aspx?sid=" + json.sid; }
            else { alert('发布错误,请重新发布!'); }
        }
    });
}

function sech(t) {
    $.ajax({
        type: "POST",
        url: "yzm.ashx?t="+t,
        datatype: "json",
        data: {
            'yzm': $("#yzm").val()
        },
        error: function () { alert('Error'); },
        success: function (data) {
            var json = eval("(" + data + ")");
            if (json.Status == 200) { window.location.href = "l.aspx?f=1"; }
            else if (json.Status == 300) { window.location.href = "l_qz.aspx?f=1"; }
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
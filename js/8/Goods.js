$(function () {

    //****************************************素材图片Begin***************************************************//

    $(".uploadimg .box:has(input)").parent().mouseover(function () {
        $(this).find(".remove").show();
    });

    $(".uploadimg .box:has(input)").parent().mouseout(function () {
        $(this).parent().find(".remove").hide();
    });

    $(".uploadimg .btn").each(function () {
        var imgID = $(this).attr("rel");
        new AjaxUpload(this, {
            action: '/admin/upload.aspx',
            name: 'myfile',
            onSubmit: function (file, ext) {
                if (ext && /^(jpg|png|jpeg|gif)$/.test(ext)) {
                    //Setting data 
                    this.setData({
                        'ImgID': imgID
                    });
                } else {
                    alert("文件类型不正确或没有选择文件！");
                    return false;
                }
                $("#" + imgID).html('<img src="/admin/images/ico_loading.gif" align="absmiddle" /> ');
                return true;
            },
            onComplete: function (file, response) {
                if (response == "0") {
                    alert("图片不能超过2M！");
                    $("#" + imgID).html('<img src="/admin/images/noimage.jpg" align="absmiddle" /> ');
                }
                else {
//                    alert(imgID);
                    $("#" + imgID).html('<img src="' + response + '" width="86" align="absmiddle" /><input type="hidden" name="' + imgID + '" value="' + response + '" />');
                    $("#" + imgID).attr("href", "javascript:OpenDialogImage('','" + response + "');");
                    BindImageEvent(imgID);
                }
            }
        });

    });

    //****************************************素材图片End***************************************************//

    $(".ChangeSpecName").dblclick(function () {
        objID = $(this).attr('ObjID');
        text = $(this).text();
        if (text) {
            $(this).html("<input type='text' size='10' class='textbox' id='" + objID + "' name='" + objID + "' value=" + text + ">");
            $(".ChangeSpecName > input").focus().blur(function () {

            })
        }
    })

});

// 绑定上传图片鼠标经过事件
function BindImageEvent(objID) {
    $("#"+ objID).parent().mouseover(function () {
        $(this).find(".remove").show();
    });

    $("#" + objID).parent().mouseout(function () {
        $(this).parent().find(".remove").hide();
    });
}

function Remove(objID) {
    $("#" + objID).parent().unbind();
    $("#" + objID).html("<img src=\"images/noimage.jpg\" />");
    $("#" + objID).attr("href", "javascript:;");
    $("#" + objID).parent().find(".remove").hide();
}


// 表单检查
function CheckSubmit() {

    //
    var hasEmptyPicTitle = false;
    var PicTitle = "";
    if (document.getElementById("txtPicTitle")) {
        PicTitle = $("#txtPicTitle").val();
        if (PicTitle == "") {
            hasEmptyPicTitle = true;
        }
    }

    if (hasEmptyPicTitle) {
        alert("请输入标题");
        return false;
    }

    //
    var hasEmptyBaiDuShareLink = false;
    var BaiDuShareLink = "";
    if (document.getElementById("txtBaiDuShareLink")) {
        BaiDuShareLink = $("#txtBaiDuShareLink").val();
        if (BaiDuShareLink == "") {
            hasEmptyBaiDuShareLink = true;
        }
    }

    if (hasEmptyBaiDuShareLink) {
        alert("请输入附件地址");
        return false;
    }

    return true;

}
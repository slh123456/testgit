function HBImage(name) { //初始化属性
    this.name = name;      //对象名称
}

HBImage.prototype.autoSizeBig = function(objW, objH, maxw, maxh) {
    MAX_WIDTH = maxw;
    MAX_HEIGHT = maxh;
    var W = objW;
    var H = objH;
    if (W < MAX_WIDTH && H < MAX_HEIGHT) {
        return { w: W, h: H };
    }
    if (W / H > MAX_WIDTH / MAX_HEIGHT) {
        return { w: MAX_WIDTH, h: MAX_WIDTH * H / W }
    } else {
        return { w: MAX_HEIGHT * W / H, h: MAX_HEIGHT }
    }
}

HBImage.prototype.autoSize=function(obj, isAlb) {
    MAX_WIDTH = 95;
    MAX_HEIGHT = 95;
    IMG_MARGIN = 7;

    var tImg = new Image();
    tImg.onload = function() {
        var w = this.width;
        var h = this.height;
        if (w < MAX_WIDTH && h < MAX_HEIGHT) {
            obj.width = w;
            obj.height = h;
            obj.style.marginLeft = IMG_MARGIN + (MAX_WIDTH - w) / 2 + 'px';
            obj.style.marginTop = IMG_MARGIN + (MAX_HEIGHT - h) / 2 + 'px';
            //obj.hspace=(MAX_WIDTH-w)/2; obj.vspace=(MAX_HEIGHT-h)/2;
            return;
        }
        if (w > h) {
            obj.width = MAX_WIDTH; obj.height = MAX_WIDTH * h / w;
        }
        else {
            obj.height = MAX_HEIGHT; obj.width = MAX_HEIGHT * w / h;
            //obj.width+=2; 
        }
        if (isAlb) {
            if (document.all) {
                obj.style.marginLeft = IMG_MARGIN + (MAX_WIDTH - obj.width) / 2 + 6 + 'px';
                obj.width = obj.width - 4;
            }
            else obj.style.marginLeft = IMG_MARGIN + (MAX_WIDTH - obj.width) / 2 + 3 + 'px';
        }
        else obj.style.marginLeft = IMG_MARGIN + (MAX_WIDTH - obj.width) / 2 + 'px';
        obj.style.marginTop = IMG_MARGIN + (MAX_HEIGHT - obj.height) / 2 + 'px';
        //obj.hspace=(MAX_WIDTH-obj.width)/2; obj.vspace=(MAX_HEIGHT-obj.height)/2;
    }
    tImg.src = obj.src;
}

HBImage.prototype.RSize = function(img, maxw, maxh) {
    var imgObj = this.autoSizeBig(img.offsetWidth, img.offsetHeight, maxw, maxh);
    img.width = imgObj.w;
    img.height = imgObj.h;
}

var HBImage = new HBImage("HBImage");
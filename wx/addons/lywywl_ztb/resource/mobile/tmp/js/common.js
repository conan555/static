// JavaScript Document
$(document).ready(function(e) {

    if($(".music audio").length > 0){

        //音乐
        $(".music").click(function(e) {
            if($(this).hasClass("musicX")){
                $(this).removeClass("musicX")
                $(this).find("audio").get(0).play();
            }
            else{
                $(this).addClass("musicX")
                $(this).find("audio").get(0).pause();
            }
        });
        // 兼容在微信里自动播放
        document.addEventListener("WeixinJSBridgeReady", function () {
            $(".music audio").get(0).play();
        }, false);

    }

    //海报弹层
    $(".posterPopup").hide();
    $(".posterIcon").click(function() {
        $(".posterPopup").show();
        $(".poster_banner").html("");
        $(".poster_box").children("p").html("海报生成中…");
        $(".posterPopup .close_popup").hide();
        $(".poster_box").css("top",($(window).height()-$(".poster_box").height())/2+"px");
        $.ajax({
            type: 'post',
            url: $(".poster_con").data('url'),
            data:{},
            dataType: 'json',
            success: function(data){
                if(data.status == 1){
                    $(".poster_banner").html("<img src="+data.path +"?time="+ new Date().getTime() +" id='poster' style='display: none;'>");
                    var image = new Image();
                    image.src = $("#poster").attr("src");
                    image.onload = function(){
                        $(".poster_box").children("p").html("长按图片保存到相册");
                        $(".posterPopup .close_popup").show();
                        $("#poster").show();
                        $("#poster")[0].style.maxHeight=$(window).height()/($(window).width()/10)-4.6 +"rem";
                        $(".poster_box").css("top",($(window).height()-$("#poster").height())/2-45+"px");
                    };
                }
                else
                {
                    $(".posterPopup").hide();
                    layer.open({ content: data.msg, skin: 'msg', time: 2 });
                }
            },
            error: function(xhr, type){
                $(".posterPopup").hide();
                layer.open({ content: '系统繁忙，请稍后重试！', skin: 'msg', time: 2 });
            }
        });
    });
    $(".poster_box .close_popup").click(function() {
        $(".posterPopup").hide();
    });

    //分享弹层
    $(".shareIcon").click(function(e) {
        $(".sharePopup").show();
        $(".share_box").show();
        $(".way_one_con").hide();
        $(".share_box").css("top",($(window).height()-$(".share_box").height())/2+"px");
    });
    $("#way_one").click(function(e) {
        $(".share_box").hide();
        $(".way_one_con").show();
    });
    if($('#way_two').length > 0)
    {
        var clipboard = new Clipboard(document.getElementById('way_two'));
        clipboard.on('success', function (e) {
            layer.open({ content: '内容已复制', skin: 'msg', time: 2 });
        });
        clipboard.on('error', function (e) {
            layer.open({ content: '对不起，浏览器不支持，请手动复制内容！', skin: 'msg', time: 2 });
        });
    }

    $(".sharePopup .mask").click(function(e) {
        $(".sharePopup").hide();
    });

    //联盟拓客卡券核销码弹窗
    $(".card_code").click(function(e) {
        $(".popupVerf").show();
        $(".verfBox").css("top",($(window).height()-$(".verfBox").height())/2+"px");
    });
    $(".verfBox .closeBtn").click(function(e) {
        $(".popupVerf").hide();
    });

    //锦鲤拓客 查看更多抽奖码
    $(".fishCode_popup").hide();
    $(".showWriteCode").click(function() {
        $(".fishCode_popup").show();
        $(".fishCode_box").css("top",($(window).height()-$(".fishCode_box").height())/2+"px");
    });
    $(".fishCode_box .close_popup").click(function() {
        $(".fishCode_popup").hide();
    });

    //锦鲤商家详情页
    $(".koiMerchant").css("margin-top",($(window).height()-$(".koiMerchant").height())/2+"px");
    //商家地图位置弹出
    $(".location").click(function(e) {
        $(".map").show();
    });
    $(".mapBg").click(function(e) {
        $(".map").hide();
    });

    //锦鲤核销页面
    $(".itemState").click(function(e) {
        $(".popupVerf").show();
        $(".verfBox").css("margin-top",($(window).height()-$(".verfBox").height())/2+"px");
    });
    //核销个人信息关闭
    $(".btnVerf,.close_popup").click(function(e) {
        $(".popupVerf").hide();
    });

    //抽奖登记
    $(".registerPop").css("margin-top",($(window).height()-$(".registerPop").height())/2+"px");
    $("#registerClose").click(function(e) {
        $(".popup").hide();
    });

    //购买登记
    $(".buyPop").css("margin-top",($(window).height()-$(".buyPop").height())/2+"px");
    $("#buyClose").click(function(e) {
        $(".buypopup").hide();
    });

    //帮助砍价登记
    $(".helpPop").css("margin-top",($(window).height()-$(".helpPop").height())/2+"px");
    $("#helpClose").click(function(e) {
        $(".helppopup").hide();
    });

    //错误提示页
    $(".error_con").css("margin-top",($(window).height()-$(".error_con").height()-80)/2+"px");

    //一键关注
    $(".attention").click(function(e) {
        $(".forceAttention").show();
        $(".attentionCon").css("margin-top",($(window).height()-$(".attentionCon").height())/2+"px");
    });
    $(".forceAttention .followClose").click(function(e) {
        $(".forceAttention").hide();
    });

    /**
     * 处理iOS 微信客户端6.7.4 键盘收起页面未下移bug
     */
    /*if(/iphone|ipod|ipad/i.test(navigator.appVersion)){
        document.addEventListener("blur", function(event) {
            // 这里加了个类型判断，因为a等元素也会触发blur事件
            if(['input', 'textarea'].includes(event.target.localName)){
                document.body.scrollIntoView(false);
            }
        }, true);
    }*/
});


/*中奖信息提示*/
function win() {
    //遮罩层显示
    $("#mask").show();
    $(".winCon").show()
    $(".failCon").hide();
    $(".winning").addClass("reback");
    $(".winning").css("top",($(window).height()-$(".winning").height())/2+"px");
    //关闭弹出层
    $(".close,.btn").click(function () {
        $("#mask").hide();
        $(".winning").removeClass("reback");
    });
}

/*未中奖提示*/
function fail() {
    //遮罩层显示
    $("#mask").show();
    $(".winCon").hide();
    $(".failCon").show();
    $(".winning").addClass("reback");
    $(".winning").css("top",($(window).height()-$(".winning").height())/2+"px");
    //关闭弹出层
    $(".close,.btn").click(function () {
        $("#mask").hide();
        $(".winning").removeClass("reback");
    });
}

//禁止缩放字体
if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
    handleFontSize();
} else {
    if (document.addEventListener) {
        document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
    } else if (document.attachEvent) {
        document.attachEvent("WeixinJSBridgeReady", handleFontSize);
        document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
    }
}

function handleFontSize() {
    // 设置网页字体为默认大小
    WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
    // 重写设置网页字体大小的事件
    WeixinJSBridge.on('menu:setfont', function() {
        WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
    });
}
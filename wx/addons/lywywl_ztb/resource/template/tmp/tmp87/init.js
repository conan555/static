//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('月送不停，中秋精选钜惠，快来参加活动吧');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp87/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp87/cover.jpg");
	//设置购买支付金额
    $('input[name="model[money]"]').val('128.00');

    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p><span style="font-size: 18px;"></span></p><p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>=======================</strong></span></p><p><span style="font-size: 18px;">中秋感恩大行动，商家联盟隆重推出优惠回报广大新老顾客，优惠多多！</span></p><p><span style="font-size: 18px;">128元我可以得到什么？内容如下</span><br/>1、礼盒装咖啡莲蓉蛋黄中秋月饼团购送礼1.2kg果干组合礼包</p><p>2、双层礼盒装苏式广式月饼流心蛋黄莲蓉散装多口味组合礼包</span></p><p>3、礼盒装苏式广式抹茶蛋黄散装多口味中秋节送礼组合礼包</p><p><img src='+module_url+'resource/template/tmp/tmp87/content01.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp87/content02.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp87/content03.jpg width="100%" style=""/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('月送不停，中秋精选钜惠，快来参加活动吧');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp87/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp87/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('月送不停，中秋精选钜惠，快来参加活动吧');
	//设置活动背景音乐
    $('#audio_id').val(11).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice7.mp3');
	//设置活动分享二维码
    var qr_url_ipt =$('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp87/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp87/qr.jpg";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('月送不停，中秋精选钜惠，快来参加活动吧');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp87/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp87/cover.jpg />");
	//设置购买支付金额
    $('input[name="model[money]"]').val('128.00');
    //设置活动内容
    artEditor.clear();
    artEditor.append('<p><span style="font-size: 18px;"></span></p><p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>=======================</strong></span></p><p><span style="font-size: 18px;">中秋感恩大行动，商家联盟隆重推出优惠回报广大新老顾客，优惠多多！</span></p><p><span style="font-size: 18px;">128元我可以得到什么？内容如下</span><br/>1、礼盒装咖啡莲蓉蛋黄中秋月饼团购送礼1.2kg果干组合礼包</p><p>2、双层礼盒装苏式广式月饼流心蛋黄莲蓉散装多口味组合礼包</span></p><p>3、礼盒装苏式广式抹茶蛋黄散装多口味中秋节送礼组合礼包</p><p><img src='+module_url+'resource/template/tmp/tmp87/content01.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp87/content02.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp87/content03.jpg width="100%" style=""/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('月送不停，中秋精选钜惠，快来参加活动吧');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp87/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp87/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('月送不停，中秋精选钜惠，快来参加活动吧');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice7.mp3";
    $("#music-sel-ul li").each(function(){
        $(this).removeClass("act");
        if($(this).data('url') == audio_url){
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);
    //设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp87/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp87/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp87/qr.jpg");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}


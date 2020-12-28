//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('9.9元疯抢原价880元少儿英语暑期班，限时限量立即参加！');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp18/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp18/cover.jpg");
	//设置购买支付金额
    $('input[name="model[money]"]').val('9.9');
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">本次活动真实有效！欢迎到机构咨询！</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">★★★活动商品★★★</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">【名称】：少儿英语暑期班</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">【课程长度】：6次课，12课时</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">【课程价格】：原价880元，底价9.9元</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">【课程对象】：5-12岁</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">【课程教学内容】：</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">5-7岁 创想英语班</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">8-9岁 英语初级班</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">10岁以上 英语提高班</span></p><p><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><br></span></p><p><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">★★★参与福利★★★</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">点击“专属海报”登记后，生成自己的专属海报给好友，好友下单自己可获得商家提供的礼品。</span></span></p><p><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><br></span></span></p><p><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">★★★排行榜福利★★★</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">排行榜前3名，即可额外增加2课时</span></span></span></p><p><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><br></span></span></span></p><p><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">★★★活动规则★★★</span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="white-space: normal; margin: 0px; padding: 0px; box-sizing: inherit;"><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">1. 报名成功后，概不退款</span></span></span></span></p><p>2. 成功支付9.9元抢到名额后，老师会在3天内致电联系您，并为您安排课程</p><p>3. 进店报名任意课程，一律打八折！</p><p>4. 本次活动不与其他优惠同享，一位宝贝仅限一次机会</p><p><br></p><p><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""></span></span></span></p><p><img src='+module_url+'resource/template/tmp/tmp18/content01.jpg width="100%" style=""></p><p><img src='+module_url+'resource/template/tmp/tmp18/content02.jpeg width="100%" style=""></p><p><br></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('9.9元疯抢原价880元少儿英语暑期班，限时限量立即参加！');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp18/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp18/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('9.9元疯抢原价880元少儿英语暑期班，限时限量立即参加！');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(16).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice16.mp3');
	//设置分享海报
    var qr_url_ipt =$('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp18/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp18/qr.jpg";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('9.9元疯抢原价880元少儿英语暑期班，限时限量立即参加！');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp18/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp18/cover.jpg />");
	//设置购买支付金额
    $('input[name="model[money]"]').val('9.9');
    //设置活动内容
    artEditor.clear();
    artEditor.append('<p><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">本次活动真实有效！欢迎到机构咨询！</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">★★★活动商品★★★</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">【名称】：少儿英语暑期班</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">【课程长度】：6次课，12课时</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">【课程价格】：原价880元，底价9.9元</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">【课程对象】：5-12岁</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">【课程教学内容】：</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">5-7岁 创想英语班</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">8-9岁 英语初级班</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">10岁以上 英语提高班</span></p><p><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><br></span></p><p><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">★★★参与福利★★★</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">点击“专属海报”登记后，生成自己的专属海报给好友，好友下单自己可获得商家提供的礼品。</span></span></p><p><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><br></span></span></p><p><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">★★★排行榜福利★★★</span><br style="margin: 0px; padding: 0px; box-sizing: inherit; font-family: " hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:="">排行榜前3名，即可额外增加2课时</span></span></span></p><p><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><br></span></span></span></p><p><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">★★★活动规则★★★</span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="white-space: normal; margin: 0px; padding: 0px; box-sizing: inherit;"><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">1. 报名成功后，概不退款</span></span></span></span></p><p>2. 成功支付9.9元抢到名额后，老师会在3天内致电联系您，并为您安排课程</p><p>3. 进店报名任意课程，一律打八折！</p><p>4. 本次活动不与其他优惠同享，一位宝贝仅限一次机会</p><p><br></p><p><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span style="font-family: " hiragino="" sans="" microsoft="" helvetica="" background-color:=""></span></span></span></p><p><img src='+module_url+'resource/template/tmp/tmp18/content01.jpg width="100%" style=""></p><p><img src='+module_url+'resource/template/tmp/tmp18/content02.jpeg width="100%" style=""></p><p><br></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('9.9元疯抢原价880元少儿英语暑期班，限时限量立即参加！');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp18/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp18/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('9.9元疯抢原价880元少儿英语暑期班，限时限量立即参加！');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice16.mp3";
    $("#music-sel-ul li").each(function(){
        $(this).removeClass("act");
        if($(this).data('url') == audio_url){
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);
	//设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp18/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp18/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp18/qr.jpg");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}


//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('寒假辅导班，火热报名中！小小学霸成长记，从现在开始…');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp36/cover.png");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp36/cover.png");
	//设置活动报名项目
    $('input[name="model_project[0][title]"]').val('小学英语');
    $('input[name="model_project[0][pic_url]"]').val(module_url + "resource/template/tmp/tmp36/cover.png");
    $('img[name="model_project[0][pic_url]_Img"]').attr("src", module_url + "resource/template/tmp/tmp36/cover.png");
    $('input[name="model_project[0][money]"]').val('298');
    $('input[name="model_project[0][stock]"]').val('0');

	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">★★★活动简介★★★</span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">【超值卡名称】：河洛辅导班超值卡</span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">【超值卡时间】：为期一个月的寒假辅导班</span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">【超值卡价格】：原价698元，现价298元</span></p><p style="white-space: normal;">【超值卡内容】：小学英语、小学数学、小学语文、兴趣特长班等十几种项目。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★活动规则★★★<br/></p><p><span hiragino="" sans="" microsoft="" helvetica="" background-color:=""></span></p><p style="white-space: normal;">1、点击按钮“我要报名”可直接付款购买。</p><p style="white-space: normal;">2、点击“专属海报”登记后，生成我的专属海报给好友，好友报名后自己可获得商家提供的礼品。</p><p style="white-space: normal;">3、活动仅限12月份，年龄为5-15岁的青少年参加，报名后会有专职客服在3天内联系您，注意接听电话。</p><p style="white-space: normal;">4、报名成功后请到店核销登记，我们将在核销登记后为您安排具体时间。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★关于我们★★★</p><p style="white-space: normal;">我们有专职客服接待您的到访，我们有数十年经验专业教师全程辅导，让您快人一步，步步领先，成为学霸不是梦。</p><p style="white-space: normal;"><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('寒假辅导班，火热报名中！小小学霸成长记，从现在开始…');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp36/cover.png");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp36/cover.png");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('寒假辅导班，火热报名中！小小学霸成长记，从现在开始…');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(4).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice4.mp3');
	//设置分享海报
    var qr_url_ipt =$('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp36/qr.png");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp36/qr.png";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('寒假辅导班，火热报名中！小小学霸成长记，从现在开始…');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp36/cover.png");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp36/cover.png />");
    //设置活动报名项目
    $('input[name="model_project[0][title]"]').val('小学英语');
    $('input[name="model_project[0][pic_url]"]').val(module_url + "resource/template/tmp/tmp36/cover.png");
    $('input[name="model_project[0][pic_url]"]').parent().find('a').css({'position':'absolute','opacity':0});
    $('input[name="model_project[0][pic_url]"]').parent().find('.mui-image-preview').html('<img src="'+module_url +'resource/template/tmp/tmp36/cover.png">');
    $('input[name="model_project[0][money]"]').val('298');
    $('input[name="model_project[0][stock]"]').val('0');

    //设置活动内容
    artEditor.clear();
    artEditor.append('<p style="white-space: normal;"><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">★★★活动简介★★★</span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">【超值卡名称】：河洛辅导班超值卡</span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">【超值卡时间】：为期一个月的寒假辅导班</span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">【超值卡价格】：原价698元，现价298元</span></p><p style="white-space: normal;">【超值卡内容】：小学英语、小学数学、小学语文、兴趣特长班等十几种项目。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★活动规则★★★<br/></p><p><span hiragino="" sans="" microsoft="" helvetica="" background-color:=""></span></p><p style="white-space: normal;">1、点击按钮“我要报名”可直接付款购买。</p><p style="white-space: normal;">2、点击“专属海报”登记后，生成我的专属海报给好友，好友报名后自己可获得商家提供的礼品。</p><p style="white-space: normal;">3、活动仅限12月份，年龄为5-15岁的青少年参加，报名后会有专职客服在3天内联系您，注意接听电话。</p><p style="white-space: normal;">4、报名成功后请到店核销登记，我们将在核销登记后为您安排具体时间。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★关于我们★★★</p><p style="white-space: normal;">我们有专职客服接待您的到访，我们有数十年经验专业教师全程辅导，让您快人一步，步步领先，成为学霸不是梦。</p><p style="white-space: normal;"><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('寒假辅导班，火热报名中！小小学霸成长记，从现在开始…');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp36/cover.png");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp36/cover.png />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('寒假辅导班，火热报名中！小小学霸成长记，从现在开始…');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice4.mp3";
    $("#music-sel-ul li").each(function(){
        $(this).removeClass("act");
        if($(this).data('url') == audio_url){
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);

	//设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp36/qr.png");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp36/qr.png />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp36/qr.png");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}



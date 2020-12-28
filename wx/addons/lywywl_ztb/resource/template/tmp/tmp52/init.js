//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('新年放价啦！订年夜饭送滑雪票 前20名6折优惠，限时报名，火热进行中！');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp52/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp52/cover.jpg");

    if ($("#addprojectfieldtable .addprojectfield").length==0){
        $("#addprojectfieldbtn").click();
    }
	//设置活动报名项目
    $('input[name="model_project[0][title]"]').val('尊享1999套餐');
    $('input[name="model_project[0][pic_url]"]').val(module_url + "resource/template/tmp/tmp52/model_img_01.jpg");
    $('img[name="model_project[0][pic_url]_Img"]').attr("src", module_url + "resource/template/tmp/tmp52/model_img_01.jpg");
    $('input[name="model_project[0][money]"]').val('199.00');
    $('input[name="model_project[0][stock]"]').val('0');

    if ($("#addprojectfieldtable .addprojectfield").length==1){
        $("#addprojectfieldbtn").click();
    }

    $('input[name="model_project[1][title]"]').val('豪华1299套餐');
    $('input[name="model_project[1][pic_url]"]').val(module_url + "resource/template/tmp/tmp52/model_img_02.jpg");
    $('img[name="model_project[1][pic_url]_Img"]').attr("src", module_url + "resource/template/tmp/tmp52/model_img_02.jpg");
    $('input[name="model_project[1][money]"]').val('99.00');
    $('input[name="model_project[1][stock]"]').val('0');

	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;">过年啦！吃年夜饭啦！</p><p style="white-space: normal;">春节到，好运来，年夜饭饭不可少！凡通过此活动预订年夜饭即可赠送滑雪票！</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">**活动报名介绍**<br/></p><p style="white-space: normal;">尊享1999套餐：尊享年夜饭套餐，预订送5张滑雪票<br/>豪华1299套餐：豪华年夜饭套餐，预订送3张滑雪票</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">**我要购买**</p><p style="white-space: normal;">1、点击“我要报名”参与此活动</p><p style="white-space: normal;">2、参与后点击“专属海报”生成自己的专属海报，朋友一起参加购买，朋友通过自己的“专属海报”购买，自己还可以获得商家提供分佣礼品哦。</p><p style="white-space: normal;">3、购买成功我们的客服会在3天内联系您，请注意接听0379-66666666客服电话，为您确定时间。</p><p style="white-space: normal;">4、每位用户只可报名一次，多出的不予核销。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">**门店展示**<br/></p><p><img src='+module_url+'resource/template/tmp/tmp52/content01.jpg width="100%" /></p><p><img src='+module_url+'resource/template/tmp/tmp52/content02.jpg  width="100%"/></p><p><img src='+module_url+'resource/template/tmp/tmp52/content03.jpg width="100%" /></p><p><img src='+module_url+'resource/template/tmp/tmp52/content04.jpg width="100%" /></p><p><img src='+module_url+'resource/template/tmp/tmp52/content05.jpg width="100%" /></p><p><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('新年放价啦！订年夜饭送滑雪票 前20名6折优惠，限时报名，火热进行中！');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp52/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp52/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('新年放价啦！订年夜饭送滑雪票 前20名6折优惠，限时报名，火热进行中！');
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
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp52/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp52/qr.jpg";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('新年放价啦！订年夜饭送滑雪票 前20名6折优惠，限时报名，火热进行中！');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp52/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp52/cover.jpg />");

    if ($("#addprojectfieldtable .addprojectfield").length==0){
        $("#addprojectfieldbtn").click();
    }
    //设置活动报名项目
    $('input[name="model_project[0][title]"]').val('尊享1999套餐');
    $('input[name="model_project[0][pic_url]"]').val(module_url + "resource/template/tmp/tmp52/cover.jpg");
    $('input[name="model_project[0][pic_url]"]').parent().find('a').css({'position':'absolute','opacity':0});
    $('input[name="model_project[0][pic_url]"]').parent().find('.mui-image-preview').html('<img src="'+module_url +'resource/template/tmp/tmp52/model_img_01.jpg">');
    $('input[name="model_project[0][money]"]').val('199');
    $('input[name="model_project[0][stock]"]').val('0');

    if ($("#addprojectfieldtable .addprojectfield").length==1){
        $("#addprojectfieldbtn").click();
    }

    $('input[name="model_project[1][title]"]').val('豪华1299套餐');
    $('input[name="model_project[1][pic_url]"]').val(module_url + "resource/template/tmp/tmp52/cover.jpg");
    $('input[name="model_project[1][pic_url]"]').parent().find('a').css({'position':'absolute','opacity':0});
    $('input[name="model_project[1][pic_url]"]').parent().find('.mui-image-preview').html('<img src="'+module_url +'resource/template/tmp/tmp52/model_img_02.jpg">');
    $('input[name="model_project[1][money]"]').val('99');
    $('input[name="model_project[1][stock]"]').val('0');

    //设置活动内容
    artEditor.clear();
    artEditor.append('<p style="white-space: normal;">过年啦！吃年夜饭啦！</p><p style="white-space: normal;">春节到，好运来，年夜饭饭不可少！凡通过此活动预订年夜饭即可赠送滑雪票！</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">**活动报名介绍**<br/></p><p style="white-space: normal;">尊享1999套餐：尊享年夜饭套餐，预订送5张滑雪票<br/>豪华1299套餐：豪华年夜饭套餐，预订送3张滑雪票</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">**我要购买**</p><p style="white-space: normal;">1、点击“我要报名”参与此活动</p><p style="white-space: normal;">2、参与后点击“专属海报”生成自己的专属海报，朋友一起参加购买，朋友通过自己的“专属海报”购买，自己还可以获得商家提供分佣礼品哦。</p><p style="white-space: normal;">3、购买成功我们的客服会在3天内联系您，请注意接听0379-66666666客服电话，为您确定时间。</p><p style="white-space: normal;">4、每位用户只可报名一次，多出的不予核销。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">**门店展示**<br/></p><p><img src='+module_url+'resource/template/tmp/tmp52/content01.jpg width="100%" /></p><p><img src='+module_url+'resource/template/tmp/tmp52/content02.jpg width="100%" /></p><p><img src='+module_url+'resource/template/tmp/tmp52/content03.jpg width="100%" /></p><p><img src='+module_url+'resource/template/tmp/tmp52/content04.jpg width="100%" /></p><p><img src='+module_url+'resource/template/tmp/tmp52/content05.jpg width="100%" /></p><p><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('新年放价啦！订年夜饭送滑雪票 前20名6折优惠，限时报名，火热进行中！');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp52/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp52/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('新年放价啦！订年夜饭送滑雪票 前20名6折优惠，限时报名，火热进行中！');
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
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp52/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp52/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp52/qr.jpg");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}



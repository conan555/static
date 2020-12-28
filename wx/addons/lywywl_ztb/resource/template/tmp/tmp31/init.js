//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('双11狂欢节 新肌绽放 纳米微晶无针水光仅需368元');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp31/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp31/cover.jpg");
	//设置购买支付金额
    $('input[name="model[money]"]').val('368.00');
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p><img src='+module_url+'resource/template/tmp/tmp31/content01.jpg width="100%" alt=01.jpg><img src='+module_url+'resource/template/tmp/tmp31/content02.jpg width="100%" alt=02.jpg><img src='+module_url+'resource/template/tmp/tmp31/content03.jpg width="100%" alt=03.jpg><img src='+module_url+'resource/template/tmp/tmp31/content04.jpg width="100%" alt=04.jpg><img src='+module_url+'resource/template/tmp/tmp31/content05.jpg width="100%" alt=05.jpg><img src='+module_url+'resource/template/tmp/tmp31/content06.jpg width="100%" alt=06.jpg><img src='+module_url+'resource/template/tmp/tmp31/content07.jpg width="100%" alt=08.jpg><img src='+module_url+'resource/template/tmp/tmp31/content08.jpg width="100%" alt=08-2.jpg><img src='+module_url+'resource/template/tmp/tmp31/content09.jpg width="100%" alt=09.jpg></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('双11狂欢节 新肌绽放 纳米微晶无针水光仅需368元');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp31/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp31/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('双11狂欢节 新肌绽放 纳米微晶无针水光仅需368元');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(10).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice10.mp3');
	//设置分享海报
    var qr_url_ipt =$('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp31/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp31/qr.jpg";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('双11狂欢节 新肌绽放 纳米微晶无针水光仅需368元');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp31/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp31/cover.jpg />");
	//设置购买支付金额
    $('input[name="model[money]"]').val('368.00');

    //设置活动内容
    artEditor.clear();
    artEditor.append('<p><img src='+module_url+'resource/template/tmp/tmp31/content01.jpg width="100%" alt=01.jpg><img src='+module_url+'resource/template/tmp/tmp31/content02.jpg width="100%" alt=02.jpg><img src='+module_url+'resource/template/tmp/tmp31/content03.jpg width="100%" alt=03.jpg><img src='+module_url+'resource/template/tmp/tmp31/content04.jpg width="100%" alt=04.jpg><img src='+module_url+'resource/template/tmp/tmp31/content05.jpg width="100%" alt=05.jpg><img src='+module_url+'resource/template/tmp/tmp31/content06.jpg width="100%" alt=06.jpg><img src='+module_url+'resource/template/tmp/tmp31/content07.jpg width="100%" alt=08.jpg><img src='+module_url+'resource/template/tmp/tmp31/content08.jpg width="100%" alt=08-2.jpg><img src='+module_url+'resource/template/tmp/tmp31/content09.jpg width="100%" alt=09.jpg></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('双11狂欢节 新肌绽放 纳米微晶无针水光仅需368元');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp31/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp31/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('双11狂欢节 新肌绽放 纳米微晶无针水光仅需368元');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice10.mp3";
    $("#music-sel-ul li").each(function(){
        $(this).removeClass("act");
        if($(this).data('url') == audio_url){
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);

	//设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp31/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp31/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp31/qr.jpg");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}



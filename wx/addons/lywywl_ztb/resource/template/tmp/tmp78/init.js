//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('相约九月 倾情巨献，9.10教师节快乐！');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp78/cover.png");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp78/cover.png");
	//设置购买支付金额
    $('input[name="model[money]"]').val('119.00');
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p><span style="color: rgb(255, 0, 0);"><strong>=======================</strong></span></p><p></p><p style="white-space: normal;">***活动规则***<br/></p><p style="white-space: normal;">1、点击按钮“立即抢购”可直接付款购买。</p><p style="white-space: normal;">2、点击“专属海报”登记后，生成自己的专属海报给好友，好友下单自己可获得商家提供的奖品。</p><p style="white-space: normal;">3、名额有限，售完即止，欲购从速。</p><p style="white-space: normal;">5、购买成功后到店核销使用即可。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">***鲜花展示***</p><p style="white-space: normal;"><img src='+module_url+'resource/template/tmp/tmp78/content01.jpg width="100%" alt="content01.jpg"/></p><p><img src='+module_url+'resource/template/tmp/tmp78/content02.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp78/content03.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp78/content04.jpg width="100%" style=""/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('相约九月 倾情巨献，9.10教师节快乐！');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp78/cover.png");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp78/cover.png");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}相约九月 倾情巨献，9.10教师节快乐！');
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
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp78/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp78/qr.jpg";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('相约九月 倾情巨献，9.10教师节快乐！');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp78/cover.png");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp78/cover.png />");
	//设置购买支付金额
    $('input[name="model[money]"]').val('119.00');

    //设置活动内容
    artEditor.clear();
    artEditor.append('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p><span style="color: rgb(255, 0, 0);"><strong>=======================</strong></span></p><p><br/></p><p style="white-space: normal;">***活动规则***<br/></p><p style="white-space: normal;">1、点击按钮“立即抢购”可直接付款购买。</p><p style="white-space: normal;">2、点击“专属海报”登记后，生成自己的专属海报给好友，好友下单自己可获得商家提供的奖品。</p><p style="white-space: normal;">3、名额有限，售完即止，欲购从速。</p><p style="white-space: normal;">5、购买成功后到店核销使用即可。</p><p style="white-space: normal;"></p><p style="white-space: normal;">***鲜花展示***</p><p style="white-space: normal;"><img src='+module_url+'resource/template/tmp/tmp78/content01.jpg width="100%" alt="content01.jpg"/></p><p><img src='+module_url+'resource/template/tmp/tmp78/content02.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp78/content03.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp78/content04.jpg width="100%" style=""/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('相约九月 倾情巨献，9.10教师节快乐！');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp78/cover.png");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp78/cover.png />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}相约九月 倾情巨献，9.10教师节快乐！');
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
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp78/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp78/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp78/qr.jpg");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}



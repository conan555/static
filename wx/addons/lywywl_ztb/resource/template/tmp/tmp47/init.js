//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('69元抢购洗车超值套餐，名额有限 快来给您的爱车做个保养吧');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp47/cover.png");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp47/cover.png");
	//设置购买支付金额
    $('input[name="model[money]"]').val('69.00');
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p>&quot;车享家汽车养护中心&quot;邀请您来参加爱车养护盛宴，原价299的养护套餐现在仅需69元，69元后就可以给您的爱车做全面养护，<br/></p><p><br/></p><p style="white-space: normal;">***活动简介***</p><p style="white-space: normal;">活动内容：爱车养护卡（洗车1次 +合成科技油基础保养1次+汽车合成机油保养）</p><p style="white-space: normal;">活动规则：一车只可参加一次</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">***活动规则***<br/></p><p style="white-space: normal;">1、点击按钮“立即抢购”可直接付款购买。</p><p style="white-space: normal;">2、点击“专属海报”登记后，生成自己的专属海报给好友，好友下单自己可获得商家提供的奖品。</p><p style="white-space: normal;">3、名额有限，售完即止，欲购从速。</p><p style="white-space: normal;">5、购买成功后到店核销使用即可。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">***门店展示***<img src='+module_url+'resource/template/tmp/tmp47/content01.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp47/content02.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp47/content03.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp47/content04.jpg width="100%" alt=""/></p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">***特别说明*** </p><p style="white-space: normal;">1、上午8点30到下午6点进店都可以正常安排，还请您到店前2小时提前预约。</p><p style="white-space: normal;">2、雨雪天过后，洗车可能会排队 请理解。</p><p style="white-space: normal;">3、内饰清洁流程为吸尘器吸尘后用擦车布擦洗，若脚垫特别脏，会拿出来专门清洗。</p><p style="white-space: normal;">4、其他增值内容需要额外付费，付费项目钱店员会告知您。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">活动地址：</p><p style="white-space: normal;">涧西店：涧西区 嵩山路 车享家汽车养护中心</p><p style="white-space: normal;">老城店：老城区 北大街 车享家汽车养护中心</p><p style="white-space: normal;">活动时间：2020年1月1日到2020年1月20日</p><p style="white-space: normal;">核销日期：2020年12月31日截止。</p><p style="white-space: normal;">最终解释权归车享家嵩山路店所有</p><p style="white-space: normal;"><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('69元抢购洗车超值套餐，名额有限 快来给您的爱车做个保养吧');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp47/cover.png");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp47/cover.png");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}只需69元，快来给您的爱车做个全面的检测保养吧');
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
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp47/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp47/qr.jpg";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('69元抢购洗车超值套餐，名额有限 快来给您的爱车做个保养吧');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp47/cover.png");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp47/cover.png />");
	//设置购买支付金额
    $('input[name="model[money]"]').val('69.00');

    //设置活动内容
    artEditor.clear();
    artEditor.append('<p>&quot;车享家汽车养护中心&quot;邀请您来参加爱车养护盛宴，原价299的养护套餐现在仅需69元，69元后就可以给您的爱车做全面养护，<br/></p><p><br/></p><p style="white-space: normal;">***活动简介***</p><p style="white-space: normal;">活动内容：爱车养护卡（洗车1次 +合成科技油基础保养1次+汽车合成机油保养）</p><p style="white-space: normal;">活动规则：一车只可参加一次</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">***活动规则***<br/></p><p style="white-space: normal;">1、点击按钮“立即抢购”可直接付款购买。</p><p style="white-space: normal;">2、点击“专属海报”登记后，生成自己的专属海报给好友，好友下单自己可获得商家提供的奖品。</p><p style="white-space: normal;">3、名额有限，售完即止，欲购从速。</p><p style="white-space: normal;">5、购买成功后到店核销使用即可。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">***门店展示***<img src='+module_url+'resource/template/tmp/tmp47/content01.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp47/content02.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp47/content03.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp47/content04.jpg width="100%" alt=""/></p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">***特别说明*** </p><p style="white-space: normal;">1、上午8点30到下午6点进店都可以正常安排，还请您到店前2小时提前预约。</p><p style="white-space: normal;">2、雨雪天过后，洗车可能会排队 请理解。</p><p style="white-space: normal;">3、内饰清洁流程为吸尘器吸尘后用擦车布擦洗，若脚垫特别脏，会拿出来专门清洗。</p><p style="white-space: normal;">4、其他增值内容需要额外付费，付费项目钱店员会告知您。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">活动地址：</p><p style="white-space: normal;">涧西店：涧西区 嵩山路 车享家汽车养护中心</p><p style="white-space: normal;">老城店：老城区 北大街 车享家汽车养护中心</p><p style="white-space: normal;">活动时间：2020年1月1日到2020年1月20日</p><p style="white-space: normal;">核销日期：2020年12月31日截止。</p><p style="white-space: normal;">最终解释权归车享家嵩山路店所有</p><p style="white-space: normal;"><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('喜迎元旦,滑雪&泡温泉 只要99,你的冬天你做主!');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp47/cover.png");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp47/cover.png />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('喜迎元旦,滑雪&泡温泉 只要99,你的冬天你做主!');
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
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp47/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp47/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp47/qr.jpg");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}



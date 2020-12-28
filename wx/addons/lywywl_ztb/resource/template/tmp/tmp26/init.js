//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('感恩教师节 鲜花大放送 全程7折不容错过');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp26/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp26/cover.jpg");
	//设置购买支付金额
    $('input[name="model[money]"]').val('98.00');
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"> <strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong> </p> <p style="white-space: normal;"> <span style="color: rgb(255, 0, 0);"><strong>======================<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/></strong></span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>★★★活动商品★★★<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>【名称】：康乃馨一束/粉佳人一束 </p><p style="white-space: normal;">【价格】：原价165元，现价98元</p><p style="white-space: normal;">【其他】：更多类型花束可到店查看 </p> <p style="white-space: normal;">★康乃馨<img src='+module_url+'resource/template/tmp/tmp26/content01.jpg width="100%" alt="康乃馨3.jpg"/><img src='+module_url+'resource/template/tmp/tmp26/content02.jpg width="100%" alt="康乃馨2.jpg"/><img src='+module_url+'resource/template/tmp/tmp26/content03.jpg width="100%" alt="康乃馨1.jpg"/> </p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;">★粉佳人<img src='+module_url+'resource/template/tmp/tmp26/content04.jpg width="100%" alt="教师节详情01.jpg" style="white-space: normal;"/> </p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;">★★★活动规则★★★<br/> </p> <p style="white-space: normal;"> 1、点击按钮“立即抢购”可直接付款购买。</p> <p style="white-space: normal;"> 2、点击“专属海报”登记后，生成我的专属海报给好友，好友下单自己可获得商家提供的礼品。</p> <p style="white-space: normal;"> 3、限时限量，售完即止，欲购从速。</p> <p style="white-space: normal;"> 4、购买成功后到店核销领取，如需配送请联系客服。</p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;">★注：</p> <p style="white-space: normal;"> 1、本商品需要一定时间包装，为了不耽误您的使用时间，请提前到店核销，并注明取货时间。</p> <p style="white-space: normal;"> 2、免费赠送贺卡，可自己手写或我们代写，如需其他装饰物品需付费购买。</p> <p style="white-space: normal;"> 3、确认订单开始包装后，一律不支持退换。</p> <p style="white-space: normal;"> 4、配送需加8元配送费，详情咨询客服了解。</p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;"><br/> </p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}送你一束花 一起感恩教师节 鲜花低至98元');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp26/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp26/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}送你一束花，一起感恩教师节，店内专属教师节鲜花低至98元，任你选择');
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
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp26/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp26/qr.jpg";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('感恩教师节 鲜花大放送 全程7折不容错过');
	//设置活动封面图标
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp26/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp26/cover.jpg />");
	//设置购买支付金额
    $('input[name="model[money]"]').val('98.00');
    //设置活动内容
    artEditor.clear();
    artEditor.append('<p style="white-space: normal;"> <strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong> </p> <p style="white-space: normal;"> <span style="color: rgb(255, 0, 0);"><strong>======================<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/></strong></span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>★★★活动商品★★★<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>【名称】：康乃馨一束/粉佳人一束 </p><p style="white-space: normal;">【价格】：原价165元，现价98元</p><p style="white-space: normal;">【其他】：更多类型花束可到店查看 </p> <p style="white-space: normal;">★康乃馨<img src='+module_url+'resource/template/tmp/tmp26/content01.jpg width="100%" alt="康乃馨3.jpg"/><img src='+module_url+'resource/template/tmp/tmp26/content02.jpg width="100%" alt="康乃馨2.jpg"/><img src='+module_url+'resource/template/tmp/tmp26/content03.jpg width="100%" alt="康乃馨1.jpg"/> </p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;">★粉佳人<img src='+module_url+'resource/template/tmp/tmp26/content04.jpg width="100%" alt="教师节详情01.jpg" style="white-space: normal;"/> </p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;">★★★活动规则★★★<br/> </p> <p style="white-space: normal;"> 1、点击按钮“立即抢购”可直接付款购买。</p> <p style="white-space: normal;"> 2、点击“专属海报”登记后，生成我的专属海报给好友，好友下单自己可获得商家提供的礼品。</p> <p style="white-space: normal;"> 3、限时限量，售完即止，欲购从速。</p> <p style="white-space: normal;"> 4、购买成功后到店核销领取，如需配送请联系客服。</p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;">★注：</p> <p style="white-space: normal;"> 1、本商品需要一定时间包装，为了不耽误您的使用时间，请提前到店核销，并注明取货时间。</p> <p style="white-space: normal;"> 2、免费赠送贺卡，可自己手写或我们代写，如需其他装饰物品需付费购买。</p> <p style="white-space: normal;"> 3、确认订单开始包装后，一律不支持退换。</p> <p style="white-space: normal;"> 4、配送需加8元配送费，详情咨询客服了解。</p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;"><br/> </p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}送你一束花 一起感恩教师节 鲜花低至98元');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp26/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp26/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}送你一束花，一起感恩教师节，店内专属教师节鲜花低至98元，任你选择');
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
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp26/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp26/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp26/qr.jpg");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}

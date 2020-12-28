//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('双11剁手节 小米10青春版轻薄5G手机拼团大让利！！！');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp90/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp90/cover.jpg");
	//设置单独购买价格
    $('input[name="model[cost_price]"]').val('1899.00');
	//设置拼团支付价格
    $('input[name="total_buy_price"]').val('1800.00');
	//设置拼团支付定金
    $('input[name="model[front_money]"]').val('1000.00');
	//设置成团后需支付金额
    $('input[name="model[group_price]"]').val('800.00');
	//设置拼团所需人数
    $('input[name="model[group_num]"]').val('10');
	//设置拼团可开团数
    $('input[name="model[open_num]"]').val('50');
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;"></span></strong></p><p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>======================<br style="margin: 0px; padding: 0px; box-sizing: inherit;" hiragino="" sans="" microsoft="" helvetica=""/></strong></span><br style="margin: 0px; padding: 0px; box-sizing: inherit;" hiragino="" sans="" microsoft="" helvetica=""/>★★★活动商品★★★<br style="margin: 0px; padding: 0px; box-sizing: inherit;" hiragino="" sans="" microsoft="" helvetica=""/>【名称】：小米10青春版轻薄5G手机<br/></p><p style="white-space: normal;">【规格】：骁龙765G 5G处理器，6GB + 128GB存储<br/></p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★活动规则★★★</p><p style="white-space: normal;">1、点击页面中“一键开团”按钮，可成为团长。</p><p style="white-space: normal;">2、开团后，点击“专属海报”按钮，再有人参与进来满足对应人数可支付尾款。</p><p style="white-space: normal;">3、数量有限，快速抢购哦。</p><p style="white-space: normal;">4、拼团成功后到店领取</p><p><img width="100%" style="" src='+module_url+'resource/template/tmp/tmp90/content01.jpg /></p><p><img width="100%" style="" src='+module_url+'resource/template/tmp/tmp90/content02.jpg /></p><p><img width="100%" style="" src='+module_url+'resource/template/tmp/tmp90/content03.jpg /></p><p><img width="100%" style="" src='+module_url+'resource/template/tmp/tmp90/content04.jpg /></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}双11剁手节 小米10青春版轻薄5G手机拼团大让利！！！');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp90/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp90/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('双11剁手节 小米10青春版轻薄5G手机拼团大让利！！！');
    //设置活动分享门店
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(18).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice18.mp3');
	//设置分享海报
    var qr_url_ipt =$('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp90/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp90/qr.jpg";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('双11剁手节 小米10青春版轻薄5G手机拼团大让利！！！');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp90/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp90/cover.jpg />");
    //设置单独购买价格
    $('input[name="model[cost_price]"]').val('1899.00');
    //设置拼团支付价格
    $('input[name="total_buy_price"]').val('1800.00');
    //设置拼团支付定金
    $('input[name="model[front_money]"]').val('1000.00');
    //设置成团后需支付金额
    $('input[name="model[group_price]"]').val('800.00');
    //设置拼团所需人数
    $('input[name="model[group_num]"]').val('10');
    //设置拼团可开团数
    $('input[name="model[open_num]"]').val('50');
	//设置活动内容
    artEditor.clear();
    artEditor.append('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;"></span></strong></p><p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>======================<br style="margin: 0px; padding: 0px; box-sizing: inherit;" hiragino="" sans="" microsoft="" helvetica=""/></strong></span><br style="margin: 0px; padding: 0px; box-sizing: inherit;" hiragino="" sans="" microsoft="" helvetica=""/>★★★活动商品★★★<br style="margin: 0px; padding: 0px; box-sizing: inherit;" hiragino="" sans="" microsoft="" helvetica=""/>【名称】：小米10青春版轻薄5G手机<br/></p><p style="white-space: normal;">【规格】：骁龙765G 5G处理器，6GB + 128GB存储<br/></p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★活动规则★★★</p><p style="white-space: normal;">1、点击页面中“一键开团”按钮，可成为团长。</p><p style="white-space: normal;">2、开团后，点击“专属海报”按钮，再有人参与进来满足对应人数可支付尾款。</p><p style="white-space: normal;">3、数量有限，快速抢购哦。</p><p style="white-space: normal;">4、拼团成功后到店领取</p><p><img width="100%" style="" src='+module_url+'resource/template/tmp/tmp90/content01.jpg /></p><p><img width="100%" style="" src='+module_url+'resource/template/tmp/tmp90/content02.jpg /></p><p><img width="100%" style="" src='+module_url+'resource/template/tmp/tmp90/content03.jpg /></p><p><img width="100%" style="" src='+module_url+'resource/template/tmp/tmp90/content04.jpg /></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}双11剁手节 小米10青春版轻薄5G手机拼团大让利！！！');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp90/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp90/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('双11剁手节 小米10青春版轻薄5G手机拼团大让利！！！');
    //设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice18.mp3";
    $("#music-sel-ul li").each(function(){
        $(this).removeClass("act");
        if($(this).data('url') == audio_url){
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);
	//设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp90/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp90/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp90/qr.jpg");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}

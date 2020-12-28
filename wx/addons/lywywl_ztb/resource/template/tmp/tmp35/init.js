//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('双12来啦，年终盛典八方电器送豪礼，199抢美地取暖器，伴您温暖过冬。');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp35/cover.png");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp35/cover.png");
	//设置购买支付金额
    $('input[name="model[money]"]').val('199.00');
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p>双十二来啦，天也冷了家里没暖气怎么办？别怕别怕美地来给您送温暖啦！详情活动内容请看下文<br/><br/>***商品简介*** </p><p>商品名称：美地取暖器电暖气片。<br/>商品外观：淡雅金色、宽11.4cm一体式面板，内含25条瀑布纹。</p><p>商品特点：折叠式晾衣架、蒸发式加湿盒、优质电源线、双重过热保护、倾倒断电、阻燃材料、环保无异味。</p><p><br/></p><p style="white-space: normal;">***活动规则***<br/></p><p style="white-space: normal;">1、点击按钮“立即抢购”可直接付款购买。</p><p style="white-space: normal;">2、点击“专属海报”登记后，生成自己的专属海报给好友，好友下单自己可获得商家提供的奖品。</p><p style="white-space: normal;">3、名额有限，售完即止，欲购从速。</p><p style="white-space: normal;">5、购买成功后到店核销领取。</p><p><br/></p><p> 产品展示</p><p><img src='+module_url+'resource/template/tmp/tmp35/content01.jpg width="100%" alt="微信图片_20191127151230.jpg"/><img src='+module_url+'resource/template/tmp/tmp35/content02.jpg width="100%" alt="微信图片_201907151251.jpg"/><img src='+module_url+'resource/template/tmp/tmp35/content03.jpg width="100%" alt="微信图片_20198258.jpg"/></p><p><br/></p><p style="white-space: normal;"> ***注意注意啦*** </p><p style="white-space: normal;">1、购买完成 核销后概不退还。</p><p style="white-space: normal;">2、暂无配送服务 请到门店自取。</p><p style="white-space: normal;">3、售后质保3年，人为损坏不予质保。</p><p style="white-space: normal;">4、详情请到店咨询。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">活动地址：涧西区 嵩山路 888号<br/>活动时间：12.11-12.12 </p><p style="white-space: normal;">核销日期：2019年12.31日截止。</p><p style="white-space: normal;">最终解释权归美地嵩山路店所有</p><p><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('双十二美地送温暖，原价399元现价199，温暖带回家');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp35/cover.png");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp35/cover.png");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('美地全新款式暖气片已备好，199元等您来吧温暖带回家，这个冬天不再冷。');
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
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp35/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp35/qr.jpg";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('双12来啦，年终盛典八方电器送豪礼，199抢美地取暖器，伴您温暖过冬。');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp35/cover.png");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp35/cover.png />");
	//设置购买支付金额
    $('input[name="model[money]"]').val('199.00');

    //设置活动内容
    artEditor.clear();
    artEditor.append('<p>双十二来啦，天也冷了家里没暖气怎么办？别怕别怕美地来给您送温暖啦！详情活动内容请看下文<br/><br/>***商品简介*** </p><p>商品名称：美地取暖器电暖气片。<br/>商品外观：淡雅金色、宽11.4cm一体式面板，内含25条瀑布纹。</p><p>商品特点：折叠式晾衣架、蒸发式加湿盒、优质电源线、双重过热保护、倾倒断电、阻燃材料、环保无异味。</p><p><br/></p><p style="white-space: normal;">***活动规则***<br/></p><p style="white-space: normal;">1、点击按钮“立即抢购”可直接付款购买。</p><p style="white-space: normal;">2、点击“专属海报”登记后，生成自己的专属海报给好友，好友下单自己可获得商家提供的奖品。</p><p style="white-space: normal;">3、名额有限，售完即止，欲购从速。</p><p style="white-space: normal;">5、购买成功后到店核销领取。</p><p><br/></p><p> 产品展示</p><p><img src='+module_url+'resource/template/tmp/tmp35/content01.jpg width="100%" alt="微信图片_20191127151230.jpg"/><img src='+module_url+'resource/template/tmp/tmp35/content02.jpg width="100%" alt="微信图片_201907151251.jpg"/><img src='+module_url+'resource/template/tmp/tmp35/content03.jpg width="100%" alt="微信图片_20198258.jpg"/></p><p><br/></p><p style="white-space: normal;"> ***注意注意啦*** </p><p style="white-space: normal;">1、购买完成 核销后概不退还。</p><p style="white-space: normal;">2、暂无配送服务 请到门店自取。</p><p style="white-space: normal;">3、售后质保3年，人为损坏不予质保。</p><p style="white-space: normal;">4、详情请到店咨询。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">活动地址：涧西区 嵩山路 888号<br/>活动时间：12.11-12.12 </p><p style="white-space: normal;">核销日期：2019年12.31日截止。</p><p style="white-space: normal;">最终解释权归美地嵩山路店所有</p><p><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('双十二美地送温暖，原价399元现价199，温暖带回家');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp35/cover.png");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp35/cover.png />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('美地全新款式暖气片已备好，199元等您来吧温暖带回家，这个冬天不再冷。');
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
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp35/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp35/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp35/qr.jpg");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}



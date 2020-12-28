//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('新老会员大回馈，9.9元即可购买越南甜心大芒果2件，名额有限，抢完即止！');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp10/cover.png");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp10/cover.png");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"><span style="color: rgb(0, 0, 0);"><strong><span style="font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></span></p><p style="white-space: normal;"><span style="color: rgb(0, 0, 0);"><strong>======================</strong></span></p><p style="white-space: normal;"><span style="font-size: 20px; color: rgb(0, 0, 0);"><strong><br/></strong></span></p><p style="white-space: normal;">★★★活动规则★★★</p><p style="white-space: normal;">1、进入自己的活动页面，看您喜欢哪个表情，点击表情参加。（选好了慎重点击哦，您的心仪可是在表情背后的哦）</p><p style="white-space: normal;">2、限时限量，不要错过哦。</p><p style="white-space: normal;">2、活动的礼品可到商家指定店铺核销。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★表情背后的商品★★★</p><p style="white-space: normal;">1、2999元的沙发一套</p><p style="white-space: normal;">2、2298元的茶几一张</p><p style="white-space: normal;">3、2199元的床一个</p><p style="white-space: normal;">4、1998元的简约餐桌一套</p><p style="white-space: normal;">5、1699元的儿童爬梯床一个</p><p style="white-space: normal;">6、1379元的玄关柜一个</p><p style="white-space: normal;">7、1100元的阳台储物一个</p><p style="white-space: normal;">8、899元的梳妆台一个</p><p style="white-space: normal;">9、谢谢参与（不要灰心喔 到店可兑换200元家居购物抵扣券）</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★特别说明：<br/></p><p style="white-space: normal;">1、本活动真实有效欢迎到家具城体验查看。</p><p style="white-space: normal;">2、参与活动获得商品一律免费得，没有其他任何强制消费（不包含运输费和安装费）</p><p style="white-space: normal;">3、大物件商品，需到店核销。</p><p style="white-space: normal;">4、我们会有专职客服联系您，注意接听电话。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★商家展示：</p><p style="white-space: normal;">这个商家很懒 暂无图片展示。</p><p style="white-space: normal;"><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('新老会员大回馈，9.9元即可购买越南甜心大芒果2件，名额有限，抢完即止！');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp10/cover.png");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp10/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('新老会员大回馈，9.9元即可购买越南甜心大芒果2件，名额有限，抢完即止！');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(5).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice5.mp3');
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('新老会员大回馈，9.9元即可购买越南甜心大芒果2件，名额有限，抢完即止！');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp10/cover.png");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp10/cover.png />");

    //设置活动内容
	artEditor.clear();
    artEditor.append('<p style="white-space: normal;"><span style="color: rgb(0, 0, 0);"><strong><span style="font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></span></p><p style="white-space: normal;"><span style="color: rgb(0, 0, 0);"><strong>======================</strong></span></p><p style="white-space: normal;"><span style="font-size: 20px; color: rgb(0, 0, 0);"><strong><br/></strong></span></p><p style="white-space: normal;">★★★活动规则★★★</p><p style="white-space: normal;">1、进入自己的活动页面，看您喜欢哪个表情，点击表情参加。（选好了慎重点击哦，您的心仪可是在表情背后的哦）</p><p style="white-space: normal;">2、限时限量，不要错过哦。</p><p style="white-space: normal;">2、活动的礼品可到商家指定店铺核销。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★表情背后的商品★★★</p><p style="white-space: normal;">1、2999元的沙发一套</p><p style="white-space: normal;">2、2298元的茶几一张</p><p style="white-space: normal;">3、2199元的床一个</p><p style="white-space: normal;">4、1998元的简约餐桌一套</p><p style="white-space: normal;">5、1699元的儿童爬梯床一个</p><p style="white-space: normal;">6、1379元的玄关柜一个</p><p style="white-space: normal;">7、1100元的阳台储物一个</p><p style="white-space: normal;">8、899元的梳妆台一个</p><p style="white-space: normal;">9、谢谢参与（不要灰心喔 到店可兑换200元家居购物抵扣券）</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★特别说明：<br/></p><p style="white-space: normal;">1、本活动真实有效欢迎到家具城体验查看。</p><p style="white-space: normal;">2、参与活动获得商品一律免费得，没有其他任何强制消费（不包含运输费和安装费）</p><p style="white-space: normal;">3、大物件商品，需到店核销。</p><p style="white-space: normal;">4、我们会有专职客服联系您，注意接听电话。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★商家展示：</p><p style="white-space: normal;">这个商家很懒 暂无图片展示。</p><p style="white-space: normal;"><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('新老会员大回馈，9.9元即可购买越南甜心大芒果2件，名额有限，抢完即止！');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp10/cover.png");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp10/cover.png />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('新老会员大回馈，9.9元即可购买越南甜心大芒果2件，名额有限，抢完即止！');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice5.mp3";
    $("#music-sel-ul li").each(function(){
        $(this).removeClass("act");
        if($(this).data('url') == audio_url){
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}


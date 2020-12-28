//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('五一劳动节致敬劳动者 豪华大奖等你拿');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp67/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp67/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"><span style="color: rgb(251, 213, 181);"><strong><span style="font-size: 20px;"></span></strong></span></p><p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>=======================</strong></span></p><p style="white-space: normal;">★★★活动规则★★★</p><p style="white-space: normal;">1、进入自己的活动页面，每个人都可以参加。</p><p style="white-space: normal;">2、限时限量，不要错过哦。</p><p style="white-space: normal;">2、活动的礼品可到商家指定店铺核销。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★惊喜商品★★★</p><p style="white-space: normal;">1、九阳豆浆机&nbsp; 一个</p><p style="white-space: normal;">2、品牌蚕丝被&nbsp; 一条</p><p style="white-space: normal;">3、天猫100元话费购物卡&nbsp; &nbsp;1张</p><p style="white-space: normal;">4、品牌水杯 一个</p><p style="white-space: normal;">5、现金红包50元 </p><p style="white-space: normal;">6、品牌床上三件套&nbsp; &nbsp;1个 </p><p style="white-space: normal;">7、谢谢参与（很遗憾 感谢您的参与）</p><p style="white-space: normal;">8、谢谢参与（不要灰心 我们店铺还有很多惊喜等你来</p><p style="white-space: normal;">★★★奖品展示★★★</p><p><img src='+module_url+'resource/template/tmp/tmp67/content01.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp67/content02.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp67/content03.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp67/content04.png width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp67/content05.jpg width="100%" style=""/></p><p style="white-space: normal;"><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('五一劳动节致敬劳动者 豪华大奖等你拿');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp67/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url +"resource/template/tmp/tmp67/cover.jpg");
    $('textarea[name="model[share_desc]"]').val('五一劳动节 神秘大奖、豆浆机 蚕丝被.天猫购物卡等你拿');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(4).select2();
    $('input[name="model[audio_url]"]').val(module_url +'resource/template/audio/voice4.mp3');
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('五一劳动节致敬劳动者 豪华大奖等你拿');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp67/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp67/cover.jpg />");
	//设置活动内容
	artEditor.clear();
	artEditor.append('<p style="white-space: normal;"><span style="color: rgb(251, 213, 181);"><strong><span style="font-size: 20px;"></span></strong></span></p><p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>=======================</strong></span></p><p style="white-space: normal;">★★★活动规则★★★</p><p style="white-space: normal;">1、进入自己的活动页面，每个人都可以参加。</p><p style="white-space: normal;">2、限时限量，不要错过哦。</p><p style="white-space: normal;">2、活动的礼品可到商家指定店铺核销。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★惊喜商品★★★</p><p style="white-space: normal;">1、九阳豆浆机&nbsp; 一个</p><p style="white-space: normal;">2、品牌蚕丝被&nbsp; 一条</p><p style="white-space: normal;">3、天猫100元话费购物卡&nbsp; &nbsp;1张</p><p style="white-space: normal;">4、品牌水杯 一个</p><p style="white-space: normal;">5、现金红包50元 </p><p style="white-space: normal;">6、品牌床上三件套&nbsp; &nbsp;1个 </p><p style="white-space: normal;">7、谢谢参与（很遗憾 感谢您的参与）</p><p style="white-space: normal;">8、谢谢参与（不要灰心 我们店铺还有很多惊喜等你来</p><p style="white-space: normal;">★★★奖品展示★★★</p><p><img src='+module_url+'resource/template/tmp/tmp67/content01.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp67/content02.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp67/content03.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp67/content04.png width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp67/content05.jpg width="100%" style=""/></p><p style="white-space: normal;"><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('五一劳动节致敬劳动者 豪华大奖等你拿');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp67/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp67/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('五一劳动节 神秘大奖、豆浆机 蚕丝被.天猫购物卡等你拿');
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
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}

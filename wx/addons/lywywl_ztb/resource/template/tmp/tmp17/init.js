//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('暑假舞蹈班 芭蕾舞精品课程只需99元');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp17/cover.png");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp17/cover.png");
	//设置购买支付金额
    $('input[name="model[money]"]').val('99.00');
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p>★★★活动商品★★★</p><p>【课程名称】：少儿芭蕾舞精品课程</p><p>【课程时间】：季卡（3个月）的每周日下午2点到5点</p><p>【课程价格】：原价999元，现价99元</p><p>【课程对象】：5-12岁</p><p><br/></p><p style="white-space: normal;"><span hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">★★★本店福利★★★</span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>1、我的福利：点击“专属海报”生成我的专属海报图片，朋友下单自己可获得该机构提供的礼品一份。</span></p><p style="white-space: normal;"><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">2、排行榜福利：排行榜前3名，即可额外增加2课时。</span></p><p style="white-space: normal;"><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">3、报名福利：进店报名任意课程，一律8折！</span></p><p style="white-space: normal;">以上福利最终解释权归本店所有。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"><span hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">★★★活动规则★★★</span></span></p><p style="white-space: normal;"><span hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">1、点击“立即抢购”付款后购买成功。</span></span></p><p style="white-space: normal;">2、成功支付99元抢到名额后，老师会在3天内致电联系您，并根据您的时间为您安排课程。</p><p style="white-space: normal;">3、本次活动不与其他优惠同享，一位宝贝仅限一次机会。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★课程展示</p><p><img src='+module_url+'resource/template/tmp/tmp17/content01.jpg width="100%" alt="3304674473.110957.jpg"/><img src='+module_url+'resource/template/tmp/tmp17/content02.jpg width="100%"/></p><p><img src='+module_url+'resource/template/tmp/tmp17/content03.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp17/content04.jpg width="100%" style=""/></p><p><br/> </p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}推荐了 暑假舞蹈班 芭蕾舞精品课程只需99元');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp17/cover.png");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp17/cover.png");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('暑假舞蹈班 芭蕾舞精品课程只需99元，实现孩子的舞蹈梦');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(13).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice13.mp3');
	//设置分享海报
    var qr_url_ipt =$('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp17/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp17/qr.jpg";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('暑假舞蹈班 芭蕾舞精品课程只需99元');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp17/cover.png");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp17/cover.png />");
	//设置购买支付金额
    $('input[name="model[money]"]').val('99.00');

    //设置活动内容
    artEditor.clear();
    artEditor.append('<p>★★★活动商品★★★</p><p>【课程名称】：少儿芭蕾舞精品课程</p><p>【课程时间】：季卡（3个月）的每周日下午2点到5点</p><p>【课程价格】：原价999元，现价99元</p><p>【课程对象】：5-12岁</p><p><br/></p><p style="white-space: normal;"><span hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">★★★本店福利★★★</span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>1、我的福利：点击“专属海报”生成我的专属海报图片，朋友下单自己可获得该机构提供的礼品一份。</span></p><p style="white-space: normal;"><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">2、排行榜福利：排行榜前3名，即可额外增加2课时。</span></p><p style="white-space: normal;"><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">3、报名福利：进店报名任意课程，一律8折！</span></p><p style="white-space: normal;">以上福利最终解释权归本店所有。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"><span hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">★★★活动规则★★★</span></span></p><p style="white-space: normal;"><span hiragino="" sans="" microsoft="" helvetica="" background-color:=""><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">1、点击“立即抢购”付款后购买成功。</span></span></p><p style="white-space: normal;">2、成功支付99元抢到名额后，老师会在3天内致电联系您，并根据您的时间为您安排课程。</p><p style="white-space: normal;">3、本次活动不与其他优惠同享，一位宝贝仅限一次机会。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★课程展示</p><p><img src='+module_url+'resource/template/tmp/tmp17/content01.jpg width="100%" alt="3304674473.110957.jpg"/><img src='+module_url+'resource/template/tmp/tmp17/content02.jpg width="100%"/></p><p><img src='+module_url+'resource/template/tmp/tmp17/content03.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp17/content04.jpg width="100%" style=""/></p><p><br/> </p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}推荐了 暑假舞蹈班 芭蕾舞精品课程只需99元');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp17/cover.png");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp17/cover.png />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('暑假舞蹈班 芭蕾舞精品课程只需99元，实现孩子的舞蹈梦');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice13.mp3";
    $("#music-sel-ul li").each(function(){
        $(this).removeClass("act");
        if($(this).data('url') == audio_url){
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);
	//设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp17/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp17/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp17/qr.jpg");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}


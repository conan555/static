//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('出发吧！给孩子一个有趣快乐的暑假，体验不一样的夏天 ');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp2/cover.png");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp2/cover.png");
	//设置购买支付金额
    $('input[name="model[money]"]').val('98.00');
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">★★★活动简介★★★</span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">【超值卡名称】：洛河夏令营超值卡</span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">【超值卡时间】：为期3天的野外夏令营</span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">【超值卡价格】：原价698元，现价98元</span></p><p style="white-space: normal;">【超值卡内容】：滑翔伞、cs、攀岩、篝火晚会、射击、冰雪世界、野生动物园、科学实验、急救培训等十几种项目。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★活动规则★★★<br/></p><p><span hiragino="" sans="" microsoft="" helvetica="" background-color:=""><p style="white-space: normal;"> 1、点击按钮“立即抢购”可直接付款购买。</p><p style="white-space: normal;">2、点击“专属海报”登记后，生成我的专属海报给好友，好友下单自己可获得商家提供的礼品。</p><p style="white-space: normal;">3、活动仅限7-8月份，年龄为5-15岁的青少年参加，购买后会有夏令营专职客服在3天内联系您，注意接听电话。</p><p style="white-space: normal;">4、购买成功后请到店核销登记，我们将在核销登记后为您安排夏令营时间。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★关于我们★★★</p><p style="white-space: normal;">我们有专职客服接待您的到访，我们有数十年专业野外运动的户外教练全程陪同指导。</p><p style="white-space: normal;">我们不只是带孩子体验各种项目，也是带领孩子们结交更多新朋友，学习更多户外知识，提高孩子们的人际交往能力，让他们和谐的与他人沟通。培养吃苦耐劳、敢于挑战、不断进取的精神。通过体验式训练让每个队员都能体验户外集体活动快乐，放松心情，学会欣赏和赞美别人。</p><p style="white-space: normal;"><br/></p></span></p><p>★以往夏令营展示</p><p><img src='+module_url+'resource/template/tmp/tmp2/content01.jpg width="100%" alt="夏令营1.jpg"/><img src='+module_url+'resource/template/tmp/tmp2/content02.jpg width="100%" alt="夏令营2.jpg"/><img src='+module_url+'resource/template/tmp/tmp2/content03.jpg width="100%" alt="夏令营3.jpg"/><img src='+module_url+'resource/template/tmp/tmp2/content04.jpg width="100%" alt="夏令营4.jpg"/></p><p><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('夏令营开始啦，给您的孩子一个愉快的夏季暑光');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp2/cover.png");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp2/cover.png");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('夏令营开始啦，一起来参加吧，出发吧！给孩子一个有趣快乐的暑假，体验不一样的夏天 ');
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
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp2/qr.png");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp2/qr.png";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('出发吧！给孩子一个有趣快乐的暑假，体验不一样的夏天！ ');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp2/cover.png");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp2/cover.png />");
	//设置购买支付金额
    $('input[name="model[money]"]').val('98.00');

    //设置活动内容
    artEditor.clear();
    artEditor.append('<p style="white-space: normal;"><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">★★★活动简介★★★</span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">【超值卡名称】：洛河夏令营超值卡</span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">【超值卡时间】：为期3天的野外夏令营</span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/><span hiragino="" sans="" microsoft="" helvetica="" background-color:="">【超值卡价格】：原价698元，现价98元</span></p><p style="white-space: normal;">【超值卡内容】：滑翔伞、cs、攀岩、篝火晚会、射击、冰雪世界、野生动物园、科学实验、急救培训等十几种项目。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★活动规则★★★<br/></p><p><span hiragino="" sans="" microsoft="" helvetica="" background-color:=""><p style="white-space: normal;"> 1、点击按钮“立即抢购”可直接付款购买。</p><p style="white-space: normal;">2、点击“专属海报”登记后，生成我的专属海报给好友，好友下单自己可获得商家提供的礼品。</p><p style="white-space: normal;">3、活动仅限7-8月份，年龄为5-15岁的青少年参加，购买后会有夏令营专职客服在3天内联系您，注意接听电话。</p><p style="white-space: normal;">4、购买成功后请到店核销登记，我们将在核销登记后为您安排夏令营时间。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★关于我们★★★</p><p style="white-space: normal;">我们有专职客服接待您的到访，我们有数十年专业野外运动的户外教练全程陪同指导。</p><p style="white-space: normal;">我们不只是带孩子体验各种项目，也是带领孩子们结交更多新朋友，学习更多户外知识，提高孩子们的人际交往能力，让他们和谐的与他人沟通。培养吃苦耐劳、敢于挑战、不断进取的精神。通过体验式训练让每个队员都能体验户外集体活动快乐，放松心情，学会欣赏和赞美别人。</p><p style="white-space: normal;"><br/></p></span></p><p>★以往夏令营展示</p><p><img src='+module_url+'resource/template/tmp/tmp2/content01.jpg width="100%" alt="夏令营1.jpg"/><img src='+module_url+'resource/template/tmp/tmp2/content02.jpg width="100%" alt="夏令营2.jpg"/><img src='+module_url+'resource/template/tmp/tmp2/content03.jpg width="100%" alt="夏令营3.jpg"/><img src='+module_url+'resource/template/tmp/tmp2/content04.jpg width="100%" alt="夏令营4.jpg"/></p><p><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('夏令营开始啦，给您的孩子一个愉快的夏季暑光');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp2/cover.png");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp2/cover.png />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('夏令营开始啦，一起来参加吧，出发吧！给孩子一个有趣快乐的暑假，体验不一样的夏天');
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
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp2/qr.png");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp2/qr.png />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp2/qr.png");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}



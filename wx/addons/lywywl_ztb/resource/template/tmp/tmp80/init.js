//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('挑战10秒！寻找最强王者的你，海量免费门票免费拿~');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp80/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp80/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>======================</strong></span></p><p style="white-space: normal;">一、<strong>活动内容</strong></p><p style="white-space: normal;">游客在***温泉游乐园门口可自愿挑战网红挑战十秒钟活动，挑战成功者可免费获取<strong>“***温泉游泳馆门票一张”</strong>。</p><p style="white-space: normal;">二、<strong>挑战规则</strong></p><p style="white-space: normal;">1、游客按下按钮挑战开始，再次按下按钮挑战结束。</p><p style="white-space: normal;">2、挑战秒数为10：000(具体根据设备海报上规则为准），即为完成挑战，挑战成功即可获得奖励。</p><p style="white-space: normal;">3、活动时间:20**年10月1日至31日，活动期间每人限制挑战3次。</p><p style="white-space: normal;">4、调整成功后可凭借系统生成的核销二维码到前台兑换门票。</p><p style="white-space: normal;">5、如遇不可抗力致使活动无法履行的因素，活动举办方不担责，活动最终解释权归***温泉游乐园所有。</p><p style="white-space: normal;">三、<strong>环境展示</strong></p><p><img src='+module_url+'resource/template/tmp/tmp80/content01.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp80/content02.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp80/content03.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp80/content04.jpg width="100%" style=""/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('挑战10秒！寻找最强王者的你，海量免费门票免费拿~');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp80/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url +"resource/template/tmp/tmp80/cover.jpg");
    $('textarea[name="model[share_desc]"]').val('挑战10秒 海量***温泉游乐园门票免费送 活动真实有效 最强王者等你来战');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('金隅凤山温泉度假村');
    $('input[name="model[store_map_list][0][lng]').val('116.291276');
    $('input[name="model[store_map_list][0][lat]').val('40.256038');
    $('input[name="model[store_map_list][0][address]').val('北京市昌平区蟒山路10号');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(6).select2();
    $('input[name="model[audio_url]"]').val(module_url +'resource/template/audio/voice19.mp3');
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('挑战10秒！寻找最强王者的你，海量免费门票免费拿~');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp80/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp80/cover.jpg />");
	//设置活动内容
	artEditor.clear();
	artEditor.append('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>======================</strong></span></p><p style="white-space: normal;">一、<strong>活动内容</strong></p><p style="white-space: normal;">游客在***温泉游乐园门口可自愿挑战网红挑战十秒钟活动，挑战成功者可免费获取<strong>“***温泉游泳馆门票一张”</strong>。</p><p style="white-space: normal;">二、<strong>挑战规则</strong></p><p style="white-space: normal;">1、游客按下按钮挑战开始，再次按下按钮挑战结束。</p><p style="white-space: normal;">2、挑战秒数为10：000(具体根据设备海报上规则为准），即为完成挑战，挑战成功即可获得奖励。</p><p style="white-space: normal;">3、活动时间:20**年10月1日至31日，活动期间每人限制挑战3次。</p><p style="white-space: normal;">4、调整成功后可凭借系统生成的核销二维码到前台兑换门票。</p><p style="white-space: normal;">5、如遇不可抗力致使活动无法履行的因素，活动举办方不担责，活动最终解释权归***温泉游乐园所有。</p><p style="white-space: normal;">三、<strong>环境展示</strong></p><p><img src='+module_url+'resource/template/tmp/tmp80/content01.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp80/content02.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp80/content03.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp80/content04.jpg width="100%" style=""/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('挑战10秒！寻找最强王者的你，海量免费门票免费拿~');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp80/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp80/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('挑战10秒 海量***温泉游乐园门票免费送 活动真实有效 最强王者等你来战');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('金隅凤山温泉度假村');
    $('input[name="model[store_map_list][0][lng]').val('116.291276');
    $('input[name="model[store_map_list][0][lat]').val('40.256038');
    $('input[name="model[store_map_list][0][address]').val('北京市昌平区蟒山路10号');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice19.mp3";
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

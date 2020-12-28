//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('元旦嗨翻天 欢乐刮刮卡');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp40/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp40/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
    uecontent.setContent('<p>元旦来啦！不二造型刮刮卡 一起刮出惊喜吧</p><p>2020马上要来啦，还不来给自己换个美美的新发型跨年吗？你做发型 我送护理，更有洗剪吹免费卡等你来刮。</p><p><br/></p><p> **我要参与** </p><p style="white-space: normal;">我要参与：点击“开始刮奖”开始刮奖活动。</p><p style="white-space: normal;">好奖一起拿：朋友参加自己可以获得额外一次机会。</p><p style="white-space: normal;">最高大奖：剪发年卡 全年免费</p><p style="white-space: normal;">到店使用：进店展示核销码，核销员扫码核销即可使用。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"> **不二造型** </p><p style="white-space: normal;">1、剪发年卡（全年免费使用，不限次数 仅限本人）<br/></p><p style="white-space: normal;">2、剪发季卡（3个月免费使用，不限次数 仅限本人）</p><p style="white-space: normal;">3、护理年卡（高档护理全年免费使用，限使用10次 仅限本人）</p><p style="white-space: normal;">4、护理季卡（高档护理3个月内免费使用，限使用3次 仅限本人）</p><p style="white-space: normal;">5、洗发月卡（1个月内免费使用，仅限5次 仅限本人）</p><p style="white-space: normal;">6、谢谢参与（可到店领取洗护试用装一份或满减卡一张）</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"> **不二造型展示** </p><p style="white-space: normal;"><img src='+module_url+'resource/template/tmp/tmp40/content01.jpg width="100%" alt="TIM图片20191221103925.jpg"/><img src='+module_url+'resource/template/tmp/tmp40/content02.jpg width="100%" alt="TIM图片20191221103938.jpg"/><img src='+module_url+'resource/template/tmp/tmp40/content03.jpg width="100%" alt="TIM图片20191221103946.jpg"/><img src='+module_url+'resource/template/tmp/tmp40/content04.jpg width="100%" alt="TIM图片20191221103956.jpg"/><img src='+module_url+'resource/template/tmp/tmp40/content05.jpg width="100%" alt="TIM图片20191221103942.jpg"/><img src='+module_url+'resource/template/tmp/tmp40/content06.jpg width="100%" alt="TIM图片20191221104004.jpg"/></p><p><br/></p><p style="white-space: normal;"> **我在这里** </p><p style="white-space: normal;">参与地点：西工区 京都大厦 888号 不二造型</p><p style="white-space: normal;">活动时间：2019年12月28号-2020年1月2号</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">**特别说明**</p><p style="white-space: normal;">1、本活动不与其他折扣活动同时参与。</p><p style="white-space: normal;">2、本活动的内容不收取任何费用，谨防被骗。</p><p style="white-space: normal;">最终解释权归不二造型所有</p><p style="white-space: normal;"><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}喊你一起来参与刮刮卡，全年免费做护理啦');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp40/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp40/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}欢乐刮刮卡，全年免费护理、全年免费剪发、免费洗发更多好礼等您刮');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置背景音乐
    $('#audio_id').val(5).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice5.mp3');
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('元旦嗨翻天 欢乐刮刮卡');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp40/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp40/cover.jpg />");
    //设置活动内容
	artEditor.clear();
    artEditor.append('<p>元旦来啦！不二造型刮刮卡 一起刮出惊喜吧</p><p>2020马上要来啦，还不来给自己换个美美的新发型跨年吗？你做发型 我送护理，更有洗剪吹免费卡等你来刮。</p><p><br/></p><p> **我要参与** </p><p style="white-space: normal;">我要参与：点击“开始刮奖”开始刮奖活动。</p><p style="white-space: normal;">好奖一起拿：朋友参加自己可以获得额外一次机会。</p><p style="white-space: normal;">最高大奖：剪发年卡 全年免费</p><p style="white-space: normal;">到店使用：进店展示核销码，核销员扫码核销即可使用。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"> **不二造型** </p><p style="white-space: normal;">1、剪发年卡（全年免费使用，不限次数 仅限本人）<br/></p><p style="white-space: normal;">2、剪发季卡（3个月免费使用，不限次数 仅限本人）</p><p style="white-space: normal;">3、护理年卡（高档护理全年免费使用，限使用10次 仅限本人）</p><p style="white-space: normal;">4、护理季卡（高档护理3个月内免费使用，限使用3次 仅限本人）</p><p style="white-space: normal;">5、洗发月卡（1个月内免费使用，仅限5次 仅限本人）</p><p style="white-space: normal;">6、谢谢参与（可到店领取洗护试用装一份或满减卡一张）</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"> **不二造型展示** </p><p style="white-space: normal;"><img src='+module_url+'resource/template/tmp/tmp40/content01.jpg width="100%" alt="TIM图片20191221103925.jpg"/><img src='+module_url+'resource/template/tmp/tmp40/content02.jpg width="100%" alt="TIM图片20191221103938.jpg"/><img src='+module_url+'resource/template/tmp/tmp40/content03.jpg width="100%" alt="TIM图片20191221103946.jpg"/><img src='+module_url+'resource/template/tmp/tmp40/content04.jpg width="100%" alt="TIM图片20191221103956.jpg"/><img src='+module_url+'resource/template/tmp/tmp40/content05.jpg width="100%" alt="TIM图片20191221103942.jpg"/><img src='+module_url+'resource/template/tmp/tmp40/content06.jpg width="100%" alt="TIM图片20191221104004.jpg"/></p><p><br/></p><p style="white-space: normal;"> **我在这里** </p><p style="white-space: normal;">参与地点：西工区 京都大厦 888号 不二造型</p><p style="white-space: normal;">活动时间：2019年12月28号-2020年1月2号</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">**特别说明**</p><p style="white-space: normal;">1、本活动不与其他折扣活动同时参与。</p><p style="white-space: normal;">2、本活动的内容不收取任何费用，谨防被骗。</p><p style="white-space: normal;">最终解释权归不二造型所有</p><p style="white-space: normal;"><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}喊你一起来参与刮刮卡，全年免费做护理啦');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp40/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp40/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}欢乐刮刮卡，全年免费护理、全年免费剪发、免费洗发更多好礼等您刮');
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

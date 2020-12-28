//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('新年刮好礼，大奖鼠于你，快来周大福刮出鼠于你的黄金吧');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp46/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp46/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
    uecontent.setContent('<p>新年送好礼，大奖鼠于你！</p><p>周大福来送惊喜啦，鼠年限定款吊坠跳跳鼠已经上线啦，一起跟随跳跳鼠迈开你魔鬼的步伐，这个2020一定要挺胸抬头向前进。</p><p><br/></p><p><span style="font-size: 18px;">*****我要参与*****</span></p><p style="white-space: normal;">我要参与：点击“开始刮奖”开始刮奖活动。</p><p style="white-space: normal;">好奖一起拿：朋友参加自己可以获得额外一次机会。</p><p style="white-space: normal;">最高大奖：周大福跳跳鼠吊坠。</p><p style="white-space: normal;">到店使用：进店展示核销码，核销员扫码核销即可使用。</p><p style="white-space: normal;"><br/></p><p><span style="font-size: 18px;">*****非你莫鼠*****</span></p><p>一等奖：周大福跳跳鼠吊坠</p><p>二等奖：周大福小飞猪吊坠<br/>三等奖：周大福字母吊坠<br/>四等奖：周大福抵扣卷300元<br/>五等奖：谢谢参与</p><p><br/></p><p><span style="font-size: 18px;">*****2020新品展示*****</span><img src='+module_url+'resource/template/tmp/tmp46/content01.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp46/content02.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp46/content03.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp46/content04.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp46/content05.jpg width="100%" alt=""/></p><p><br/></p><p><span style="font-size: 18px;">*****参与地址*****</span></p><p>活动地址：涧西区 景华路 银座商城888号</p><p>活动时间：2019年12月28日-2020年1月10日</p><p><br/></p><p style="white-space: normal;"><span style="font-size: 18px;">*****特别说明*****</span></p><p style="white-space: normal;">1、本活动不与其他折扣活动同时参与。</p><p style="white-space: normal;">2、活动内容也享受售后服务。</p><p style="white-space: normal;">最终解释权归周大福珠宝所有</p><p><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}黄金刮出来，豪礼鼠于你');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp46/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp46/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}周大福送你免费戴黄金啦，快来参加周大福珠宝的黄金刮刮卡吧');
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
    $('input[name="model[title]"]').val('新年刮好礼，大奖鼠于你，快来周大福刮出鼠于你的黄金吧');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp46/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp46/cover.jpg />");
    //设置活动内容
	artEditor.clear();
    artEditor.append('<p>新年送好礼，大奖鼠于你！</p><p>周大福来送惊喜啦，鼠年限定款吊坠跳跳鼠已经上线啦，一起跟随跳跳鼠迈开你魔鬼的步伐，这个2020一定要挺胸抬头向前进。</p><p><br/></p><p><span style="font-size: 18px;">*****我要参与*****</span></p><p style="white-space: normal;">我要参与：点击“开始刮奖”开始刮奖活动。</p><p style="white-space: normal;">好奖一起拿：朋友参加自己可以获得额外一次机会。</p><p style="white-space: normal;">最高大奖：周大福跳跳鼠吊坠。</p><p style="white-space: normal;">到店使用：进店展示核销码，核销员扫码核销即可使用。</p><p style="white-space: normal;"><br/></p><p><span style="font-size: 18px;">*****非你莫鼠*****</span></p><p>一等奖：周大福跳跳鼠吊坠</p><p>二等奖：周大福小飞猪吊坠<br/>三等奖：周大福字母吊坠<br/>四等奖：周大福抵扣卷300元<br/>五等奖：谢谢参与</p><p><br/></p><p><span style="font-size: 18px;">*****2020新品展示*****</span><img src='+module_url+'resource/template/tmp/tmp46/content01.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp46/content02.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp46/content03.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp46/content04.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp46/content05.jpg width="100%" alt=""/></p><p><br/></p><p><span style="font-size: 18px;">*****参与地址*****</span></p><p>活动地址：涧西区 景华路 银座商城888号</p><p>活动时间：2019年12月28日-2020年1月10日</p><p><br/></p><p style="white-space: normal;"><span style="font-size: 18px;">*****特别说明*****</span></p><p style="white-space: normal;">1、本活动不与其他折扣活动同时参与。</p><p style="white-space: normal;">2、活动内容也享受售后服务。</p><p style="white-space: normal;">最终解释权归周大福珠宝所有</p><p><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}黄金刮出来，豪礼鼠于你');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp46/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp46/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}周大福送你免费戴黄金啦，快来参加周大福珠宝的黄金刮刮卡吧');
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

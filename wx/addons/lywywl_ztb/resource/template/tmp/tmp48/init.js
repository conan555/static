//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('新年大转盘 好礼送不同 水星家纺等您转出免单来');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp48/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp48/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p>福鼠兆新年2020水星家纺送好礼啦，参与活动即可抽取您的专属免单。</p><p style="white-space: normal;"><br/></p><p><br/></p><p><span style="font-size: 18px;">***免单转出来***</span></p><p>参加活动：点击转盘上的“点击抽奖”即可参加活动。</p><p>好礼一起拿：朋友参加自己可以获得额外一次机会。<br/>凭参与记录进店就有惊喜送。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"><span style="font-size: 18px;">***水星大转盘***</span></p><p style="white-space: normal;">一等奖：水星家纺免单券（最高6666元单笔不累计）</p><p style="white-space: normal;">二等奖：水星家纺3030元抵扣券（特价商品除外）</p><p style="white-space: normal;">三等奖：水星家纺2020元抵扣券（满3500元使用）</p><p style="white-space: normal;">四等奖：水星家纺加厚床垫<br/>五等奖：水星家纺枕芯一对</p><p style="white-space: normal;">六等奖：进店领取惊喜大礼包</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"><span style="font-size: 18px;">***水星新品区***</span></p><p style="white-space: normal;"><img src='+module_url+'resource/template/tmp/tmp48/content01.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp48/content02.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp48/content03.jpg width="100%" alt=""/></p><p style="white-space: normal;"><span style="font-size: 18px;">***活动地址***</span></p><p style="white-space: normal;"><span><span>活动时间：2020年1月1日到2020年1月20日<br/>活动地点：涧西区 万达广场 一楼888号 水星家纺</span></span></p><p style="white-space: normal;">本活动最终解释权归水星家纺所有。</p><p><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}水星家纺送出免单大奖，好运惊喜转出来');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp48/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp48/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}枕芯、毛毯、全棉四件套、床垫统统免费送，快来转出您的惊喜吧');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(2).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice2.mp3');
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('喜迎元旦 年终盛宴 豪礼送送送');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp48/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp48/cover.jpg />");
    //设置活动内容
	artEditor.clear();
    artEditor.append('<p>福鼠兆新年2020水星家纺送好礼啦，参与活动即可抽取您的专属免单。</p><p style="white-space: normal;"><br/></p><p><br/></p><p><span style="font-size: 18px;">***免单转出来***</span></p><p>参加活动：点击转盘上的“点击抽奖”即可参加活动。</p><p>好礼一起拿：朋友参加自己可以获得额外一次机会。<br/>凭参与记录进店就有惊喜送。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"><span style="font-size: 18px;">***水星大转盘***</span></p><p style="white-space: normal;">一等奖：水星家纺免单券（最高6666元单笔不累计）</p><p style="white-space: normal;">二等奖：水星家纺3030元抵扣券（特价商品除外）</p><p style="white-space: normal;">三等奖：水星家纺2020元抵扣券（满3500元使用）</p><p style="white-space: normal;">四等奖：水星家纺加厚床垫<br/>五等奖：水星家纺枕芯一对</p><p style="white-space: normal;">六等奖：进店领取惊喜大礼包</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"><span style="font-size: 18px;">***水星新品区***</span></p><p style="white-space: normal;"><img src='+module_url+'resource/template/tmp/tmp48/content01.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp48/content02.jpg width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp48/content03.jpg width="100%" alt=""/></p><p style="white-space: normal;"><span style="font-size: 18px;">***活动地址***</span></p><p style="white-space: normal;"><span><span>活动时间：2020年1月1日到2020年1月20日<br/>活动地点：涧西区 万达广场 一楼888号 水星家纺</span></span></p><p style="white-space: normal;">本活动最终解释权归水星家纺所有。</p><p><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}水星家纺送出免单大奖，好运惊喜转出来');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp48/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp48/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}枕芯、毛毯、全棉四件套、床垫统统免费送，快来转出您的惊喜吧');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice2.mp3";
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



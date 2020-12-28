//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('安踏2020春季新款运动鞋 好礼送不停 转动大盘赢好礼');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp63/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp63/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>=======================</strong></span>&nbsp;</p><p>安踏2020春季新款运动鞋送好礼啦，参与活动即可抽取您的专属免单。</p><p style="white-space: normal;"><br/></p><p><span style="font-size: 18px;">***免单转出来***</span></p><p>参加活动：点击转盘上的“点击抽奖”即可参加活动。</p><p>好礼一起拿：朋友参加自己可以获得额外一次机会。<br/>凭参与记录进店就有惊喜送。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"><span style="font-size: 18px;">***新品展示***</span></p><p style="white-space: normal;"><span style="font-size: 18px;"></span></p><p><img src='+module_url+'resource/template/tmp/tmp63/content01.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp63/content02.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp63/content03.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp63/content04.jpg width="100%" style=""/></p><p style="white-space: normal;"><span style="font-size: 18px;"><br/></span><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}安踏送出免单大奖，好运惊喜转出来');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp63/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp63/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}安踏送出免单大奖，好运惊喜转出来');
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
    $('input[name="model[title]"]').val('安踏2020春季新款运动鞋 好礼送不停 转动大盘赢好礼');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp63/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp63/cover.jpg />");
    //设置活动内容
	artEditor.clear();
    artEditor.append('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>=======================</strong></span>&nbsp;</p><p>安踏2020春季新款运动鞋送好礼啦，参与活动即可抽取您的专属免单。</p><p style="white-space: normal;"><br/></p><p><span style="font-size: 18px;">***免单转出来***</span></p><p>参加活动：点击转盘上的“点击抽奖”即可参加活动。</p><p>好礼一起拿：朋友参加自己可以获得额外一次机会。<br/>凭参与记录进店就有惊喜送。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"><span style="font-size: 18px;">***新品展示***</span></p><p style="white-space: normal;"><span style="font-size: 18px;"></span></p><p><img src='+module_url+'resource/template/tmp/tmp63/content01.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp63/content02.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp63/content03.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp63/content04.jpg width="100%" style=""/></p><p style="white-space: normal;"><span style="font-size: 18px;"><br/></span><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}安踏送出免单大奖，好运惊喜转出来');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp63/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp63/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}安踏送出免单大奖，好运惊喜转出来');
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



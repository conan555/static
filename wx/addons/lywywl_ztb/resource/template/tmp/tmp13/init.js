//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('狂欢盛典 不容错过 限时活动速来参加更多神秘惊喜等您来！');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp13/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp13/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p>一、活动主题<br/></p><p>狂欢盛典,不容错过! 限时活动速来参加更多神秘惊喜等您来！</p><p>二、活动时间：</p><p>活动时间：10月10日-10月31日</p><p>三、领取时间</p><p>领取时间：11月1日-11月15日</p><p>四、活动奖品</p><p>奖品由联通公司联合史密斯新区居然之家店提供价值2588元史密斯净水器，凡是抽到礼品者在领取时间到店领取。</p><p>五、兑奖方式</p><p>本活动采用在线抽奖，线下领取的方式。</p><p>领取奖品时需要联通用户携带本人身份证否则概不生效。</p><p>六、 活动须知</p><p>1.单个用户只有一次抽奖机会，不可重复兑换。</p><p>2.活动只限联通用户，异网号码不可参加。</p><p>3.不可代领，不可邮寄，本人持身份证进店领取。</p><p>4.最终解释权归联通小商品营业厅所有。</p><p><img src='+module_url+'resource/template/tmp/tmp13/content01.jpg width="100%" alt="放在文案后面.jpg"/></p><p><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('狂欢盛典 不容错过 限时活动速来参加更多神秘惊喜等您来！');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp13/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp13/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('狂欢盛典 不容错过 限时活动速来参加更多神秘惊喜等您来！ ');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(4).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice4.mp3');
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('狂欢盛典 不容错过 限时活动速来参加更多神秘惊喜等您来！');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp13/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp13/cover.jpg />");
    //设置活动内容
	artEditor.clear();
    artEditor.append('<p>一、活动主题<br/></p><p>狂欢盛典,不容错过! 限时活动速来参加更多神秘惊喜等您来！</p><p>二、活动时间：</p><p>活动时间：10月10日-10月31日</p><p>三、领取时间</p><p>领取时间：11月1日-11月15日</p><p>四、活动奖品</p><p>奖品由联通公司联合史密斯新区居然之家店提供价值2588元史密斯净水器，凡是抽到礼品者在领取时间到店领取。</p><p>五、兑奖方式</p><p>本活动采用在线抽奖，线下领取的方式。</p><p>领取奖品时需要联通用户携带本人身份证否则概不生效。</p><p>六、 活动须知</p><p>1.单个用户只有一次抽奖机会，不可重复兑换。</p><p>2.活动只限联通用户，异网号码不可参加。</p><p>3.不可代领，不可邮寄，本人持身份证进店领取。</p><p>4.最终解释权归联通小商品营业厅所有。</p><p><img src='+module_url+'resource/template/tmp/tmp13/content01.jpg width="100%" alt="放在文案后面.jpg"/></p><p><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('狂欢盛典 不容错过 限时活动速来参加更多神秘惊喜等您来！');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp13/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp13/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('狂欢盛典 不容错过 限时活动速来参加更多神秘惊喜等您来！');
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


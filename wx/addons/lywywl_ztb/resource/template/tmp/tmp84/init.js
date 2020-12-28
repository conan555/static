//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('分享朋友圈即可领！千份礼品等你来拿~ ');
	//设置活动封面图片
	var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp84/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp84/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p>亲爱的小伙伴，感谢您长久以来对**财富公司的支持与厚爱，眼看着马上就要到10·1了，小编觉得，是时候，给大家献上我们的小心心了。</p><p>在这阳光灿烂的十月</p><p>跟着**财富公司一起躁起来吧！</p><p>活动时间：</p><p>2020年10月1日9:00—10月7日24:00止</p><p>参与方式：</p><p>您只需成为**财富公司有效投资人，关注**财富微信公众号，将此活动微信转发至朋友圈，即可领取！</p><p>领取方式：</p><p>访问活动链接后将活动内容转发至微信朋友圈或微信群，邀请10人查看活动内容后至活动页面领取奖品。</p><p>活动规则：</p><p>① 活动参与者必须是**保险公司有效投资人。</p><p>② 非**财富投资人需进入**财富网址www.******.com完成注册，绑定银行卡成为**财富有效投资人，即可参与活动。</p><p>③ 本次活动最终解释权归**财富所有。</p><p>重要的事情说三遍：</p><p>您只需成为**财富有效投资人，关注**财富微信公众号，将此活动微信转发至朋友圈，即可领取！</p><p>您只需成为**财富有效投资人，关注**财富微信公众号，将此活动微信转发至朋友圈，即可领取！</p><p>您只需成为**财富有效投资人，关注**财富微信公众号，将此活动微信转发至朋友圈，即可领取！</p><p>在未来的日子里，愿**财富能够常伴您左右，做您贴心的理财小帮手。</p>');
    });

	//设置活动分享标题
    $('input[name="model[share_title]"]').val('分享朋友圈即可领！千份礼品等你来拿~');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp84/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp84/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('在未来的日子里，愿**财富能够常伴您左右，做您贴心的理财小帮手。');
	//设置活动分享内容
    var uecontent = UE.getEditor('model[share_content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p>亲爱的小伙伴，感谢您长久以来对**财富公司的支持与厚爱，眼看着马上就要到10·1了，小编觉得，是时候，给大家献上我们的小心心了。</p><p>在这阳光灿烂的十月</p><p>跟着**财富公司一起躁起来吧！</p><p>活动时间：</p><p>2020年10月1日9:00—10月7日24:00止</p><p>参与方式：</p><p>您只需成为**财富公司有效投资人，关注**财富微信公众号，将此活动微信转发至朋友圈，即可领取！</p><p>领取方式：</p><p>访问活动链接后将活动内容转发至微信朋友圈或微信群，邀请10人查看活动内容后至活动页面领取奖品。</p><p>活动规则：</p><p>① 活动参与者必须是**保险公司有效投资人。</p><p>② 非**财富投资人需进入**财富网址www.******.com完成注册，绑定银行卡成为**财富有效投资人，即可参与活动。</p><p>③ 本次活动最终解释权归**财富所有。</p><p>重要的事情说三遍：</p><p>您只需成为**财富有效投资人，关注**财富微信公众号，将此活动微信转发至朋友圈，即可领取！</p><p>您只需成为**财富有效投资人，关注**财富微信公众号，将此活动微信转发至朋友圈，即可领取！</p><p>您只需成为**财富有效投资人，关注**财富微信公众号，将此活动微信转发至朋友圈，即可领取！</p><p>在未来的日子里，愿**财富能够常伴您左右，做您贴心的理财小帮手。</p>');
    });

	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('北京王府井百货');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(6).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice6.mp3');
}
//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('分享朋友圈即可领！千份礼品等你来拿~');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp84/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp84/cover.jpg />");

    //设置活动内容
	artEditor.clear();
    artEditor.append('<p>亲爱的小伙伴，感谢您长久以来对**财富公司的支持与厚爱，眼看着马上就要到10·1了，小编觉得，是时候，给大家献上我们的小心心了。</p><p>在这阳光灿烂的十月</p><p>跟着**财富公司一起躁起来吧！</p><p>活动时间：</p><p>2020年10月1日9:00—10月7日24:00止</p><p>参与方式：</p><p>您只需成为**财富公司有效投资人，关注**财富微信公众号，将此活动微信转发至朋友圈，即可领取！</p><p>领取方式：</p><p>访问活动链接后将活动内容转发至微信朋友圈或微信群，邀请10人查看活动内容后至活动页面领取奖品。</p><p>活动规则：</p><p>① 活动参与者必须是**保险公司有效投资人。</p><p>② 非**财富投资人需进入**财富网址www.******.com完成注册，绑定银行卡成为**财富有效投资人，即可参与活动。</p><p>③ 本次活动最终解释权归**财富所有。</p><p>重要的事情说三遍：</p><p>您只需成为**财富有效投资人，关注**财富微信公众号，将此活动微信转发至朋友圈，即可领取！</p><p>您只需成为**财富有效投资人，关注**财富微信公众号，将此活动微信转发至朋友圈，即可领取！</p><p>您只需成为**财富有效投资人，关注**财富微信公众号，将此活动微信转发至朋友圈，即可领取！</p><p>在未来的日子里，愿**财富能够常伴您左右，做您贴心的理财小帮手。</p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('分享朋友圈即可领！千份礼品等你来拿~');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp84/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp84/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('在未来的日子里，愿**财富能够常伴您左右，做您贴心的理财小帮手。');
	//设置活动分享内容
	share_artEditor.clear();
	share_artEditor.append('<p>亲爱的小伙伴，感谢您长久以来对**财富公司的支持与厚爱，眼看着马上就要到10·1了，小编觉得，是时候，给大家献上我们的小心心了。</p><p>在这阳光灿烂的十月</p><p>跟着**财富公司一起躁起来吧！</p><p>活动时间：</p><p>2020年10月1日9:00—10月7日24:00止</p><p>参与方式：</p><p>您只需成为**财富公司有效投资人，关注**财富微信公众号，将此活动微信转发至朋友圈，即可领取！</p><p>领取方式：</p><p>访问活动链接后将活动内容转发至微信朋友圈或微信群，邀请10人查看活动内容后至活动页面领取奖品。</p><p>活动规则：</p><p>① 活动参与者必须是**保险公司有效投资人。</p><p>② 非**财富投资人需进入**财富网址www.******.com完成注册，绑定银行卡成为**财富有效投资人，即可参与活动。</p><p>③ 本次活动最终解释权归**财富所有。</p><p>重要的事情说三遍：</p><p>您只需成为**财富有效投资人，关注**财富微信公众号，将此活动微信转发至朋友圈，即可领取！</p><p>您只需成为**财富有效投资人，关注**财富微信公众号，将此活动微信转发至朋友圈，即可领取！</p><p>您只需成为**财富有效投资人，关注**财富微信公众号，将此活动微信转发至朋友圈，即可领取！</p><p>在未来的日子里，愿**财富能够常伴您左右，做您贴心的理财小帮手。</p>');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('北京王府井百货');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice6.mp3";
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

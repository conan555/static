//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('真情回馈接踵来，幸运轮盘好运开！');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp83/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp83/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p>活动时间：20**年10月1日——20**年10月7日</p><p><strong>活动内容：</strong></p><p>1、玩家需要使用450张银卡在兑换中心兑换幸运轮盘卷进行抽奖，一张轮盘卷只可以抽奖一次。</p><p>2、每个ID每天最多只可以抽奖三次。</p><p>3、玩家获得的奖品在60秒后自动加入到游戏账户中</p><p><strong>活动步骤：</strong></p><p>1、先进入兑换中心兑换自己所需的轮盘抽奖卷。</p><p>2、兑换成功后可直接进入幸运轮盘抽奖页面，进行抽奖，也可进入商城，点击“我的背包”的“道具”中查看抽奖卷数据后再进行抽奖。</p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}邀请您参与逍遥游真情回馈，好运惊喜转出来');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp83/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp83/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('逍遥游真情大回馈，海量奖品免费送，速速来参与吧！');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井百货');
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
    $('input[name="model[title]"]').val('真情回馈接踵来，幸运轮盘好运开！');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp83/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp83/cover.jpg />");
    //设置活动内容
	artEditor.clear();
    artEditor.append('<p>活动时间：20**年10月1日——20**年10月7日</p><p><strong>活动内容：</strong></p><p>1、玩家需要使用450张银卡在兑换中心兑换幸运轮盘卷进行抽奖，一张轮盘卷只可以抽奖一次。</p><p>2、每个ID每天最多只可以抽奖三次。</p><p>3、玩家获得的奖品在60秒后自动加入到游戏账户中</p><p><strong>活动步骤：</strong></p><p>1、先进入兑换中心兑换自己所需的轮盘抽奖卷。</p><p>2、兑换成功后可直接进入幸运轮盘抽奖页面，进行抽奖，也可进入商城，点击“我的背包”的“道具”中查看抽奖卷数据后再进行抽奖。</p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}邀请您参与逍遥游真情回馈，好运惊喜转出来');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp83/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp83/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('逍遥游真情大回馈，海量奖品免费送，速速来参与吧！');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井百货');
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



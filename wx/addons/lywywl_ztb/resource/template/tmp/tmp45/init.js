//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('惊喜派对礼包狂欢送 神秘豪华礼包等你拿');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp45/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp45/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"><span style="color: rgb(251, 213, 181);"><strong><span style="font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></span></p><p style="white-space: normal;"><span style="color: rgb(251, 213, 181);"><strong>======================</strong></span></p><p><br/></p><p style="white-space: normal;">★★★活动规则★★★</p><p style="white-space: normal;">1、进入自己的活动页面，每个人都可以参加。</p><p style="white-space: normal;">2、限时限量，不要错过哦。</p><p style="white-space: normal;">2、活动的礼品可到商家指定店铺核销。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★惊喜商品★★★</p><p style="white-space: normal;">1、神秘豪华礼包&nbsp; &nbsp;1 大 份</p><p style="white-space: normal;">2、iPad mini4&nbsp; &nbsp; 1台</p><p style="white-space: normal;">3、888元商场购物券&nbsp; &nbsp;1张</p><p style="white-space: normal;">4、拍立得新款&nbsp; &nbsp;1台</p><p style="white-space: normal;">5、京东100元购物卡&nbsp; &nbsp;1张</p><p style="white-space: normal;">6、88元现金红包&nbsp; &nbsp;1个</p><p style="white-space: normal;">7、谢谢参与（很遗憾 感谢您的参与）</p><p style="white-space: normal;">8、谢谢参与（不要灰心 我们店铺还有很多惊喜等你来</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★问答专区：</p><p style="white-space: normal;">1、我次数用完了还想参与怎么办？</p><p style="white-space: normal;">答：我们还设置了额外参与机会，详情可联系商家咨询。</p><p style="white-space: normal;">2、我不想要礼品1，换成礼品2可以吗？</p><p style="white-space: normal;">答：每个礼品都是我们精挑细选固定数量的，常见且实用的，期待您把您的带回家哦。</p><p style="white-space: normal;">3、xxxxxxx？</p><p style="white-space: normal;">答：xxxxxx（没啥问题了 ）</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★再说一句</p><p style="white-space: normal;">谢谢参与的凭记录可兑换本店20元抵扣券以示安慰，很不错吧，还是祝您拿惊喜礼包哦。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">商家展示：↓↓↓↓↓↓</p><p style="white-space: normal;">该商家暂无图片，欢迎到店参观。</p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('惊喜派对礼包狂欢送 神秘豪华礼包等你拿');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp45/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url +"resource/template/tmp/tmp45/cover.jpg");
    $('textarea[name="model[share_desc]"]').val('惊喜派对礼包狂欢送 神秘豪华礼包、iPad mini4.拍立得等更多惊喜等你拿');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(4).select2();
    $('input[name="model[audio_url]"]').val(module_url +'resource/template/audio/voice4.mp3');
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('惊喜派对礼包狂欢送 神秘豪华礼包等你拿');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp45/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp45/cover.jpg />");
	//设置活动内容
	artEditor.clear();
	artEditor.append('<p style="white-space: normal;"><span style="color: rgb(251, 213, 181);"><strong><span style="font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></span></p><p style="white-space: normal;"><span style="color: rgb(251, 213, 181);"><strong>======================</strong></span></p><p><br/></p><p style="white-space: normal;">★★★活动规则★★★</p><p style="white-space: normal;">1、进入自己的活动页面，每个人都可以参加。</p><p style="white-space: normal;">2、限时限量，不要错过哦。</p><p style="white-space: normal;">2、活动的礼品可到商家指定店铺核销。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★惊喜商品★★★</p><p style="white-space: normal;">1、神秘豪华礼包&nbsp; &nbsp;1 大 份</p><p style="white-space: normal;">2、iPad mini4&nbsp; &nbsp; 1台</p><p style="white-space: normal;">3、888元商场购物券&nbsp; &nbsp;1张</p><p style="white-space: normal;">4、拍立得新款&nbsp; &nbsp;1台</p><p style="white-space: normal;">5、京东100元购物卡&nbsp; &nbsp;1张</p><p style="white-space: normal;">6、88元现金红包&nbsp; &nbsp;1个</p><p style="white-space: normal;">7、谢谢参与（很遗憾 感谢您的参与）</p><p style="white-space: normal;">8、谢谢参与（不要灰心 我们店铺还有很多惊喜等你来</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★问答专区：</p><p style="white-space: normal;">1、我次数用完了还想参与怎么办？</p><p style="white-space: normal;">答：我们还设置了额外参与机会，详情可联系商家咨询。</p><p style="white-space: normal;">2、我不想要礼品1，换成礼品2可以吗？</p><p style="white-space: normal;">答：每个礼品都是我们精挑细选固定数量的，常见且实用的，期待您把您的带回家哦。</p><p style="white-space: normal;">3、xxxxxxx？</p><p style="white-space: normal;">答：xxxxxx（没啥问题了 ）</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★再说一句</p><p style="white-space: normal;">谢谢参与的凭记录可兑换本店20元抵扣券以示安慰，很不错吧，还是祝您拿惊喜礼包哦。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">商家展示：↓↓↓↓↓↓</p><p style="white-space: normal;">该商家暂无图片，欢迎到店参观。</p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('惊喜派对礼包狂欢送 神秘豪华礼包等你拿');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp45/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp45/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('惊喜派对礼包狂欢送 神秘豪华礼包、iPad mini4.拍立得等更多惊喜等你拿');
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

//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('幸运抢福袋"活动开始啦！微信用户即可获得12.12好礼送不停。');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp8/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp8/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p>一、活动主题：</p><p><br/></p><p>缤纷夏日 感恩回馈 欢乐砸出惊喜，错过要再等一年！</p><p><br/></p><p>三、活动时间：</p><p><br/></p><p>抽奖时间：10月21日~11月23日；</p><p><br/></p><p>四、活动奖品：</p><p><br/></p><p>每成功支付一次，即可参与一次抢福袋！</p><p><br/></p><p>一等奖：价值300元水果卡一张</p><p><br/></p><p>可在本店领取价值300元水果礼盒一件。</p><p><br/></p><p>二等奖：价值200元水果卡一张</p><p><br/></p><p>可在本店领取价值200元水果礼盒一件。</p><p><br/></p><p>三等奖：价值100元水果卡一张</p><p><br/></p><p>可在本店领取价值100元水果礼盒一件。</p><p><br/></p><p>活动说明：</p><p><br/></p><p>&nbsp;1.每个用户最多可兑取1个奖品。</p><p><br/></p><p>2.每人仅限一个手机号参加，不得转让，延期不领者视为放弃。</p><p><br/></p><p>五、兑奖方式：</p><p>到店领奖</p><p><br/></p><p>六、活动须知：</p><p>获得最终解释权归&quot;果然爱&quot;水果文化东路店所有。</p><p><img src='+module_url+'resource/template/tmp/tmp8/content01.jpg width="100%" alt=""/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('新老会员大回馈，9.9元即可购买越南甜心大芒果2件，名额有限，抢完即止！');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp8/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp8/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('新老会员大回馈，9.9元即可购买越南甜心大芒果2件，名额有限，抢完即止！ ');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(5).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice5.mp3');
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('幸运抢福袋"活动开始啦！微信用户即可获得12.12好礼送不停。');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp8/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp8/cover.jpg />");
    //设置活动内容
	artEditor.clear();
    artEditor.append('<p>一、活动主题：</p><p><br/></p><p>缤纷夏日 感恩回馈 欢乐砸出惊喜，错过要再等一年！</p><p><br/></p><p>三、活动时间：</p><p><br/></p><p>抽奖时间：10月21日~11月23日；</p><p><br/></p><p>四、活动奖品：</p><p><br/></p><p>每成功支付一次，即可参与一次抢福袋！</p><p><br/></p><p>一等奖：价值300元水果卡一张</p><p><br/></p><p>可在本店领取价值300元水果礼盒一件。</p><p><br/></p><p>二等奖：价值200元水果卡一张</p><p><br/></p><p>可在本店领取价值200元水果礼盒一件。</p><p><br/></p><p>三等奖：价值100元水果卡一张</p><p><br/></p><p>可在本店领取价值100元水果礼盒一件。</p><p><br/></p><p>活动说明：</p><p><br/></p><p>&nbsp;1.每个用户最多可兑取1个奖品。</p><p><br/></p><p>2.每人仅限一个手机号参加，不得转让，延期不领者视为放弃。</p><p><br/></p><p>五、兑奖方式：</p><p>到店领奖</p><p><br/></p><p>六、活动须知：</p><p>获得最终解释权归&quot;果然爱&quot;水果文化东路店所有。</p><p><img src='+module_url+'resource/template/tmp/tmp8/content01.jpg width="100%" alt=""/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('新老会员大回馈，9.9元即可购买越南甜心大芒果2件，名额有限，抢完即止！');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp8/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp8/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('新老会员大回馈，9.9元即可购买越南甜心大芒果2件，名额有限，抢完即止！');
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

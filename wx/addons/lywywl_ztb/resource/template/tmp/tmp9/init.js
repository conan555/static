//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('缤纷夏日 感恩回馈 欢乐砸出惊喜，错过要再等一年！');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp9/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp9/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p> <br/></p><p>一、活动主题：</p><p><br/></p><p>缤纷夏日 感恩回馈 欢乐砸出惊喜，错过要再等一年！</p><p><br/></p><p>三、活动时间：</p><p><br/></p><p>抽奖时间：10月21日~11月23日；</p><p><br/></p><p>四、活动奖品：</p><p><br/></p><p>由&quot;奥创网络工作室&quot;提供奖品；</p><p>一等奖3名，现金红包88元，随机红包188份</p><p>二等奖66名，赠送全国任意省份旅游年卡</p><p>三等奖222名，赠送中石化加油卡。</p><p><br/></p><p>五、兑奖方式：</p><p>本活动采用在线领奖方式</p><p>到店领奖<img src='+module_url+'resource/template/tmp/tmp9/content01.jpg width="100%" alt="放在文案后面.jpg"/></p><p><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('缤纷夏感恩回馈欢乐砸出惊喜，错过要再等一年！');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp9/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp9/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('缤纷夏感恩回馈欢乐砸出惊喜，错过要再等一年！ ');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(7).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice7.mp3');
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('缤纷夏日 感恩回馈 欢乐砸出惊喜，错过要再等一年！');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp9/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp9/cover.jpg />");
    //设置活动内容
	artEditor.clear();
    artEditor.append('<p> <br/></p><p>一、活动主题：</p><p><br/></p><p>缤纷夏日 感恩回馈 欢乐砸出惊喜，错过要再等一年！</p><p><br/></p><p>三、活动时间：</p><p><br/></p><p>抽奖时间：10月21日~11月23日；</p><p><br/></p><p>四、活动奖品：</p><p><br/></p><p>由&quot;奥创网络工作室&quot;提供奖品；</p><p>一等奖3名，现金红包88元，随机红包188份</p><p>二等奖66名，赠送全国任意省份旅游年卡</p><p>三等奖222名，赠送中石化加油卡。</p><p><br/></p><p>五、兑奖方式：</p><p>本活动采用在线领奖方式</p><p>到店领奖<img src='+module_url+'resource/template/tmp/tmp9/content01.jpg width="100%" alt="放在文案后面.jpg"/></p><p><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('缤纷夏感恩回馈欢乐砸出惊喜，错过要再等一年！');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp9/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp9/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('缤纷夏感恩回馈欢乐砸出惊喜，错过要再等一年！');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice7.mp3";
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

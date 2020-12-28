//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('圣诞大转盘，松鼠来相伴，三只松鼠来送你免费吃零食啦！！！');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp38/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp38/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p><span style="color:#ff0000"><span style="font-size: 18px;">圣诞好礼大转盘，三只松鼠来相伴！</span></span></p><p>万达广场三只松鼠强势入驻，圣诞惊喜转不停，参与活动不仅可以免费吃更有好礼相送，还犹豫什么快来参加吧。</p><p><br/></p><p><span style="font-size: 18px; color: rgb(255, 0, 0);">***转盘转起来***</span></p><p>参加活动：点击转盘上的“点击抽奖”即可参加活动。<br/>好礼一起拿：朋友参加自己可以获得额外一次机会。<br/>进店就有松鼠礼包赠送。</p><p><br/></p><p><span style="font-size: 18px; color: rgb(255, 0, 0);">***松鼠大转盘***</span></p><p>一等奖：三只松鼠坚果大礼盒</p><p>二等奖：三只松鼠鸭肉大礼包</p><p>三等奖：三只松鼠轻格华夫饼</p><p>四等奖：三只松鼠黄金肉松饼<br/>五等奖：三只松鼠芒果干</p><p>六等奖：到店领取惊喜礼包一份<br/></p><p><br/></p><p><span style="color: rgb(255, 0, 0); font-size: 18px;">***松鼠商品展***</span></p><p><img src='+module_url+'resource/template/tmp/tmp38/content01.jpg width="100%" alt="a74f8a0d9b84533b.jpg"/><img src='+module_url+'resource/template/tmp/tmp38/content02.jpg width="100%" alt="0a392a573bc1509d.jpg"/><img src='+module_url+'resource/template/tmp/tmp38/content03.jpg width="100%" alt="46054f81fce8ed94.jpg"/><img src='+module_url+'resource/template/tmp/tmp38/content04.jpg width="100%" alt="5bb8229aN56832412.jpg"/></p><p><br/></p><p><span style="color: rgb(255, 0, 0); font-size: 18px;">***活动地址***</span></p><p><span style="color: rgb(255, 0, 0);"><span style="color: rgb(0, 0, 0);">活动时间：12月20日-12月24日<br style="white-space: normal;"/>活动地点：涧西区 万达广场 一楼888号 三只松鼠</span></span></p><p>本活动最终解释权归三只松鼠所有。<br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('圣诞大转盘，松鼠来相伴 零食甜点免费吃，快来参加吧！');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp38/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp38/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('圣诞大转盘，松鼠来相伴 三只松鼠坚果大礼包、鸭肉大礼包、华夫饼、黄金肉松饼、芒果干更多惊喜零食等您来吃');
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
    $('input[name="model[title]"]').val('圣诞大转盘，松鼠来相伴，三只松鼠来送你免费吃零食啦！！！');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp38/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp38/cover.jpg />");
    //设置活动内容
	artEditor.clear();
    artEditor.append('<p><span style="color:#ff0000"><span style="font-size: 18px;">圣诞好礼大转盘，三只松鼠来相伴！</span></span></p><p>万达广场三只松鼠强势入驻，圣诞惊喜转不停，参与活动不仅可以免费吃更有好礼相送，还犹豫什么快来参加吧。</p><p><br/></p><p><span style="font-size: 18px; color: rgb(255, 0, 0);">***转盘转起来***</span></p><p>参加活动：点击转盘上的“点击抽奖”即可参加活动。<br/>好礼一起拿：朋友参加自己可以获得额外一次机会。<br/>进店就有松鼠礼包赠送。</p><p><br/></p><p><span style="font-size: 18px; color: rgb(255, 0, 0);">***松鼠大转盘***</span></p><p>一等奖：三只松鼠坚果大礼盒</p><p>二等奖：三只松鼠鸭肉大礼包</p><p>三等奖：三只松鼠轻格华夫饼</p><p>四等奖：三只松鼠黄金肉松饼<br/>五等奖：三只松鼠芒果干</p><p>六等奖：到店领取惊喜礼包一份<br/></p><p><br/></p><p><span style="color: rgb(255, 0, 0); font-size: 18px;">***松鼠商品展***</span></p><p><img src='+module_url+'resource/template/tmp/tmp38/content01.jpg width="100%" alt="a74f8a0d9b84533b.jpg"/><img src='+module_url+'resource/template/tmp/tmp38/content02.jpg width="100%" alt="0a392a573bc1509d.jpg"/><img src='+module_url+'resource/template/tmp/tmp38/content03.jpg width="100%" alt="46054f81fce8ed94.jpg"/><img src='+module_url+'resource/template/tmp/tmp38/content04.jpg width="100%" alt="5bb8229aN56832412.jpg"/></p><p><br/></p><p><span style="color: rgb(255, 0, 0); font-size: 18px;">***活动地址***</span></p><p><span style="color: rgb(255, 0, 0);"><span style="color: rgb(0, 0, 0);">活动时间：12月20日-12月24日<br style="white-space: normal;"/>活动地点：涧西区 万达广场 一楼888号 三只松鼠</span></span></p><p>本活动最终解释权归三只松鼠所有。<br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('圣诞大转盘，松鼠来相伴 零食甜点免费吃，快来参加吧！');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp38/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp38/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('圣诞大转盘，松鼠来相伴 三只松鼠坚果大礼包、鸭肉大礼包、华夫饼、黄金肉松饼、芒果干更多惊喜零食等您来吃');
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



//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('狂欢大转盘 转出惊喜来，折扣券低至3折，转到就是赚到！！！');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp33/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp33/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p><span style="font-size: 18px; color: rgb(255, 0, 0);">名创优品双十二年终大促来啦！！！</span> </p><p>活动期间消费不仅会员卡可以积分，参与活动还送您打折满减券，打折券低至3折，快来转出您的专属折扣吧。</p><p><br/></p><p><span style="font-size: 18px; color: rgb(255, 0, 0);">***大转盘参加***</span></p><p>参加活动：点击转盘上的“点击抽奖”即可参加活动。<br/>好奖一起拿：朋友参加自己可以获得额外一次机会。<br/>多种打折券，无门槛满减券快来转出你的惊喜折扣吧！</p><p><br/></p><p><span style="font-size: 18px; color: rgb(255, 0, 0);">***我是折扣券***</span></p><p>*全场通用8折券</p><p>*零食区6折券</p><p>*彩妆区7折券</p><p>*电器区3折券</p><p>*100减50满减券</p><p><br/></p><p><span style="color: rgb(255, 0, 0); font-size: 18px;">***我是名创优品***<img src='+module_url+'resource/template/tmp/tmp33/content01.jpg width="100%" alt="名创优品1.jpg"/><img src='+module_url+'resource/template/tmp/tmp33/content02.jpg width="100%" alt="名创优品5.jpg"/><img src='+module_url+'resource/template/tmp/tmp33/content03.jpg width="100%" alt="名创优品2.jpg"/><img src='+module_url+'resource/template/tmp/tmp33/content04.jpg width="100%" alt="名创优品4.jpg"/></span></p><p><br/></p><p><br/></p><p><span style="color: rgb(255, 0, 0);">***注意注意啦***</span></p><p><span style="color: rgb(255, 0, 0);"><span style="color: rgb(0, 0, 0);">活动时间：12月11日-12月12日<br style="white-space: normal;"/>活动地点：往下看<br/>1、涧西区 景华路 银座商城1楼名创优品</span></span></p><p><span style="color: rgb(255, 0, 0);"><span style="color: rgb(0, 0, 0);">2、西工区 唐宫路 新都汇2楼名创优品（其他店不参与此活动，请注意参与活动的店铺地址）</span><br/></span></p><p>特价商品不参与优惠券活动，商品已经出售非质量问题概不退换，最终解释权归名创优品所有。</p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('狂欢大转盘，转出惊喜来，名创优品3折折扣满减券等你来拿');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp33/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp33/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('狂欢大转盘，转出惊喜来，名创优品3折折扣满减券等你来拿，每天3款限量秒杀商品等你来抢');
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
    $('input[name="model[title]"]').val('狂欢大转盘 转出惊喜来，折扣券低至3折，转到就是赚到！！！');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp33/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp33/cover.jpg />");
    //设置活动内容
	artEditor.clear();
    artEditor.append('<p><span style="font-size: 18px; color: rgb(255, 0, 0);">名创优品双十二年终大促来啦！！！</span> </p><p>活动期间消费不仅会员卡可以积分，参与活动还送您打折满减券，打折券低至3折，快来转出您的专属折扣吧。</p><p><br/></p><p><span style="font-size: 18px; color: rgb(255, 0, 0);">***大转盘参加***</span></p><p>参加活动：点击转盘上的“点击抽奖”即可参加活动。<br/>好奖一起拿：朋友参加自己可以获得额外一次机会。<br/>多种打折券，无门槛满减券快来转出你的惊喜折扣吧！</p><p><br/></p><p><span style="font-size: 18px; color: rgb(255, 0, 0);">***我是折扣券***</span></p><p>*全场通用8折券</p><p>*零食区6折券</p><p>*彩妆区7折券</p><p>*电器区3折券</p><p>*100减50满减券</p><p><br/></p><p><span style="color: rgb(255, 0, 0); font-size: 18px;">***我是名创优品***<img src='+module_url+'resource/template/tmp/tmp33/content01.jpg width="100%" alt="名创优品1.jpg"/><img src='+module_url+'resource/template/tmp/tmp33/content02.jpg width="100%" alt="名创优品5.jpg"/><img src='+module_url+'resource/template/tmp/tmp33/content03.jpg width="100%" alt="名创优品2.jpg"/><img src='+module_url+'resource/template/tmp/tmp33/content04.jpg width="100%" alt="名创优品4.jpg"/></span></p><p><br/></p><p><br/></p><p><span style="color: rgb(255, 0, 0);">***注意注意啦***</span></p><p><span style="color: rgb(255, 0, 0);"><span style="color: rgb(0, 0, 0);">活动时间：12月11日-12月12日<br style="white-space: normal;"/>活动地点：往下看<br/>1、涧西区 景华路 银座商城1楼名创优品</span></span></p><p><span style="color: rgb(255, 0, 0);"><span style="color: rgb(0, 0, 0);">2、西工区 唐宫路 新都汇2楼名创优品（其他店不参与此活动，请注意参与活动的店铺地址）</span><br/></span></p><p>特价商品不参与优惠券活动，商品已经出售非质量问题概不退换，最终解释权归名创优品所有。</p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('狂欢大转盘，转出惊喜来，名创优品3折折扣满减券等你来拿');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp33/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp33/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('狂欢大转盘，转出惊喜来，名创优品3折折扣满减券等你来拿，每天3款限量秒杀商品等你来抢');
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



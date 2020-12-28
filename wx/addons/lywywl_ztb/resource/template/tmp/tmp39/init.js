//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('喜迎元旦 年终盛宴 豪礼送送送');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp39/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp39/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p>喜迎元旦 年终盛宴 豪礼转出来</p><p>王府井购物中心香奈儿来送豪礼啦</p><p><br/></p><p><span style="color: rgb(255, 255, 0); font-size: 18px;">***转盘转起来***</span><br/></p><p style="white-space: normal;">参加活动：点击转盘上的“点击抽奖”即可参加活动。<br/>好礼一起拿：朋友参加自己可以获得额外一次机会。<br/>购买就有礼：购买即送小样任选。</p><p style="white-space: normal;">我要领奖核销：出示中奖界面到店核销员扫码核销。</p><p><br/></p><p style="white-space: normal;"><span style="font-size: 18px; color: rgb(255, 255, 0);">***香奈儿豪礼***</span></p><p style="white-space: normal;">一等奖：香奈儿果冻气垫</p><p style="white-space: normal;">二等奖：香奈儿口红58</p><p style="white-space: normal;">三等奖：香奈儿唇釉154</p><p style="white-space: normal;">四等奖：香奈儿香水小样</p><p style="white-space: normal;">五等奖：香奈儿试用礼包</p><p style="white-space: normal;">六等奖：香奈儿惊喜礼包<br/></p><p><br/></p><p><span style="font-size: 18px; color: rgb(255, 255, 0);">***香奈儿彩妆***</span><span style="color: rgb(255, 0, 0); font-size: 18px;"><br/><img src='+module_url+'resource/template/tmp/tmp39/content01.jpg width="100%"/><img src='+module_url+'resource/template/tmp/tmp39/content02.jpg width="100%" /><img src='+module_url+'resource/template/tmp/tmp39/content03.jpg width="100%" /><img src='+module_url+'resource/template/tmp/tmp39/content04.jpg width="100%"/></span></p><p><span style="color: rgb(255, 0, 0); font-size: 18px;"><br/></span></p><p><span style="font-size: 18px; color: rgb(255, 255, 0);">***活动地址***</span><br/></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><span style="color: rgb(0, 0, 0);">活动时间：2019年12月28日-2020年1月2日<br/>活动地点：涧西区 王府井购物中心 888号香奈儿专柜</span></span></p><p style="white-space: normal;">本活动最终解释权归王府井购物中心香奈儿所有。</p><p><span style="color: rgb(255, 0, 0); font-size: 18px;"></span><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}喊您来参加香奈儿年终盛宴');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp39/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp39/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}香奈儿彩妆新品等您免费拿');
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
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp39/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp39/cover.jpg />");
    //设置活动内容
	artEditor.clear();
    artEditor.append('<p>喜迎元旦 年终盛宴 豪礼转出来</p><p>王府井购物中心香奈儿来送豪礼啦</p><p><br/></p><p><span style="color: rgb(255, 255, 0); font-size: 18px;">***转盘转起来***</span><br/></p><p style="white-space: normal;">参加活动：点击转盘上的“点击抽奖”即可参加活动。<br/>好礼一起拿：朋友参加自己可以获得额外一次机会。<br/>购买就有礼：购买即送小样任选。</p><p style="white-space: normal;">我要领奖核销：出示中奖界面到店核销员扫码核销。</p><p><br/></p><p style="white-space: normal;"><span style="font-size: 18px; color: rgb(255, 255, 0);">***香奈儿豪礼***</span></p><p style="white-space: normal;">一等奖：香奈儿果冻气垫</p><p style="white-space: normal;">二等奖：香奈儿口红58</p><p style="white-space: normal;">三等奖：香奈儿唇釉154</p><p style="white-space: normal;">四等奖：香奈儿香水小样</p><p style="white-space: normal;">五等奖：香奈儿试用礼包</p><p style="white-space: normal;">六等奖：香奈儿惊喜礼包<br/></p><p><br/></p><p><span style="font-size: 18px; color: rgb(255, 255, 0);">***香奈儿彩妆***</span><span style="color: rgb(255, 0, 0); font-size: 18px;"><br/><img src='+module_url+'resource/template/tmp/tmp39/content01.jpg width="100%"/><img src='+module_url+'resource/template/tmp/tmp39/content02.jpg width="100%" /><img src='+module_url+'resource/template/tmp/tmp39/content03.jpg width="100%" /><img src='+module_url+'resource/template/tmp/tmp39/content04.jpg width="100%"/></span></p><p><span style="color: rgb(255, 0, 0); font-size: 18px;"><br/></span></p><p><span style="font-size: 18px; color: rgb(255, 255, 0);">***活动地址***</span><br/></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><span style="color: rgb(0, 0, 0);">活动时间：2019年12月28日-2020年1月2日<br/>活动地点：涧西区 王府井购物中心 888号香奈儿专柜</span></span></p><p style="white-space: normal;">本活动最终解释权归王府井购物中心香奈儿所有。</p><p><span style="color: rgb(255, 0, 0); font-size: 18px;"></span><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}喊您来参加香奈儿年终盛宴');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp39/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp39/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}香奈儿彩妆新品等您免费拿');
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



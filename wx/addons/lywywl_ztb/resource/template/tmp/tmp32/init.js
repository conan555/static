//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('年终大促双十二来啦！刮刮卡免单大奖等你拿');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp32/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp32/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
    uecontent.setContent('<p><span style="font-size: 18px; color: rgb(255, 255, 0);">双十二来啦！<br/>您参与我送您免单大奖</span></p><p><br/></p><p><span style="font-size: 18px; color: rgb(255, 255, 0);">***大奖怎么带回家***</span></p><p>点击“开始刮奖”开始活动。</p><p>好奖一起拿：朋友参加自己可以获得额外一次机会。</p><p>最高大奖：单笔购物金额免单等您来刮开。</p><p>活动期间单笔购物满1212元可使用免单券。（消费后记得向商家所要专属本活动的消费单据，没有消费单据不可使用免单券）</p><p><br/></p><p><span style="font-size: 18px; color: rgb(255, 255, 0);">***刮刮大礼提前看***</span></p><p>1、星巴克代金券20元。</p><p>2、必胜客小吃拼盘券1张。</p><p>3、永乐电器200元购物代金券1张。</p><p>4、DR钻戒500元购物代金券2张。</p><p>5、周大福纪念吊坠一枚。</p><p>6、优优宝贝儿童玩具礼包1份。</p><p>7、韩悦烤肉8折吃货折扣卡2张。</p><p>8、波司登羽绒服精选儿童马甲1件。</p><p>9、万达影城观影券2张。</p><p>10、耐克专营店精美礼品1份。</p><p>11、单张购物小票全额免单。</p><p>奖品内容不分先后顺序，奖品使用详情请咨对应商家。</p><p><br/></p><p><span style="font-size: 18px; color: rgb(255, 255, 0);">**注意注意注意**</span></p><p>活动时间：12月11日-12月12日<br style="white-space: normal;"/>活动地点：涧西区 辽宁路 168号万达广场&nbsp;</p><p>该活动最终解释权归万达广场所有。</p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('喊您一起刮开免单大奖');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp32/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp32/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('各行各业的商家代金券，最高可获得免单大奖，等您来参加');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置背景音乐
    $('#audio_id').val(5).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice5.mp3');
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('年终大促双十二来啦！刮刮卡免单大奖等你拿');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp32/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp32/cover.jpg />");
    //设置活动内容
	artEditor.clear();
    artEditor.append('<p><span style="font-size: 18px; color: rgb(255, 255, 0);">双十二来啦！<br/>您参与我送您免单大奖</span></p><p><br/></p><p><span style="font-size: 18px; color: rgb(255, 255, 0);">***大奖怎么带回家***</span></p><p>点击“开始刮奖”开始活动。</p><p>好奖一起拿：朋友参加自己可以获得额外一次机会。</p><p>最高大奖：单笔购物金额免单等您来刮开。</p><p>活动期间单笔购物满1212元可使用免单券。（消费后记得向商家所要专属本活动的消费单据，没有消费单据不可使用免单券）</p><p><br/></p><p><span style="font-size: 18px; color: rgb(255, 255, 0);">***刮刮大礼提前看***</span></p><p>1、星巴克代金券20元。</p><p>2、必胜客小吃拼盘券1张。</p><p>3、永乐电器200元购物代金券1张。</p><p>4、DR钻戒500元购物代金券2张。</p><p>5、周大福纪念吊坠一枚。</p><p>6、优优宝贝儿童玩具礼包1份。</p><p>7、韩悦烤肉8折吃货折扣卡2张。</p><p>8、波司登羽绒服精选儿童马甲1件。</p><p>9、万达影城观影券2张。</p><p>10、耐克专营店精美礼品1份。</p><p>11、单张购物小票全额免单。</p><p>奖品内容不分先后顺序，奖品使用详情请咨对应商家。</p><p><br/></p><p><span style="font-size: 18px; color: rgb(255, 255, 0);">**注意注意注意**</span></p><p>活动时间：12月11日-12月12日<br style="white-space: normal;"/>活动地点：涧西区 辽宁路 168号万达广场&nbsp;</p><p>该活动最终解释权归万达广场所有。</p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('喊您一起刮开免单大奖');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp32/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp32/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('各行各业的商家代金券，最高可获得免单大奖，等您来参加');
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

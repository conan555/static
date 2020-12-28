//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('中国年就是“三只松鼠”1428g年货坚果大礼包68元别错过');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp51/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp51/cover.jpg");
	//设置商品原价
    $('input[name="model[cost_price]"]').val('188.00');
	//设置商品底价
    $('input[name="model[base_price]"]').val('68.00');
	//设置商品提供数量
    $('input[name="model[total_num]"]').val('1000');
	//设置商品库存数量
    $('input[name="model[goods_num]"]').val('1000');
	//设置砍价规则
    myrequire([ 'arttemplate'], function (template) {
        $("#addcutruletable").empty();
        var items = [
            {count : 0, price : 188.00, min : 50.00, max : 80.00},
            {count : 1, price : 108.00, min : 20.00, max : 40.00},
        ];
        $.each(items,function(index,item){
            var html = template("cutruletpl",item);
            $("#addcutruletable").append(html);
        });
    });
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p><img src='+module_url+'resource/template/tmp/tmp51/content01.jpg width="100%" alt="01.jpg"/><img src='+module_url+'resource/template/tmp/tmp51/content02.jpg width="100%" alt="02.jpg"/><img src='+module_url+'resource/template/tmp/tmp51/content03.jpg width="100%" alt="03.jpg"/><img src='+module_url+'resource/template/tmp/tmp51/content04.jpg width="100%" alt="07.jpg"/><img src='+module_url+'resource/template/tmp/tmp51/content05.jpg width="100%" alt="08.jpg"/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('中国年就是“三只松鼠”  1428g年货坚果大礼包68元别错过');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp51/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp51/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('三只松鼠_年货坚果大礼 零食礼盒每日坚果混合送礼 1428g年货坚果大礼包68元别错过');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(13).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice13.mp3');
	//设置分享海报
    var qr_url_ipt =$('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp51/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp51/qr.jpg";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('中国年就是“三只松鼠”1428g年货坚果大礼包68元别错过');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp51/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp51/cover.jpg />");
    //设置商品原价
    $('input[name="model[cost_price]"]').val('188.00');
    //设置商品底价
    $('input[name="model[base_price]"]').val('68.00');
    //设置商品提供数量
    $('input[name="model[total_num]"]').val('1000');
    //设置商品库存数量
    $('input[name="model[goods_num]"]').val('1000');
	//设置砍价规则
    $("#CutRuleList").empty();
    var items = [
        {count : 0, price : 188.00, min : 50.00, max : 80.00},
        {count : 1, price : 108.00, min : 20.00, max : 40.00},
    ];
    $.each(items,function(index,item){
        var html = template("cutruletpl",item);
        $("#CutRuleList").append(html);
    });
    //设置活动内容
    artEditor.clear();
    artEditor.append('<p><img src='+module_url+'resource/template/tmp/tmp51/content01.jpg width="100%" alt="01.jpg"/><img src='+module_url+'resource/template/tmp/tmp51/content02.jpg width="100%" alt="02.jpg"/><img src='+module_url+'resource/template/tmp/tmp51/content03.jpg width="100%" alt="03.jpg"/><img src='+module_url+'resource/template/tmp/tmp51/content04.jpg width="100%" alt="07.jpg"/><img src='+module_url+'resource/template/tmp/tmp51/content05.jpg width="100%" alt="08.jpg"/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('中国年就是“三只松鼠”  1428g年货坚果大礼包68元别错过');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp51/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp51/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('三只松鼠_年货坚果大礼 零食礼盒每日坚果混合送礼 1428g年货坚果大礼包68元别错过');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice13.mp3";
    $("#music-sel-ul li").each(function(){
        $(this).removeClass("act");
        if($(this).data('url') == audio_url){
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);
	//设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp51/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp51/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp51/qr.jpg");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}

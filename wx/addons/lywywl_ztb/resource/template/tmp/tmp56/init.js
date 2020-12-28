//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动标题
	$('input[name="model[title]"]').val('冬季温泉团购季  3人188元  5人138元 就差你了');
	//设置活动封面标题
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp56/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp56/cover.jpg");
	//设置商品原始价格
    $('input[name="model[cost_price]"]').val('228.00');
	//设置拼团支付定金
    $('input[name="model[front_money]"]').val('50.00');
	//设置团长购买折扣
    $('input[name="model[heads_discount]"]').val('10');
	//设置拼团可开团数
    $('input[name="model[open_num]"]').val('100');
	//设置拼团阶梯价格
    myrequire([ 'arttemplate'], function (template) {
        $("#addladderfieldtable").empty();
        var items = [
            {count : 0, num : 3, price : 188.00},
            {count : 1, num : 4, price : 168.00},
            {count : 2, num : 5, price : 138.00}
        ];
        $.each(items,function(index,item){
            var html = template("ladderfieldtpl",item);
            $("#addladderfieldtable").append(html);
        });
    });
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>=======================<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/></strong></span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>★★★活动商品★★<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>【名称】：冬季温泉团购活动<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>【时间】：一天<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>【价格】：原价228元，3人拼团188，4人拼团168，5人拼团138</p><p style="white-space: normal;">【注意】：参团需支付50元的定金，最低价138元购买</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★活动规则★★★</p><p style="white-space: normal;">1、点击页面中“一键开团”按钮，可成为团长</p><p style="white-space: normal;">2、开团后，点击“专属海报”按钮，生成我的专属海报给好友，满足对应档人数自己可获得商家提供的礼品。人越来越优惠。</p><p style="white-space: normal;">3、数量有限，要速度哦</p><p style="white-space: normal;">4、拼团成功后到店领取冬季温泉团购一份</p><p style="white-space: normal;"><br/></p><p><img src='+module_url+'resource/template/tmp/tmp56/content01.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp56/content02.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp56/content03.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp56/content04.jpg width="100%" style=""/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}参加了冬季温泉团购季活动  3人188元  5人138元 就差你了');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp56/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp56/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('冬季温泉团购季活  3人188元  5人138元 就差你了');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(16).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice16.mp3');
	//设置分享海报
    var qr_url_ipt =$('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp56/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp56/qr.jpg";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('冬季温泉团购季  3人188元  5人138元 就差你了');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp56/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp56/cover.jpg />");
	//设置商品原始价格
    $('input[name="model[cost_price]"]').val('228.00');
    //设置拼团支付定金
    $('input[name="model[front_money]"]').val('50.00');
    //设置团长购买折扣
    $('input[name="model[heads_discount]"]').val('10');
	//设置拼团可开团数
    $('input[name="model[open_num]"]').val('100');
	//设置拼团阶梯价格
    $("#addladderfieldtable .addladderfield").empty();
    var items = [
        {count : 0, num : 3, price : 188.00},
        {count : 1, num : 4, price : 168.00},
        {count : 2, num : 5, price : 138.00}
    ];
    $.each(items,function(index,item){
        var html = template("ladderfieldtpl",item);
        $("#addladderfieldtable").append(html);
    })


    //设置活动内容
    artEditor.clear();
    artEditor.append('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>=======================<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/></strong></span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>★★★活动商品★★<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>【名称】：冬季温泉团购活动<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>【时间】：一天<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>【价格】：原价228元，3人拼团188，4人拼团168，5人拼团138</p><p style="white-space: normal;">【注意】：参团需支付50元的定金，最低价138元购买</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★活动规则★★★</p><p style="white-space: normal;">1、点击页面中“一键开团”按钮，可成为团长</p><p style="white-space: normal;">2、开团后，点击“专属海报”按钮，生成我的专属海报给好友，满足对应档人数自己可获得商家提供的礼品。人越来越优惠。</p><p style="white-space: normal;">3、数量有限，要速度哦</p><p style="white-space: normal;">4、拼团成功后到店领取冬季温泉团购一份</p><p style="white-space: normal;"><br/></p><p><img src='+module_url+'resource/template/tmp/tmp56/content01.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp56/content02.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp56/content03.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp56/content04.jpg width="100%" style=""/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}参加了冬季温泉团购季活动  3人188元  5人138元 就差你了');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp56/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp56/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('冬季温泉团购季活  3人188元  5人138元 就差你了 ');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice16.mp3";
    $("#music-sel-ul li").each(function(){
        $(this).removeClass("act");
        if($(this).data('url') == audio_url){
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);
	//设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp56/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp56/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp56/qr.jpg");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}

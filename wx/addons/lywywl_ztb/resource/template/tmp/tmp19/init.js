//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('夏日钜惠 广西红心火龙果5斤 原价59.9砍到19.9元火龙果归你');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp19/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp19/cover.jpg");
	//设置商品原价
    $('input[name="model[cost_price]"]').val('59.90');
	//设置商品底价
    $('input[name="model[base_price]"]').val('19.90');
	//设置商品提供数量
    $('input[name="model[total_num]"]').val('100');
	//设置商品库存数量
    $('input[name="model[goods_num]"]').val('100');
	//设置砍价规则
    myrequire([ 'arttemplate'], function (template) {
        $("#addcutruletable").empty();
        var items = [
            {count : 0, price : 59.90, min : 40.00, max : 50.00}
        ];
        $.each(items,function(index,item){
            var html = template("cutruletpl",item);
            $("#addcutruletable").append(html);
        });
    });
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
    uecontent.setContent('<p><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p><span style="color: rgb(255, 0, 0);"><strong>======================<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="white-space: normal; margin: 0px; padding: 0px; box-sizing: inherit;"></strong></span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="white-space: normal; margin: 0px; padding: 0px; box-sizing: inherit;"><span style="font-size: 16px;">★★★活动商品★★★<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="white-space: normal; margin: 0px; padding: 0px; box-sizing: inherit;">【名称】：广西红心火龙果<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="white-space: normal; margin: 0px; padding: 0px; box-sizing: inherit;">【重量】：带箱5斤，净重约4.5斤<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="white-space: normal; margin: 0px; padding: 0px; box-sizing: inherit;">【价格】：原价59.9元，底价19.9元</span></p><p><br></p><p><span style="font-size: 16px;">★★★活动规则★★★</span></p><p><span style="font-size: 16px;">1、点击按钮“立即购买”可直接付款购买</span></p><p><span style="font-size: 16px;">2、点击“专属海报”登记后，生成我的专属海报，给好友参与后自己可获得商家提供的礼品。</span></p><p><span style="font-size: 16px;">3、数量有限，先到先得，购买要速度。</span></p><p><span style="font-size: 16px;">4、购买成功后到店核销领取。</span></p><p><span style="font-size: 16px;"><br></span></p><p><img src='+module_url+'resource/template/tmp/tmp19/content01.jpg width="100%" alt="未标题-1_01.jpg"></p><p><img src='+module_url+'resource/template/tmp/tmp19/content02.jpg width="100%" alt="未标题-1_02.jpg"></p><p><img src='+module_url+'resource/template/tmp/tmp19/content03.jpg width="100%" alt="未标题-1_03.jpg"></p><p><img src='+module_url+'resource/template/tmp/tmp19/content04.jpg width="100%" alt="未标题-1_04.jpg"></p><p><img src='+module_url+'resource/template/tmp/tmp19/content05.jpg width="100%" alt="未标题-1_05.jpg"></p><p><img src='+module_url+'resource/template/tmp/tmp19/content06.jpg width="100%" alt="未标题-1_06.jpg"></p><p><br></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}参加了 夏日钜惠 广西红心火龙果5斤 原价59.9砍到19.9元火龙果归你');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp19/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp19/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('夏日钜惠 广西红心火龙果5斤 原价59.9砍到19.9元火龙果归你');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(19).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice19.mp3');
	//设置分享海报
    var qr_url_ipt =$('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp19/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp19/qr.jpg";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('夏日钜惠 广西红心火龙果5斤 原价59.9砍到19.9元火龙果归你');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp19/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp19/cover.jpg />");
	//设置商品原价
    $('input[name="model[cost_price]"]').val('59.90');
	//设置商品底价
    $('input[name="model[base_price]"]').val('19.90');
	//设置商品提供数量
    $('input[name="model[total_num]"]').val('100');
	//设置商品库存数量
    $('input[name="model[goods_num]"]').val('100');
	//设置砍价规则
    $("#CutRuleList").empty();
    var items = [
        {count : 0, price : 59.90, min : 40.00, max : 50.00}
    ];
    $.each(items,function(index,item){
        var html = template("cutruletpl",item);
        $("#CutRuleList").append(html);
    });


    //设置活动内容
    artEditor.clear();
    artEditor.append('<p><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p><span style="color: rgb(255, 0, 0);"><strong>======================<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="white-space: normal; margin: 0px; padding: 0px; box-sizing: inherit;"></strong></span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="white-space: normal; margin: 0px; padding: 0px; box-sizing: inherit;"><span style="font-size: 16px;">★★★活动商品★★★<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="white-space: normal; margin: 0px; padding: 0px; box-sizing: inherit;">【名称】：广西红心火龙果<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="white-space: normal; margin: 0px; padding: 0px; box-sizing: inherit;">【重量】：带箱5斤，净重约4.5斤<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="white-space: normal; margin: 0px; padding: 0px; box-sizing: inherit;">【价格】：原价59.9元，底价19.9元</span></p><p><br></p><p><span style="font-size: 16px;">★★★活动规则★★★</span></p><p><span style="font-size: 16px;">1、点击按钮“立即购买”可直接付款购买</span></p><p><span style="font-size: 16px;">2、点击“专属海报”登记后，生成我的专属海报，给好友参与后自己可获得商家提供的礼品。</span></p><p><span style="font-size: 16px;">3、数量有限，先到先得，购买要速度。</span></p><p><span style="font-size: 16px;">4、购买成功后到店核销领取。</span></p><p><span style="font-size: 16px;"><br></span></p><p><img src='+module_url+'resource/template/tmp/tmp19/content01.jpg width="100%" alt="未标题-1_01.jpg"></p><p><img src='+module_url+'resource/template/tmp/tmp19/content02.jpg width="100%" alt="未标题-1_02.jpg"></p><p><img src='+module_url+'resource/template/tmp/tmp19/content03.jpg width="100%" alt="未标题-1_03.jpg"></p><p><img src='+module_url+'resource/template/tmp/tmp19/content04.jpg width="100%" alt="未标题-1_04.jpg"></p><p><img src='+module_url+'resource/template/tmp/tmp19/content05.jpg width="100%" alt="未标题-1_05.jpg"></p><p><img src='+module_url+'resource/template/tmp/tmp19/content06.jpg width="100%" alt="未标题-1_06.jpg"></p><p><br></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}参加了 夏日钜惠 广西红心火龙果5斤 原价59.9砍到19.9元火龙果归你');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp19/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp19/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('夏日钜惠 广西红心火龙果5斤 原价59.9砍到19.9元火龙果归你');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice19.mp3";
    $("#music-sel-ul li").each(function(){
        $(this).removeClass("act");
        if($(this).data('url') == audio_url){
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);
	//设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp19/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp19/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp19/qr.jpg");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}


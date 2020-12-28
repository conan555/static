//模块所在路径
var module_url = window.sysinfo.module.url

//PC端初始化操作
function pc_init() {
    //设置活动名称
    $('input[name="model[title]"]').val('中秋佳节 16只阳澄湖大闸蟹 仅59元 不要错过');
    //设置活动封面图片
    var picurl_ipt = $('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp22/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp22/cover.jpg");
    //设置购买支付金额
    $('input[name="model[money]"]').val('59.00');
    //设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function () {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>======================<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/></strong></span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>★★★活动商品★★★<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>【名称】：16只阳澄湖大闸蟹 </p><p style="white-space: normal;">【数量】：16只<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>【价格】：原价165元，现价59元</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★商品详情★★★</p><p style="white-space: normal;">本店大闸蟹选自专业正规的养殖基地，每一只大闸蟹都有阳澄湖正式养殖区的编号。</p><p style="white-space: normal;">还赠送配套的工具，使用方便，蟹肉饱满、蟹黄鲜美。</p><p style="white-space: normal;"><img src=' + module_url + 'resource/template/tmp/tmp22/content01.jpg width="100%" alt="01.jpg" style="white-space: normal;"/></p><p style="white-space: normal;"><img src=' + module_url + 'resource/template/tmp/tmp22/content02.jpg width="100%" alt="02.jpg" style="white-space: normal;"/></p><p style="white-space: normal;"><img src=' + module_url + 'resource/template/tmp/tmp22/content03.jpg width="100%" alt="03.jpg" style="white-space: normal;"/><img src=' + module_url + 'resource/template/tmp/tmp22/content04.jpg width="100%" alt="04.jpg" style="white-space: normal;"/><img src=' + module_url + 'resource/template/tmp/tmp22/content05.jpg width="100%" alt="07.jpg" style="white-space: normal;"/><img src=' + module_url + 'resource/template/tmp/tmp22/content06.jpg width="100%" alt="08.jpg" style="white-space: normal;"/></p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★活动规则★★★</p><p style="white-space: normal;">1、点击按钮“立即抢购”可直接付款购买。</p> <p style="white-space: normal;"> 2、点击“专属海报”登记后，生成自己的专属海报给好友，好友下单自己可获得商家提供的礼品。</p> <p style="white-space: normal;"> 3、数量有限，先到先得，欲购从速。</p> <p style="white-space: normal;"> 5、购买成功后到店核销领取，该商品不支持配送。</p> <p><br/> </p> <p>★注：</p> <p> 1、食用的时候蟹腮、蟹肠、蟹胃、蟹心都是不能吃的，蟹不能和柿子一起食用。</p> <p> 2、到店核销后我们将额外为您赠送&quot;大闸蟹吃法指南&quot;一份，助您吃的美味。</p> <p> <br/> </p>');
    });
    //设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}喊你一起吃螃蟹 中秋佳节 16只阳澄湖大闸蟹 仅59元 不要错过哦');
    //设置活动分享图标
    var share_thumb_ipt = $('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp22/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp22/cover.jpg");
    //设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('中秋佳节 礼赠佳品 16只阳澄湖大闸蟹 仅需59元 点击查看详情');
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
    var qr_url_ipt = $('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp22/qr.jpg");
    var img = $("#qr_bg");
    if (!img.attr('src')) {
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp22/qr.jpg";
}

//手机端初始化操作
function mobile_init() {
    //设置活动名称
    $('input[name="model[title]"]').val('中秋佳节 16只阳澄湖大闸蟹 仅59元 不要错过');
    //设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp22/cover.jpg");
    $(".js-image-pic_url").css({"position": "absolute", "opacity": "0"});
    $(".js-image-pic_url").next("div").html("<img src=" + module_url + "resource/template/tmp/tmp22/cover.jpg />");
    //设置购买支付价格
    $('input[name="model[money]"]').val('59.00');
    //设置活动内容
    artEditor.clear();
    artEditor.append('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>======================<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/></strong></span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>★★★活动商品★★★<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>【名称】：16只阳澄湖大闸蟹 </p><p style="white-space: normal;">【数量】：16只<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/>【价格】：原价165元，现价59元</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★商品详情★★★</p><p style="white-space: normal;">本店大闸蟹选自专业正规的养殖基地，每一只大闸蟹都有阳澄湖正式养殖区的编号。</p><p style="white-space: normal;">还赠送配套的工具，使用方便，蟹肉饱满、蟹黄鲜美。</p><p style="white-space: normal;"><img src=' + module_url + 'resource/template/tmp/tmp22/content01.jpg width="100%" alt="01.jpg" style="white-space: normal;"/></p><p style="white-space: normal;"><img src=' + module_url + 'resource/template/tmp/tmp22/content02.jpg width="100%" alt="02.jpg" style="white-space: normal;"/></p><p style="white-space: normal;"><img src=' + module_url + 'resource/template/tmp/tmp22/content03.jpg width="100%" alt="03.jpg" style="white-space: normal;"/><img src=' + module_url + 'resource/template/tmp/tmp22/content04.jpg width="100%" alt="04.jpg" style="white-space: normal;"/><img src=' + module_url + 'resource/template/tmp/tmp22/content05.jpg width="100%" alt="07.jpg" style="white-space: normal;"/><img src=' + module_url + 'resource/template/tmp/tmp22/content06.jpg width="100%" alt="08.jpg" style="white-space: normal;"/></p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★活动规则★★★</p><p style="white-space: normal;">1、点击按钮“立即抢购”可直接付款购买。</p> <p style="white-space: normal;"> 2、点击“专属海报”登记后，生成自己的专属海报给好友，好友下单自己可获得商家提供的礼品。</p> <p style="white-space: normal;"> 3、数量有限，先到先得，欲购从速。</p> <p style="white-space: normal;"> 5、购买成功后到店核销领取，该商品不支持配送。</p> <p><br/> </p> <p>★注：</p> <p> 1、食用的时候蟹腮、蟹肠、蟹胃、蟹心都是不能吃的，蟹不能和柿子一起食用。</p> <p> 2、到店核销后我们将额外为您赠送&quot;大闸蟹吃法指南&quot;一份，助您吃的美味。</p> <p> <br/> </p>');
    //设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}喊你一起吃螃蟹 中秋佳节 16只阳澄湖大闸蟹 仅65元 不要错过哦');
    //设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp22/cover.jpg");
    $(".js-image-share_thumb").css({"position": "absolute", "opacity": "0"});
    $(".js-image-share_thumb").next("div").html("<img src=" + module_url + "resource/template/tmp/tmp22/cover.jpg />");
    //设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('中秋佳节 礼赠佳品 16只阳澄湖大闸蟹 仅需59元 点击查看详情');
    //设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
    //设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice19.mp3";
    $("#music-sel-ul li").each(function () {
        $(this).removeClass("act");
        if ($(this).data('url') == audio_url) {
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);
    //设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp22/qr.jpg");
    $(".js-image-qr_url").css({"position": "absolute", "opacity": "0"});
    $(".js-image-qr_url").next("div").html("<img src=" + module_url + "resource/template/tmp/tmp22/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp22/qr.jpg");

    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        , skin: 'msg'
        , time: 2 //2秒后自动关闭
    });
}

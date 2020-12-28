//模块所在路径
var module_url = window.sysinfo.module.url

//PC端初始化操作
function pc_init() {
    //设置活动名称
    $('input[name="model[title]"]').val('618疯赔到底，年中优惠享不停！块来参加活动吧');
    //设置活动封面图片
    var picurl_ipt = $('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp73/cover.png");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp73/cover.png");

    if ($("#addprojectfieldtable .addprojectfield").length == 0) {
        $("#addprojectfieldbtn").click();
    }
    //设置活动报名项目
    $('input[name="model_project[0][title]"]').val('御泥坊洗护套装');
    $('input[name="model_project[0][pic_url]"]').val(module_url + "resource/template/tmp/tmp73/content01.jpg");
    $('img[name="model_project[0][pic_url]_Img"]').attr("src", module_url + "resource/template/tmp/tmp73/content01.jpg");
    $('input[name="model_project[0][money]"]').val('99.00');
    $('input[name="model_project[0][stock]"]').val('0');

    if ($("#addprojectfieldtable .addprojectfield").length == 1) {
        $("#addprojectfieldbtn").click();
    }

    $('input[name="model_project[1][title]"]').val('高夫洗护套装');
    $('input[name="model_project[1][pic_url]"]').val(module_url + "resource/template/tmp/tmp73/content02.jpg");
    $('img[name="model_project[1][pic_url]_Img"]').attr("src", module_url + "resource/template/tmp/tmp73/content02.jpg");
    $('input[name="model_project[1][money]"]').val('125.00');
    $('input[name="model_project[1][stock]"]').val('0');

    if ($("#addprojectfieldtable .addprojectfield").length == 2) {
        $("#addprojectfieldbtn").click();
    }

    $('input[name="model_project[2][title]"]').val('百雀羚洗护套装');
    $('input[name="model_project[2][pic_url]"]').val(module_url + "resource/template/tmp/tmp73/content03.jpg");
    $('img[name="model_project[2][pic_url]_Img"]').attr("src", module_url + "resource/template/tmp/tmp73/content03.jpg");
    $('input[name="model_project[2][money]"]').val('178.00');
    $('input[name="model_project[2][stock]"]').val('0');

    if ($("#addprojectfieldtable .addprojectfield").length == 3) {
        $("#addprojectfieldbtn").click();
    }

    $('input[name="model_project[3][title]"]').val('相宜本草洗护套装');
    $('input[name="model_project[3][pic_url]"]').val(module_url + "resource/template/tmp/tmp73/content04.jpg");
    $('img[name="model_project[3][pic_url]_Img"]').attr("src", module_url + "resource/template/tmp/tmp73/content04.jpg");
    $('input[name="model_project[3][money]"]').val('123.00');
    $('input[name="model_project[3][stock]"]').val('0');

    //设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function () {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>=======================</strong></span>&nbsp; &nbsp; &nbsp;</p><p style="white-space: normal;"> **我要购买** </p><p style="white-space: normal;">1、点击“我要报名”参与此活动</p><p style="white-space: normal;">2、参与后点击“专属海报”生成自己的专属海报，朋友一起参加购买，朋友通过自己的“专属海报”购买，自己还可以获得商家提供分佣礼品哦。</p><p style="white-space: normal;">3、购买成功我们的客服会在3天内联系您，请注意接听0379-66666666客服电话，为您确定时间。</p><p style="white-space: normal;">4、每位用户只可报名一次，多出的不予核销。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">**商品图片**</p><p><img src=' + module_url + 'resource/template/tmp/tmp73/content01.jpg width="100%" alt="content01.jpg"/></p><p><img src=' + module_url + 'resource/template/tmp/tmp73/content02.jpg width="100%" style=""/></p><p><img src=' + module_url + 'resource/template/tmp/tmp73/content03.jpg width="100%" alt="content02.jpg"/></p><p><img src=' + module_url + 'resource/template/tmp/tmp73/content04.jpg width="100%" style=""/></p><p><br/></p>');
    });
    //设置活动分享标题
    $('input[name="model[share_title]"]').val('618疯赔到底，年中优惠享不停！块来参加活动吧');
    //设置活动分享图标
    var share_thumb_ipt = $('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp73/cover.png");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp73/cover.png");
    //设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('618疯赔到底，年中优惠享不停！块来参加活动吧');
    //设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
    //设置活动背景音乐
    $('#audio_id').val(4).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice4.mp3');
    //设置分享海报
    var qr_url_ipt = $('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp73/qr.jpg");
    var img = $("#qr_bg");
    if (!img.attr('src')) {
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp73/qr.jpg";
}

//手机端初始化操作
function mobile_init() {
    //设置活动名称
    $('input[name="model[title]"]').val('618疯赔到底，年中优惠享不停！块来参加活动吧');
    //设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp73/cover.png");
    $(".js-image-pic_url").css({"position": "absolute", "opacity": "0"});
    $(".js-image-pic_url").next("div").html("<img src=" + module_url + "resource/template/tmp/tmp73/cover.png />");

    if ($("#addprojectfieldtable .addprojectfield").length == 0) {
        $("#addprojectfieldbtn").click();
    }
    //设置活动报名项目
    $('input[name="model_project[0][title]"]').val('御泥坊洗护套装');
    $('input[name="model_project[0][pic_url]"]').val(module_url + "resource/template/tmp/tmp73/content01.jpg");
    $('input[name="model_project[0][pic_url]"]').parent().find('a').css({'position': 'absolute', 'opacity': 0});
    $('input[name="model_project[0][pic_url]"]').parent().find('.mui-image-preview').html('<img src="' + module_url + 'resource/template/tmp/tmp73/content01.jpg">');
    $('input[name="model_project[0][money]"]').val('99.00');
    $('input[name="model_project[0][stock]"]').val('0');

    if ($("#addprojectfieldtable .addprojectfield").length == 1) {
        $("#addprojectfieldbtn").click();
    }

    $('input[name="model_project[1][title]"]').val('御泥坊洗护套装');
    $('input[name="model_project[1][pic_url]"]').val(module_url + "resource/template/tmp/tmp73/content02.jpg");
    $('input[name="model_project[1][pic_url]"]').parent().find('a').css({'position': 'absolute', 'opacity': 0});
    $('input[name="model_project[1][pic_url]"]').parent().find('.mui-image-preview').html('<img src="' + module_url + 'resource/template/tmp/tmp73/content02.jpg">');
    $('input[name="model_project[1][money]"]').val('125.00');
    $('input[name="model_project[1][stock]"]').val('0');

    if ($("#addprojectfieldtable .addprojectfield").length == 2) {
        $("#addprojectfieldbtn").click();
    }

    $('input[name="model_project[2][title]"]').val('百雀羚洗护套装');
    $('input[name="model_project[2][pic_url]"]').val(module_url + "resource/template/tmp/tmp73/content03.jpg");
    $('input[name="model_project[2][pic_url]"]').parent().find('a').css({'position': 'absolute', 'opacity': 0});
    $('input[name="model_project[2][pic_url]"]').parent().find('.mui-image-preview').html('<img src="' + module_url + 'resource/template/tmp/tmp73/content03.jpg">');
    $('input[name="model_project[2][money]"]').val('178.00');
    $('input[name="model_project[2][stock]"]').val('0');

    if ($("#addprojectfieldtable .addprojectfield").length == 3) {
        $("#addprojectfieldbtn").click();
    }

    $('input[name="model_project[3][title]"]').val('相宜本草洗护套装');
    $('input[name="model_project[3][pic_url]"]').val(module_url + "resource/template/tmp/tmp73/content04.jpg");
    $('input[name="model_project[3][pic_url]"]').parent().find('a').css({'position': 'absolute', 'opacity': 0});
    $('input[name="model_project[3][pic_url]"]').parent().find('.mui-image-preview').html('<img src="' + module_url + 'resource/template/tmp/tmp73/content04.jpg">');
    $('input[name="model_project[3][money]"]').val('123.00');
    $('input[name="model_project[3][stock]"]').val('0');

    //设置活动内容
    artEditor.clear();
    artEditor.append('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>=======================</strong></span>&nbsp; &nbsp; &nbsp;</p><p style="white-space: normal;"> **我要购买** </p><p style="white-space: normal;">1、点击“我要报名”参与此活动</p><p style="white-space: normal;">2、参与后点击“专属海报”生成自己的专属海报，朋友一起参加购买，朋友通过自己的“专属海报”购买，自己还可以获得商家提供分佣礼品哦。</p><p style="white-space: normal;">3、购买成功我们的客服会在3天内联系您，请注意接听0379-66666666客服电话，为您确定时间。</p><p style="white-space: normal;">4、每位用户只可报名一次，多出的不予核销。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">**商品图片**</p><p><img src=' + module_url + 'resource/template/tmp/tmp73/content01.jpg width="100%" alt="content01.jpg"/></p><p><img src=' + module_url + 'resource/template/tmp/tmp73/content02.jpg width="100%" style=""/></p><p><img src=' + module_url + 'resource/template/tmp/tmp73/content03.jpg width="100%" alt="content02.jpg"/></p><p><img src=' + module_url + 'resource/template/tmp/tmp73/content04.jpg width="100%" style=""/></p><p><br/></p>');
    //设置活动分享标题
    $('input[name="model[share_title]"]').val('618疯赔到底，年中优惠享不停！块来参加活动吧');
    //设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp73/cover.png");
    $(".js-image-share_thumb").css({"position": "absolute", "opacity": "0"});
    $(".js-image-share_thumb").next("div").html("<img src=" + module_url + "resource/template/tmp/tmp73/cover.png />");
    //设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('618疯赔到底，年中优惠享不停！块来参加活动吧');
    //设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
    //设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice4.mp3";
    $("#music-sel-ul li").each(function () {
        $(this).removeClass("act");
        if ($(this).data('url') == audio_url) {
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);

    //设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp73/qr.jpg");
    $(".js-image-qr_url").css({"position": "absolute", "opacity": "0"});
    $(".js-image-qr_url").next("div").html("<img src=" + module_url + "resource/template/tmp/tmp73/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp73/qr.jpg");

    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        , skin: 'msg'
        , time: 2 //2秒后自动关闭
    });
}



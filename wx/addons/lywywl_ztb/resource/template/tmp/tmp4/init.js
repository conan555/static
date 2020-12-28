//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('潘朵拉婚纱摄影盛大开业啦！参与活动免费送定制抱枕啦！');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp4/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp4/cover.jpg");
	//设置活动所需集赞数
    $('input[name="model[winer_num]"]').val('1');
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0); font-size: 20px;"><strong>======================<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/></strong></span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/></p><p style="white-space: normal;">★★★活动规则★★★</p><p style="white-space: normal;">1、点击“我要参加”即可参与活动。</p><p style="white-space: normal;">2、参与后根据界面提示达成指定规则即可获得定制抱枕。</p><p style="white-space: normal;">3、数量有限，送完为止，先到先得。</p><p style="white-space: normal;">4、礼品需要到店领取。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★特别说明：</p><p style="white-space: normal;">成功获得后需到店给设计师图片，图片处理后将开始制作，工期大约在5-7天（超值物品不接加急）平参与活动的名额在本店进行写真、拍摄一律8折，额外还赠送20张精修照片，名额有限，欢迎到店咨询。</p><p><img src='+module_url+'resource/template/tmp/tmp4/content01.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp4/content02.jpg width="100%" style=""/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('活动期间拿豪礼');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp4/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp4/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('活动期间根据商家规则拿豪礼');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(7).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice7.mp3');
	//设置分享海报
    var qr_url_ipt =$('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp4/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp4/qr.jpg";
}

//手机端初始化操作
 function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('活潘朵拉婚纱摄影盛大开业啦！参与活动免费送定制抱枕啦！');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp4/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp4/cover.jpg />");
	//设置活动所需集赞数
    $('input[name="model[winer_num]"]').val('1');

    //设置活动内容
    artEditor.clear();
    artEditor.append('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0); font-size: 20px;"><strong>======================<br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/></strong></span><br hiragino="" sans="" microsoft="" helvetica="" white-space:="" background-color:="" style="margin: 0px; padding: 0px; box-sizing: inherit;"/></p><p style="white-space: normal;">★★★活动规则★★★</p><p style="white-space: normal;">1、点击“我要参加”即可参与活动。</p><p style="white-space: normal;">2、参与后根据界面提示达成指定规则即可获得定制抱枕。</p><p style="white-space: normal;">3、数量有限，送完为止，先到先得。</p><p style="white-space: normal;">4、礼品需要到店领取。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★特别说明：</p><p style="white-space: normal;">成功获得后需到店给设计师图片，图片处理后将开始制作，工期大约在5-7天（超值物品不接加急）平参与活动的名额在本店进行写真、拍摄一律8折，额外还赠送20张精修照片，名额有限，欢迎到店咨询。</p><p><img src='+module_url+'resource/template/tmp/tmp4/content01.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp4/content02.jpg width="100%" style=""/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('潘朵拉婚纱摄影盛大开业啦！参与活动免费送定制抱枕啦！');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp4/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp4/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('潘朵拉婚纱摄影盛大开业啦！参与活动免费送定制抱枕啦！');
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
	//设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp4/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp4/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp4/qr.jpg");
	
    //初始化二维码
    mrqrclick();
     layer.open({
         content: '初始化数据完成！'
         ,skin: 'msg'
         ,time: 2 //2秒后自动关闭
     });
}

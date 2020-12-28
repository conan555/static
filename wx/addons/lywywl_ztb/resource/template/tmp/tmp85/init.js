//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('快来动动手指点赞吧，集赞赢豪礼，活动开始啦~');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp85/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp85/cover.jpg");
	//设置活动所需集赞数
    $('input[name="model[winer_num]"]').val('68');
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p>送大礼！为了回馈客户，缤特力M25蓝牙耳机和缤特力ML20蓝牙耳机低于成本价限量销售，并有集"赞"可免费送缤特力ML20蓝牙耳机活动！</p><p>感谢您的关注，有了您的关注，我们才有明天的辉煌</p><p style="font-weight:bold; color:#FF0000;">请仔细阅读活动内容：</p><p>只要转发本条内容并分享到您的微信朋友圈，并关注本公众账号(扫描下面的二维码加以关注) 累积获得68个赞起。即可获得本公司送出的缤特力ML20蓝牙耳机一个！</p><p align="center"><img src='+module_url+'resource/template/tmp/tmp85/content1.png width="200" height="200"/></p><p>1、集赞活动于2020年10月30日止。</p><p>2、点击“我要参加”即可参与活动,本次集赞活动适用于任何人。</p><p>3、每位微信帐户限兑一次,不可重复参与。</p><p>4、集齐后请凭借系统生成的核销码到店兑换，数量有限，送完为止，先到先得。</p><p>5、在法律允许下，本公司保留本次活动的最终解释权。</p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('快来动动手指点赞吧，集赞赢豪礼，活动开始啦~');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp85/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp85/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('三天内集满68个赞,缤特力ML20蓝牙耳机免费送，还不快快行动起来！');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井百货');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(7).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice7.mp3');
	//设置分享海报
    var qr_url_ipt =$('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp85/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp85/qr.jpg";
}

//手机端初始化操作
 function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('快来动动手指点赞吧，集赞赢豪礼，活动开始啦~');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp85/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp85/cover.jpg />");
	//设置活动所需集赞数
    $('input[name="model[winer_num]"]').val('68');

    //设置活动内容
    artEditor.clear();
    artEditor.append('<p>送大礼！为了回馈客户，缤特力M25蓝牙耳机和缤特力ML20蓝牙耳机低于成本价限量销售，并有集"赞"可免费送缤特力ML20蓝牙耳机活动！</p><p>感谢您的关注，有了您的关注，我们才有明天的辉煌</p><p style="font-weight:bold; color:#FF0000;">请仔细阅读活动内容：</p><p>只要转发本条内容并分享到您的微信朋友圈，并关注本公众账号(扫描下面的二维码加以关注) 累积获得68个赞起。即可获得本公司送出的缤特力ML20蓝牙耳机一个！</p><p align="center"><img src='+module_url+'resource/template/tmp/tmp85/content1.png width="200" height="200"/></p><p>1、集赞活动于2020年10月30日止。</p><p>2、点击“我要参加”即可参与活动,本次集赞活动适用于任何人。</p><p>3、每位微信帐户限兑一次,不可重复参与。</p><p>4、集齐后请凭借系统生成的核销码到店兑换，数量有限，送完为止，先到先得。</p><p>5、在法律允许下，本公司保留本次活动的最终解释权。</p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('快来动动手指点赞吧，集赞赢豪礼，活动开始啦~');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp85/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp85/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('三天内集满68个赞,缤特力ML20蓝牙耳机免费送，还不快快行动起来！');
	//设置活动门店地址
     $('input[name="model[store_map_list][0][name]').val('王府井百货');
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
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp85/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp85/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp85/qr.jpg");
	
    //初始化二维码
    mrqrclick();
     layer.open({
         content: '初始化数据完成！'
         ,skin: 'msg'
         ,time: 2 //2秒后自动关闭
     });
}

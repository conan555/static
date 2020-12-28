//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('承包您的吃喝玩乐 千万福利 幸运锦鲤就是你');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp82/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp82/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>======================</strong></span></p><p><br/></p><p>★★★活动内容★★★</p><p>xxx公司联合本市知名商家开启首次幸运锦鲤活动，千元豪礼免费拿，你来吃你来玩我买单。<br/></p><p><br/></p><p>【联合商家】：必胜客欢乐餐厅、华强方特欢乐世界、蜜雪冰城茶饮、海底捞火锅、奥斯卡电影城。</p><p>【商品内容】：超值的 往下面看咯</p><p>1、<span style="font-size: 18px; font-family: 黑体, SimHei;">必胜客欢乐餐厅：</span>必胜客定制玩具一个、必胜客精美小吃一份，必胜客豪华至尊披萨一份，必胜客面值200嗨吃券一张。</p><p>2、<span style="font-size: 18px; font-family: 黑体, SimHei;">华强方特欢乐世界：</span>方特欢乐世界白天门票一张、方特欢乐世界夜间门票一张、方特内50元小吃卡一张（可在任意餐位换取xx元以内的小吃，价高补差价，不予折换现金）</p><p>3、<span style="font-family: 黑体, SimHei; font-size: 18px;">蜜雪冰城茶饮：</span>蜜雪冰城定制礼品袋一套、蜜雪冰城季卡一张（可在有效期内每周到蜜雪冰城领取茶饮或冰淇淋）</p><p>4、<span style="font-family: 黑体, SimHei; font-size: 18px;">海底捞火锅：</span>7折卡5张（满200元可使用，不能与其他优惠同时使用）、蘸料卡3张（不能与其他优惠同时使用）、海底捞定制礼品一份。</p><p>5、<span style="font-family: 黑体, SimHei; font-size: 18px;">奥斯卡电影城：</span>小吃卡2张，奥斯卡影城观影卡10张，其中包含2张按摩椅厅、2张激光厅、6张杜比全景声厅（没有限制，可观看任意场次，任意电影。） </p><p><br/></p><p>★★★活动规则★★★</p><p>1、点击按钮“参与获取抽奖码”即可参与活动。<br/></p><p>2、点击“海报或获取更多抽奖码”根据规则可额外获得一个抽奖码哦。<br/></p><p>3、本活动为限时活动，请注意活动时间，过期不领、不使用将作废。<br/></p><p>4、仅限本人使用，转让赠送无效。</p><p>4、锦鲤用户活动结束后我们会有工作人员和您联系，请注意接听电话。<br/></p><p><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('承包您的吃喝玩乐千万福利幸运锦鲤就是你');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp82/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp82/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('承包您的吃喝玩乐 千元福利 超值商品真的送给您 下一个幸运锦鲤就是你');
	//设置活动背景音乐
    $('#audio_id').val(6).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice6.mp3');
	//设置分享海报
    var qr_url_ipt =$('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp82/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp82/qr.jpg";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('承包您的吃喝玩乐 千万福利 幸运锦鲤就是你');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp82/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp82/cover.jpg />");
    //设置活动内容
    artEditor.clear();
    artEditor.append('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>======================</strong></span></p><p><br/></p><p>★★★活动内容★★★</p><p>xxx公司联合本市知名商家开启首次幸运锦鲤活动，千元豪礼免费拿，你来吃你来玩我买单。<br/></p><p><br/></p><p>【联合商家】：必胜客欢乐餐厅、华强方特欢乐世界、蜜雪冰城茶饮、海底捞火锅、奥斯卡电影城。</p><p>【商品内容】：超值的 往下面看咯</p><p>1、<span style="font-size: 18px; font-family: 黑体, SimHei;">必胜客欢乐餐厅：</span>必胜客定制玩具一个、必胜客精美小吃一份，必胜客豪华至尊披萨一份，必胜客面值200嗨吃券一张。</p><p>2、<span style="font-size: 18px; font-family: 黑体, SimHei;">华强方特欢乐世界：</span>方特欢乐世界白天门票一张、方特欢乐世界夜间门票一张、方特内50元小吃卡一张（可在任意餐位换取xx元以内的小吃，价高补差价，不予折换现金）</p><p>3、<span style="font-family: 黑体, SimHei; font-size: 18px;">蜜雪冰城茶饮：</span>蜜雪冰城定制礼品袋一套、蜜雪冰城季卡一张（可在有效期内每周到蜜雪冰城领取茶饮或冰淇淋）</p><p>4、<span style="font-family: 黑体, SimHei; font-size: 18px;">海底捞火锅：</span>7折卡5张（满200元可使用，不能与其他优惠同时使用）、蘸料卡3张（不能与其他优惠同时使用）、海底捞定制礼品一份。</p><p>5、<span style="font-family: 黑体, SimHei; font-size: 18px;">奥斯卡电影城：</span>小吃卡2张，奥斯卡影城观影卡10张，其中包含2张按摩椅厅、2张激光厅、6张杜比全景声厅（没有限制，可观看任意场次，任意电影。） </p><p><br/></p><p>★★★活动规则★★★</p><p>1、点击按钮“参与获取抽奖码”即可参与活动。<br/></p><p>2、点击“海报或获取更多抽奖码”根据规则可额外获得一个抽奖码哦。<br/></p><p>3、本活动为限时活动，请注意活动时间，过期不领、不使用将作废。<br/></p><p>4、仅限本人使用，转让赠送无效。</p><p>4、锦鲤用户活动结束后我们会有工作人员和您联系，请注意接听电话。<br/></p><p><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('承包您的吃喝玩乐千万福利幸运锦鲤就是你');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp82/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp82/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('承包您的吃喝玩乐 千元福利 超值商品真的送给您 下一个幸运锦鲤就是你');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice6.mp3";
    $("#music-sel-ul li").each(function(){
        $(this).removeClass("act");
        if($(this).data('url') == audio_url){
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);
	//设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp82/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp82/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp82/qr.jpg");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}

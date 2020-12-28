//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('双十二来啦！暖冬特惠，多家知名教育机构联合推出的精品课程，特惠价仅需99，快来抢购吧！');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp34/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp34/cover.jpg");
	//设置购买支付金额
    $('input[name="model[money]"]').val('99.00');

    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p><span style="color: rgb(255, 0, 0); font-size: 18px;">暖冬特惠，教育献礼。</span><br/>为了给祖国未来的花朵们一个良好的课内外教育环境，我们联合了本地知名教育机构，结合孩子们的兴趣爱好，课外学习拓展给孩子们发放福利啦！！！<br/><br/><span style="color: rgb(255, 0, 0); font-size: 18px;">99元我可以得到什么？课程如下<br/>***超级福利课程***</span><br/>1、非凡画室（基础绘画课 2课时）<br/>2、雅思英语（发音测试+名师1对1教学课程 2课时）<br/>3、小熊攀岩（攀岩5次卡 1张）<br/>4、极客数学帮（对应年级数学课程 3课时）<br/>5、胡桃夹子芭蕾舞校（入门礼包+街舞&amp;芭蕾舞任选课程 3课时）<br/>6、米高轮滑俱乐部（防护礼包+3次轮滑体验 1张）<br/>7、精英跆拳道（课程 5课时）<br/>8、中英诗朗诵（名师1对1课程 2课时）<br/>9、洛河音乐工作室（钢琴&amp;吉他 任选课程 2课时）</p><p><br/></p><p><br/></p><p><br/></p><p><img src='+module_url+'resource/template/tmp/tmp34/content01.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp34/content02.jpg width="100%" style=""/></p><p><br/></p><p><img src='+module_url+'resource/template/tmp/tmp34/content03.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp34/content04.png width="100%" alt="4421649_jpa6jt7h.png"/><img src='+module_url+'resource/template/tmp/tmp34/content05.jpg width="100%" alt="TIM图片20191126114632.jpg"/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('双十二来啦！暖冬特惠，寒假班提前报名啦，原价799的精品课程现在只需99元，快来抢购吧！');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp34/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp34/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('双十二来啦！暖冬特惠，多家知名教育机构推出精品课程原价999元，现特惠仅需99，名额有限，欲购从速！！！');
	//设置活动背景音乐
    $('#audio_id').val(11).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice11.mp3');
	//设置活动分享二维码
    var qr_url_ipt =$('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp34/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp34/qr.jpg";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('双十二来啦！暖冬特惠，多家知名教育机构联合推出的精品课程，特惠价仅需99，快来抢购吧！');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp34/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp34/cover.jpg />");
	//设置购买支付金额
    $('input[name="model[money]"]').val('99.00');
    //设置活动内容
    artEditor.clear();
    artEditor.append('<p><span style="color: rgb(255, 0, 0); font-size: 18px;">暖冬特惠，教育献礼。</span><br/>为了给祖国未来的花朵们一个良好的课内外教育环境，我们联合了本地知名教育机构，结合孩子们的兴趣爱好，课外学习拓展给孩子们发放福利啦！！！<br/><br/><span style="color: rgb(255, 0, 0); font-size: 18px;">99元我可以得到什么？课程如下<br/>***超级福利课程***</span><br/>1、非凡画室（基础绘画课 2课时）<br/>2、雅思英语（发音测试+名师1对1教学课程 2课时）<br/>3、小熊攀岩（攀岩5次卡 1张）<br/>4、极客数学帮（对应年级数学课程 3课时）<br/>5、胡桃夹子芭蕾舞校（入门礼包+街舞&amp;芭蕾舞任选课程 3课时）<br/>6、米高轮滑俱乐部（防护礼包+3次轮滑体验 1张）<br/>7、精英跆拳道（课程 5课时）<br/>8、中英诗朗诵（名师1对1课程 2课时）<br/>9、洛河音乐工作室（钢琴&amp;吉他 任选课程 2课时）</p><p><br/></p><p><br/></p><p><br/></p><p><img src='+module_url+'resource/template/tmp/tmp34/content01.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp34/content02.jpg width="100%" style=""/></p><p><br/></p><p><img src='+module_url+'resource/template/tmp/tmp34/content03.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp34/content04.png width="100%" alt="4421649_jpa6jt7h.png"/><img src='+module_url+'resource/template/tmp/tmp34/content05.jpg width="100%" alt="TIM图片20191126114632.jpg"/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('双十二来啦！暖冬特惠，寒假班提前报名啦，原价799的精品课程现在只需99元，快来抢购吧！');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp34/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp34/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('双十二来啦！暖冬特惠，多家知名教育机构推出精品课程原价999元，现特惠仅需99，名额有限，欲购从速！！！');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice11.mp3";
    $("#music-sel-ul li").each(function(){
        $(this).removeClass("act");
        if($(this).data('url') == audio_url){
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);
    //设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp34/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp34/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp34/qr.jpg");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}


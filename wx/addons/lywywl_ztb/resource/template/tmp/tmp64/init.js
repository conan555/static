//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
    //设置活动名称
    $('input[name="model[title]"]').val('五一劳动节，景区豪礼等你刮，快来刮出属于你的豪礼');
    //设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp64/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp64/cover.jpg");
    //设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p><span style="font-size: 18px;"></span></p><p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>=======================</strong></span>&nbsp;</p><p><span style="font-size: 18px;">*****参与方式*****</span></p><p style="white-space: normal;">我要参与：点击“开始刮奖”开始刮奖活动。</p><p style="white-space: normal;">好奖一起拿：朋友参加自己可以获得额外一次机会。</p><p style="white-space: normal;">最高大奖：云台山景区门票2张。</p><p style="white-space: normal;">到店使用：进店展示核销码，核销员扫码核销即可使用。</p><p style="white-space: normal;"><br/></p><p><span style="font-size: 18px;"><span style="font-size: 18px;">*****奖品介绍*****</span></span></p><p>一等奖：云台山景区门票2张</p><p>二等奖：云台山景区门票1张</p><p>三等奖：云台山景区小交通票1张</p><p>四等奖：云台山纪念品一份</p><p>五等奖：谢谢参与</p><p><br/></p><p><span style="font-size: 18px;">*****景区风景*****</span></p><p><img src='+module_url+'resource/template/tmp/tmp64/content01.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp64/content02.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp64/content03.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp64/content04.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp64/content05.jpg width="100%" style=""/></p><p><span style="font-size: 18px;">*****参与地址*****</span></p><p>活动地址：涧西区 景华路 银座商城888号</p><p>活动时间：2020年5月1日-2020年5月5日</p><p><br/></p><p style="white-space: normal;"><span style="font-size: 18px;">*****特别说明*****</span></p><p style="white-space: normal;">1、本活动不与其他折扣活动同时参与。</p><p style="white-space: normal;">2、活动内容也享受售后服务。</p><p><br/></p>');
    });
    //设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}五一劳动节，景区豪礼等你刮，快来刮出属于你的豪礼');
    //设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp64/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp64/cover.jpg");
    //设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}五一劳动节，景区豪礼等你刮，快来刮出属于你的豪礼');
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
    $('input[name="model[title]"]').val('五一劳动节，景区豪礼等你刮，快来刮出属于你的豪礼');
    //设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp64/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp64/cover.jpg />");
    //设置活动内容
    artEditor.clear();
    artEditor.append('<p><span style="font-size: 18px;"></span></p><p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>=======================</strong></span>&nbsp;</p><p><span style="font-size: 18px;">*****参与方式*****</span></p><p style="white-space: normal;">我要参与：点击“开始刮奖”开始刮奖活动。</p><p style="white-space: normal;">好奖一起拿：朋友参加自己可以获得额外一次机会。</p><p style="white-space: normal;">最高大奖：云台山景区门票2张。</p><p style="white-space: normal;">到店使用：进店展示核销码，核销员扫码核销即可使用。</p><p style="white-space: normal;"><br/></p><p><span style="font-size: 18px;"><span style="font-size: 18px;">*****奖品介绍*****</span></span></p><p>一等奖：云台山景区门票2张</p><p>二等奖：云台山景区门票1张</p><p>三等奖：云台山景区小交通票1张</p><p>四等奖：云台山纪念品一份</p><p>五等奖：谢谢参与</p><p><br/></p><p><span style="font-size: 18px;">*****景区风景*****</span></p><p><img src='+module_url+'resource/template/tmp/tmp64/content01.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp64/content02.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp64/content03.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp64/content04.jpg width="100%" style=""/></p><p><img src='+module_url+'resource/template/tmp/tmp64/content05.jpg width="100%" style=""/></p><p><span style="font-size: 18px;">*****参与地址*****</span></p><p>活动地址：涧西区 景华路 银座商城888号</p><p>活动时间：2020年5月1日-2020年5月5日</p><p><br/></p><p style="white-space: normal;"><span style="font-size: 18px;">*****特别说明*****</span></p><p style="white-space: normal;">1、本活动不与其他折扣活动同时参与。</p><p style="white-space: normal;">2、活动内容也享受售后服务。</p><p><br/></p>');
    //设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}五一劳动节，景区豪礼等你刮，快来刮出属于你的豪礼');
    //设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp64/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp64/cover.jpg />");
    //设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}五一劳动节，景区豪礼等你刮，快来刮出属于你的豪礼');
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

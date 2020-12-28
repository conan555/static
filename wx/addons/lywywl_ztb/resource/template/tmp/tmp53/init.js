//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('新年好礼送不停 金蛋免费砸');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp53/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp53/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p>百度AI智能机器人蓝牙音箱小度来啦，遥控智能设备、语音通话、智能投屏、红外遥控家电、听歌看剧、早教陪伴全家人的智能助手！</p><p>原价399的小度参与活动砸金蛋免费送了，你没有听错 真的免费送，不仅送小度还送会员套餐，全部免费拿，还在等什么快来砸出你的专属机器人蓝牙音箱吧！</p><p><br/></p><p style="white-space: normal;"> **砸出小度** </p><p style="white-space: normal;">我要参与：点击“活动内的金蛋”开始砸金蛋活动。</p><p style="white-space: normal;">好奖一起拿：朋友参加自己可以获得额外一次机会。</p><p style="white-space: normal;">最高大奖：小度AI智能机器人1台</p><p style="white-space: normal;">到店使用：进店展示核销码，核销员扫码核销即可使用。</p><p style="white-space: normal;"><br/> </p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"> **小度金蛋** </p><p style="white-space: normal;">1、小度AI智能机器人音箱*1<br/></p><p style="white-space: normal;">2、小度爱奇艺会员年卡*3 </p><p style="white-space: normal;">3、小度爱奇艺会员季卡*10 </p><p style="white-space: normal;">4、小度会员年卡*10</p><p style="white-space: normal;">5、小度会员季卡*50 </p><p style="white-space: normal;">6、小度1s保护套*100</p><p style="white-space: normal;"> 7、小度周边礼包 </p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"> **小度AI介绍** </p><p style="white-space: normal;"><img src='+module_url+'resource/template/tmp/tmp53/content01.png  width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp53/content02.png width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp53/content03.png width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp53/content04.png width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp53/content05.png width="100%" alt=""/></p><p>**参与地址**<br/></p><p style="white-space: normal;">参与地点：西工区 唐宫路 新都汇1楼 百度智能体验店</p><p style="white-space: normal;">活动时间：2019年12月28日-2020年1月2日</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"> **特别说明** </p><p style="white-space: normal;">本活动不收取任何费用，谨防被骗。<br/></p><p style="white-space: normal;">最终解释权归百度智能体验店所有</p><p><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('智能AI机器人小度，等您免费砸出来，更多万元大礼包等您拿');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp53/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp53/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('百度AI智能机器人蓝牙音箱免费送啦，参与活动就有机会获得，你还在犹豫什么？ ');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(7).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice7.mp3');
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('新年好礼送不停 金蛋免费砸');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp53/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp53/cover.jpg />");
    //设置活动内容
	artEditor.clear();
    artEditor.append('<p>百度AI智能机器人蓝牙音箱小度来啦，遥控智能设备、语音通话、智能投屏、红外遥控家电、听歌看剧、早教陪伴全家人的智能助手！</p><p>原价399的小度参与活动砸金蛋免费送了，你没有听错 真的免费送，不仅送小度还送会员套餐，全部免费拿，还在等什么快来砸出你的专属机器人蓝牙音箱吧！</p><p><br/></p><p style="white-space: normal;"> **砸出小度** </p><p style="white-space: normal;">我要参与：点击“活动内的金蛋”开始砸金蛋活动。</p><p style="white-space: normal;">好奖一起拿：朋友参加自己可以获得额外一次机会。</p><p style="white-space: normal;">最高大奖：小度AI智能机器人1台</p><p style="white-space: normal;">到店使用：进店展示核销码，核销员扫码核销即可使用。</p><p style="white-space: normal;"><br/> </p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"> **小度金蛋** </p><p style="white-space: normal;">1、小度AI智能机器人音箱*1<br/></p><p style="white-space: normal;">2、小度爱奇艺会员年卡*3 </p><p style="white-space: normal;">3、小度爱奇艺会员季卡*10 </p><p style="white-space: normal;">4、小度会员年卡*10</p><p style="white-space: normal;">5、小度会员季卡*50 </p><p style="white-space: normal;">6、小度1s保护套*100</p><p style="white-space: normal;"> 7、小度周边礼包 </p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"> **小度AI介绍** </p><p style="white-space: normal;"><img src='+module_url+'resource/template/tmp/tmp53/content01.png  width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp53/content02.png width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp53/content03.png width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp53/content04.png width="100%" alt=""/><img src='+module_url+'resource/template/tmp/tmp53/content05.png width="100%" alt=""/></p><p>**参与地址**<br/></p><p style="white-space: normal;">参与地点：西工区 唐宫路 新都汇1楼 百度智能体验店</p><p style="white-space: normal;">活动时间：2019年12月28日-2020年1月2日</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"> **特别说明** </p><p style="white-space: normal;">本活动不收取任何费用，谨防被骗。<br/></p><p style="white-space: normal;">最终解释权归百度智能体验店所有</p><p><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('智能AI机器人小度，等您免费砸出来，更多万元大礼包等您拿');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp53/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp53/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('百度AI智能机器人蓝牙音箱免费送啦，参与活动就有机会获得，你还在犹豫什么？');
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
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}

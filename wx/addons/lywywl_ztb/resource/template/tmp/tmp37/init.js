//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('圣诞狂欢乐翻天，小米送豪礼 大奖刮出来！');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp37/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp37/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
    uecontent.setContent('<p>狂欢圣诞来袭，小米送豪礼啦！！！<br/> </p><p>参与本活动即可随机刮出好礼小爱音箱、小米手环、手机区折扣券、家电区折扣券、酷玩满减券、数码配件、周边豪礼更多惊喜等您参加。</p><p><br/></p><p>**我要参与**</p><p style="white-space: normal;">点击“开始刮奖”开始刮奖活动。</p><p style="white-space: normal;">好奖一起拿：朋友参加自己可以获得额外一次机会。</p><p style="white-space: normal;">最高大奖：小米手环、小爱音箱免费送。</p><p style="white-space: normal;">到店使用：进店展示核销码，核销员扫码核销即可使用。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">**豪礼来袭**</p><p style="white-space: normal;">1、小爱音箱（Redmi 小爱音箱 Play 白色 智能设备控制）<br/></p><p style="white-space: normal;">2、小米手环4（石墨黑 AI彩屏心率运动手环）</p><p style="white-space: normal;">3、酷玩区满减券（满500减100，特价款不参与不可累计）</p><p style="white-space: normal;">4、手机区折扣券（满1000-200，特价款不参与不可累积）</p><p style="white-space: normal;">5、家电区折扣券（满2000-500，特价款不参与不可累积）</p><p style="white-space: normal;">6、谢谢参与（可到店领取数码好礼一份）</p><p style="white-space: normal;">数码配件，周边豪礼进店免费拿（指定款）<br/></p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">**部分商品展示**<img src='+module_url+'resource/template/tmp/tmp37/content01.jpg width="100%" alt="微信图片_20191213110551.png"/><img src='+module_url+'resource/template/tmp/tmp37/content02.jpg width="100%" alt="微信图片_20191213110625.png"/><img src='+module_url+'resource/template/tmp/tmp37/content03.jpg width="100%" alt="微信图片_20191213110426.png"/><img src='+module_url+'resource/template/tmp/tmp37/content04.jpg width="100%" alt="c8fffee395c67b3d.jpg"/></p><p style="white-space: normal;">**参与地点**</p><p style="white-space: normal;">活动地点1：涧西区 景华路 上海市场-1楼小米专卖<br/>活动地点2：老城区 十字街 888号小米专卖<br/>活动地点3：西工区 王府井 1楼小米专卖</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">**特别说明** </p><p style="white-space: normal;">1、特价款不可参与此活动。</p> <p style="white-space: normal;">2、购买后非质量问题不可以调换，不可退款。</p><p style="white-space: normal;">3、专属保价机制，15天之内降价退差价。</p><p style="white-space: normal;">最终解释权归洛阳小米专卖所有</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"><br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}已经刮到小米5折券，快来刮出您的专属圣诞豪礼');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp37/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp37/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}圣诞乐翻天，小米送豪礼，礼遇圣诞小米免单惊喜大奖带回家。');
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
    $('input[name="model[title]"]').val('圣诞狂欢乐翻天，小米送豪礼 大奖刮出来！');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp37/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp37/cover.jpg />");
    //设置活动内容
	artEditor.clear();
    artEditor.append('<p>狂欢圣诞来袭，小米送豪礼啦！！！<br/> </p><p>参与本活动即可随机刮出好礼小爱音箱、小米手环、手机区折扣券、家电区折扣券、酷玩满减券、数码配件、周边豪礼更多惊喜等您参加。</p><p><br/></p><p>**我要参与**</p><p style="white-space: normal;">点击“开始刮奖”开始刮奖活动。</p><p style="white-space: normal;">好奖一起拿：朋友参加自己可以获得额外一次机会。</p><p style="white-space: normal;">最高大奖：小米手环、小爱音箱免费送。</p><p style="white-space: normal;">到店使用：进店展示核销码，核销员扫码核销即可使用。</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">**豪礼来袭**</p><p style="white-space: normal;">1、小爱音箱（Redmi 小爱音箱 Play 白色 智能设备控制）<br/></p><p style="white-space: normal;">2、小米手环4（石墨黑 AI彩屏心率运动手环）</p><p style="white-space: normal;">3、酷玩区满减券（满500减100，特价款不参与不可累计）</p><p style="white-space: normal;">4、手机区折扣券（满1000-200，特价款不参与不可累积）</p><p style="white-space: normal;">5、家电区折扣券（满2000-500，特价款不参与不可累积）</p><p style="white-space: normal;">6、谢谢参与（可到店领取数码好礼一份）</p><p style="white-space: normal;">数码配件，周边豪礼进店免费拿（指定款）<br/></p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">**部分商品展示**<img src='+module_url+'resource/template/tmp/tmp37/content01.jpg width="100%" alt="微信图片_20191213110551.png"/><img src='+module_url+'resource/template/tmp/tmp37/content02.jpg width="100%" alt="微信图片_20191213110625.png"/><img src='+module_url+'resource/template/tmp/tmp37/content03.jpg width="100%" alt="微信图片_20191213110426.png"/><img src='+module_url+'resource/template/tmp/tmp37/content04.jpg width="100%" alt="c8fffee395c67b3d.jpg"/></p><p style="white-space: normal;">**参与地点**</p><p style="white-space: normal;">活动地点1：涧西区 景华路 上海市场-1楼小米专卖<br/>活动地点2：老城区 十字街 888号小米专卖<br/>活动地点3：西工区 王府井 1楼小米专卖</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">**特别说明** </p><p style="white-space: normal;">1、特价款不可参与此活动。</p> <p style="white-space: normal;">2、购买后非质量问题不可以调换，不可退款。</p><p style="white-space: normal;">3、专属保价机制，15天之内降价退差价。</p><p style="white-space: normal;">最终解释权归洛阳小米专卖所有</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}已经刮到小米5折券，快来刮出您的专属圣诞豪礼');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp37/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp37/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('{NICKNAME}圣诞乐翻天，小米送豪礼，礼遇圣诞小米免单惊喜大奖带回家。');
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

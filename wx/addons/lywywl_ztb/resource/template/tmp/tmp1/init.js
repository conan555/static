//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('洗车不花钱 一起来参加！ ');
	//设置活动封面图片
	var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp1/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp1/cover.jpg");
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>======================</strong></span></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0); font-size: 20px;"><strong><br/></strong></span></p><p style="white-space: normal;">★★★活动商品★★★</p><p style="white-space: normal;">【名称】：铂金洗车护理卡</p><p style="white-space: normal;">【价格】：原价99元，现价0元（不要钱 不要钱 不要钱）</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★商品介绍★★★</p><p>1、精细化普洗一次 1次</p><p>2、全车33项安全检测一次 1份/3、玻璃水添加 1份</p><p><br/></p><p>★服务内容：</p><p>1、汽车外观泡泡浴清洗<br/></p><p>2、内饰清洗：擦拭仪表盘-座椅-地毯-干洗脚垫-后工作台-后备箱-吸尘器除尘-门店</p><p><br/></p><p>★★★活动规则★★★</p><p>参与活动后达到商家的制定规则即可，就是这么简单，就是这么任性。</p><p><br/></p><p><br/></p><p>★特别说明：</p><p>1、店内11:30—13:30为休息时间，请您致店消费避开休息时间。</p><p>2、活动仅适用于5座以下车型，SUV及五座以上车型到店需另补钱。</p><p>3、雨雪天过后，洗车可能会排队，请顾客理解。</p><p>4、内饰清洁流程为吸尘器吸尘后用擦车布擦洗，若脚垫特别脏，会拿出来专门清洗。</p><p><br/></p><p><br/></p><p>店铺展示↓↓↓↓↓↓</p><p><img src='+module_url+'resource/template/tmp/tmp1/content01.jpg width="100%" alt="洗车4.jpg"/><img src='+module_url+'resource/template/tmp/tmp1/content02.jpg width="100%" alt="洗车3.jpg"/><img src='+module_url+'resource/template/tmp/tmp1/content03.jpg width="100%" alt="洗车1.jpg"/></p><p><br/></p>');
    });

	//设置活动分享标题
    $('input[name="model[share_title]"]').val('洗车不花钱 免费洗车 等你来参加');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp1/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp1/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('洗车不花钱 一起来参加！');
	//设置活动分享内容
    var uecontent = UE.getEditor('model[share_content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p><span style="color: rgb(34, 34, 34); font-family: Consolas" lucida="" courier="" font-size:="" white-space:="" background-color:="">免费“洗爱车”啦，参与活动免费洗车一次</span></p>');
    });

	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(6).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice6.mp3');
}
//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('洗车不花钱 一起来参加！');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp1/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp1/cover.jpg />");

    //设置活动内容
	artEditor.clear();
    artEditor.append('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>======================</strong></span></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0); font-size: 20px;"><strong><br/></strong></span></p><p style="white-space: normal;">★★★活动商品★★★</p><p style="white-space: normal;">【名称】：铂金洗车护理卡</p><p style="white-space: normal;">【价格】：原价99元，现价0元（不要钱 不要钱 不要钱）</p><p style="white-space: normal;"><br/></p><p style="white-space: normal;">★★★商品介绍★★★</p><p>1、精细化普洗一次 1次</p><p>2、全车33项安全检测一次 1份/3、玻璃水添加 1份</p><p><br/></p><p>★服务内容：</p><p>1、汽车外观泡泡浴清洗<br/></p><p>2、内饰清洗：擦拭仪表盘-座椅-地毯-干洗脚垫-后工作台-后备箱-吸尘器除尘-门店</p><p><br/></p><p>★★★活动规则★★★</p><p>参与活动后达到商家的制定规则即可，就是这么简单，就是这么任性。</p><p><br/></p><p><br/></p><p>★特别说明：</p><p>1、店内11:30—13:30为休息时间，请您致店消费避开休息时间。</p><p>2、活动仅适用于5座以下车型，SUV及五座以上车型到店需另补钱。</p><p>3、雨雪天过后，洗车可能会排队，请顾客理解。</p><p>4、内饰清洁流程为吸尘器吸尘后用擦车布擦洗，若脚垫特别脏，会拿出来专门清洗。</p><p><br/></p><p><br/></p><p>店铺展示↓↓↓↓↓↓</p><p><img src='+module_url+'resource/template/tmp/tmp1/content01.jpg width="100%" alt="洗车4.jpg"/><img src='+module_url+'resource/template/tmp/tmp1/content02.jpg width="100%" alt="洗车3.jpg"/><img src='+module_url+'resource/template/tmp/tmp1/content03.jpg width="100%" alt="洗车1.jpg"/></p><p><br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('洗车不花钱 免费洗车 等你来参加');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp1/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp1/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('洗车不花钱 一起来参加！');
	//设置活动分享内容
	share_artEditor.clear();
	share_artEditor.append('洗车不花钱 一起来参加！');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice6.mp3";
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

//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('国庆海南6日游 直飞海口 畅享海岛美梦 仅需1780元');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp28/cover.jpg");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp28/cover.jpg");
	//设置购买支付金额
    $('input[name="model[money]"]').val('1780.00');
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0);"><strong>======================</strong></span></p><p style="white-space: normal;">★★★活动商品★★★ </p> <p style="white-space: normal;">【名称】：海南6日游 </p> <p style="white-space: normal;">【价格】：原价2980元，现价1780元 </p> <p style="white-space: normal;"> <p style="white-space: normal;">★网红打卡圣地：<br/> </p> <div>酒店专属BBQ<br/>热带岛屿---分界洲岛一日游&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;佛教圣地---南山<br/> <p> 浪漫名片---天涯海角&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;特色风情---槟榔谷 </p> <p> <br/> </p> <p>★酒店介绍：</p> <p>【海滨风光】位于海南三亚后花园-“香水湾”滨海地带，倚碧波海港，面一线海景，观灯塔与海的守望。<br/></p> <p>【休闲度假】海景健身房，滑梯泳池，游艇出海，守望-会跳舞的海”歌舞秀，沙滩篝火，绚烂烟花等丰富多彩的特色活动。</p><p>【亲子酒店】畅享受儿童俱乐部，亲子房特色帐篷配置，萌宠乐园、家庭自行车、射箭、赶海抓螃蟹、小帆船等水陆亲子活动。</p> <p>【浪漫情侣】吹着浪漫的海风，打造草地、海滩、与心爱之人携手共赏灯塔守望碧海蓝天。</p> </div> <p style="white-space: normal;"> <img src='+module_url+'resource/template/tmp/tmp28/content01.jpg width="100%" alt="海南岛1.png"/></p> <p>★景点说明：</p><p> 精华景点全包含，尽享海南美景不错过 </p> <p>【分界洲岛5A（一整天）】：天海一色、椰影婆娑，尤其是神奇的海底世界更是增添了无人居住小岛的原始神秘之感，岛上石峰林立，峭壁万仞，奇树簇拥。夜幕降临住在这座僻静的小岛上，做岛上的小主人，享受自己拥有一座小岛的感觉。分分钟刷爆你的朋友圈&nbsp;</p> <p>【5A南山文化旅游区】南山寺是一座融佛教文化、建筑园林、观光休憩于一体的现代佛新兴寺院。是一座仿古盛唐风格居山面海大型寺院。</p> <p>【4A天涯海角】&quot;天涯&quot;和&quot;海角&quot;这两块大石头也是有来历的，传说一对热恋的男女分别来自两个有世仇的家族，他们的爱情遭到各自族人的反对，于是被迫逃到此地双双跳进大海，化成两块巨石，永远相对。后人为纪念他们的坚贞爱情，刻下&quot;天涯&quot;&quot;海角&quot;的字样，后来男</p> <p> 女恋爱常以&quot;天涯海角永远相随&quot;来表明自己的心迹。<img src='+module_url+'resource/template/tmp/tmp28/content02.jpg style="white-space: normal;"/></p> <p style="white-space: normal;"> <img src='+module_url+'resource/template/tmp/tmp28/content03.jpg width="100%" alt="国庆海南旅游01.jpg" style="white-space: normal;"/></p> <p style="white-space: normal;"><img src='+module_url+'resource/template/tmp/tmp28/content04.jpg width="100%" alt="国庆海南旅游02.jpg" style="white-space: normal;"/>★★★活动规则★★★<br/></p> <p style="white-space: normal;"> 1、点击按钮“立即抢购”可直接付款购买。</p> <p style="white-space: normal;"> +2、点击“专属海报”登记后，生成自己的专属海报给好友，好友下单自己可获得商家提供的奖品。</p> <p style="white-space: normal;"> 3、名额有限，售完即止，欲购从速。</p> <p style="white-space: normal;"> 5、购买成功后到店核销领取。</p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;">★注：</p> <p style="white-space: normal;"> 1、到店核销时获取详细的行程时间和行程表，也可以联系客服咨询。</p> <p style="white-space: normal;"> 2、订单确认后如需退订需要到店办理，旅行社会扣除一定的时差费。</p> <p style="white-space: normal;"> 3、旅行中途离开，支付费用不予退还。</p> <p style="white-space: normal;"> 4、旅途中没有任何强制消费，旅途中没有任何强制消费，旅途中没有任何强制消费。</p> <p style="white-space: normal;"> 5、更详细的内容欢迎到店咨询。</p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;"> <br/> </p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}喊你一起去旅行 海南6日游 直飞海口畅享海岛美梦 仅需1780元');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp28/cover.jpg");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp28/cover.jpg");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('国庆海南6日游，网红打卡圣地、5A级景点、亲自酒店、情侣旅行圣地，直飞海口 畅享海岛美梦仅需1780元。');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('#audio_id').val(16).select2();
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice16.mp3');
	//设置分享海报
    var qr_url_ipt =$('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp28/qr.jpg");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp28/qr.jpg";
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('国庆海南6日游 直飞海口 畅享海岛美梦 仅需1780元');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp28/cover.jpg");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp28/cover.jpg />");
	//设置购买支付金额
    $('input[name="model[money]"]').val('1780.00');
    //设置活动内容
    artEditor.clear();
    artEditor.append('<p style="white-space: normal;"><strong><span style="color: rgb(255, 0, 0); font-size: 20px;">本次活动为系统活动仅供参考！切勿当真！</span></strong></p><p style="white-space: normal;"><span style="color: rgb(255, 0, 0); "><strong>======================</strong></span></p><p style="white-space: normal;">★★★活动商品★★★ </p> <p style="white-space: normal;">【名称】：海南6日游 </p> <p style="white-space: normal;">【价格】：原价2980元，现价1780元 </p> <p style="white-space: normal;"> <p style="white-space: normal;">★网红打卡圣地：<br/> </p> <div>酒店专属BBQ<br/>热带岛屿---分界洲岛一日游&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;佛教圣地---南山<br/> <p> 浪漫名片---天涯海角&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;特色风情---槟榔谷 </p> <p> <br/> </p> <p>★酒店介绍：</p> <p>【海滨风光】位于海南三亚后花园-“香水湾”滨海地带，倚碧波海港，面一线海景，观灯塔与海的守望。<br/></p> <p>【休闲度假】海景健身房，滑梯泳池，游艇出海，守望-会跳舞的海”歌舞秀，沙滩篝火，绚烂烟花等丰富多彩的特色活动。</p><p>【亲子酒店】畅享受儿童俱乐部，亲子房特色帐篷配置，萌宠乐园、家庭自行车、射箭、赶海抓螃蟹、小帆船等水陆亲子活动。</p> <p>【浪漫情侣】吹着浪漫的海风，打造草地、海滩、与心爱之人携手共赏灯塔守望碧海蓝天。</p> </div> <p style="white-space: normal;"> <img src='+module_url+'resource/template/tmp/tmp28/content01.jpg width="100%" alt="海南岛1.png"/></p> <p>★景点说明：</p><p> 精华景点全包含，尽享海南美景不错过 </p> <p>【分界洲岛5A（一整天）】：天海一色、椰影婆娑，尤其是神奇的海底世界更是增添了无人居住小岛的原始神秘之感，岛上石峰林立，峭壁万仞，奇树簇拥。夜幕降临住在这座僻静的小岛上，做岛上的小主人，享受自己拥有一座小岛的感觉。分分钟刷爆你的朋友圈&nbsp;</p> <p>【5A南山文化旅游区】南山寺是一座融佛教文化、建筑园林、观光休憩于一体的现代佛新兴寺院。是一座仿古盛唐风格居山面海大型寺院。</p> <p>【4A天涯海角】&quot;天涯&quot;和&quot;海角&quot;这两块大石头也是有来历的，传说一对热恋的男女分别来自两个有世仇的家族，他们的爱情遭到各自族人的反对，于是被迫逃到此地双双跳进大海，化成两块巨石，永远相对。后人为纪念他们的坚贞爱情，刻下&quot;天涯&quot;&quot;海角&quot;的字样，后来男</p> <p> 女恋爱常以&quot;天涯海角永远相随&quot;来表明自己的心迹。<img src='+module_url+'resource/template/tmp/tmp28/content02.jpg width="100%" style="white-space: normal;"/></p> <p style="white-space: normal;"> <img src='+module_url+'resource/template/tmp/tmp28/content03.jpg width="100%" alt="国庆海南旅游01.jpg" style="white-space: normal;"/></p> <p style="white-space: normal;"><img src='+module_url+'resource/template/tmp/tmp28/content04.jpg width="100%" alt="国庆海南旅游02.jpg" style="white-space: normal;"/>★★★活动规则★★★<br/></p> <p style="white-space: normal;"> 1、点击按钮“立即抢购”可直接付款购买。</p> <p style="white-space: normal;"> +2、点击“专属海报”登记后，生成自己的专属海报给好友，好友下单自己可获得商家提供的奖品。</p> <p style="white-space: normal;"> 3、名额有限，售完即止，欲购从速。</p> <p style="white-space: normal;"> 5、购买成功后到店核销领取。</p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;">★注：</p> <p style="white-space: normal;"> 1、到店核销时获取详细的行程时间和行程表，也可以联系客服咨询。</p> <p style="white-space: normal;"> 2、订单确认后如需退订需要到店办理，旅行社会扣除一定的时差费。</p> <p style="white-space: normal;"> 3、旅行中途离开，支付费用不予退还。</p> <p style="white-space: normal;"> 4、旅途中没有任何强制消费，旅途中没有任何强制消费，旅途中没有任何强制消费。</p> <p style="white-space: normal;"> 5、更详细的内容欢迎到店咨询。</p> <p style="white-space: normal;"> <br/> </p> <p style="white-space: normal;"> <br/> </p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}喊你一起去旅行 海南6日游 直飞海口畅享海岛美梦 仅需1780元');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp28/cover.jpg");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp28/cover.jpg />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('国庆海南6日游，网红打卡圣地、5A级景点、亲自酒店、情侣旅行圣地，直飞海口 畅享海岛美梦仅需1780元。');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice16.mp3";
    $("#music-sel-ul li").each(function(){
        $(this).removeClass("act");
        if($(this).data('url') == audio_url){
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);
	//设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp28/qr.jpg");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp28/qr.jpg />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp28/qr.jpg");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}

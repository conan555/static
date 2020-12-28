//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('时代楷模——教书育人精神践行者 年度人物评选网络投票启动');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp81/cover.png");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp81/cover.png");
    //设置活动公告
    $('textarea[name="model[notice]"]').val('教书育人楷模推选投票正在火热进行中，本次人物评选分为提名推荐、网络投票、综合评审、媒体公示等环节。每个用户全程限投10票，对同一候选人限投一票，投票截止时间：10月7日24:00。');
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p><strong>(一)网络投票规则</strong></p><p>1、投票时间:10月1日00:00点至10月7日24:00点。</p><p>2、投票方法:网友选中候选人,直接投票。</p><p>3、投票次数限制:每个用户全程限投10票，对同一候选人限投一票。</p><p>4、禁止刷票,发现后取消候选案名及报名者参赛资格。</p><p><strong>(二)参与投票方式</strong></p><p>本次比赛投票阶段只支持线上参与方式：用手机在微信公众号中搜索“****”，点击关注后在底部菜单中找到“时代楷模投票”链接，打开活动投票专用通道，进行投票。除此以上方式之外，其他任何方式的投票都不计入票数内。</p><p><strong>(三)活动郑重声明:</strong></p><p>本次投票将进行公平、公正、公开的评选流程，维护每位参赛者的权益，防止恶意刷票等有违公正的行为，一经发现，取消参赛资格。为规范网络与微信投票行为，预防恶意投票现象的产生，保障所有参选个人在公平公正的环境下接受社会投票。依据网络投票公平公正的原则，每个IP全程限投10票，若有以下几种情形我们均视为刷票：</p><p>1. 人工更换IP(如ADSL用户重启猫会获得一个新IP)，但此时并不能对同一作品再次投票，需要“人为”清空电脑中 的COOKIE进行投票。</p><p>2. 采用个人电脑中安装专用刷票软件，不停清空COOKIE和更换IP刷票。</p><p>3. 境内、外专业虚拟IP服务器代理刷票。</p><p>4. 黑客手段进行侵入，篡改数据。</p><p>5、若早上7:00--晚上23:00之间，半小时内票数增长超过4000票，将进行票数核对，如若发现刷票行为，直接取消参赛资格!</p><p>6、若晚间23:00--次日7:00之间，票数超3000票，将进行票数核对，如若发现刷票行为，直接取消参赛资格!</p><p>7、一天24小时之间(00:00--24:00)，票数增长超八千的，将进行票数核对，如若发现刷票行为，直接取消参赛资格!</p><p>8、在投票及名单公示期间，欢迎社会监督。</p><p> </p><p>本次大赛我们采用的是后置式审核，不管采用什么方式进行刷票，在数据审核时如发现异常数据，我们会通过分析软件结合人工排查，若确认为刷票，会清除刷票数据，情节严重者，将给予一定惩罚，以确保投票公平公证!</p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}邀请您为您心中的时代楷模投上一票！');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp81/cover.png");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp81/cover.png");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('教书育人楷模推选投票正在火热进行中，为您心中的时代楷模投上一票吧！');
    //添加选手属性
    $(".addfield").remove();
    $('#addattrfieldbtn').click();
    $('input[name="model[attr_register_field][0][Type]"]').val('number').select2();
    $('input[name="model[attr_register_field][0][Explain]"]').val('年龄');
    $('input[name="model[attr_register_field][0][Name]"]').val('age');
    $('input[name="model[attr_register_field][0][Tips]"]').val('请输入选手的年龄');
    $('#addattrfieldbtn').click();
    $('input[name="model[attr_register_field][1][Type]"]').val('text').select2();
    $('input[name="model[attr_register_field][1][Explain]"]').val('单位');
    $('input[name="model[attr_register_field][1][Name]"]').val('company');
    $('input[name="model[attr_register_field][1][Tips]"]').val('请输入选手工作单位');
	
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('北京市教育局');
    $('input[name="model[store_map_list][0][lng]').val('116.386649');
    $('input[name="model[store_map_list][0][lat]').val('39.906761');
    $('input[name="model[store_map_list][0][address]').val('北京市西城区前门西大街109号');
    $('input[name="model[store_map_list][0][tel]').val('010-66074354');
	//设置活动背景音乐
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice13.mp3');
	//设置分享海报
    var qr_url_ipt =$('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp81/qr.png");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp81/qr.png";
    img.next().css("left","125px").css("top","323px");
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('时代楷模——教书育人精神践行者 年度人物评选网络投票启动');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp81/cover.png");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp81/cover.png />");
    //设置活动公告
    $('textarea[name="model[notice]"]').val('教书育人楷模推选投票正在火热进行中，本次人物评选分为提名推荐、网络投票、综合评审、媒体公示等环节。每个用户全程限投10票，对同一候选人限投一票，投票截止时间：10月7日24:00。');
    //设置活动内容
    artEditor.clear();
    artEditor.append('<p><strong>(一)网络投票规则</strong></p><p>1、投票时间:10月1日00:00点至10月7日24:00点。</p><p>2、投票方法:网友选中候选人,直接投票。</p><p>3、投票次数限制:每个用户全程限投10票，对同一候选人限投一票。</p><p>4、禁止刷票,发现后取消候选案名及报名者参赛资格。</p><p><strong>(二)参与投票方式</strong></p><p>本次比赛投票阶段只支持线上参与方式：用手机在微信公众号中搜索“****”，点击关注后在底部菜单中找到“时代楷模投票”链接，打开活动投票专用通道，进行投票。除此以上方式之外，其他任何方式的投票都不计入票数内。</p><p><strong>(三)活动郑重声明:</strong></p><p>本次投票将进行公平、公正、公开的评选流程，维护每位参赛者的权益，防止恶意刷票等有违公正的行为，一经发现，取消参赛资格。为规范网络与微信投票行为，预防恶意投票现象的产生，保障所有参选个人在公平公正的环境下接受社会投票。依据网络投票公平公正的原则，每个IP全程限投10票，若有以下几种情形我们均视为刷票：</p><p>1. 人工更换IP(如ADSL用户重启猫会获得一个新IP)，但此时并不能对同一作品再次投票，需要“人为”清空电脑中 的COOKIE进行投票。</p><p>2. 采用个人电脑中安装专用刷票软件，不停清空COOKIE和更换IP刷票。</p><p>3. 境内、外专业虚拟IP服务器代理刷票。</p><p>4. 黑客手段进行侵入，篡改数据。</p><p>5、若早上7:00--晚上23:00之间，半小时内票数增长超过4000票，将进行票数核对，如若发现刷票行为，直接取消参赛资格!</p><p>6、若晚间23:00--次日7:00之间，票数超3000票，将进行票数核对，如若发现刷票行为，直接取消参赛资格!</p><p>7、一天24小时之间(00:00--24:00)，票数增长超八千的，将进行票数核对，如若发现刷票行为，直接取消参赛资格!</p><p>8、在投票及名单公示期间，欢迎社会监督。</p><p> </p><p>本次大赛我们采用的是后置式审核，不管采用什么方式进行刷票，在数据审核时如发现异常数据，我们会通过分析软件结合人工排查，若确认为刷票，会清除刷票数据，情节严重者，将给予一定惩罚，以确保投票公平公证!</p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}邀请您为您心中的时代楷模投上一票！');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp81/cover.png");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp81/cover.png />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('教书育人楷模推选投票正在火热进行中，为您心中的时代楷模投上一票吧！');
    //添加选手属性
    $(".addfield").remove();
    $('#addregfieldbtn').click();
    $('input[name="model[attr_register_field][0][Type]"]').val('number');
    $('input[name="model[attr_register_field][0][Explain]"]').val('年龄');
    $('input[name="model[attr_register_field][0][Name]"]').val('age');
    $('input[name="model[attr_register_field][0][Tips]"]').val('请输入选手的年龄');
    $('#addregfieldbtn').click();
    $('input[name="model[attr_register_field][1][Type]"]').val('text');
    $('input[name="model[attr_register_field][1][Explain]"]').val('单位');
    $('input[name="model[attr_register_field][1][Name]"]').val('company');
    $('input[name="model[attr_register_field][1][Tips]"]').val('请输入选手工作单位');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('北京市教育局');
    $('input[name="model[store_map_list][0][lng]').val('116.386649');
    $('input[name="model[store_map_list][0][lat]').val('39.906761');
    $('input[name="model[store_map_list][0][address]').val('北京市西城区前门西大街109号');
    $('input[name="model[store_map_list][0][tel]').val('010-66074354');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice13.mp3";
    $("#music-sel-ul li").each(function(){
        $(this).removeClass("act");
        if($(this).data('url') == audio_url){
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);

	//设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp81/qr.png");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp81/qr.png />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp81/qr.png");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}



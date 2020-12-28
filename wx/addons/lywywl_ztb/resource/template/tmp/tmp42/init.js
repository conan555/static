//模块所在路径
var module_url = window.sysinfo.module.url
//PC端初始化操作
function pc_init(){
	//设置活动名称
	$('input[name="model[title]"]').val('2020最美女神投票开始啦，快来为你心中的女神投票吧！');
	//设置活动封面图片
    var picurl_ipt =$('input[name="model[pic_url]"]');
    picurl_ipt.val(module_url + "resource/template/tmp/tmp42/cover.png");
    picurl_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp42/cover.png");
    //设置活动公告
    $('textarea[name="model[notice]"]').val('2019最美女神投票开始啦，每日选在您最心仪的女神为其投上宝贵的一票吧！');
	//设置活动内容
    var uecontent = UE.getEditor('model[content]');
    uecontent.ready(function() {//编辑器初始化完成再赋值
        uecontent.setContent('<p>活动规则：<br/></p><p>1.点击“我要报名”上传参赛作品，并附上“简介”上传到活动页面即可参与本次活动；</p><p>2.参赛者，报名时请提交真实姓名和电话作为后期领奖凭证；</p><p>3.参赛者上传信息，严禁盗用他人作品等信息；禁止参赛作品出现任何非法内容、言论不当行为；</p><p>4.严禁任何作弊行为，系统发现会自动对票数清空；</p><p>5.以上行为一经发现，主办方有权删除视频作品并取消参赛资格；</p><p>6.投票活动结束后，根据投票结果选出一、二、三等奖。</p><p><br/></p><p>活动奖品：</p><p>一等奖第1-3名：799元动感单车一辆</p><p>二等奖第4-10名：399元小米旅行箱24寸一只</p><p>三等奖第11-20名：199元荣耀手环5一只</p><p>凡是参与活动的选手即可免费领取价值59元的保温水杯一个，本活动主办方为****网络技术有限公司，最终解释权归商家所有。</p><p><br/></p><p>机构介绍：</p><p>公司是新锐网络技术创享服务商，是轻创业者的首选服务平台。曾向10000+企事业单位提供专属互联网服务。</p><p>公司秉持“差异化、精准度”原则，坚持客户需求至上，始终精进、不断突破，以产品有特色、服务有追溯的经营理念，助力传统 企业更好应用互联网工具，实现数字化转型，达致管理至简及高效。自创始至今，公司恪守专一业务导向，努力将一件事做到极致。<br/></p><p>    这也是我们存在的“维奕”价值，在未来之路上公司固守此信念不改，与众多创业者共建共享互联网技术新蓝海！<br/></p><p>    <br/></p>');
    });
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}邀请您为您心中最美女神投票！');
	//设置活动分享图标
    var share_thumb_ipt =$('input[name="model[share_thumb]"]');
    share_thumb_ipt.val(module_url + "resource/template/tmp/tmp42/cover.png");
    share_thumb_ipt.parent().next().children().first().attr("src", module_url + "resource/template/tmp/tmp42/cover.png");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('2019最美女神投票开始啦，每日选在您最心仪的女神为其投上宝贵的一票吧！');
    //添加选手属性
    $(".addfield").remove();
    $('#addattrfieldbtn').click();
    $('input[name="model[attr_register_field][0][Type]"]').val('text').select2();
    $('input[name="model[attr_register_field][0][Explain]"]').val('身高');
    $('input[name="model[attr_register_field][0][Name]"]').val('heights');
    $('input[name="model[attr_register_field][0][Tips]"]').val('请输入选手的身高 单位：CM');
    $('#addattrfieldbtn').click();
    $('input[name="model[attr_register_field][1][Type]"]').val('text').select2();
    $('input[name="model[attr_register_field][1][Explain]"]').val('体重');
    $('input[name="model[attr_register_field][1][Name]"]').val('weights');
    $('input[name="model[attr_register_field][1][Tips]"]').val('请输入选手的体重 单位：公斤');
    $('#addattrfieldbtn').click();
    $('input[name="model[attr_register_field][2][Type]"]').val('text').select2();
    $('input[name="model[attr_register_field][2][Explain]"]').val('星座');
    $('input[name="model[attr_register_field][2][Name]"]').val('constellation');
    $('input[name="model[attr_register_field][2][Tips]"]').val('请输入选手星座信息 例如：双鱼座');
    $('#addattrfieldbtn').click();
    $('input[name="model[attr_register_field][3][Type]"]').val('text').select2();
    $('input[name="model[attr_register_field][3][Explain]"]').val('生日');
    $('input[name="model[attr_register_field][3][Name]"]').val('birthday');
    $('input[name="model[attr_register_field][3][Tips]"]').val('请输入选手生日信息 例如：1991年8月22日');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    $('input[name="model[audio_url]"]').val(module_url + 'resource/template/audio/voice9.mp3');
	//设置分享海报
    var qr_url_ipt =$('input[name="model[qr_url]"]');
    qr_url_ipt.val(module_url + "resource/template/tmp/tmp42/qr.png");
    var img = $("#qr_bg");
    if(!img.attr('src')){
        $('#qrimg').click();
    }
    img.get(0).src = module_url + "resource/template/tmp/tmp42/qr.png";
    img.next().css("left","125px").css("top","323px");
}

//手机端初始化操作
function mobile_init(){
	//设置活动名称
    $('input[name="model[title]"]').val('2020最美女神投票开始啦，快来为你心中的女神投票吧！');
	//设置活动封面图片
    $("#pic_url").attr("value", module_url + "resource/template/tmp/tmp42/cover.png");
    $(".js-image-pic_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-pic_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp42/cover.png />");
    //设置活动公告
    $('textarea[name="model[notice]"]').val('2019最美女神投票开始啦，每日选在您最心仪的女神为其投上宝贵的一票吧！');
    //设置活动内容
    artEditor.clear();
    artEditor.append('<p>活动规则：<br/></p><p>1.点击“我要报名”上传参赛作品，并附上“简介”上传到活动页面即可参与本次活动；</p><p>2.参赛者，报名时请提交真实姓名和电话作为后期领奖凭证；</p><p>3.参赛者上传信息，严禁盗用他人作品等信息；禁止参赛作品出现任何非法内容、言论不当行为；</p><p>4.严禁任何作弊行为，系统发现会自动对票数清空；</p><p>5.以上行为一经发现，主办方有权删除视频作品并取消参赛资格；</p><p>6.投票活动结束后，根据投票结果选出一、二、三等奖。</p><p><br/></p><p>活动奖品：</p><p>一等奖第1-3名：799元动感单车一辆</p><p>二等奖第4-10名：399元小米旅行箱24寸一只</p><p>三等奖第11-20名：199元荣耀手环5一只</p><p>凡是参与活动的选手即可免费领取价值59元的保温水杯一个，本活动主办方为****网络技术有限公司，最终解释权归商家所有。</p><p><br/></p><p>机构介绍：</p><p>公司是新锐网络技术创享服务商，是轻创业者的首选服务平台。曾向10000+企事业单位提供专属互联网服务。</p><p>公司秉持“差异化、精准度”原则，坚持客户需求至上，始终精进、不断突破，以产品有特色、服务有追溯的经营理念，助力传统 企业更好应用互联网工具，实现数字化转型，达致管理至简及高效。自创始至今，公司恪守专一业务导向，努力将一件事做到极致。<br/></p><p>    这也是我们存在的“维奕”价值，在未来之路上公司固守此信念不改，与众多创业者共建共享互联网技术新蓝海！<br/></p><p>    <br/></p>');
	//设置活动分享标题
    $('input[name="model[share_title]"]').val('{NICKNAME}邀请您为您心中最美女神投票！');
	//设置活动分享图标
    $("#share_thumb").attr("value", module_url + "resource/template/tmp/tmp42/cover.png");
    $(".js-image-share_thumb").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-share_thumb").next("div").html("<img src="+module_url+"resource/template/tmp/tmp42/cover.png />");
	//设置活动分享描述
    $('textarea[name="model[share_desc]"]').val('2019最美女神投票开始啦，每日选在您最心仪的女神为其投上宝贵的一票吧！');
    //添加选手属性
    $(".addfield").remove();
    $('#addregfieldbtn').click();
    $('input[name="model[attr_register_field][0][Type]"]').val('text');
    $('input[name="model[attr_register_field][0][Explain]"]').val('身高');
    $('input[name="model[attr_register_field][0][Name]"]').val('heights');
    $('input[name="model[attr_register_field][0][Tips]"]').val('请输入选手的身高 单位：CM');
    $('#addregfieldbtn').click();
    $('input[name="model[attr_register_field][1][Type]"]').val('text');
    $('input[name="model[attr_register_field][1][Explain]"]').val('体重');
    $('input[name="model[attr_register_field][1][Name]"]').val('weights');
    $('input[name="model[attr_register_field][1][Tips]"]').val('请输入选手的体重 单位：公斤');
    $('#addregfieldbtn').click();
    $('input[name="model[attr_register_field][2][Type]"]').val('text');
    $('input[name="model[attr_register_field][2][Explain]"]').val('星座');
    $('input[name="model[attr_register_field][2][Name]"]').val('constellation');
    $('input[name="model[attr_register_field][2][Tips]"]').val('请输入选手星座信息 例如：双鱼座');
    $('#addregfieldbtn').click();
    $('input[name="model[attr_register_field][3][Type]"]').val('text');
    $('input[name="model[attr_register_field][3][Explain]"]').val('生日');
    $('input[name="model[attr_register_field][3][Name]"]').val('birthday');
    $('input[name="model[attr_register_field][3][Tips]"]').val('请输入选手生日信息 例如：1991年8月22日');
	//设置活动门店地址
    $('input[name="model[store_map_list][0][name]').val('王府井');
    $('input[name="model[store_map_list][0][lng]').val('116.418038');
    $('input[name="model[store_map_list][0][lat]').val('39.91979');
    $('input[name="model[store_map_list][0][address]').val('北京市东城区东长安街北侧');
    $('input[name="model[store_map_list][0][tel]').val('62311889');
	//设置活动背景音乐
    var audio_url = module_url + "resource/template/audio/voice9.mp3";
    $("#music-sel-ul li").each(function(){
        $(this).removeClass("act");
        if($(this).data('url') == audio_url){
            $(this).addClass('act');
        }
    });
    $('input[name="model[audio_url]"]').val(audio_url);

	//设置分享海报
    $("#qr_url").attr("value", module_url + "resource/template/tmp/tmp42/qr.png");
    $(".js-image-qr_url").css({"position":"absolute" ,"opacity":"0"});
    $(".js-image-qr_url").next("div").html("<img src="+module_url+"resource/template/tmp/tmp42/qr.png />");
    $("#qr_bg,#qr_bg_edit").attr("src", module_url + "resource/template/tmp/tmp42/qr.png");
	
    //初始化二维码
    mrqrclick();
    layer.open({
        content: '初始化数据完成！'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
}



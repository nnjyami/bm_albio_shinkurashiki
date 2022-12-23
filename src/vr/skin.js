// Garden Gnome Software - Skin
// Pano2VR 6.1.15/18116
// Filename: hashimoto.ggsk
// Generated 2022-11-22T19:31:05

function pano2vrSkin(player,base) {
	player.addVariable('opt_hotspot_preview', 2, true);
	player.addVariable('opt_zoom', 2, true);
	player.addVariable('opt_autorotate', 2, true);
	player.addVariable('opt_info', 2, false);
	player.addVariable('opt_thumbnail', 2, false);
	player.addVariable('vis_thumbnail_menu_show', 2, false);
	player.addVariable('opt_thumbnail_tooltip', 2, true);
	player.addVariable('opt_projection', 2, true);
	player.addVariable('opt_gyro', 2, true);
	player.addVariable('opt_fullscreen', 2, true);
	player.addVariable('opt_loader', 2, true);
	player.addVariable('opt_loader_mulires', 2, true);
	player.addVariable('opt_url', 2, false);
	player.addVariable('opt_autohide', 2, false);
	player.addVariable('vis_userdata', 2, false);
	player.addVariable('vis_close_buton', 2, false);
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('vis_video_popup_file', 2, false);
	player.addVariable('vis_video_popup_url', 2, false);
	player.addVariable('vis_video_popup_vimeo', 2, false);
	player.addVariable('vis_video_popup_youtube', 2, false);
	player.addVariable('vis_website', 2, false);
	player.addVariable('vis_thumbnail_menu_mobile', 2, false);
	player.addVariable('vis_thumbnail_menu_auto_hide', 2, true);
	player.addVariable('vis_360image_once', 2, true);
	player.addVariable('vis_loader', 2, true);
	player.addVariable('vis_timer', 2, false);
	player.addVariable('pos_zoom_in', 1, 0);
	player.addVariable('pos_zoom_out', 1, 0);
	player.addVariable('pos_autorotate', 1, 0);
	player.addVariable('pos_information', 1, 0);
	player.addVariable('pos_thumbnail', 1, 0);
	player.addVariable('pos_projection', 1, 0);
	player.addVariable('pos_gyro', 1, 0);
	player.addVariable('pos_fullscreen', 1, 0);
	player.addVariable('pos_controller', 1, 0);
	player.addVariable('pos_360image', 1, 0);
	player.addVariable('pos_enter_vr', 1, 0);
	player.addVariable('ht_ani', 2, false);
	player.addVariable('opt_3d_preview', 2, true);
	player.addVariable('open_tag', 0, "");
	player.addVariable('close_nodes', 2, false);
	player.addVariable('category_visible', 2, true);
	player.addVariable('category_follow', 2, true);
	player.addVariable('open_tag_1', 0, "");
	player.addVariable('close_nodes_1', 2, false);
	player.addVariable('category_visible_1', 2, true);
	player.addVariable('category_follow_1', 2, true);
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_thumbnail_menu', 2, false);
	player.addVariable('opt_thumbnail_menu_tooltip_1', 2, true);
	player.addVariable('vis_thumbnail_menu_1', 2, false);
	player.addVariable('UA_ID', 0, "UA-192436102-2");
	player.addVariable('UA_category', 0, "virtual tour");
	player.addVariable('top_image', 2, true);
	player.addVariable('top_image_visible', 2, true);
	player.addVariable('hotspot', 2, true);
	player.addVariable('top_image2', 2, true);
	player.addVariable('top_image_visible2', 2, true);
	player.addVariable('map_mobile', 2, false);
	player.addVariable('map_pc', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/close__o.png';
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._close=document.createElement('div');
		els=me._close__img=document.createElement('img');
		els.className='ggskin ggskin_close';
		hs=basePath + 'images/close.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/close__o.png';
		me._close__img.ggOverSrc=hs;
		el.ggId="close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 200px;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._close.style[domTransition]='';
				if (me._close.ggCurrentLogicStateVisible == 0) {
					me._close.style.visibility=(Number(me._close.style.opacity)>0||!me._close.style.opacity)?'inherit':'hidden';
					me._close.ggVisible=true;
				}
				else {
					me._close.style.visibility="hidden";
					me._close.ggVisible=false;
				}
			}
		}
		me._close.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_video_popup_file', false);
			player.setVariableValue('vis_video_popup_url', false);
			player.setVariableValue('vis_video_popup_vimeo', false);
			player.setVariableValue('vis_video_popup_youtube', false);
			if (
				(
					((player.getVariableValue('vis_website') == true)) && 
					((player.getVariableValue('opt_url') == true))
				)
			) {
			}
			player.setVariableValue('vis_website', false);
		}
		me._close.onmouseover=function (e) {
			me._close__img.src=me._close__img.ggOverSrc;
		}
		me._close.onmouseout=function (e) {
			me._close__img.src=me._close__img.ggNormalSrc;
		}
		me._close.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._close);
		this.preloadImages();
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_image_changenode = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_image2 && hotspotTemplates['ht_image'][i]._ht_image_image2.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_image2.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_configloaded = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_scaling) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_mouseover = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_hastouch = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image_image2 && hotspotTemplates['ht_image'][i]._ht_image_image2.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_image2.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_white_changenode = function(){
		if(hotspotTemplates['ht_node_white']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_white'].length; i++) {
				if (hotspotTemplates['ht_node_white'][i]._rectangle_20 && hotspotTemplates['ht_node_white'][i]._rectangle_20.logicBlock_scaling) {
					hotspotTemplates['ht_node_white'][i]._rectangle_20.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node_white'][i]._rectangle_20 && hotspotTemplates['ht_node_white'][i]._rectangle_20.logicBlock_alpha) {
					hotspotTemplates['ht_node_white'][i]._rectangle_20.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_white_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_node_white']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_white'].length; i++) {
				if (hotspotTemplates['ht_node_white'][i]._rectangle_20 && hotspotTemplates['ht_node_white'][i]._rectangle_20.logicBlock_scaling) {
					hotspotTemplates['ht_node_white'][i]._rectangle_20.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node_white'][i]._rectangle_20 && hotspotTemplates['ht_node_white'][i]._rectangle_20.logicBlock_alpha) {
					hotspotTemplates['ht_node_white'][i]._rectangle_20.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_changenode = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_alpha) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_image_image1 && hotspotTemplates['ht_info'][i]._ht_image_image1.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_image_image1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_image_image1 && hotspotTemplates['ht_info'][i]._ht_image_image1.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_image_image1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_alpha) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_changenode = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_alpha) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_url'][i]._ht_image_image0 && hotspotTemplates['ht_url'][i]._ht_image_image0.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_image_image0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._tt_ht_url0 && hotspotTemplates['ht_url'][i]._tt_ht_url0.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_customimage0 && hotspotTemplates['ht_url'][i]._ht_url_customimage0.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_customimage0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_configloaded = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._tt_ht_url0 && hotspotTemplates['ht_url'][i]._tt_ht_url0.logicBlock_position) {
					hotspotTemplates['ht_url'][i]._tt_ht_url0.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mouseover = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._tt_ht_url0 && hotspotTemplates['ht_url'][i]._tt_ht_url0.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_hastouch = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._tt_ht_url0 && hotspotTemplates['ht_url'][i]._tt_ht_url0.logicBlock_position) {
					hotspotTemplates['ht_url'][i]._tt_ht_url0.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_activehotspotchanged = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_image_image0 && hotspotTemplates['ht_url'][i]._ht_image_image0.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_image_image0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._tt_ht_url0 && hotspotTemplates['ht_url'][i]._tt_ht_url0.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_customimage0 && hotspotTemplates['ht_url'][i]._ht_url_customimage0.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_customimage0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_alpha) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mui_changenode = function(){
		if(hotspotTemplates['ht_url_mui']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_mui'].length; i++) {
				if (hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible) {
					hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_alpha) {
					hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_url_mui'][i]._ht_image_image && hotspotTemplates['ht_url_mui'][i]._ht_image_image.logicBlock_visible) {
					hotspotTemplates['ht_url_mui'][i]._ht_image_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url_mui'][i]._ht_image_image && hotspotTemplates['ht_url_mui'][i]._ht_image_image.logicBlock_alpha) {
					hotspotTemplates['ht_url_mui'][i]._ht_image_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_url_mui'][i]._tt_ht_url && hotspotTemplates['ht_url_mui'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url_mui'][i]._tt_ht_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url_mui'][i]._ht_url_customimage && hotspotTemplates['ht_url_mui'][i]._ht_url_customimage.logicBlock_visible) {
					hotspotTemplates['ht_url_mui'][i]._ht_url_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mui_configloaded = function(){
		if(hotspotTemplates['ht_url_mui']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_mui'].length; i++) {
				if (hotspotTemplates['ht_url_mui'][i]._tt_ht_url && hotspotTemplates['ht_url_mui'][i]._tt_ht_url.logicBlock_position) {
					hotspotTemplates['ht_url_mui'][i]._tt_ht_url.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mui_mouseover = function(){
		if(hotspotTemplates['ht_url_mui']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_mui'].length; i++) {
				if (hotspotTemplates['ht_url_mui'][i]._tt_ht_url && hotspotTemplates['ht_url_mui'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url_mui'][i]._tt_ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mui_hastouch = function(){
		if(hotspotTemplates['ht_url_mui']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_mui'].length; i++) {
				if (hotspotTemplates['ht_url_mui'][i]._tt_ht_url && hotspotTemplates['ht_url_mui'][i]._tt_ht_url.logicBlock_position) {
					hotspotTemplates['ht_url_mui'][i]._tt_ht_url.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mui_activehotspotchanged = function(){
		if(hotspotTemplates['ht_url_mui']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_mui'].length; i++) {
				if (hotspotTemplates['ht_url_mui'][i]._ht_image_image && hotspotTemplates['ht_url_mui'][i]._ht_image_image.logicBlock_visible) {
					hotspotTemplates['ht_url_mui'][i]._ht_image_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url_mui'][i]._tt_ht_url && hotspotTemplates['ht_url_mui'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url_mui'][i]._tt_ht_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url_mui'][i]._ht_url_customimage && hotspotTemplates['ht_url_mui'][i]._ht_url_customimage.logicBlock_visible) {
					hotspotTemplates['ht_url_mui'][i]._ht_url_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_url_mui']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_mui'].length; i++) {
				if (hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible) {
					hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_url_mui']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_mui'].length; i++) {
				if (hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible) {
					hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_url_mui']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_mui'].length; i++) {
				if (hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible) {
					hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_url_mui']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_mui'].length; i++) {
				if (hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible) {
					hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_url_mui']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_mui'].length; i++) {
				if (hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible) {
					hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_url_mui']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_mui'].length; i++) {
				if (hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible) {
					hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_url_mui']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_mui'].length; i++) {
				if (hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible) {
					hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_url_mui']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_mui'].length; i++) {
				if (hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible) {
					hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_url_mui']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_mui'].length; i++) {
				if (hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_alpha) {
					hotspotTemplates['ht_url_mui'][i]._ht_url_mui.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_url_mui']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_mui'].length; i++) {
				if (hotspotTemplates['ht_url_mui'][i]._ht_image_image && hotspotTemplates['ht_url_mui'][i]._ht_image_image.logicBlock_alpha) {
					hotspotTemplates['ht_url_mui'][i]._ht_image_image.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node3_changenode = function(){
		if(hotspotTemplates['ht_node3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node3'].length; i++) {
				if (hotspotTemplates['ht_node3'][i]._rectangle_2 && hotspotTemplates['ht_node3'][i]._rectangle_2.logicBlock_scaling) {
					hotspotTemplates['ht_node3'][i]._rectangle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node3'][i]._rectangle_2 && hotspotTemplates['ht_node3'][i]._rectangle_2.logicBlock_alpha) {
					hotspotTemplates['ht_node3'][i]._rectangle_2.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node3_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_node3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node3'].length; i++) {
				if (hotspotTemplates['ht_node3'][i]._rectangle_2 && hotspotTemplates['ht_node3'][i]._rectangle_2.logicBlock_scaling) {
					hotspotTemplates['ht_node3'][i]._rectangle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node3'][i]._rectangle_2 && hotspotTemplates['ht_node3'][i]._rectangle_2.logicBlock_alpha) {
					hotspotTemplates['ht_node3'][i]._rectangle_2.logicBlock_alpha();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
				else {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
			}
		}
		me._ht_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateAlpha == 0) {
					me._ht_image.style.visibility=me._ht_image.ggVisible?'inherit':'hidden';
					me._ht_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image.style.opacity == 0.0) { me._ht_image.style.visibility="hidden"; } }, 505);
					me._ht_image.style.opacity=0;
				}
			}
		}
		me._ht_image.onclick=function (e) {
			player.setVariableValue('vis_image_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._tt_ht_image.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ontouchend=function (e) {
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_image2=document.createElement('div');
		els=me._ht_image_image2__img=document.createElement('img');
		els.className='ggskin ggskin_ht_image_image2';
		hs=basePath + 'images/ht_image_image2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._ht_image_image2__img.ggOverSrc=hs;
		el.ggId="ht_image_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_image2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_image2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_image2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_image2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_image2.style[domTransition]='';
				if (me._ht_image_image2.ggCurrentLogicStateVisible == 0) {
					me._ht_image_image2.style.visibility="hidden";
					me._ht_image_image2.ggVisible=false;
				}
				else {
					me._ht_image_image2.style.visibility=(Number(me._ht_image_image2.style.opacity)>0||!me._ht_image_image2.style.opacity)?'inherit':'hidden';
					me._ht_image_image2.ggVisible=true;
				}
			}
		}
		me._ht_image_image2.onmouseover=function (e) {
			me._ht_image_image2__img.src=me._ht_image_image2__img.ggOverSrc;
		}
		me._ht_image_image2.onmouseout=function (e) {
			me._ht_image_image2__img.src=me._ht_image_image2__img.ggNormalSrc;
		}
		me._ht_image_image2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image.appendChild(me._ht_image_image2);
		el=me._tt_ht_image=document.createElement('div');
		els=me._tt_ht_image__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_image.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_image.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_image.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_image.style.top='-47px';
					me._tt_ht_image.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_image.ggDx=0;
					me._tt_ht_image.style.top='24px';
					me._tt_ht_image.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_image.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_image.style.visibility=(Number(me._tt_ht_image.style.opacity)>0||!me._tt_ht_image.style.opacity)?'inherit':'hidden';
					me._tt_ht_image.ggVisible=true;
				}
				else {
					me._tt_ht_image.style.visibility="hidden";
					me._tt_ht_image.ggVisible=false;
				}
			}
		}
		me._tt_ht_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_image.appendChild(me._tt_ht_image);
		el=me._ht_image_customimage=document.createElement('div');
		els=me._ht_image_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_image_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_customimage.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_website') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_userdata') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_image_customimage.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_image_customimage.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_image_customimage.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._ht_image_customimage.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -100;
					me._ht_image_customimage.ggUpdatePosition(true);
				}
				else {
					me._ht_image_customimage.ggDx=0;
					me._ht_image_customimage.ggDy=0;
					me._ht_image_customimage.ggUpdatePosition(true);
				}
			}
		}
		me._ht_image_customimage.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_customimage.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_customimage.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_customimage.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._ht_image_customimage.ggCurrentLogicStateScaling == 0) {
					me._ht_image_customimage.ggParameter.sx = 1;
					me._ht_image_customimage.ggParameter.sy = 1;
					me._ht_image_customimage.style[domTransform]=parameterToTransform(me._ht_image_customimage.ggParameter);
				}
				else {
					me._ht_image_customimage.ggParameter.sx = 1;
					me._ht_image_customimage.ggParameter.sy = 1;
					me._ht_image_customimage.style[domTransform]=parameterToTransform(me._ht_image_customimage.ggParameter);
				}
			}
		}
		me._ht_image_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_customimage.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._ht_image_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_image_customimage.style.visibility="hidden";
					me._ht_image_customimage__img.src = '';
					me._ht_image_customimage.ggVisible=false;
				}
				else {
					me._ht_image_customimage.style.visibility=(Number(me._ht_image_customimage.style.opacity)>0||!me._ht_image_customimage.style.opacity)?'inherit':'hidden';
					me._ht_image_customimage.ggSubElement.src=me._ht_image_customimage.ggText;
					me._ht_image_customimage.ggVisible=true;
				}
			}
		}
		me._ht_image_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_image_customimage.clientWidth;
			var parentHeight = me._ht_image_customimage.clientHeight;
			var img = me._ht_image_customimage__img;
			var aspectRatioDiv = me._ht_image_customimage.clientWidth / me._ht_image_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_image.appendChild(me._ht_image_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_node_white(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_white=document.createElement('div');
		el.ggId="ht_node_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 201px;';
		hs+='position : absolute;';
		hs+='top : 365px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_white.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_white.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			if (
				(
					((player.getViewerSize().width <= 600))
				)
			) {
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_white.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_white.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_white.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_white.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_20=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_20.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_20.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_20.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_20.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_20.ggCurrentLogicStateScaling == 0) {
					me._rectangle_20.ggParameter.sx = 0.5;
					me._rectangle_20.ggParameter.sy = 0.5;
					me._rectangle_20.style[domTransform]=parameterToTransform(me._rectangle_20.ggParameter);
				}
				else {
					me._rectangle_20.ggParameter.sx = 1;
					me._rectangle_20.ggParameter.sy = 1;
					me._rectangle_20.style[domTransform]=parameterToTransform(me._rectangle_20.ggParameter);
				}
			}
		}
		me._rectangle_20.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_20.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_20.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_20.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_20.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_20.style.visibility=me._rectangle_20.ggVisible?'inherit':'hidden';
					me._rectangle_20.style.opacity=1;
				}
				else {
					me._rectangle_20.style.visibility=me._rectangle_20.ggVisible?'inherit':'hidden';
					me._rectangle_20.style.opacity=0.5;
				}
			}
		}
		me._rectangle_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node_white.appendChild(me._rectangle_20);
		me.__div = me._ht_node_white;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
				else {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
			}
		}
		me._ht_info.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_info.ggCurrentLogicStateAlpha == 0) {
					me._ht_info.style.visibility=me._ht_info.ggVisible?'inherit':'hidden';
					me._ht_info.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info.style.opacity == 0.0) { me._ht_info.style.visibility="hidden"; } }, 505);
					me._ht_info.style.opacity=0;
				}
			}
		}
		me._ht_info.onclick=function (e) {
			player.openNext(me.hotspot.url,"$(cur)");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_image1=document.createElement('div');
		els=me._ht_image_image1__img=document.createElement('img');
		els.className='ggskin ggskin_ht_image_image1';
		hs=basePath + 'images/ht_image_image1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._ht_image_image1__img.ggOverSrc=hs;
		el.ggId="ht_image_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_image1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_image1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_image1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_image1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_image1.style[domTransition]='';
				if (me._ht_image_image1.ggCurrentLogicStateVisible == 0) {
					me._ht_image_image1.style.visibility="hidden";
					me._ht_image_image1.ggVisible=false;
				}
				else {
					me._ht_image_image1.style.visibility=(Number(me._ht_image_image1.style.opacity)>0||!me._ht_image_image1.style.opacity)?'inherit':'hidden';
					me._ht_image_image1.ggVisible=true;
				}
			}
		}
		me._ht_image_image1.onmouseover=function (e) {
			me._ht_image_image1__img.src=me._ht_image_image1__img.ggOverSrc;
		}
		me._ht_image_image1.onmouseout=function (e) {
			me._ht_image_image1__img.src=me._ht_image_image1__img.ggNormalSrc;
		}
		me._ht_image_image1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info.appendChild(me._ht_image_image1);
		me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
				else {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
			}
		}
		me._ht_url.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_url.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_url.ggCurrentLogicStateAlpha == 0) {
					me._ht_url.style.visibility=me._ht_url.ggVisible?'inherit':'hidden';
					me._ht_url.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_url.style.opacity == 0.0) { me._ht_url.style.visibility="hidden"; } }, 505);
					me._ht_url.style.opacity=0;
				}
			}
		}
		me._ht_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
			}
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				player.setVariableValue('vis_website', true);
			}
			if (
				(
					((player.getVariableValue('opt_url') == false)) || 
					((player.getHasTouch() == true))
				)
			) {
				player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._tt_ht_url0.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url0.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ontouchend=function (e) {
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url0.logicBlock_visible();
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_image0=document.createElement('div');
		els=me._ht_image_image0__img=document.createElement('img');
		els.className='ggskin ggskin_ht_image_image0';
		hs=basePath + 'images/ht_image_image0.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._ht_image_image0__img.ggOverSrc=hs;
		el.ggId="ht_image_image";
		el.ggDx=750;
		el.ggDy=450;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_image0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_image0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_image0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_image0.style[domTransition]='';
				if (me._ht_image_image0.ggCurrentLogicStateVisible == 0) {
					me._ht_image_image0.style.visibility="hidden";
					me._ht_image_image0.ggVisible=false;
				}
				else {
					me._ht_image_image0.style.visibility=(Number(me._ht_image_image0.style.opacity)>0||!me._ht_image_image0.style.opacity)?'inherit':'hidden';
					me._ht_image_image0.ggVisible=true;
				}
			}
		}
		me._ht_image_image0.onmouseover=function (e) {
			me._ht_image_image0__img.src=me._ht_image_image0__img.ggOverSrc;
		}
		me._ht_image_image0.onmouseout=function (e) {
			me._ht_image_image0__img.src=me._ht_image_image0__img.ggNormalSrc;
		}
		me._ht_image_image0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_url.appendChild(me._ht_image_image0);
		el=me._tt_ht_url0=document.createElement('div');
		els=me._tt_ht_url0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_url0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_url0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_url0.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url0.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_url0.style.top='-47px';
					me._tt_ht_url0.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_url0.ggDx=0;
					me._tt_ht_url0.style.top='24px';
					me._tt_ht_url0.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_url0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url0.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url0.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url0.style.visibility=(Number(me._tt_ht_url0.style.opacity)>0||!me._tt_ht_url0.style.opacity)?'inherit':'hidden';
					me._tt_ht_url0.ggVisible=true;
				}
				else {
					me._tt_ht_url0.style.visibility="hidden";
					me._tt_ht_url0.ggVisible=false;
				}
			}
		}
		me._tt_ht_url0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_url.appendChild(me._tt_ht_url0);
		el=me._ht_url_customimage0=document.createElement('div');
		els=me._ht_url_customimage0__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_url_customimage0.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_customimage0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_customimage0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_customimage0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_customimage0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_customimage0.style[domTransition]='';
				if (me._ht_url_customimage0.ggCurrentLogicStateVisible == 0) {
					me._ht_url_customimage0.style.visibility="hidden";
					me._ht_url_customimage0__img.src = '';
					me._ht_url_customimage0.ggVisible=false;
				}
				else {
					me._ht_url_customimage0.style.visibility=(Number(me._ht_url_customimage0.style.opacity)>0||!me._ht_url_customimage0.style.opacity)?'inherit':'hidden';
					me._ht_url_customimage0.ggSubElement.src=me._ht_url_customimage0.ggText;
					me._ht_url_customimage0.ggVisible=true;
				}
			}
		}
		me._ht_url_customimage0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_url_customimage0.clientWidth;
			var parentHeight = me._ht_url_customimage0.clientHeight;
			var img = me._ht_url_customimage0__img;
			var aspectRatioDiv = me._ht_url_customimage0.clientWidth / me._ht_url_customimage0.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_url.appendChild(me._ht_url_customimage0);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_url_mui(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url_mui=document.createElement('div');
		el.ggId="ht_url_mui";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_mui.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url_mui.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_mui.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_mui.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_mui.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_url_mui.ggCurrentLogicStateVisible == 0) {
					me._ht_url_mui.style.visibility="hidden";
					me._ht_url_mui.ggVisible=false;
				}
				else {
					me._ht_url_mui.style.visibility=(Number(me._ht_url_mui.style.opacity)>0||!me._ht_url_mui.style.opacity)?'inherit':'hidden';
					me._ht_url_mui.ggVisible=true;
				}
			}
		}
		me._ht_url_mui.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url_mui.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url_mui.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_url_mui.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_url_mui.ggCurrentLogicStateAlpha == 0) {
					me._ht_url_mui.style.visibility=me._ht_url_mui.ggVisible?'inherit':'hidden';
					me._ht_url_mui.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_url_mui.style.opacity == 0.0) { me._ht_url_mui.style.visibility="hidden"; } }, 505);
					me._ht_url_mui.style.opacity=0;
				}
			}
		}
		me._ht_url_mui.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
			}
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				player.setVariableValue('vis_website', true);
			}
			if (
				(
					((player.getVariableValue('opt_url') == false)) || 
					((player.getHasTouch() == true))
				)
			) {
				player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url_mui.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url_mui.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url_mui']=true;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url_mui.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url_mui']=false;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url_mui.ontouchend=function (e) {
			me.elementMouseOver['ht_url_mui']=false;
			me._tt_ht_url.logicBlock_visible();
		}
		me._ht_url_mui.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_image=document.createElement('div');
		els=me._ht_image_image__img=document.createElement('img');
		els.className='ggskin ggskin_ht_image_image';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_image.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._ht_image_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image_image.style.visibility="hidden";
					me._ht_image_image.ggVisible=false;
				}
				else {
					me._ht_image_image.style.visibility=(Number(me._ht_image_image.style.opacity)>0||!me._ht_image_image.style.opacity)?'inherit':'hidden';
					me._ht_image_image.ggVisible=true;
				}
			}
		}
		me._ht_image_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_image.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._ht_image_image.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_image.style.visibility=me._ht_image_image.ggVisible?'inherit':'hidden';
					me._ht_image_image.style.opacity=0.2;
				}
				else {
					me._ht_image_image.style.visibility=me._ht_image_image.ggVisible?'inherit':'hidden';
					me._ht_image_image.style.opacity=1;
				}
			}
		}
		me._ht_image_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_url_mui.appendChild(me._ht_image_image);
		el=me._tt_ht_url=document.createElement('div');
		els=me._tt_ht_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_url.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_url.style.top='-47px';
					me._tt_ht_url.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_url.ggDx=0;
					me._tt_ht_url.style.top='24px';
					me._tt_ht_url.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url_mui'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url.style.visibility=(Number(me._tt_ht_url.style.opacity)>0||!me._tt_ht_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_url.ggVisible=true;
				}
				else {
					me._tt_ht_url.style.visibility="hidden";
					me._tt_ht_url.ggVisible=false;
				}
			}
		}
		me._tt_ht_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_url_mui.appendChild(me._tt_ht_url);
		el=me._ht_url_customimage=document.createElement('div');
		els=me._ht_url_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_url_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_customimage.style[domTransition]='';
				if (me._ht_url_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_url_customimage.style.visibility="hidden";
					me._ht_url_customimage__img.src = '';
					me._ht_url_customimage.ggVisible=false;
				}
				else {
					me._ht_url_customimage.style.visibility=(Number(me._ht_url_customimage.style.opacity)>0||!me._ht_url_customimage.style.opacity)?'inherit':'hidden';
					me._ht_url_customimage.ggSubElement.src=me._ht_url_customimage.ggText;
					me._ht_url_customimage.ggVisible=true;
				}
			}
		}
		me._ht_url_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_url_customimage.clientWidth;
			var parentHeight = me._ht_url_customimage.clientHeight;
			var img = me._ht_url_customimage__img;
			var aspectRatioDiv = me._ht_url_customimage.clientWidth / me._ht_url_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_url_mui.appendChild(me._ht_url_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_url_mui;
	};
	function SkinHotspotClass_ht_node3(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node3=document.createElement('div');
		el.ggId="ht_node3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 201px;';
		hs+='position : absolute;';
		hs+='top : 365px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node3.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			if (
				(
					((player.getViewerSize().width <= 600))
				)
			) {
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node3.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node3.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node3.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node3.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #00aaff;';
		hs+='border : 1px solid #00aaff;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateScaling == 0) {
					me._rectangle_2.ggParameter.sx = 0.5;
					me._rectangle_2.ggParameter.sy = 0.5;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
				else {
					me._rectangle_2.ggParameter.sx = 1;
					me._rectangle_2.ggParameter.sy = 1;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
			}
		}
		me._rectangle_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_2.style.visibility=me._rectangle_2.ggVisible?'inherit':'hidden';
					me._rectangle_2.style.opacity=1;
				}
				else {
					me._rectangle_2.style.visibility=me._rectangle_2.ggVisible?'inherit':'hidden';
					me._rectangle_2.style.opacity=0.5;
				}
			}
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node3.appendChild(me._rectangle_2);
		me.__div = me._ht_node3;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_image') {
			hotspot.skinid = 'ht_image';
			hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_image_changenode();;
			me.callChildLogicBlocksHotspot_ht_image_configloaded();;
			me.callChildLogicBlocksHotspot_ht_image_mouseover();;
			me.callChildLogicBlocksHotspot_ht_image_hastouch();;
			me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_timer();;
		} else
		if (hotspot.skinid=='ht_node_white') {
			hotspot.skinid = 'ht_node_white';
			hsinst = new SkinHotspotClass_ht_node_white(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_white_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_white_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='ht_info') {
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_timer();;
		} else
		if (hotspot.skinid=='ht_url') {
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url_changenode();;
			me.callChildLogicBlocksHotspot_ht_url_configloaded();;
			me.callChildLogicBlocksHotspot_ht_url_mouseover();;
			me.callChildLogicBlocksHotspot_ht_url_hastouch();;
			me.callChildLogicBlocksHotspot_ht_url_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_timer();;
		} else
		if (hotspot.skinid=='ht_url_mui') {
			hotspot.skinid = 'ht_url_mui';
			hsinst = new SkinHotspotClass_ht_url_mui(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url_mui_changenode();;
			me.callChildLogicBlocksHotspot_ht_url_mui_configloaded();;
			me.callChildLogicBlocksHotspot_ht_url_mui_mouseover();;
			me.callChildLogicBlocksHotspot_ht_url_mui_hastouch();;
			me.callChildLogicBlocksHotspot_ht_url_mui_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_timer();;
			me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_ht_ani();;
		} else
		{
			hotspot.skinid = 'ht_node3';
			hsinst = new SkinHotspotClass_ht_node3(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node3_changenode();;
			me.callChildLogicBlocksHotspot_ht_node3_varchanged_ht_ani();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				hotspotTemplates['ht_image'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node_white']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_white'].length; i++) {
				hotspotTemplates['ht_node_white'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				hotspotTemplates['ht_url'][i] = null;
			}
		}
		if(hotspotTemplates['ht_url_mui']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_mui'].length; i++) {
				hotspotTemplates['ht_url_mui'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node3'].length; i++) {
				hotspotTemplates['ht_node3'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._close.logicBlock_visible();
	player.addListener('changenode', function(args) { me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_file', function(args) { me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_url', function(args) { me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_vimeo', function(args) { me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_youtube', function(args) { me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_website', function(args) { me._close.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_image_changenode();me.callChildLogicBlocksHotspot_ht_node_white_changenode();me.callChildLogicBlocksHotspot_ht_info_changenode();me.callChildLogicBlocksHotspot_ht_url_changenode();me.callChildLogicBlocksHotspot_ht_url_mui_changenode();me.callChildLogicBlocksHotspot_ht_node3_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_image_configloaded();me.callChildLogicBlocksHotspot_ht_url_configloaded();me.callChildLogicBlocksHotspot_ht_url_mui_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_image_mouseover();me.callChildLogicBlocksHotspot_ht_url_mouseover();me.callChildLogicBlocksHotspot_ht_url_mui_mouseover(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_ht_image_hastouch();me.callChildLogicBlocksHotspot_ht_url_hastouch();me.callChildLogicBlocksHotspot_ht_url_mui_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_url_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_url_mui_activehotspotchanged(); });
	player.addListener('varchanged_vis_userdata', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_userdata(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_image_popup(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_info_popup(); });
	player.addListener('varchanged_vis_video_popup_file', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_video_popup_file(); });
	player.addListener('varchanged_vis_video_popup_url', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_video_popup_url(); });
	player.addListener('varchanged_vis_video_popup_vimeo', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_video_popup_vimeo(); });
	player.addListener('varchanged_vis_video_popup_youtube', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_video_popup_youtube(); });
	player.addListener('varchanged_vis_website', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_website(); });
	player.addListener('varchanged_vis_timer', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_vis_timer(); });
	player.addListener('varchanged_ht_ani', function(args) { me.callChildLogicBlocksHotspot_ht_node_white_varchanged_ht_ani();me.callChildLogicBlocksHotspot_ht_url_mui_varchanged_ht_ani();me.callChildLogicBlocksHotspot_ht_node3_varchanged_ht_ani(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};
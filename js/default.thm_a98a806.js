window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","maps":"resource/skins/maps.exml","new_map":"resource/eui_skins/new_map.exml","daoju":"resource/eui_skins/daoju.exml","chengjiu":"resource/eui_skins/chengjiu.exml","rengwu":"resource/eui_skins/rengwu.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["img_disabled","img_down","ing_up"];
		
		this.elementsContent = [this._Group1_i()];
		this.img_disabled_i();
		
		this.img_down_i();
		
		this.ing_up_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("ing_up","_Group1",1,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("img_down","_Group1",1,"")
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("img_disabled","_Group1",1,"")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_disabled_i = function () {
		var t = new eui.Image();
		this.img_disabled = t;
		t.source = "";
		return t;
	};
	_proto.img_down_i = function () {
		var t = new eui.Image();
		this.img_down = t;
		t.source = "";
		return t;
	};
	_proto.ing_up_i = function () {
		var t = new eui.Image();
		this.ing_up = t;
		t.source = "";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/chengjiu.exml'] = window.chengjiuSkin = (function (_super) {
	__extends(chengjiuSkin, _super);
	function chengjiuSkin() {
		_super.call(this);
		this.skinParts = ["background1","i1","i2","i3","t0","t1","t2","t3","b0","b1","group1","backgroud0","background2"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.backgroud0_i(),this.background2_i()];
	}
	var _proto = chengjiuSkin.prototype;

	_proto.backgroud0_i = function () {
		var t = new eui.Scroller();
		this.backgroud0 = t;
		t.height = 830;
		t.width = 640;
		t.y = 0;
		t.viewport = this.group1_i();
		return t;
	};
	_proto.group1_i = function () {
		var t = new eui.Group();
		this.group1 = t;
		t.height = 1580;
		t.width = 640;
		t.elementsContent = [this.background1_i(),this.i1_i(),this.i2_i(),this.i3_i(),this.t0_i(),this.t1_i(),this.t2_i(),this.t3_i(),this.b0_i(),this.b1_i()];
		return t;
	};
	_proto.background1_i = function () {
		var t = new eui.Image();
		this.background1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1496.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sky_jpg";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.i1_i = function () {
		var t = new eui.Image();
		this.i1 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "water_png";
		t.x = 48;
		t.y = 280;
		return t;
	};
	_proto.i2_i = function () {
		var t = new eui.Image();
		this.i2 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "white_png";
		t.x = 368;
		t.y = 280;
		return t;
	};
	_proto.i3_i = function () {
		var t = new eui.Image();
		this.i3 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "zhandian_png";
		t.x = 48;
		t.y = 568;
		return t;
	};
	_proto.t0_i = function () {
		var t = new eui.Label();
		this.t0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.size = 40;
		t.text = "Label";
		t.width = 250;
		t.x = 48;
		t.y = 132;
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Label();
		this.t1 = t;
		t.size = 50;
		t.text = "成就一";
		t.textColor = 0x0251ff;
		t.x = 73;
		t.y = 370;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Label();
		this.t2 = t;
		t.size = 50;
		t.text = "成就二";
		t.textColor = 0x0043f9;
		t.x = 393;
		t.y = 370;
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Label();
		this.t3 = t;
		t.size = 50;
		t.text = "成就三";
		t.textColor = 0x0050ff;
		t.x = 73;
		t.y = 658;
		return t;
	};
	_proto.b0_i = function () {
		var t = new eui.Button();
		this.b0 = t;
		t.label = "关闭";
		t.x = 518;
		t.y = 20;
		return t;
	};
	_proto.b1_i = function () {
		var t = new eui.Button();
		this.b1 = t;
		t.label = "分享(暂停使用)";
		t.x = 48;
		t.y = 20;
		return t;
	};
	_proto.background2_i = function () {
		var t = new eui.Image();
		this.background2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 306;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "earth_jpg";
		t.width = 640;
		t.x = 0;
		t.y = 830;
		return t;
	};
	return chengjiuSkin;
})(eui.Skin);generateEUI.paths['resource/skins/daoju.exml'] = window.daojuSkin = (function (_super) {
	__extends(daojuSkin, _super);
	var daojuSkin$Skin1 = 	(function (_super) {
		__extends(daojuSkin$Skin1, _super);
		function daojuSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","guanbijian_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","guanbijian_png")
					])
			];
		}
		var _proto = daojuSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "guanbijian_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return daojuSkin$Skin1;
	})(eui.Skin);

	function daojuSkin() {
		_super.call(this);
		this.skinParts = ["b1","backgroud","xianlupifu1","xianlupifu2","xianlupifu3","jiasuka","tpf1","tpf2","tpf3","t2","t1","bpf1","bpf2","bpf3","b2"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.b1_i(),this._Scroller1_i()];
	}
	var _proto = daojuSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 56.06;
		t.source = "tanchukuang_png";
		t.x = 0;
		t.y = 683.94;
		return t;
	};
	_proto.b1_i = function () {
		var t = new eui.Button();
		this.b1 = t;
		t.label = "关闭";
		t.scaleX = 0.1;
		t.scaleY = 0.1;
		t.x = 590.6;
		t.y = 686;
		t.skinName = daojuSkin$Skin1;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 760.61;
		t.width = 640;
		t.x = 0;
		t.y = 740;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 640;
		t.elementsContent = [this.backgroud_i(),this.xianlupifu1_i(),this.xianlupifu2_i(),this.xianlupifu3_i(),this.jiasuka_i(),this.tpf1_i(),this.tpf2_i(),this.tpf3_i(),this.t2_i(),this.t1_i(),this.bpf1_i(),this.bpf2_i(),this.bpf3_i(),this.b2_i()];
		return t;
	};
	_proto.backgroud_i = function () {
		var t = new eui.Image();
		this.backgroud = t;
		t.anchorOffsetY = 0;
		t.height = 1200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tanchukuang_png";
		t.x = 0;
		t.y = -53.999999999999886;
		return t;
	};
	_proto.xianlupifu1_i = function () {
		var t = new eui.Image();
		this.xianlupifu1 = t;
		t.height = 200;
		t.source = "luxian1_png";
		t.width = 200;
		t.x = 382;
		t.y = 50;
		return t;
	};
	_proto.xianlupifu2_i = function () {
		var t = new eui.Image();
		this.xianlupifu2 = t;
		t.height = 200;
		t.source = "luxian3_png";
		t.width = 200;
		t.x = 29;
		t.y = 342;
		return t;
	};
	_proto.xianlupifu3_i = function () {
		var t = new eui.Image();
		this.xianlupifu3 = t;
		t.height = 200;
		t.source = "luxian4_png";
		t.width = 200;
		t.x = 382;
		t.y = 342;
		return t;
	};
	_proto.jiasuka_i = function () {
		var t = new eui.Image();
		this.jiasuka = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "water_png";
		t.width = 200;
		t.x = 29;
		t.y = 50;
		return t;
	};
	_proto.tpf1_i = function () {
		var t = new eui.Label();
		this.tpf1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.size = 30;
		t.text = "线路皮肤";
		t.textColor = 0xF90E0E;
		t.width = 160;
		t.x = 404;
		t.y = 122;
		return t;
	};
	_proto.tpf2_i = function () {
		var t = new eui.Label();
		this.tpf2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.size = 30;
		t.text = "线路皮肤";
		t.textColor = 0xF90E0E;
		t.width = 160;
		t.x = 49;
		t.y = 442;
		return t;
	};
	_proto.tpf3_i = function () {
		var t = new eui.Label();
		this.tpf3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.size = 30;
		t.text = "线路皮肤";
		t.textColor = 0xF90E0E;
		t.width = 160;
		t.x = 402;
		t.y = 414;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Label();
		this.t2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.size = 50;
		t.text = "加速卡";
		t.textColor = 0xf90e0e;
		t.width = 160;
		t.x = 49;
		t.y = 122;
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Label();
		this.t1 = t;
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "Label";
		t.textColor = 0xff0000;
		t.width = 100;
		t.x = 79;
		t.y = 0;
		return t;
	};
	_proto.bpf1_i = function () {
		var t = new eui.Button();
		this.bpf1 = t;
		t.label = "使用";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 382;
		t.y = 250;
		return t;
	};
	_proto.bpf2_i = function () {
		var t = new eui.Button();
		this.bpf2 = t;
		t.label = "使用";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 29;
		t.y = 560;
		return t;
	};
	_proto.bpf3_i = function () {
		var t = new eui.Button();
		this.bpf3 = t;
		t.label = "使用";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 382;
		t.y = 560;
		return t;
	};
	_proto.b2_i = function () {
		var t = new eui.Button();
		this.b2 = t;
		t.label = "使用";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 29;
		t.y = 250;
		return t;
	};
	return daojuSkin;
})(eui.Skin);generateEUI.paths['resource/skins/maps.exml'] = window.mapsSkin = (function (_super) {
	__extends(mapsSkin, _super);
	var mapsSkin$Skin2 = 	(function (_super) {
		__extends(mapsSkin$Skin2, _super);
		function mapsSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin2;
	})(eui.Skin);

	var mapsSkin$Skin3 = 	(function (_super) {
		__extends(mapsSkin$Skin3, _super);
		function mapsSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin3;
	})(eui.Skin);

	var mapsSkin$Skin4 = 	(function (_super) {
		__extends(mapsSkin$Skin4, _super);
		function mapsSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin4;
	})(eui.Skin);

	var mapsSkin$Skin5 = 	(function (_super) {
		__extends(mapsSkin$Skin5, _super);
		function mapsSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin5;
	})(eui.Skin);

	var mapsSkin$Skin6 = 	(function (_super) {
		__extends(mapsSkin$Skin6, _super);
		function mapsSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin6;
	})(eui.Skin);

	var mapsSkin$Skin7 = 	(function (_super) {
		__extends(mapsSkin$Skin7, _super);
		function mapsSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin7;
	})(eui.Skin);

	var mapsSkin$Skin8 = 	(function (_super) {
		__extends(mapsSkin$Skin8, _super);
		function mapsSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin8;
	})(eui.Skin);

	var mapsSkin$Skin9 = 	(function (_super) {
		__extends(mapsSkin$Skin9, _super);
		function mapsSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin9;
	})(eui.Skin);

	var mapsSkin$Skin10 = 	(function (_super) {
		__extends(mapsSkin$Skin10, _super);
		function mapsSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin10;
	})(eui.Skin);

	var mapsSkin$Skin11 = 	(function (_super) {
		__extends(mapsSkin$Skin11, _super);
		function mapsSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin11;
	})(eui.Skin);

	var mapsSkin$Skin12 = 	(function (_super) {
		__extends(mapsSkin$Skin12, _super);
		function mapsSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin12;
	})(eui.Skin);

	var mapsSkin$Skin13 = 	(function (_super) {
		__extends(mapsSkin$Skin13, _super);
		function mapsSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin13;
	})(eui.Skin);

	var mapsSkin$Skin14 = 	(function (_super) {
		__extends(mapsSkin$Skin14, _super);
		function mapsSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin14;
	})(eui.Skin);

	var mapsSkin$Skin15 = 	(function (_super) {
		__extends(mapsSkin$Skin15, _super);
		function mapsSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin15;
	})(eui.Skin);

	var mapsSkin$Skin16 = 	(function (_super) {
		__extends(mapsSkin$Skin16, _super);
		function mapsSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin16;
	})(eui.Skin);

	var mapsSkin$Skin17 = 	(function (_super) {
		__extends(mapsSkin$Skin17, _super);
		function mapsSkin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin17;
	})(eui.Skin);

	var mapsSkin$Skin18 = 	(function (_super) {
		__extends(mapsSkin$Skin18, _super);
		function mapsSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin18;
	})(eui.Skin);

	var mapsSkin$Skin19 = 	(function (_super) {
		__extends(mapsSkin$Skin19, _super);
		function mapsSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin19;
	})(eui.Skin);

	var mapsSkin$Skin20 = 	(function (_super) {
		__extends(mapsSkin$Skin20, _super);
		function mapsSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "heliu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin20;
	})(eui.Skin);

	var mapsSkin$Skin21 = 	(function (_super) {
		__extends(mapsSkin$Skin21, _super);
		function mapsSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin21;
	})(eui.Skin);

	var mapsSkin$Skin22 = 	(function (_super) {
		__extends(mapsSkin$Skin22, _super);
		function mapsSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin22;
	})(eui.Skin);

	var mapsSkin$Skin23 = 	(function (_super) {
		__extends(mapsSkin$Skin23, _super);
		function mapsSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin23;
	})(eui.Skin);

	var mapsSkin$Skin24 = 	(function (_super) {
		__extends(mapsSkin$Skin24, _super);
		function mapsSkin$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin24;
	})(eui.Skin);

	var mapsSkin$Skin25 = 	(function (_super) {
		__extends(mapsSkin$Skin25, _super);
		function mapsSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin25;
	})(eui.Skin);

	var mapsSkin$Skin26 = 	(function (_super) {
		__extends(mapsSkin$Skin26, _super);
		function mapsSkin$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin26;
	})(eui.Skin);

	var mapsSkin$Skin27 = 	(function (_super) {
		__extends(mapsSkin$Skin27, _super);
		function mapsSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin27;
	})(eui.Skin);

	var mapsSkin$Skin28 = 	(function (_super) {
		__extends(mapsSkin$Skin28, _super);
		function mapsSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin28;
	})(eui.Skin);

	var mapsSkin$Skin29 = 	(function (_super) {
		__extends(mapsSkin$Skin29, _super);
		function mapsSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin29;
	})(eui.Skin);

	var mapsSkin$Skin30 = 	(function (_super) {
		__extends(mapsSkin$Skin30, _super);
		function mapsSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin30;
	})(eui.Skin);

	var mapsSkin$Skin31 = 	(function (_super) {
		__extends(mapsSkin$Skin31, _super);
		function mapsSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin31;
	})(eui.Skin);

	var mapsSkin$Skin32 = 	(function (_super) {
		__extends(mapsSkin$Skin32, _super);
		function mapsSkin$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin32;
	})(eui.Skin);

	var mapsSkin$Skin33 = 	(function (_super) {
		__extends(mapsSkin$Skin33, _super);
		function mapsSkin$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin33;
	})(eui.Skin);

	var mapsSkin$Skin34 = 	(function (_super) {
		__extends(mapsSkin$Skin34, _super);
		function mapsSkin$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin34;
	})(eui.Skin);

	var mapsSkin$Skin35 = 	(function (_super) {
		__extends(mapsSkin$Skin35, _super);
		function mapsSkin$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin35;
	})(eui.Skin);

	var mapsSkin$Skin36 = 	(function (_super) {
		__extends(mapsSkin$Skin36, _super);
		function mapsSkin$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin36;
	})(eui.Skin);

	var mapsSkin$Skin37 = 	(function (_super) {
		__extends(mapsSkin$Skin37, _super);
		function mapsSkin$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin37;
	})(eui.Skin);

	var mapsSkin$Skin38 = 	(function (_super) {
		__extends(mapsSkin$Skin38, _super);
		function mapsSkin$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin38;
	})(eui.Skin);

	var mapsSkin$Skin39 = 	(function (_super) {
		__extends(mapsSkin$Skin39, _super);
		function mapsSkin$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin39;
	})(eui.Skin);

	var mapsSkin$Skin40 = 	(function (_super) {
		__extends(mapsSkin$Skin40, _super);
		function mapsSkin$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin40;
	})(eui.Skin);

	var mapsSkin$Skin41 = 	(function (_super) {
		__extends(mapsSkin$Skin41, _super);
		function mapsSkin$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin41;
	})(eui.Skin);

	var mapsSkin$Skin42 = 	(function (_super) {
		__extends(mapsSkin$Skin42, _super);
		function mapsSkin$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin42;
	})(eui.Skin);

	var mapsSkin$Skin43 = 	(function (_super) {
		__extends(mapsSkin$Skin43, _super);
		function mapsSkin$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin43;
	})(eui.Skin);

	var mapsSkin$Skin44 = 	(function (_super) {
		__extends(mapsSkin$Skin44, _super);
		function mapsSkin$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin44;
	})(eui.Skin);

	var mapsSkin$Skin45 = 	(function (_super) {
		__extends(mapsSkin$Skin45, _super);
		function mapsSkin$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin45;
	})(eui.Skin);

	var mapsSkin$Skin46 = 	(function (_super) {
		__extends(mapsSkin$Skin46, _super);
		function mapsSkin$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin46;
	})(eui.Skin);

	var mapsSkin$Skin47 = 	(function (_super) {
		__extends(mapsSkin$Skin47, _super);
		function mapsSkin$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin47;
	})(eui.Skin);

	var mapsSkin$Skin48 = 	(function (_super) {
		__extends(mapsSkin$Skin48, _super);
		function mapsSkin$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin48;
	})(eui.Skin);

	var mapsSkin$Skin49 = 	(function (_super) {
		__extends(mapsSkin$Skin49, _super);
		function mapsSkin$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin49;
	})(eui.Skin);

	var mapsSkin$Skin50 = 	(function (_super) {
		__extends(mapsSkin$Skin50, _super);
		function mapsSkin$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin50;
	})(eui.Skin);

	var mapsSkin$Skin51 = 	(function (_super) {
		__extends(mapsSkin$Skin51, _super);
		function mapsSkin$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin51;
	})(eui.Skin);

	var mapsSkin$Skin52 = 	(function (_super) {
		__extends(mapsSkin$Skin52, _super);
		function mapsSkin$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin52;
	})(eui.Skin);

	var mapsSkin$Skin53 = 	(function (_super) {
		__extends(mapsSkin$Skin53, _super);
		function mapsSkin$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin53;
	})(eui.Skin);

	var mapsSkin$Skin54 = 	(function (_super) {
		__extends(mapsSkin$Skin54, _super);
		function mapsSkin$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin54;
	})(eui.Skin);

	var mapsSkin$Skin55 = 	(function (_super) {
		__extends(mapsSkin$Skin55, _super);
		function mapsSkin$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin55;
	})(eui.Skin);

	var mapsSkin$Skin56 = 	(function (_super) {
		__extends(mapsSkin$Skin56, _super);
		function mapsSkin$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin56;
	})(eui.Skin);

	var mapsSkin$Skin57 = 	(function (_super) {
		__extends(mapsSkin$Skin57, _super);
		function mapsSkin$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin57;
	})(eui.Skin);

	var mapsSkin$Skin58 = 	(function (_super) {
		__extends(mapsSkin$Skin58, _super);
		function mapsSkin$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin58;
	})(eui.Skin);

	var mapsSkin$Skin59 = 	(function (_super) {
		__extends(mapsSkin$Skin59, _super);
		function mapsSkin$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin59;
	})(eui.Skin);

	var mapsSkin$Skin60 = 	(function (_super) {
		__extends(mapsSkin$Skin60, _super);
		function mapsSkin$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin60;
	})(eui.Skin);

	var mapsSkin$Skin61 = 	(function (_super) {
		__extends(mapsSkin$Skin61, _super);
		function mapsSkin$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin61;
	})(eui.Skin);

	var mapsSkin$Skin62 = 	(function (_super) {
		__extends(mapsSkin$Skin62, _super);
		function mapsSkin$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin62;
	})(eui.Skin);

	var mapsSkin$Skin63 = 	(function (_super) {
		__extends(mapsSkin$Skin63, _super);
		function mapsSkin$Skin63() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin63;
	})(eui.Skin);

	var mapsSkin$Skin64 = 	(function (_super) {
		__extends(mapsSkin$Skin64, _super);
		function mapsSkin$Skin64() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin64;
	})(eui.Skin);

	var mapsSkin$Skin65 = 	(function (_super) {
		__extends(mapsSkin$Skin65, _super);
		function mapsSkin$Skin65() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin65;
	})(eui.Skin);

	var mapsSkin$Skin66 = 	(function (_super) {
		__extends(mapsSkin$Skin66, _super);
		function mapsSkin$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin66;
	})(eui.Skin);

	var mapsSkin$Skin67 = 	(function (_super) {
		__extends(mapsSkin$Skin67, _super);
		function mapsSkin$Skin67() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin67;
	})(eui.Skin);

	var mapsSkin$Skin68 = 	(function (_super) {
		__extends(mapsSkin$Skin68, _super);
		function mapsSkin$Skin68() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin68;
	})(eui.Skin);

	var mapsSkin$Skin69 = 	(function (_super) {
		__extends(mapsSkin$Skin69, _super);
		function mapsSkin$Skin69() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin69;
	})(eui.Skin);

	var mapsSkin$Skin70 = 	(function (_super) {
		__extends(mapsSkin$Skin70, _super);
		function mapsSkin$Skin70() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin70;
	})(eui.Skin);

	var mapsSkin$Skin71 = 	(function (_super) {
		__extends(mapsSkin$Skin71, _super);
		function mapsSkin$Skin71() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin71;
	})(eui.Skin);

	var mapsSkin$Skin72 = 	(function (_super) {
		__extends(mapsSkin$Skin72, _super);
		function mapsSkin$Skin72() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin72;
	})(eui.Skin);

	var mapsSkin$Skin73 = 	(function (_super) {
		__extends(mapsSkin$Skin73, _super);
		function mapsSkin$Skin73() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin73;
	})(eui.Skin);

	var mapsSkin$Skin74 = 	(function (_super) {
		__extends(mapsSkin$Skin74, _super);
		function mapsSkin$Skin74() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin74;
	})(eui.Skin);

	var mapsSkin$Skin75 = 	(function (_super) {
		__extends(mapsSkin$Skin75, _super);
		function mapsSkin$Skin75() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin75;
	})(eui.Skin);

	var mapsSkin$Skin76 = 	(function (_super) {
		__extends(mapsSkin$Skin76, _super);
		function mapsSkin$Skin76() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin76;
	})(eui.Skin);

	var mapsSkin$Skin77 = 	(function (_super) {
		__extends(mapsSkin$Skin77, _super);
		function mapsSkin$Skin77() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin77.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin77;
	})(eui.Skin);

	var mapsSkin$Skin78 = 	(function (_super) {
		__extends(mapsSkin$Skin78, _super);
		function mapsSkin$Skin78() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin78;
	})(eui.Skin);

	var mapsSkin$Skin79 = 	(function (_super) {
		__extends(mapsSkin$Skin79, _super);
		function mapsSkin$Skin79() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin79.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin79;
	})(eui.Skin);

	var mapsSkin$Skin80 = 	(function (_super) {
		__extends(mapsSkin$Skin80, _super);
		function mapsSkin$Skin80() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin80.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin80;
	})(eui.Skin);

	var mapsSkin$Skin81 = 	(function (_super) {
		__extends(mapsSkin$Skin81, _super);
		function mapsSkin$Skin81() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin81.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin81;
	})(eui.Skin);

	var mapsSkin$Skin82 = 	(function (_super) {
		__extends(mapsSkin$Skin82, _super);
		function mapsSkin$Skin82() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin82;
	})(eui.Skin);

	var mapsSkin$Skin83 = 	(function (_super) {
		__extends(mapsSkin$Skin83, _super);
		function mapsSkin$Skin83() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin83;
	})(eui.Skin);

	var mapsSkin$Skin84 = 	(function (_super) {
		__extends(mapsSkin$Skin84, _super);
		function mapsSkin$Skin84() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin84;
	})(eui.Skin);

	var mapsSkin$Skin85 = 	(function (_super) {
		__extends(mapsSkin$Skin85, _super);
		function mapsSkin$Skin85() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin85.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin85;
	})(eui.Skin);

	var mapsSkin$Skin86 = 	(function (_super) {
		__extends(mapsSkin$Skin86, _super);
		function mapsSkin$Skin86() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin86.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin86;
	})(eui.Skin);

	var mapsSkin$Skin87 = 	(function (_super) {
		__extends(mapsSkin$Skin87, _super);
		function mapsSkin$Skin87() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin87.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin87;
	})(eui.Skin);

	var mapsSkin$Skin88 = 	(function (_super) {
		__extends(mapsSkin$Skin88, _super);
		function mapsSkin$Skin88() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin88.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin88;
	})(eui.Skin);

	var mapsSkin$Skin89 = 	(function (_super) {
		__extends(mapsSkin$Skin89, _super);
		function mapsSkin$Skin89() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin89.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin89;
	})(eui.Skin);

	var mapsSkin$Skin90 = 	(function (_super) {
		__extends(mapsSkin$Skin90, _super);
		function mapsSkin$Skin90() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin90.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin90;
	})(eui.Skin);

	var mapsSkin$Skin91 = 	(function (_super) {
		__extends(mapsSkin$Skin91, _super);
		function mapsSkin$Skin91() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin91.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin91;
	})(eui.Skin);

	var mapsSkin$Skin92 = 	(function (_super) {
		__extends(mapsSkin$Skin92, _super);
		function mapsSkin$Skin92() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin92.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin92;
	})(eui.Skin);

	var mapsSkin$Skin93 = 	(function (_super) {
		__extends(mapsSkin$Skin93, _super);
		function mapsSkin$Skin93() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin93.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin93;
	})(eui.Skin);

	var mapsSkin$Skin94 = 	(function (_super) {
		__extends(mapsSkin$Skin94, _super);
		function mapsSkin$Skin94() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin94.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin94;
	})(eui.Skin);

	var mapsSkin$Skin95 = 	(function (_super) {
		__extends(mapsSkin$Skin95, _super);
		function mapsSkin$Skin95() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin95.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin95;
	})(eui.Skin);

	var mapsSkin$Skin96 = 	(function (_super) {
		__extends(mapsSkin$Skin96, _super);
		function mapsSkin$Skin96() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin96.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin96;
	})(eui.Skin);

	var mapsSkin$Skin97 = 	(function (_super) {
		__extends(mapsSkin$Skin97, _super);
		function mapsSkin$Skin97() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin97.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin97;
	})(eui.Skin);

	var mapsSkin$Skin98 = 	(function (_super) {
		__extends(mapsSkin$Skin98, _super);
		function mapsSkin$Skin98() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin98.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin98;
	})(eui.Skin);

	var mapsSkin$Skin99 = 	(function (_super) {
		__extends(mapsSkin$Skin99, _super);
		function mapsSkin$Skin99() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin99.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin99;
	})(eui.Skin);

	var mapsSkin$Skin100 = 	(function (_super) {
		__extends(mapsSkin$Skin100, _super);
		function mapsSkin$Skin100() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin100.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin100;
	})(eui.Skin);

	var mapsSkin$Skin101 = 	(function (_super) {
		__extends(mapsSkin$Skin101, _super);
		function mapsSkin$Skin101() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin101.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin101;
	})(eui.Skin);

	var mapsSkin$Skin102 = 	(function (_super) {
		__extends(mapsSkin$Skin102, _super);
		function mapsSkin$Skin102() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin102.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin102;
	})(eui.Skin);

	var mapsSkin$Skin103 = 	(function (_super) {
		__extends(mapsSkin$Skin103, _super);
		function mapsSkin$Skin103() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin103.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin103;
	})(eui.Skin);

	var mapsSkin$Skin104 = 	(function (_super) {
		__extends(mapsSkin$Skin104, _super);
		function mapsSkin$Skin104() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin104.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin104;
	})(eui.Skin);

	var mapsSkin$Skin105 = 	(function (_super) {
		__extends(mapsSkin$Skin105, _super);
		function mapsSkin$Skin105() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin105.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin105;
	})(eui.Skin);

	var mapsSkin$Skin106 = 	(function (_super) {
		__extends(mapsSkin$Skin106, _super);
		function mapsSkin$Skin106() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin106.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin106;
	})(eui.Skin);

	var mapsSkin$Skin107 = 	(function (_super) {
		__extends(mapsSkin$Skin107, _super);
		function mapsSkin$Skin107() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin107.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin107;
	})(eui.Skin);

	var mapsSkin$Skin108 = 	(function (_super) {
		__extends(mapsSkin$Skin108, _super);
		function mapsSkin$Skin108() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin108.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin108;
	})(eui.Skin);

	var mapsSkin$Skin109 = 	(function (_super) {
		__extends(mapsSkin$Skin109, _super);
		function mapsSkin$Skin109() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin109.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin109;
	})(eui.Skin);

	var mapsSkin$Skin110 = 	(function (_super) {
		__extends(mapsSkin$Skin110, _super);
		function mapsSkin$Skin110() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin110.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin110;
	})(eui.Skin);

	var mapsSkin$Skin111 = 	(function (_super) {
		__extends(mapsSkin$Skin111, _super);
		function mapsSkin$Skin111() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin111.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin111;
	})(eui.Skin);

	var mapsSkin$Skin112 = 	(function (_super) {
		__extends(mapsSkin$Skin112, _super);
		function mapsSkin$Skin112() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin112.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin112;
	})(eui.Skin);

	var mapsSkin$Skin113 = 	(function (_super) {
		__extends(mapsSkin$Skin113, _super);
		function mapsSkin$Skin113() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin113.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin113;
	})(eui.Skin);

	var mapsSkin$Skin114 = 	(function (_super) {
		__extends(mapsSkin$Skin114, _super);
		function mapsSkin$Skin114() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin114.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin114;
	})(eui.Skin);

	var mapsSkin$Skin115 = 	(function (_super) {
		__extends(mapsSkin$Skin115, _super);
		function mapsSkin$Skin115() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin115.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin115;
	})(eui.Skin);

	var mapsSkin$Skin116 = 	(function (_super) {
		__extends(mapsSkin$Skin116, _super);
		function mapsSkin$Skin116() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin116.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin116;
	})(eui.Skin);

	var mapsSkin$Skin117 = 	(function (_super) {
		__extends(mapsSkin$Skin117, _super);
		function mapsSkin$Skin117() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","luxian2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin117.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "wu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mapsSkin$Skin117;
	})(eui.Skin);

	function mapsSkin() {
		_super.call(this);
		this.skinParts = ["background","t1","lx114","lx105","lx106","lx107","lx108","lx109","lx097","lx087","lx077","b0","b1","b2","b3","b4","zd022","zd035","zd083","zd147","zd151","lx081","lx082","lx092","lx103","lx113","lx124","lx134","lx145","lx155","lx166","lx011","lx012","lx013","lx014","lx015","lx016","lx017","lx018","lx021","lx023","lx024","lx025","lx026","lx027","lx028","lx029","lx031","lx032","lx033","lx034","lx036","lx037","lx041","lx042","lx043","lx044","lx045","lx046","lx047","lx051","lx055","lx056","lx061","lx062","lx063","lx064","lx065","lx066","lx067","lx071","lx072","lx073","lx074","lx075","lx076","lx078","lx084","lx085","lx086","lx088","lx089","lx091","lx093","lx094","lx095","lx096","lx098","lx101","lx102","lx104","lx111","lx112","lx115","lx116","lx117","lx118","lx121","lx122","lx123","lx125","lx126","lx128","lx129","lx135","lx136","lx138","lx141","lx142","lx143","lx144","lx146","lx148","lx149","lx152","lx153","lx154","lx156","lx157","lx158","lx161","lx162","lx163","lx164","lx165","lx167","lx168","lx169"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.background_i(),this.t1_i(),this.lx114_i(),this.lx105_i(),this.lx106_i(),this.lx107_i(),this.lx108_i(),this.lx109_i(),this.lx097_i(),this.lx087_i(),this.lx077_i(),this.b0_i(),this.b1_i(),this.b2_i(),this.b3_i(),this.b4_i(),this.zd022_i(),this.zd035_i(),this.zd083_i(),this.zd147_i(),this.zd151_i(),this.lx081_i(),this.lx082_i(),this.lx092_i(),this.lx103_i(),this.lx113_i(),this.lx124_i(),this.lx134_i(),this.lx145_i(),this.lx155_i(),this.lx166_i(),this.lx011_i(),this.lx012_i(),this.lx013_i(),this.lx014_i(),this.lx015_i(),this.lx016_i(),this.lx017_i(),this.lx018_i(),this.lx021_i(),this.lx023_i(),this.lx024_i(),this.lx025_i(),this.lx026_i(),this.lx027_i(),this.lx028_i(),this.lx029_i(),this.lx031_i(),this.lx032_i(),this.lx033_i(),this.lx034_i(),this.lx036_i(),this.lx037_i(),this.lx041_i(),this.lx042_i(),this.lx043_i(),this.lx044_i(),this.lx045_i(),this.lx046_i(),this.lx047_i(),this.lx051_i(),this.lx055_i(),this.lx056_i(),this.lx061_i(),this.lx062_i(),this.lx063_i(),this.lx064_i(),this.lx065_i(),this.lx066_i(),this.lx067_i(),this.lx071_i(),this.lx072_i(),this.lx073_i(),this.lx074_i(),this.lx075_i(),this.lx076_i(),this.lx078_i(),this.lx084_i(),this.lx085_i(),this.lx086_i(),this.lx088_i(),this.lx089_i(),this.lx091_i(),this.lx093_i(),this.lx094_i(),this.lx095_i(),this.lx096_i(),this.lx098_i(),this.lx101_i(),this.lx102_i(),this.lx104_i(),this.lx111_i(),this.lx112_i(),this.lx115_i(),this.lx116_i(),this.lx117_i(),this.lx118_i(),this.lx121_i(),this.lx122_i(),this.lx123_i(),this.lx125_i(),this.lx126_i(),this.lx128_i(),this.lx129_i(),this.lx135_i(),this.lx136_i(),this.lx138_i(),this.lx141_i(),this.lx142_i(),this.lx143_i(),this.lx144_i(),this.lx146_i(),this.lx148_i(),this.lx149_i(),this.lx152_i(),this.lx153_i(),this.lx154_i(),this.lx156_i(),this.lx157_i(),this.lx158_i(),this.lx161_i(),this.lx162_i(),this.lx163_i(),this.lx164_i(),this.lx165_i(),this.lx167_i(),this.lx168_i(),this.lx169_i()];
	}
	var _proto = mapsSkin.prototype;

	_proto.background_i = function () {
		var t = new eui.Image();
		this.background = t;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "map_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Label();
		this.t1 = t;
		t.anchorOffsetX = 0;
		t.text = "Label";
		t.textColor = 0xf9dc77;
		t.width = 139.33;
		t.x = 457;
		t.y = 18.66;
		return t;
	};
	_proto.lx114_i = function () {
		var t = new eui.RadioButton();
		this.lx114 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "114";
		t.x = 249;
		t.y = 677.47;
		t.skinName = mapsSkin$Skin2;
		return t;
	};
	_proto.lx105_i = function () {
		var t = new eui.RadioButton();
		this.lx105 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "105";
		t.x = 283.8;
		t.y = 616.64;
		t.skinName = mapsSkin$Skin3;
		return t;
	};
	_proto.lx106_i = function () {
		var t = new eui.RadioButton();
		this.lx106 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "106";
		t.x = 352.8;
		t.y = 616.64;
		t.skinName = mapsSkin$Skin4;
		return t;
	};
	_proto.lx107_i = function () {
		var t = new eui.RadioButton();
		this.lx107 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "107";
		t.x = 421.8;
		t.y = 616.64;
		t.skinName = mapsSkin$Skin5;
		return t;
	};
	_proto.lx108_i = function () {
		var t = new eui.RadioButton();
		this.lx108 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "108";
		t.x = 490.8;
		t.y = 616.64;
		t.skinName = mapsSkin$Skin6;
		return t;
	};
	_proto.lx109_i = function () {
		var t = new eui.RadioButton();
		this.lx109 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "109";
		t.x = 559.8;
		t.y = 616.64;
		t.skinName = mapsSkin$Skin7;
		return t;
	};
	_proto.lx097_i = function () {
		var t = new eui.RadioButton();
		this.lx097 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "097";
		t.x = 456.5;
		t.y = 555.81;
		t.skinName = mapsSkin$Skin8;
		return t;
	};
	_proto.lx087_i = function () {
		var t = new eui.RadioButton();
		this.lx087 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "087";
		t.x = 422.5;
		t.y = 494.98;
		t.skinName = mapsSkin$Skin9;
		return t;
	};
	_proto.lx077_i = function () {
		var t = new eui.RadioButton();
		this.lx077 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "077";
		t.x = 457.5;
		t.y = 434.15;
		t.skinName = mapsSkin$Skin10;
		return t;
	};
	_proto.b0_i = function () {
		var t = new eui.Button();
		this.b0 = t;
		t.label = "背包";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 516.5;
		t.y = 1071.33;
		return t;
	};
	_proto.b1_i = function () {
		var t = new eui.Button();
		this.b1 = t;
		t.label = "任务";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 146.6;
		t.y = 1071.33;
		return t;
	};
	_proto.b2_i = function () {
		var t = new eui.Button();
		this.b2 = t;
		t.label = "成就";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 23.3;
		t.y = 1071.33;
		return t;
	};
	_proto.b3_i = function () {
		var t = new eui.Button();
		this.b3 = t;
		t.label = "增加路线";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 269.9;
		t.y = 1071.33;
		return t;
	};
	_proto.b4_i = function () {
		var t = new eui.Button();
		this.b4 = t;
		t.label = "背包";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 393.2;
		t.y = 1071.33;
		return t;
	};
	_proto.zd022_i = function () {
		var t = new eui.Image();
		this.zd022 = t;
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.source = "zhandian1_png";
		t.x = 79.8;
		t.y = 130.33;
		return t;
	};
	_proto.zd035_i = function () {
		var t = new eui.Image();
		this.zd035 = t;
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.source = "zhandian1_png";
		t.x = 321;
		t.y = 191.16;
		return t;
	};
	_proto.zd083_i = function () {
		var t = new eui.Image();
		this.zd083 = t;
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.source = "zhandian1_png";
		t.x = 146.5;
		t.y = 494.98;
		return t;
	};
	_proto.zd147_i = function () {
		var t = new eui.Image();
		this.zd147 = t;
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.source = "zhandian1_png";
		t.x = 420.5;
		t.y = 859.56;
		return t;
	};
	_proto.zd151_i = function () {
		var t = new eui.Image();
		this.zd151 = t;
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.source = "zhandian1_png";
		t.x = 40.5;
		t.y = 920.39;
		return t;
	};
	_proto.lx081_i = function () {
		var t = new eui.RadioButton();
		this.lx081 = t;
		t.groupName = "lx";
		t.height = 115;
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "081";
		t.width = 100;
		t.x = 8.5;
		t.y = 494.98;
		t.skinName = mapsSkin$Skin11;
		return t;
	};
	_proto.lx082_i = function () {
		var t = new eui.RadioButton();
		this.lx082 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "082";
		t.x = 77.5;
		t.y = 494.98;
		t.skinName = mapsSkin$Skin12;
		return t;
	};
	_proto.lx092_i = function () {
		var t = new eui.RadioButton();
		this.lx092 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "092";
		t.x = 111.5;
		t.y = 555.81;
		t.skinName = mapsSkin$Skin13;
		return t;
	};
	_proto.lx103_i = function () {
		var t = new eui.RadioButton();
		this.lx103 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "103";
		t.x = 145.8;
		t.y = 616.64;
		t.skinName = mapsSkin$Skin14;
		return t;
	};
	_proto.lx113_i = function () {
		var t = new eui.RadioButton();
		this.lx113 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "113";
		t.x = 180;
		t.y = 677.47;
		t.skinName = mapsSkin$Skin15;
		return t;
	};
	_proto.lx124_i = function () {
		var t = new eui.RadioButton();
		this.lx124 = t;
		t.groupName = "lx5";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "124";
		t.x = 214.3;
		t.y = 738.3;
		t.skinName = mapsSkin$Skin16;
		return t;
	};
	_proto.lx134_i = function () {
		var t = new eui.RadioButton();
		this.lx134 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "134";
		t.x = 248.5;
		t.y = 798.73;
		t.skinName = mapsSkin$Skin17;
		return t;
	};
	_proto.lx145_i = function () {
		var t = new eui.RadioButton();
		this.lx145 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "145";
		t.x = 282.5;
		t.y = 859.56;
		t.skinName = mapsSkin$Skin18;
		return t;
	};
	_proto.lx155_i = function () {
		var t = new eui.RadioButton();
		this.lx155 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "155";
		t.x = 316.5;
		t.y = 920.39;
		t.skinName = mapsSkin$Skin19;
		return t;
	};
	_proto.lx166_i = function () {
		var t = new eui.RadioButton();
		this.lx166 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "166";
		t.x = 351;
		t.y = 981.22;
		t.skinName = mapsSkin$Skin20;
		return t;
	};
	_proto.lx011_i = function () {
		var t = new eui.RadioButton();
		this.lx011 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "011";
		t.x = 45.4;
		t.y = 69.5;
		t.skinName = mapsSkin$Skin21;
		return t;
	};
	_proto.lx012_i = function () {
		var t = new eui.RadioButton();
		this.lx012 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "012";
		t.x = 114.4;
		t.y = 69.5;
		t.skinName = mapsSkin$Skin22;
		return t;
	};
	_proto.lx013_i = function () {
		var t = new eui.RadioButton();
		this.lx013 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "013";
		t.x = 183.4;
		t.y = 69.5;
		t.skinName = mapsSkin$Skin23;
		return t;
	};
	_proto.lx014_i = function () {
		var t = new eui.RadioButton();
		this.lx014 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "014";
		t.x = 252.4;
		t.y = 69.5;
		t.skinName = mapsSkin$Skin24;
		return t;
	};
	_proto.lx015_i = function () {
		var t = new eui.RadioButton();
		this.lx015 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "015";
		t.x = 321.4;
		t.y = 69.5;
		t.skinName = mapsSkin$Skin25;
		return t;
	};
	_proto.lx016_i = function () {
		var t = new eui.RadioButton();
		this.lx016 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "016";
		t.x = 390.4;
		t.y = 69.5;
		t.skinName = mapsSkin$Skin26;
		return t;
	};
	_proto.lx017_i = function () {
		var t = new eui.RadioButton();
		this.lx017 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "017";
		t.x = 459.4;
		t.y = 69.5;
		t.skinName = mapsSkin$Skin27;
		return t;
	};
	_proto.lx018_i = function () {
		var t = new eui.RadioButton();
		this.lx018 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "018";
		t.x = 528.4;
		t.y = 69.5;
		t.skinName = mapsSkin$Skin28;
		return t;
	};
	_proto.lx021_i = function () {
		var t = new eui.RadioButton();
		this.lx021 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "021";
		t.x = 11;
		t.y = 130.33;
		t.skinName = mapsSkin$Skin29;
		return t;
	};
	_proto.lx023_i = function () {
		var t = new eui.RadioButton();
		this.lx023 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "023";
		t.x = 148.8;
		t.y = 130.33;
		t.skinName = mapsSkin$Skin30;
		return t;
	};
	_proto.lx024_i = function () {
		var t = new eui.RadioButton();
		this.lx024 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "024";
		t.x = 217.5;
		t.y = 130.33;
		t.skinName = mapsSkin$Skin31;
		return t;
	};
	_proto.lx025_i = function () {
		var t = new eui.RadioButton();
		this.lx025 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "025";
		t.x = 286.5;
		t.y = 130.33;
		t.skinName = mapsSkin$Skin32;
		return t;
	};
	_proto.lx026_i = function () {
		var t = new eui.RadioButton();
		this.lx026 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "026";
		t.x = 355.5;
		t.y = 130.33;
		t.skinName = mapsSkin$Skin33;
		return t;
	};
	_proto.lx027_i = function () {
		var t = new eui.RadioButton();
		this.lx027 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "027";
		t.x = 424.5;
		t.y = 130.33;
		t.skinName = mapsSkin$Skin34;
		return t;
	};
	_proto.lx028_i = function () {
		var t = new eui.RadioButton();
		this.lx028 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "028";
		t.x = 493.5;
		t.y = 130.33;
		t.skinName = mapsSkin$Skin35;
		return t;
	};
	_proto.lx029_i = function () {
		var t = new eui.RadioButton();
		this.lx029 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "029";
		t.x = 562.5;
		t.y = 130.33;
		t.skinName = mapsSkin$Skin36;
		return t;
	};
	_proto.lx031_i = function () {
		var t = new eui.RadioButton();
		this.lx031 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "031";
		t.x = 45;
		t.y = 191.16;
		t.skinName = mapsSkin$Skin37;
		return t;
	};
	_proto.lx032_i = function () {
		var t = new eui.RadioButton();
		this.lx032 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "032";
		t.x = 114;
		t.y = 191.16;
		t.skinName = mapsSkin$Skin38;
		return t;
	};
	_proto.lx033_i = function () {
		var t = new eui.RadioButton();
		this.lx033 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "033";
		t.x = 183;
		t.y = 191.16;
		t.skinName = mapsSkin$Skin39;
		return t;
	};
	_proto.lx034_i = function () {
		var t = new eui.RadioButton();
		this.lx034 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "034";
		t.x = 252;
		t.y = 191.16;
		t.skinName = mapsSkin$Skin40;
		return t;
	};
	_proto.lx036_i = function () {
		var t = new eui.RadioButton();
		this.lx036 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "036";
		t.x = 390;
		t.y = 191.16;
		t.skinName = mapsSkin$Skin41;
		return t;
	};
	_proto.lx037_i = function () {
		var t = new eui.RadioButton();
		this.lx037 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "037";
		t.x = 459;
		t.y = 191.16;
		t.skinName = mapsSkin$Skin42;
		return t;
	};
	_proto.lx041_i = function () {
		var t = new eui.RadioButton();
		this.lx041 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "041";
		t.x = 10;
		t.y = 251.99;
		t.skinName = mapsSkin$Skin43;
		return t;
	};
	_proto.lx042_i = function () {
		var t = new eui.RadioButton();
		this.lx042 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "042";
		t.x = 79;
		t.y = 251.99;
		t.skinName = mapsSkin$Skin44;
		return t;
	};
	_proto.lx043_i = function () {
		var t = new eui.RadioButton();
		this.lx043 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "043";
		t.x = 148;
		t.y = 251.99;
		t.skinName = mapsSkin$Skin45;
		return t;
	};
	_proto.lx044_i = function () {
		var t = new eui.RadioButton();
		this.lx044 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "044";
		t.x = 217;
		t.y = 251.99;
		t.skinName = mapsSkin$Skin46;
		return t;
	};
	_proto.lx045_i = function () {
		var t = new eui.RadioButton();
		this.lx045 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "045";
		t.x = 286;
		t.y = 251.99;
		t.skinName = mapsSkin$Skin47;
		return t;
	};
	_proto.lx046_i = function () {
		var t = new eui.RadioButton();
		this.lx046 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "046";
		t.x = 355;
		t.y = 251.99;
		t.skinName = mapsSkin$Skin48;
		return t;
	};
	_proto.lx047_i = function () {
		var t = new eui.RadioButton();
		this.lx047 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "047";
		t.x = 424;
		t.y = 251.99;
		t.skinName = mapsSkin$Skin49;
		return t;
	};
	_proto.lx051_i = function () {
		var t = new eui.RadioButton();
		this.lx051 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "051";
		t.x = 44;
		t.y = 312.82;
		t.skinName = mapsSkin$Skin50;
		return t;
	};
	_proto.lx055_i = function () {
		var t = new eui.RadioButton();
		this.lx055 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "055";
		t.x = 320;
		t.y = 312.82;
		t.skinName = mapsSkin$Skin51;
		return t;
	};
	_proto.lx056_i = function () {
		var t = new eui.RadioButton();
		this.lx056 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "056";
		t.x = 389;
		t.y = 312.82;
		t.skinName = mapsSkin$Skin52;
		return t;
	};
	_proto.lx061_i = function () {
		var t = new eui.RadioButton();
		this.lx061 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "061";
		t.x = 9;
		t.y = 373.65;
		t.skinName = mapsSkin$Skin53;
		return t;
	};
	_proto.lx062_i = function () {
		var t = new eui.RadioButton();
		this.lx062 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "062";
		t.x = 78;
		t.y = 373.65;
		t.skinName = mapsSkin$Skin54;
		return t;
	};
	_proto.lx063_i = function () {
		var t = new eui.RadioButton();
		this.lx063 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "063";
		t.x = 147;
		t.y = 373.65;
		t.skinName = mapsSkin$Skin55;
		return t;
	};
	_proto.lx064_i = function () {
		var t = new eui.RadioButton();
		this.lx064 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "064";
		t.x = 216;
		t.y = 373.65;
		t.skinName = mapsSkin$Skin56;
		return t;
	};
	_proto.lx065_i = function () {
		var t = new eui.RadioButton();
		this.lx065 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "065";
		t.x = 285;
		t.y = 373.65;
		t.skinName = mapsSkin$Skin57;
		return t;
	};
	_proto.lx066_i = function () {
		var t = new eui.RadioButton();
		this.lx066 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "066";
		t.x = 354;
		t.y = 373.65;
		t.skinName = mapsSkin$Skin58;
		return t;
	};
	_proto.lx067_i = function () {
		var t = new eui.RadioButton();
		this.lx067 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "067";
		t.x = 423;
		t.y = 373.65;
		t.skinName = mapsSkin$Skin59;
		return t;
	};
	_proto.lx071_i = function () {
		var t = new eui.RadioButton();
		this.lx071 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "071";
		t.x = 43.5;
		t.y = 434.15;
		t.skinName = mapsSkin$Skin60;
		return t;
	};
	_proto.lx072_i = function () {
		var t = new eui.RadioButton();
		this.lx072 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "072";
		t.x = 112.5;
		t.y = 434.15;
		t.skinName = mapsSkin$Skin61;
		return t;
	};
	_proto.lx073_i = function () {
		var t = new eui.RadioButton();
		this.lx073 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "073";
		t.x = 181.5;
		t.y = 434.15;
		t.skinName = mapsSkin$Skin62;
		return t;
	};
	_proto.lx074_i = function () {
		var t = new eui.RadioButton();
		this.lx074 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "074";
		t.x = 250.5;
		t.y = 434.15;
		t.skinName = mapsSkin$Skin63;
		return t;
	};
	_proto.lx075_i = function () {
		var t = new eui.RadioButton();
		this.lx075 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "075";
		t.x = 319.5;
		t.y = 434.15;
		t.skinName = mapsSkin$Skin64;
		return t;
	};
	_proto.lx076_i = function () {
		var t = new eui.RadioButton();
		this.lx076 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "076";
		t.x = 388.5;
		t.y = 434.15;
		t.skinName = mapsSkin$Skin65;
		return t;
	};
	_proto.lx078_i = function () {
		var t = new eui.RadioButton();
		this.lx078 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "078";
		t.x = 526.5;
		t.y = 434.15;
		t.skinName = mapsSkin$Skin66;
		return t;
	};
	_proto.lx084_i = function () {
		var t = new eui.RadioButton();
		this.lx084 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "084";
		t.x = 215.5;
		t.y = 494.98;
		t.skinName = mapsSkin$Skin67;
		return t;
	};
	_proto.lx085_i = function () {
		var t = new eui.RadioButton();
		this.lx085 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "085";
		t.x = 284.5;
		t.y = 494.98;
		t.skinName = mapsSkin$Skin68;
		return t;
	};
	_proto.lx086_i = function () {
		var t = new eui.RadioButton();
		this.lx086 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "086";
		t.x = 353.5;
		t.y = 494.98;
		t.skinName = mapsSkin$Skin69;
		return t;
	};
	_proto.lx088_i = function () {
		var t = new eui.RadioButton();
		this.lx088 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "088";
		t.x = 491.5;
		t.y = 494.98;
		t.skinName = mapsSkin$Skin70;
		return t;
	};
	_proto.lx089_i = function () {
		var t = new eui.RadioButton();
		this.lx089 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "089";
		t.x = 560.5;
		t.y = 494.98;
		t.skinName = mapsSkin$Skin71;
		return t;
	};
	_proto.lx091_i = function () {
		var t = new eui.RadioButton();
		this.lx091 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "091";
		t.x = 42.5;
		t.y = 555.81;
		t.skinName = mapsSkin$Skin72;
		return t;
	};
	_proto.lx093_i = function () {
		var t = new eui.RadioButton();
		this.lx093 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "093";
		t.x = 180.5;
		t.y = 555.81;
		t.skinName = mapsSkin$Skin73;
		return t;
	};
	_proto.lx094_i = function () {
		var t = new eui.RadioButton();
		this.lx094 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "094";
		t.x = 249.5;
		t.y = 555.81;
		t.skinName = mapsSkin$Skin74;
		return t;
	};
	_proto.lx095_i = function () {
		var t = new eui.RadioButton();
		this.lx095 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "095";
		t.x = 318.5;
		t.y = 555.81;
		t.skinName = mapsSkin$Skin75;
		return t;
	};
	_proto.lx096_i = function () {
		var t = new eui.RadioButton();
		this.lx096 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "096";
		t.x = 387.5;
		t.y = 555.81;
		t.skinName = mapsSkin$Skin76;
		return t;
	};
	_proto.lx098_i = function () {
		var t = new eui.RadioButton();
		this.lx098 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "098";
		t.x = 525.5;
		t.y = 555.81;
		t.skinName = mapsSkin$Skin77;
		return t;
	};
	_proto.lx101_i = function () {
		var t = new eui.RadioButton();
		this.lx101 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "101";
		t.x = 7.8;
		t.y = 616.64;
		t.skinName = mapsSkin$Skin78;
		return t;
	};
	_proto.lx102_i = function () {
		var t = new eui.RadioButton();
		this.lx102 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "102";
		t.x = 76.8;
		t.y = 616.64;
		t.skinName = mapsSkin$Skin79;
		return t;
	};
	_proto.lx104_i = function () {
		var t = new eui.RadioButton();
		this.lx104 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "104";
		t.x = 214.8;
		t.y = 616.64;
		t.skinName = mapsSkin$Skin80;
		return t;
	};
	_proto.lx111_i = function () {
		var t = new eui.RadioButton();
		this.lx111 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "111";
		t.x = 42;
		t.y = 677.47;
		t.skinName = mapsSkin$Skin81;
		return t;
	};
	_proto.lx112_i = function () {
		var t = new eui.RadioButton();
		this.lx112 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "112";
		t.x = 111;
		t.y = 677.47;
		t.skinName = mapsSkin$Skin82;
		return t;
	};
	_proto.lx115_i = function () {
		var t = new eui.RadioButton();
		this.lx115 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "115";
		t.x = 318;
		t.y = 677.47;
		t.skinName = mapsSkin$Skin83;
		return t;
	};
	_proto.lx116_i = function () {
		var t = new eui.RadioButton();
		this.lx116 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "116";
		t.x = 387;
		t.y = 677.47;
		t.skinName = mapsSkin$Skin84;
		return t;
	};
	_proto.lx117_i = function () {
		var t = new eui.RadioButton();
		this.lx117 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "117";
		t.x = 456;
		t.y = 677.47;
		t.skinName = mapsSkin$Skin85;
		return t;
	};
	_proto.lx118_i = function () {
		var t = new eui.RadioButton();
		this.lx118 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "118";
		t.x = 525;
		t.y = 677.47;
		t.skinName = mapsSkin$Skin86;
		return t;
	};
	_proto.lx121_i = function () {
		var t = new eui.RadioButton();
		this.lx121 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "121";
		t.x = 7.3;
		t.y = 738.3;
		t.skinName = mapsSkin$Skin87;
		return t;
	};
	_proto.lx122_i = function () {
		var t = new eui.RadioButton();
		this.lx122 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "122";
		t.x = 76.3;
		t.y = 738.3;
		t.skinName = mapsSkin$Skin88;
		return t;
	};
	_proto.lx123_i = function () {
		var t = new eui.RadioButton();
		this.lx123 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "123";
		t.x = 145.3;
		t.y = 738.3;
		t.skinName = mapsSkin$Skin89;
		return t;
	};
	_proto.lx125_i = function () {
		var t = new eui.RadioButton();
		this.lx125 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "125";
		t.x = 283.3;
		t.y = 738.3;
		t.skinName = mapsSkin$Skin90;
		return t;
	};
	_proto.lx126_i = function () {
		var t = new eui.RadioButton();
		this.lx126 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "126";
		t.x = 352;
		t.y = 738.3;
		t.skinName = mapsSkin$Skin91;
		return t;
	};
	_proto.lx128_i = function () {
		var t = new eui.RadioButton();
		this.lx128 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "128";
		t.x = 490.3;
		t.y = 738.3;
		t.skinName = mapsSkin$Skin92;
		return t;
	};
	_proto.lx129_i = function () {
		var t = new eui.RadioButton();
		this.lx129 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "129";
		t.x = 559.3;
		t.y = 738.3;
		t.skinName = mapsSkin$Skin93;
		return t;
	};
	_proto.lx135_i = function () {
		var t = new eui.RadioButton();
		this.lx135 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "135";
		t.x = 317.5;
		t.y = 798.73;
		t.skinName = mapsSkin$Skin94;
		return t;
	};
	_proto.lx136_i = function () {
		var t = new eui.RadioButton();
		this.lx136 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "136";
		t.visible = false;
		t.x = 386.5;
		t.y = 798.73;
		t.skinName = mapsSkin$Skin95;
		return t;
	};
	_proto.lx138_i = function () {
		var t = new eui.RadioButton();
		this.lx138 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "138";
		t.x = 524.5;
		t.y = 798.73;
		t.skinName = mapsSkin$Skin96;
		return t;
	};
	_proto.lx141_i = function () {
		var t = new eui.RadioButton();
		this.lx141 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "141";
		t.x = 6.5;
		t.y = 859.56;
		t.skinName = mapsSkin$Skin97;
		return t;
	};
	_proto.lx142_i = function () {
		var t = new eui.RadioButton();
		this.lx142 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "142";
		t.x = 75.5;
		t.y = 859.56;
		t.skinName = mapsSkin$Skin98;
		return t;
	};
	_proto.lx143_i = function () {
		var t = new eui.RadioButton();
		this.lx143 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "143";
		t.x = 144.5;
		t.y = 859.56;
		t.skinName = mapsSkin$Skin99;
		return t;
	};
	_proto.lx144_i = function () {
		var t = new eui.RadioButton();
		this.lx144 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "144";
		t.x = 213.5;
		t.y = 859.56;
		t.skinName = mapsSkin$Skin100;
		return t;
	};
	_proto.lx146_i = function () {
		var t = new eui.RadioButton();
		this.lx146 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "146";
		t.x = 351.5;
		t.y = 859.56;
		t.skinName = mapsSkin$Skin101;
		return t;
	};
	_proto.lx148_i = function () {
		var t = new eui.RadioButton();
		this.lx148 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "148";
		t.x = 489.5;
		t.y = 859.56;
		t.skinName = mapsSkin$Skin102;
		return t;
	};
	_proto.lx149_i = function () {
		var t = new eui.RadioButton();
		this.lx149 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "149";
		t.x = 558.5;
		t.y = 859.56;
		t.skinName = mapsSkin$Skin103;
		return t;
	};
	_proto.lx152_i = function () {
		var t = new eui.RadioButton();
		this.lx152 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "152";
		t.x = 109.5;
		t.y = 920.39;
		t.skinName = mapsSkin$Skin104;
		return t;
	};
	_proto.lx153_i = function () {
		var t = new eui.RadioButton();
		this.lx153 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "153";
		t.x = 178.5;
		t.y = 920.39;
		t.skinName = mapsSkin$Skin105;
		return t;
	};
	_proto.lx154_i = function () {
		var t = new eui.RadioButton();
		this.lx154 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "154";
		t.x = 247.5;
		t.y = 920.39;
		t.skinName = mapsSkin$Skin106;
		return t;
	};
	_proto.lx156_i = function () {
		var t = new eui.RadioButton();
		this.lx156 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "156";
		t.x = 385.5;
		t.y = 920.39;
		t.skinName = mapsSkin$Skin107;
		return t;
	};
	_proto.lx157_i = function () {
		var t = new eui.RadioButton();
		this.lx157 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "157";
		t.x = 454.5;
		t.y = 920.39;
		t.skinName = mapsSkin$Skin108;
		return t;
	};
	_proto.lx158_i = function () {
		var t = new eui.RadioButton();
		this.lx158 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "158";
		t.x = 523.5;
		t.y = 920.39;
		t.skinName = mapsSkin$Skin109;
		return t;
	};
	_proto.lx161_i = function () {
		var t = new eui.RadioButton();
		this.lx161 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "161";
		t.x = 6.2;
		t.y = 981.22;
		t.skinName = mapsSkin$Skin110;
		return t;
	};
	_proto.lx162_i = function () {
		var t = new eui.RadioButton();
		this.lx162 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "162";
		t.x = 75.2;
		t.y = 981.22;
		t.skinName = mapsSkin$Skin111;
		return t;
	};
	_proto.lx163_i = function () {
		var t = new eui.RadioButton();
		this.lx163 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "163";
		t.x = 144.2;
		t.y = 981.22;
		t.skinName = mapsSkin$Skin112;
		return t;
	};
	_proto.lx164_i = function () {
		var t = new eui.RadioButton();
		this.lx164 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "164";
		t.x = 213.2;
		t.y = 981.22;
		t.skinName = mapsSkin$Skin113;
		return t;
	};
	_proto.lx165_i = function () {
		var t = new eui.RadioButton();
		this.lx165 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "165";
		t.x = 282;
		t.y = 981.22;
		t.skinName = mapsSkin$Skin114;
		return t;
	};
	_proto.lx167_i = function () {
		var t = new eui.RadioButton();
		this.lx167 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "167";
		t.x = 420;
		t.y = 981.22;
		t.skinName = mapsSkin$Skin115;
		return t;
	};
	_proto.lx168_i = function () {
		var t = new eui.RadioButton();
		this.lx168 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "168";
		t.x = 489;
		t.y = 981.22;
		t.skinName = mapsSkin$Skin116;
		return t;
	};
	_proto.lx169_i = function () {
		var t = new eui.RadioButton();
		this.lx169 = t;
		t.groupName = "lx";
		t.label = "";
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.value = "169";
		t.x = 558;
		t.y = 981.22;
		t.skinName = mapsSkin$Skin117;
		return t;
	};
	return mapsSkin;
})(eui.Skin);generateEUI.paths['resource/skins/rengwu.exml'] = window.rengwuSkin = (function (_super) {
	__extends(rengwuSkin, _super);
	var rengwuSkin$Skin118 = 	(function (_super) {
		__extends(rengwuSkin$Skin118, _super);
		function rengwuSkin$Skin118() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","guanbijian_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","guanbijian_png")
					])
			];
		}
		var _proto = rengwuSkin$Skin118.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "guanbijian_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return rengwuSkin$Skin118;
	})(eui.Skin);

	function rengwuSkin() {
		_super.call(this);
		this.skinParts = ["background0","b0","t0","background1","background2","b1","t1","group1","background3","b2","t2","group2","background4","b3","t3","group3"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.background0_i(),this.b0_i(),this.t0_i(),this._Scroller1_i()];
	}
	var _proto = rengwuSkin.prototype;

	_proto.background0_i = function () {
		var t = new eui.Image();
		this.background0 = t;
		t.height = 540;
		t.scaleY = 1;
		t.source = "tanchukuang_png";
		t.x = 0;
		t.y = 596;
		return t;
	};
	_proto.b0_i = function () {
		var t = new eui.Button();
		this.b0 = t;
		t.label = "";
		t.scaleX = 0.15;
		t.scaleY = 0.15;
		t.x = 560;
		t.y = 600;
		t.skinName = rengwuSkin$Skin118;
		return t;
	};
	_proto.t0_i = function () {
		var t = new eui.Label();
		this.t0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 50;
		t.text = "任务";
		t.textColor = 0x000000;
		t.width = 100;
		t.x = 270;
		t.y = 608;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 460;
		t.width = 640;
		t.x = 0;
		t.y = 676;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.background1_i(),this.group1_i(),this.group2_i(),this.group3_i()];
		return t;
	};
	_proto.background1_i = function () {
		var t = new eui.Image();
		this.background1 = t;
		t.anchorOffsetX = 0;
		t.height = 460;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "beijingkuang_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group1_i = function () {
		var t = new eui.Group();
		this.group1 = t;
		t.height = 160;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.background2_i(),this.b1_i(),this.t1_i()];
		return t;
	};
	_proto.background2_i = function () {
		var t = new eui.Image();
		this.background2 = t;
		t.height = 140;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lanmukuang_png";
		t.width = 640;
		t.x = 0;
		t.y = 20;
		return t;
	};
	_proto.b1_i = function () {
		var t = new eui.Button();
		this.b1 = t;
		t.height = 80;
		t.label = "去签到";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 497.05;
		t.y = 40;
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Label();
		this.t1 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "签到";
		t.textColor = 0xff0202;
		t.width = 300;
		t.x = 20;
		t.y = 50;
		return t;
	};
	_proto.group2_i = function () {
		var t = new eui.Group();
		this.group2 = t;
		t.height = 160;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 0;
		t.y = 160;
		t.elementsContent = [this.background3_i(),this.b2_i(),this.t2_i()];
		return t;
	};
	_proto.background3_i = function () {
		var t = new eui.Image();
		this.background3 = t;
		t.height = 140;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lanmukuang_png";
		t.width = 640;
		t.x = 0;
		t.y = 20;
		return t;
	};
	_proto.b2_i = function () {
		var t = new eui.Button();
		this.b2 = t;
		t.height = 80;
		t.label = "ar功能（设计中）";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 460.05;
		t.y = 40;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Label();
		this.t2 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "ar游戏";
		t.textColor = 0xFF0202;
		t.width = 300;
		t.x = 20;
		t.y = 60;
		return t;
	};
	_proto.group3_i = function () {
		var t = new eui.Group();
		this.group3 = t;
		t.height = 160;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 0;
		t.y = 320;
		t.elementsContent = [this.background4_i(),this.b3_i(),this.t3_i()];
		return t;
	};
	_proto.background4_i = function () {
		var t = new eui.Image();
		this.background4 = t;
		t.height = 140;
		t.source = "lanmukuang_png";
		t.width = 640;
		t.x = 0;
		t.y = 20;
		return t;
	};
	_proto.b3_i = function () {
		var t = new eui.Button();
		this.b3 = t;
		t.height = 80;
		t.label = "其他功能（设计中）";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 438.05;
		t.y = 40;
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Label();
		this.t3 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "其他游戏";
		t.textColor = 0xFF0202;
		t.width = 300;
		t.x = 20;
		t.y = 50;
		return t;
	};
	return rengwuSkin;
})(eui.Skin);
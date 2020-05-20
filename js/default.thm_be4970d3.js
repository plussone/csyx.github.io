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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","maps":"resource/skins/maps.exml","new_map":"resource/eui_skins/new_map.exml","daoju":"resource/eui_skins/daoju.exml","chengjiu":"resource/eui_skins/chengjiu.exml","rengwu":"resource/eui_skins/rengwu.exml","jingdian":"resource/eui_skins/jingdian.exml","xiaoyouxi1":"resource/eui_skins/xiaoyouxi1.exml","insert":"resource/eui_skins/insert.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/insert.exml'] = window.insertSkin = (function (_super) {
	__extends(insertSkin, _super);
	function insertSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = insertSkin.prototype;

	return insertSkin;
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
	var chengjiuSkin$Skin1 = 	(function (_super) {
		__extends(chengjiuSkin$Skin1, _super);
		function chengjiuSkin$Skin1() {
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
						new eui.SetProperty("_Image1","source","dark3_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","dark3_png")
					])
			];
		}
		var _proto = chengjiuSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dark3_png";
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
		return chengjiuSkin$Skin1;
	})(eui.Skin);

	var chengjiuSkin$Skin2 = 	(function (_super) {
		__extends(chengjiuSkin$Skin2, _super);
		function chengjiuSkin$Skin2() {
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
						new eui.SetProperty("_Image1","source","dark3_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","dark3_png")
					])
			];
		}
		var _proto = chengjiuSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dark3_png";
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
		return chengjiuSkin$Skin2;
	})(eui.Skin);

	var chengjiuSkin$Skin3 = 	(function (_super) {
		__extends(chengjiuSkin$Skin3, _super);
		function chengjiuSkin$Skin3() {
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
						new eui.SetProperty("_Image1","source","dark3_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","dark3_png")
					])
			];
		}
		var _proto = chengjiuSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dark3_png";
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
		return chengjiuSkin$Skin3;
	})(eui.Skin);

	var chengjiuSkin$Skin4 = 	(function (_super) {
		__extends(chengjiuSkin$Skin4, _super);
		function chengjiuSkin$Skin4() {
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
						new eui.SetProperty("_Image1","source","dark3_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","dark3_png")
					])
			];
		}
		var _proto = chengjiuSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dark3_png";
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
		return chengjiuSkin$Skin4;
	})(eui.Skin);

	var chengjiuSkin$Skin5 = 	(function (_super) {
		__extends(chengjiuSkin$Skin5, _super);
		function chengjiuSkin$Skin5() {
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
						new eui.SetProperty("_Image1","source","dark3_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","dark3_png")
					])
			];
		}
		var _proto = chengjiuSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dark3_png";
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
		return chengjiuSkin$Skin5;
	})(eui.Skin);

	var chengjiuSkin$Skin6 = 	(function (_super) {
		__extends(chengjiuSkin$Skin6, _super);
		function chengjiuSkin$Skin6() {
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
						new eui.SetProperty("_Image1","source","dark3_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","dark3_png")
					])
			];
		}
		var _proto = chengjiuSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dark3_png";
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
		return chengjiuSkin$Skin6;
	})(eui.Skin);

	var chengjiuSkin$Skin7 = 	(function (_super) {
		__extends(chengjiuSkin$Skin7, _super);
		function chengjiuSkin$Skin7() {
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
		var _proto = chengjiuSkin$Skin7.prototype;

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
		return chengjiuSkin$Skin7;
	})(eui.Skin);

	var chengjiuSkin$Skin8 = 	(function (_super) {
		__extends(chengjiuSkin$Skin8, _super);
		function chengjiuSkin$Skin8() {
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
						new eui.SetProperty("_Image1","source","red1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","red1_png")
					])
			];
		}
		var _proto = chengjiuSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "red1_png";
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
		return chengjiuSkin$Skin8;
	})(eui.Skin);

	var chengjiuSkin$Skin9 = 	(function (_super) {
		__extends(chengjiuSkin$Skin9, _super);
		function chengjiuSkin$Skin9() {
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
						new eui.SetProperty("_Image1","source","tishi_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","tishi_png")
					])
			];
		}
		var _proto = chengjiuSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tishi_png";
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
		return chengjiuSkin$Skin9;
	})(eui.Skin);

	function chengjiuSkin() {
		_super.call(this);
		this.skinParts = ["background1","t0","i1","t1","bcj1","ditu1","i2","t2","bcj2","ditu2","i3","t3","bcj3","ditu3","i4","t4","bcj4","jinqian1","i5","t5","bcj5","jinqian2","i6","t6","bcj6","jinqian3","b0","b1","b2","group1","backgroud0"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.backgroud0_i()];
	}
	var _proto = chengjiuSkin.prototype;

	_proto.backgroud0_i = function () {
		var t = new eui.Scroller();
		this.backgroud0 = t;
		t.anchorOffsetY = 0;
		t.height = 1136;
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
		t.elementsContent = [this.background1_i(),this.t0_i(),this.ditu1_i(),this.ditu2_i(),this.ditu3_i(),this.jinqian1_i(),this.jinqian2_i(),this.jinqian3_i(),this.b0_i(),this.b1_i(),this.b2_i()];
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
	_proto.t0_i = function () {
		var t = new eui.Label();
		this.t0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.size = 30;
		t.text = "Label";
		t.width = 306;
		t.x = 60;
		t.y = 132;
		return t;
	};
	_proto.ditu1_i = function () {
		var t = new eui.Group();
		this.ditu1 = t;
		t.height = 230;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 60;
		t.y = 200;
		t.elementsContent = [this.i1_i(),this.t1_i(),this.bcj1_i()];
		return t;
	};
	_proto.i1_i = function () {
		var t = new eui.Image();
		this.i1 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "water_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Label();
		this.t1 = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "建筑大师LV1";
		t.textAlign = "center";
		t.textColor = 0x0251ff;
		t.verticalAlign = "middle";
		t.x = 14;
		t.y = 100;
		return t;
	};
	_proto.bcj1_i = function () {
		var t = new eui.Button();
		this.bcj1 = t;
		t.label = "Button";
		t.width = 200;
		t.x = 0;
		t.y = 230;
		t.skinName = chengjiuSkin$Skin1;
		return t;
	};
	_proto.ditu2_i = function () {
		var t = new eui.Group();
		this.ditu2 = t;
		t.height = 230;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 380;
		t.y = 200;
		t.elementsContent = [this.i2_i(),this.t2_i(),this.bcj2_i()];
		return t;
	};
	_proto.i2_i = function () {
		var t = new eui.Image();
		this.i2 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "white_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Label();
		this.t2 = t;
		t.size = 30;
		t.text = "建筑大师LV2";
		t.textAlign = "center";
		t.textColor = 0x0043f9;
		t.verticalAlign = "middle";
		t.x = 14;
		t.y = 100;
		return t;
	};
	_proto.bcj2_i = function () {
		var t = new eui.Button();
		this.bcj2 = t;
		t.label = "Button";
		t.width = 200;
		t.x = 0;
		t.y = 230;
		t.skinName = chengjiuSkin$Skin2;
		return t;
	};
	_proto.ditu3_i = function () {
		var t = new eui.Group();
		this.ditu3 = t;
		t.height = 230;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 60;
		t.y = 550;
		t.elementsContent = [this.i3_i(),this.t3_i(),this.bcj3_i()];
		return t;
	};
	_proto.i3_i = function () {
		var t = new eui.Image();
		this.i3 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "zhandian_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Label();
		this.t3 = t;
		t.size = 30;
		t.text = "建筑大师LV3";
		t.textAlign = "center";
		t.textColor = 0x0050ff;
		t.verticalAlign = "middle";
		t.x = 14;
		t.y = 100;
		return t;
	};
	_proto.bcj3_i = function () {
		var t = new eui.Button();
		this.bcj3 = t;
		t.label = "Button";
		t.width = 200;
		t.x = 0;
		t.y = 230;
		t.skinName = chengjiuSkin$Skin3;
		return t;
	};
	_proto.jinqian1_i = function () {
		var t = new eui.Group();
		this.jinqian1 = t;
		t.height = 230;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 380;
		t.y = 550;
		t.elementsContent = [this.i4_i(),this.t4_i(),this.bcj4_i()];
		return t;
	};
	_proto.i4_i = function () {
		var t = new eui.Image();
		this.i4 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "zhandian_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t4_i = function () {
		var t = new eui.Label();
		this.t4 = t;
		t.size = 30;
		t.text = "积分达人LV1";
		t.textAlign = "center";
		t.textColor = 0x0050FF;
		t.verticalAlign = "middle";
		t.x = 16.5;
		t.y = 100;
		return t;
	};
	_proto.bcj4_i = function () {
		var t = new eui.Button();
		this.bcj4 = t;
		t.label = "Button";
		t.width = 200;
		t.x = 0;
		t.y = 230;
		t.skinName = chengjiuSkin$Skin4;
		return t;
	};
	_proto.jinqian2_i = function () {
		var t = new eui.Group();
		this.jinqian2 = t;
		t.height = 230;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 60;
		t.y = 900;
		t.elementsContent = [this.i5_i(),this.t5_i(),this.bcj5_i()];
		return t;
	};
	_proto.i5_i = function () {
		var t = new eui.Image();
		this.i5 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "zhandian_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t5_i = function () {
		var t = new eui.Label();
		this.t5 = t;
		t.size = 30;
		t.text = "积分达人LV2";
		t.textAlign = "center";
		t.textColor = 0x0050FF;
		t.verticalAlign = "middle";
		t.x = 14;
		t.y = 100;
		return t;
	};
	_proto.bcj5_i = function () {
		var t = new eui.Button();
		this.bcj5 = t;
		t.label = "Button";
		t.width = 200;
		t.x = 0;
		t.y = 230;
		t.skinName = chengjiuSkin$Skin5;
		return t;
	};
	_proto.jinqian3_i = function () {
		var t = new eui.Group();
		this.jinqian3 = t;
		t.height = 230;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 380;
		t.y = 900;
		t.elementsContent = [this.i6_i(),this.t6_i(),this.bcj6_i()];
		return t;
	};
	_proto.i6_i = function () {
		var t = new eui.Image();
		this.i6 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "zhandian_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t6_i = function () {
		var t = new eui.Label();
		this.t6 = t;
		t.size = 30;
		t.text = "积分达人LV3";
		t.textColor = 0x0050FF;
		t.x = 16.5;
		t.y = 100;
		return t;
	};
	_proto.bcj6_i = function () {
		var t = new eui.Button();
		this.bcj6 = t;
		t.label = "Button";
		t.width = 200;
		t.x = 0;
		t.y = 230;
		t.skinName = chengjiuSkin$Skin6;
		return t;
	};
	_proto.b0_i = function () {
		var t = new eui.Button();
		this.b0 = t;
		t.label = "";
		t.scaleX = 0.1;
		t.scaleY = 0.1;
		t.x = 580;
		t.y = 0;
		t.skinName = chengjiuSkin$Skin7;
		return t;
	};
	_proto.b1_i = function () {
		var t = new eui.Button();
		this.b1 = t;
		t.label = "分享";
		t.x = 48;
		t.y = 20;
		t.skinName = chengjiuSkin$Skin8;
		return t;
	};
	_proto.b2_i = function () {
		var t = new eui.Button();
		this.b2 = t;
		t.height = 494;
		t.label = "";
		t.scaleX = 0.1;
		t.scaleY = 0.1;
		t.width = 494;
		t.x = 525;
		t.y = 0;
		t.skinName = chengjiuSkin$Skin9;
		return t;
	};
	return chengjiuSkin;
})(eui.Skin);generateEUI.paths['resource/skins/daoju.exml'] = window.daojuSkin = (function (_super) {
	__extends(daojuSkin, _super);
	var daojuSkin$Skin10 = 	(function (_super) {
		__extends(daojuSkin$Skin10, _super);
		function daojuSkin$Skin10() {
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
		var _proto = daojuSkin$Skin10.prototype;

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
		return daojuSkin$Skin10;
	})(eui.Skin);

	var daojuSkin$Skin11 = 	(function (_super) {
		__extends(daojuSkin$Skin11, _super);
		function daojuSkin$Skin11() {
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
						new eui.SetProperty("_Image1","source","tishi_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","tishi_png")
					])
			];
		}
		var _proto = daojuSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tishi_png";
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
		return daojuSkin$Skin11;
	})(eui.Skin);

	var daojuSkin$Skin12 = 	(function (_super) {
		__extends(daojuSkin$Skin12, _super);
		function daojuSkin$Skin12() {
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
						new eui.SetProperty("_Image1","source","dark2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","dark2_png")
					])
			];
		}
		var _proto = daojuSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dark2_png";
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
		return daojuSkin$Skin12;
	})(eui.Skin);

	var daojuSkin$Skin13 = 	(function (_super) {
		__extends(daojuSkin$Skin13, _super);
		function daojuSkin$Skin13() {
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
						new eui.SetProperty("_Image1","source","dark2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","dark2_png")
					])
			];
		}
		var _proto = daojuSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dark2_png";
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
		return daojuSkin$Skin13;
	})(eui.Skin);

	var daojuSkin$Skin14 = 	(function (_super) {
		__extends(daojuSkin$Skin14, _super);
		function daojuSkin$Skin14() {
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
						new eui.SetProperty("_Image1","source","dark2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","dark2_png")
					])
			];
		}
		var _proto = daojuSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dark2_png";
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
		return daojuSkin$Skin14;
	})(eui.Skin);

	var daojuSkin$Skin15 = 	(function (_super) {
		__extends(daojuSkin$Skin15, _super);
		function daojuSkin$Skin15() {
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
						new eui.SetProperty("_Image1","source","dark2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","dark2_png")
					])
			];
		}
		var _proto = daojuSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dark2_png";
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
		return daojuSkin$Skin15;
	})(eui.Skin);

	var daojuSkin$Skin16 = 	(function (_super) {
		__extends(daojuSkin$Skin16, _super);
		function daojuSkin$Skin16() {
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
						new eui.SetProperty("_Image1","source","blue3_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","blue3_png")
					])
			];
		}
		var _proto = daojuSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "blue3_png";
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
		return daojuSkin$Skin16;
	})(eui.Skin);

	var daojuSkin$Skin17 = 	(function (_super) {
		__extends(daojuSkin$Skin17, _super);
		function daojuSkin$Skin17() {
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
						new eui.SetProperty("_Image1","source","blue3_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","blue3_png")
					])
			];
		}
		var _proto = daojuSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "blue3_png";
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
		return daojuSkin$Skin17;
	})(eui.Skin);

	var daojuSkin$Skin18 = 	(function (_super) {
		__extends(daojuSkin$Skin18, _super);
		function daojuSkin$Skin18() {
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
						new eui.SetProperty("_Image1","source","blue3_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","blue3_png")
					])
			];
		}
		var _proto = daojuSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "blue3_png";
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
		return daojuSkin$Skin18;
	})(eui.Skin);

	var daojuSkin$Skin19 = 	(function (_super) {
		__extends(daojuSkin$Skin19, _super);
		function daojuSkin$Skin19() {
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
						new eui.SetProperty("_Image1","source","blue3_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","blue3_png")
					])
			];
		}
		var _proto = daojuSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "blue3_png";
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
		return daojuSkin$Skin19;
	})(eui.Skin);

	var daojuSkin$Skin20 = 	(function (_super) {
		__extends(daojuSkin$Skin20, _super);
		function daojuSkin$Skin20() {
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
						new eui.SetProperty("_Image1","source","blue3_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","blue3_png")
					])
			];
		}
		var _proto = daojuSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "blue3_png";
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
		return daojuSkin$Skin20;
	})(eui.Skin);

	function daojuSkin() {
		_super.call(this);
		this.skinParts = ["bc1","bc2","background","jiasuka","b1","t1","t1_num","jsk","choujiangka","t2","t2_num","cjk","chaichuka","b3","t3","t3_num","cck","suidaoka","t4","t4_num","sdk","suidaoka0","t0","byh1","yh1","suidaoka1","t5","byh5","yh5","xianlupifu1","tpf1","bpf1","pf1","xianlupifu2","tpf2","bpf2","pf2","xianlupifu3","tpf3","bpf3","pf3","xianlupifu4","tpf4","bpf4","pf4","xianlupifu5","tpf5","bpf5","pf5"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.bc1_i(),this.bc2_i(),this._Scroller1_i(),this._Label1_i()];
	}
	var _proto = daojuSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "tanchukuang_png";
		t.width = 645;
		t.x = -2.5;
		t.y = 376;
		return t;
	};
	_proto.bc1_i = function () {
		var t = new eui.Button();
		this.bc1 = t;
		t.label = "";
		t.scaleX = 0.1;
		t.scaleY = 0.1;
		t.x = 590.6;
		t.y = 379.34000000000003;
		t.skinName = daojuSkin$Skin10;
		return t;
	};
	_proto.bc2_i = function () {
		var t = new eui.Button();
		this.bc2 = t;
		t.height = 494;
		t.label = "";
		t.scaleX = 0.1;
		t.scaleY = 0.1;
		t.width = 494;
		t.x = 528.6;
		t.y = 379.34;
		t.skinName = daojuSkin$Skin11;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 700;
		t.width = 640;
		t.x = 0;
		t.y = 436;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 932;
		t.elementsContent = [this.background_i(),this.jsk_i(),this.cjk_i(),this.cck_i(),this.sdk_i(),this.yh1_i(),this.yh5_i(),this.pf1_i(),this.pf2_i(),this.pf3_i(),this.pf4_i(),this.pf5_i()];
		return t;
	};
	_proto.background_i = function () {
		var t = new eui.Image();
		this.background = t;
		t.anchorOffsetX = 0;
		t.height = 700;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lanmukuang_png";
		t.width = 2250;
		t.x = -331;
		t.y = 0;
		return t;
	};
	_proto.jsk_i = function () {
		var t = new eui.Group();
		this.jsk = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 60;
		t.y = 100;
		t.elementsContent = [this.jiasuka_i(),this.b1_i(),this.t1_i(),this.t1_num_i()];
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
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.b1_i = function () {
		var t = new eui.Button();
		this.b1 = t;
		t.label = "使用";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 0;
		t.y = 200;
		t.skinName = daojuSkin$Skin12;
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Label();
		this.t1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "加速卡";
		t.textAlign = "center";
		t.textColor = 0xf90e0e;
		t.verticalAlign = "middle";
		t.width = 160;
		t.x = 20;
		t.y = 72;
		return t;
	};
	_proto.t1_num_i = function () {
		var t = new eui.Label();
		this.t1_num = t;
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 50.000000000000014;
		t.y = -50;
		return t;
	};
	_proto.cjk_i = function () {
		var t = new eui.Group();
		this.cjk = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 380;
		t.y = 100;
		t.elementsContent = [this.choujiangka_i(),this.t2_i(),this.t2_num_i()];
		return t;
	};
	_proto.choujiangka_i = function () {
		var t = new eui.Image();
		this.choujiangka = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "water_png";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Label();
		this.t2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "抽奖卡";
		t.textAlign = "center";
		t.textColor = 0xF90E0E;
		t.verticalAlign = "middle";
		t.width = 160;
		t.x = 20;
		t.y = 72;
		return t;
	};
	_proto.t2_num_i = function () {
		var t = new eui.Label();
		this.t2_num = t;
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFF0000;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 50.000000000000014;
		t.y = -50;
		return t;
	};
	_proto.cck_i = function () {
		var t = new eui.Group();
		this.cck = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 700;
		t.y = 110;
		t.elementsContent = [this.chaichuka_i(),this.b3_i(),this.t3_i(),this.t3_num_i()];
		return t;
	};
	_proto.chaichuka_i = function () {
		var t = new eui.Image();
		this.chaichuka = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "water_png";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.b3_i = function () {
		var t = new eui.Button();
		this.b3 = t;
		t.label = "使用";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 0;
		t.y = 200;
		t.skinName = daojuSkin$Skin13;
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Label();
		this.t3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "拆除卡";
		t.textAlign = "center";
		t.textColor = 0xF90E0E;
		t.verticalAlign = "middle";
		t.width = 160;
		t.x = 20;
		t.y = 72;
		return t;
	};
	_proto.t3_num_i = function () {
		var t = new eui.Label();
		this.t3_num = t;
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFF0000;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 50.000000000000014;
		t.y = -50;
		return t;
	};
	_proto.sdk_i = function () {
		var t = new eui.Group();
		this.sdk = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 1020;
		t.y = 110;
		t.elementsContent = [this.suidaoka_i(),this.t4_i(),this.t4_num_i()];
		return t;
	};
	_proto.suidaoka_i = function () {
		var t = new eui.Image();
		this.suidaoka = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "water_png";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t4_i = function () {
		var t = new eui.Label();
		this.t4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "隧道卡";
		t.textAlign = "center";
		t.textColor = 0xF90E0E;
		t.verticalAlign = "middle";
		t.width = 160;
		t.x = 20;
		t.y = 72;
		return t;
	};
	_proto.t4_num_i = function () {
		var t = new eui.Label();
		this.t4_num = t;
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFF0000;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 50.000000000000014;
		t.y = -50;
		return t;
	};
	_proto.yh1_i = function () {
		var t = new eui.Group();
		this.yh1 = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 1340;
		t.y = 110;
		t.elementsContent = [this.suidaoka0_i(),this.t0_i(),this.byh1_i()];
		return t;
	};
	_proto.suidaoka0_i = function () {
		var t = new eui.Image();
		this.suidaoka0 = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "water_png";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t0_i = function () {
		var t = new eui.Label();
		this.t0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "1元抵用券";
		t.textAlign = "center";
		t.textColor = 0xF90E0E;
		t.verticalAlign = "middle";
		t.width = 160;
		t.x = 20;
		t.y = 72;
		return t;
	};
	_proto.byh1_i = function () {
		var t = new eui.Button();
		this.byh1 = t;
		t.label = "1W金币兑换";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 0;
		t.y = 200;
		t.skinName = daojuSkin$Skin14;
		return t;
	};
	_proto.yh5_i = function () {
		var t = new eui.Group();
		this.yh5 = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 1660;
		t.y = 110;
		t.elementsContent = [this.suidaoka1_i(),this.t5_i(),this.byh5_i()];
		return t;
	};
	_proto.suidaoka1_i = function () {
		var t = new eui.Image();
		this.suidaoka1 = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "water_png";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t5_i = function () {
		var t = new eui.Label();
		this.t5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "5元抵用券";
		t.textAlign = "center";
		t.textColor = 0xF90E0E;
		t.verticalAlign = "middle";
		t.width = 160;
		t.x = 20;
		t.y = 72;
		return t;
	};
	_proto.byh5_i = function () {
		var t = new eui.Button();
		this.byh5 = t;
		t.label = "4.5W金币兑换";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 0;
		t.y = 200;
		t.skinName = daojuSkin$Skin15;
		return t;
	};
	_proto.pf1_i = function () {
		var t = new eui.Group();
		this.pf1 = t;
		t.height = 200;
		t.width = 200;
		t.x = 60;
		t.y = 410;
		t.elementsContent = [this.xianlupifu1_i(),this.tpf1_i(),this.bpf1_i()];
		return t;
	};
	_proto.xianlupifu1_i = function () {
		var t = new eui.Image();
		this.xianlupifu1 = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "luxian1_png";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tpf1_i = function () {
		var t = new eui.Label();
		this.tpf1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "橘子皮肤";
		t.textAlign = "center";
		t.textColor = 0xF90E0E;
		t.verticalAlign = "middle";
		t.width = 160;
		t.x = 20;
		t.y = 72;
		return t;
	};
	_proto.bpf1_i = function () {
		var t = new eui.Button();
		this.bpf1 = t;
		t.label = "使用";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 0;
		t.y = 200;
		t.skinName = daojuSkin$Skin16;
		return t;
	};
	_proto.pf2_i = function () {
		var t = new eui.Group();
		this.pf2 = t;
		t.height = 200;
		t.width = 200;
		t.x = 380;
		t.y = 410;
		t.elementsContent = [this.xianlupifu2_i(),this.tpf2_i(),this.bpf2_i()];
		return t;
	};
	_proto.xianlupifu2_i = function () {
		var t = new eui.Image();
		this.xianlupifu2 = t;
		t.height = 200;
		t.source = "luxian2_png";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tpf2_i = function () {
		var t = new eui.Label();
		this.tpf2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "葡萄皮肤";
		t.textAlign = "center";
		t.textColor = 0xF90E0E;
		t.verticalAlign = "middle";
		t.width = 160;
		t.x = 20;
		t.y = 72;
		return t;
	};
	_proto.bpf2_i = function () {
		var t = new eui.Button();
		this.bpf2 = t;
		t.label = "使用";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 0;
		t.y = 200;
		t.skinName = daojuSkin$Skin17;
		return t;
	};
	_proto.pf3_i = function () {
		var t = new eui.Group();
		this.pf3 = t;
		t.height = 200;
		t.width = 200;
		t.x = 700;
		t.y = 410;
		t.elementsContent = [this.xianlupifu3_i(),this.tpf3_i(),this.bpf3_i()];
		return t;
	};
	_proto.xianlupifu3_i = function () {
		var t = new eui.Image();
		this.xianlupifu3 = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "luxian3_png";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tpf3_i = function () {
		var t = new eui.Label();
		this.tpf3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.size = 35;
		t.text = "蜜桃皮肤";
		t.textAlign = "center";
		t.textColor = 0xF90E0E;
		t.verticalAlign = "middle";
		t.width = 160;
		t.x = 20;
		t.y = 72;
		return t;
	};
	_proto.bpf3_i = function () {
		var t = new eui.Button();
		this.bpf3 = t;
		t.label = "使用";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 0;
		t.y = 200;
		t.skinName = daojuSkin$Skin18;
		return t;
	};
	_proto.pf4_i = function () {
		var t = new eui.Group();
		this.pf4 = t;
		t.height = 200;
		t.width = 200;
		t.x = 1020;
		t.y = 410;
		t.elementsContent = [this.xianlupifu4_i(),this.tpf4_i(),this.bpf4_i()];
		return t;
	};
	_proto.xianlupifu4_i = function () {
		var t = new eui.Image();
		this.xianlupifu4 = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "luxian4_png";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tpf4_i = function () {
		var t = new eui.Label();
		this.tpf4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.size = 35;
		t.text = "荔枝皮肤";
		t.textAlign = "center";
		t.textColor = 0xF90E0E;
		t.verticalAlign = "middle";
		t.width = 160;
		t.x = 20;
		t.y = 72;
		return t;
	};
	_proto.bpf4_i = function () {
		var t = new eui.Button();
		this.bpf4 = t;
		t.label = "使用";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 0;
		t.y = 200;
		t.skinName = daojuSkin$Skin19;
		return t;
	};
	_proto.pf5_i = function () {
		var t = new eui.Group();
		this.pf5 = t;
		t.height = 200;
		t.width = 200;
		t.x = 1340;
		t.y = 420;
		t.elementsContent = [this.xianlupifu5_i(),this.tpf5_i(),this.bpf5_i()];
		return t;
	};
	_proto.xianlupifu5_i = function () {
		var t = new eui.Image();
		this.xianlupifu5 = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "luxian5_png";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tpf5_i = function () {
		var t = new eui.Label();
		this.tpf5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.size = 35;
		t.text = "青柠皮肤";
		t.textAlign = "center";
		t.textColor = 0xF90E0E;
		t.verticalAlign = "middle";
		t.width = 160;
		t.x = 20;
		t.y = 72;
		return t;
	};
	_proto.bpf5_i = function () {
		var t = new eui.Button();
		this.bpf5 = t;
		t.label = "使用";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 0;
		t.y = 200;
		t.skinName = daojuSkin$Skin20;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 50;
		t.text = "背包";
		t.textAlign = "center";
		t.textColor = 0xe216fc;
		t.verticalAlign = "middle";
		t.x = 270;
		t.y = 381;
		return t;
	};
	return daojuSkin;
})(eui.Skin);generateEUI.paths['resource/skins/fenshu.exml'] = window.jingdianSkin = (function (_super) {
	__extends(jingdianSkin, _super);
	var jingdianSkin$Skin21 = 	(function (_super) {
		__extends(jingdianSkin$Skin21, _super);
		function jingdianSkin$Skin21() {
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
					])
			];
		}
		var _proto = jingdianSkin$Skin21.prototype;

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
		return jingdianSkin$Skin21;
	})(eui.Skin);

	function jingdianSkin() {
		_super.call(this);
		this.skinParts = ["background","jdname","jianjie","b0"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.background_i(),this.jdname_i(),this.jianjie_i(),this.b0_i()];
	}
	var _proto = jingdianSkin.prototype;

	_proto.background_i = function () {
		var t = new eui.Image();
		this.background = t;
		t.source = "tanchukuang_png";
		t.x = 0;
		t.y = 343;
		return t;
	};
	_proto.jdname_i = function () {
		var t = new eui.Label();
		this.jdname = t;
		t.anchorOffsetX = 0;
		t.height = 100;
		t.size = 100;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xfc1111;
		t.width = 440;
		t.x = 100;
		t.y = 450;
		return t;
	};
	_proto.jianjie_i = function () {
		var t = new eui.Label();
		this.jianjie = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.size = 35;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xfc0a0a;
		t.width = 440;
		t.x = 100;
		t.y = 600;
		return t;
	};
	_proto.b0_i = function () {
		var t = new eui.Button();
		this.b0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "";
		t.width = 50;
		t.x = 569.21;
		t.y = 351.7;
		t.skinName = jingdianSkin$Skin21;
		return t;
	};
	return jingdianSkin;
})(eui.Skin);generateEUI.paths['resource/skins/insert.exml'] = window.mapsSkin = (function (_super) {
	__extends(mapsSkin, _super);
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","red1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","red1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "red1_png";
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
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

	var mapsSkin$Skin118 = 	(function (_super) {
		__extends(mapsSkin$Skin118, _super);
		function mapsSkin$Skin118() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin118.prototype;

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
		return mapsSkin$Skin118;
	})(eui.Skin);

	var mapsSkin$Skin119 = 	(function (_super) {
		__extends(mapsSkin$Skin119, _super);
		function mapsSkin$Skin119() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin119.prototype;

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
		return mapsSkin$Skin119;
	})(eui.Skin);

	var mapsSkin$Skin120 = 	(function (_super) {
		__extends(mapsSkin$Skin120, _super);
		function mapsSkin$Skin120() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin120.prototype;

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
		return mapsSkin$Skin120;
	})(eui.Skin);

	var mapsSkin$Skin121 = 	(function (_super) {
		__extends(mapsSkin$Skin121, _super);
		function mapsSkin$Skin121() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin121.prototype;

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
		return mapsSkin$Skin121;
	})(eui.Skin);

	var mapsSkin$Skin122 = 	(function (_super) {
		__extends(mapsSkin$Skin122, _super);
		function mapsSkin$Skin122() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin122.prototype;

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
		return mapsSkin$Skin122;
	})(eui.Skin);

	var mapsSkin$Skin123 = 	(function (_super) {
		__extends(mapsSkin$Skin123, _super);
		function mapsSkin$Skin123() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin123.prototype;

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
		return mapsSkin$Skin123;
	})(eui.Skin);

	var mapsSkin$Skin124 = 	(function (_super) {
		__extends(mapsSkin$Skin124, _super);
		function mapsSkin$Skin124() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin124.prototype;

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
		return mapsSkin$Skin124;
	})(eui.Skin);

	var mapsSkin$Skin125 = 	(function (_super) {
		__extends(mapsSkin$Skin125, _super);
		function mapsSkin$Skin125() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin125.prototype;

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
		return mapsSkin$Skin125;
	})(eui.Skin);

	var mapsSkin$Skin126 = 	(function (_super) {
		__extends(mapsSkin$Skin126, _super);
		function mapsSkin$Skin126() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin126.prototype;

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
		return mapsSkin$Skin126;
	})(eui.Skin);

	var mapsSkin$Skin127 = 	(function (_super) {
		__extends(mapsSkin$Skin127, _super);
		function mapsSkin$Skin127() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin127.prototype;

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
		return mapsSkin$Skin127;
	})(eui.Skin);

	var mapsSkin$Skin128 = 	(function (_super) {
		__extends(mapsSkin$Skin128, _super);
		function mapsSkin$Skin128() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin128.prototype;

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
		return mapsSkin$Skin128;
	})(eui.Skin);

	var mapsSkin$Skin129 = 	(function (_super) {
		__extends(mapsSkin$Skin129, _super);
		function mapsSkin$Skin129() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin129.prototype;

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
		return mapsSkin$Skin129;
	})(eui.Skin);

	var mapsSkin$Skin130 = 	(function (_super) {
		__extends(mapsSkin$Skin130, _super);
		function mapsSkin$Skin130() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin130.prototype;

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
		return mapsSkin$Skin130;
	})(eui.Skin);

	var mapsSkin$Skin131 = 	(function (_super) {
		__extends(mapsSkin$Skin131, _super);
		function mapsSkin$Skin131() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin131.prototype;

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
		return mapsSkin$Skin131;
	})(eui.Skin);

	var mapsSkin$Skin132 = 	(function (_super) {
		__extends(mapsSkin$Skin132, _super);
		function mapsSkin$Skin132() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin132.prototype;

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
		return mapsSkin$Skin132;
	})(eui.Skin);

	var mapsSkin$Skin133 = 	(function (_super) {
		__extends(mapsSkin$Skin133, _super);
		function mapsSkin$Skin133() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin133.prototype;

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
		return mapsSkin$Skin133;
	})(eui.Skin);

	var mapsSkin$Skin134 = 	(function (_super) {
		__extends(mapsSkin$Skin134, _super);
		function mapsSkin$Skin134() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin134.prototype;

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
		return mapsSkin$Skin134;
	})(eui.Skin);

	var mapsSkin$Skin135 = 	(function (_super) {
		__extends(mapsSkin$Skin135, _super);
		function mapsSkin$Skin135() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin135.prototype;

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
		return mapsSkin$Skin135;
	})(eui.Skin);

	var mapsSkin$Skin136 = 	(function (_super) {
		__extends(mapsSkin$Skin136, _super);
		function mapsSkin$Skin136() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin136.prototype;

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
		return mapsSkin$Skin136;
	})(eui.Skin);

	var mapsSkin$Skin137 = 	(function (_super) {
		__extends(mapsSkin$Skin137, _super);
		function mapsSkin$Skin137() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin137.prototype;

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
		return mapsSkin$Skin137;
	})(eui.Skin);

	var mapsSkin$Skin138 = 	(function (_super) {
		__extends(mapsSkin$Skin138, _super);
		function mapsSkin$Skin138() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin138.prototype;

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
		return mapsSkin$Skin138;
	})(eui.Skin);

	var mapsSkin$Skin139 = 	(function (_super) {
		__extends(mapsSkin$Skin139, _super);
		function mapsSkin$Skin139() {
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
		var _proto = mapsSkin$Skin139.prototype;

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
		return mapsSkin$Skin139;
	})(eui.Skin);

	function mapsSkin() {
		_super.call(this);
		this.skinParts = ["background","t1","lx114","lx105","lx106","lx107","lx108","lx109","lx097","lx087","lx077","b1","zd022","zd035","zd083","zd147","zd151","lx081","lx082","lx092","lx103","lx113","lx124","lx134","lx145","lx155","lx166","lx011","lx012","lx013","lx014","lx015","lx016","lx017","lx018","lx021","lx023","lx024","lx025","lx026","lx027","lx028","lx029","lx031","lx032","lx033","lx034","lx036","lx037","lx041","lx042","lx043","lx044","lx045","lx046","lx047","lx051","lx055","lx056","lx061","lx062","lx063","lx064","lx065","lx066","lx067","lx071","lx072","lx073","lx074","lx075","lx076","lx078","lx084","lx085","lx086","lx088","lx089","lx091","lx093","lx094","lx095","lx096","lx098","lx101","lx102","lx104","lx111","lx112","lx115","lx116","lx117","lx118","lx121","lx122","lx123","lx125","lx126","lx128","lx129","lx135","lx136","lx138","lx141","lx142","lx143","lx144","lx146","lx148","lx149","lx152","lx153","lx154","lx156","lx157","lx158","lx161","lx162","lx163","lx164","lx165","lx167","lx168","lx169","jingdian1","b0","t2"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.background_i(),this.t1_i(),this.lx114_i(),this.lx105_i(),this.lx106_i(),this.lx107_i(),this.lx108_i(),this.lx109_i(),this.lx097_i(),this.lx087_i(),this.lx077_i(),this.b1_i(),this.zd022_i(),this.zd035_i(),this.zd083_i(),this.zd147_i(),this.zd151_i(),this.lx081_i(),this.lx082_i(),this.lx092_i(),this.lx103_i(),this.lx113_i(),this.lx124_i(),this.lx134_i(),this.lx145_i(),this.lx155_i(),this.lx166_i(),this.lx011_i(),this.lx012_i(),this.lx013_i(),this.lx014_i(),this.lx015_i(),this.lx016_i(),this.lx017_i(),this.lx018_i(),this.lx021_i(),this.lx023_i(),this.lx024_i(),this.lx025_i(),this.lx026_i(),this.lx027_i(),this.lx028_i(),this.lx029_i(),this.lx031_i(),this.lx032_i(),this.lx033_i(),this.lx034_i(),this.lx036_i(),this.lx037_i(),this.lx041_i(),this.lx042_i(),this.lx043_i(),this.lx044_i(),this.lx045_i(),this.lx046_i(),this.lx047_i(),this.lx051_i(),this.lx055_i(),this.lx056_i(),this.lx061_i(),this.lx062_i(),this.lx063_i(),this.lx064_i(),this.lx065_i(),this.lx066_i(),this.lx067_i(),this.lx071_i(),this.lx072_i(),this.lx073_i(),this.lx074_i(),this.lx075_i(),this.lx076_i(),this.lx078_i(),this.lx084_i(),this.lx085_i(),this.lx086_i(),this.lx088_i(),this.lx089_i(),this.lx091_i(),this.lx093_i(),this.lx094_i(),this.lx095_i(),this.lx096_i(),this.lx098_i(),this.lx101_i(),this.lx102_i(),this.lx104_i(),this.lx111_i(),this.lx112_i(),this.lx115_i(),this.lx116_i(),this.lx117_i(),this.lx118_i(),this.lx121_i(),this.lx122_i(),this.lx123_i(),this.lx125_i(),this.lx126_i(),this.lx128_i(),this.lx129_i(),this.lx135_i(),this.lx136_i(),this.lx138_i(),this.lx141_i(),this.lx142_i(),this.lx143_i(),this.lx144_i(),this.lx146_i(),this.lx148_i(),this.lx149_i(),this.lx152_i(),this.lx153_i(),this.lx154_i(),this.lx156_i(),this.lx157_i(),this.lx158_i(),this.lx161_i(),this.lx162_i(),this.lx163_i(),this.lx164_i(),this.lx165_i(),this.lx167_i(),this.lx168_i(),this.lx169_i(),this.jingdian1_i(),this.b0_i(),this.t2_i()];
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
		t.text = "请选择要添加的站点";
		t.textColor = 0xf9dc77;
		t.width = 272.33;
		t.x = 193.34;
		t.y = 20;
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
		t.skinName = mapsSkin$Skin22;
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
		t.skinName = mapsSkin$Skin23;
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
		t.skinName = mapsSkin$Skin24;
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
		t.skinName = mapsSkin$Skin25;
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
		t.skinName = mapsSkin$Skin26;
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
		t.skinName = mapsSkin$Skin27;
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
		t.skinName = mapsSkin$Skin28;
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
		t.skinName = mapsSkin$Skin29;
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
		t.skinName = mapsSkin$Skin30;
		return t;
	};
	_proto.b1_i = function () {
		var t = new eui.Button();
		this.b1 = t;
		t.label = "确定";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 465.67;
		t.y = 1076.33;
		t.skinName = mapsSkin$Skin31;
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
		t.skinName = mapsSkin$Skin32;
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
		t.skinName = mapsSkin$Skin33;
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
		t.skinName = mapsSkin$Skin34;
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
		t.skinName = mapsSkin$Skin35;
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
		t.skinName = mapsSkin$Skin36;
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
		t.skinName = mapsSkin$Skin37;
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
		t.skinName = mapsSkin$Skin38;
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
		t.skinName = mapsSkin$Skin39;
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
		t.skinName = mapsSkin$Skin40;
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
		t.skinName = mapsSkin$Skin41;
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
		t.skinName = mapsSkin$Skin42;
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
		t.skinName = mapsSkin$Skin43;
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
		t.skinName = mapsSkin$Skin44;
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
		t.skinName = mapsSkin$Skin45;
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
		t.skinName = mapsSkin$Skin46;
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
		t.skinName = mapsSkin$Skin47;
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
		t.skinName = mapsSkin$Skin48;
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
		t.skinName = mapsSkin$Skin49;
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
		t.skinName = mapsSkin$Skin50;
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
		t.skinName = mapsSkin$Skin51;
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
		t.skinName = mapsSkin$Skin52;
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
		t.skinName = mapsSkin$Skin53;
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
		t.skinName = mapsSkin$Skin54;
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
		t.skinName = mapsSkin$Skin55;
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
		t.skinName = mapsSkin$Skin56;
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
		t.skinName = mapsSkin$Skin57;
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
		t.skinName = mapsSkin$Skin58;
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
		t.skinName = mapsSkin$Skin59;
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
		t.skinName = mapsSkin$Skin60;
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
		t.skinName = mapsSkin$Skin61;
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
		t.skinName = mapsSkin$Skin62;
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
		t.skinName = mapsSkin$Skin63;
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
		t.skinName = mapsSkin$Skin64;
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
		t.skinName = mapsSkin$Skin65;
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
		t.skinName = mapsSkin$Skin66;
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
		t.skinName = mapsSkin$Skin67;
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
		t.skinName = mapsSkin$Skin68;
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
		t.skinName = mapsSkin$Skin69;
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
		t.skinName = mapsSkin$Skin70;
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
		t.skinName = mapsSkin$Skin71;
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
		t.skinName = mapsSkin$Skin72;
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
		t.skinName = mapsSkin$Skin73;
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
		t.skinName = mapsSkin$Skin74;
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
		t.skinName = mapsSkin$Skin75;
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
		t.skinName = mapsSkin$Skin76;
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
		t.skinName = mapsSkin$Skin77;
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
		t.skinName = mapsSkin$Skin78;
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
		t.skinName = mapsSkin$Skin79;
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
		t.skinName = mapsSkin$Skin80;
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
		t.skinName = mapsSkin$Skin81;
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
		t.skinName = mapsSkin$Skin82;
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
		t.skinName = mapsSkin$Skin83;
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
		t.skinName = mapsSkin$Skin84;
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
		t.skinName = mapsSkin$Skin85;
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
		t.skinName = mapsSkin$Skin86;
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
		t.skinName = mapsSkin$Skin87;
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
		t.skinName = mapsSkin$Skin88;
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
		t.skinName = mapsSkin$Skin89;
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
		t.skinName = mapsSkin$Skin90;
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
		t.skinName = mapsSkin$Skin91;
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
		t.skinName = mapsSkin$Skin92;
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
		t.skinName = mapsSkin$Skin93;
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
		t.skinName = mapsSkin$Skin94;
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
		t.skinName = mapsSkin$Skin95;
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
		t.skinName = mapsSkin$Skin96;
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
		t.skinName = mapsSkin$Skin97;
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
		t.skinName = mapsSkin$Skin98;
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
		t.skinName = mapsSkin$Skin99;
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
		t.skinName = mapsSkin$Skin100;
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
		t.skinName = mapsSkin$Skin101;
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
		t.skinName = mapsSkin$Skin102;
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
		t.skinName = mapsSkin$Skin103;
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
		t.skinName = mapsSkin$Skin104;
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
		t.skinName = mapsSkin$Skin105;
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
		t.skinName = mapsSkin$Skin106;
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
		t.skinName = mapsSkin$Skin107;
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
		t.skinName = mapsSkin$Skin108;
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
		t.skinName = mapsSkin$Skin109;
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
		t.skinName = mapsSkin$Skin110;
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
		t.skinName = mapsSkin$Skin111;
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
		t.skinName = mapsSkin$Skin112;
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
		t.skinName = mapsSkin$Skin113;
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
		t.skinName = mapsSkin$Skin114;
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
		t.skinName = mapsSkin$Skin115;
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
		t.skinName = mapsSkin$Skin116;
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
		t.skinName = mapsSkin$Skin117;
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
		t.skinName = mapsSkin$Skin118;
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
		t.skinName = mapsSkin$Skin119;
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
		t.skinName = mapsSkin$Skin120;
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
		t.skinName = mapsSkin$Skin121;
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
		t.skinName = mapsSkin$Skin122;
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
		t.skinName = mapsSkin$Skin123;
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
		t.skinName = mapsSkin$Skin124;
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
		t.skinName = mapsSkin$Skin125;
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
		t.skinName = mapsSkin$Skin126;
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
		t.skinName = mapsSkin$Skin127;
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
		t.skinName = mapsSkin$Skin128;
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
		t.skinName = mapsSkin$Skin129;
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
		t.skinName = mapsSkin$Skin130;
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
		t.skinName = mapsSkin$Skin131;
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
		t.skinName = mapsSkin$Skin132;
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
		t.skinName = mapsSkin$Skin133;
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
		t.skinName = mapsSkin$Skin134;
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
		t.skinName = mapsSkin$Skin135;
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
		t.skinName = mapsSkin$Skin136;
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
		t.skinName = mapsSkin$Skin137;
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
		t.skinName = mapsSkin$Skin138;
		return t;
	};
	_proto.jingdian1_i = function () {
		var t = new eui.Image();
		this.jingdian1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 117.23;
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.source = "jingdian_png";
		t.width = 102.23;
		t.x = 458;
		t.y = 311.5;
		return t;
	};
	_proto.b0_i = function () {
		var t = new eui.Button();
		this.b0 = t;
		t.label = "";
		t.scaleX = 0.1;
		t.scaleY = 0.1;
		t.x = 590.6;
		t.y = 0;
		t.skinName = mapsSkin$Skin139;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Label();
		this.t2 = t;
		t.height = 50;
		t.size = 50;
		t.text = "";
		t.width = 300;
		t.x = 80;
		t.y = 1070;
		return t;
	};
	return mapsSkin;
})(eui.Skin);generateEUI.paths['resource/skins/jingdian.exml'] = window.jingdianSkin = (function (_super) {
	__extends(jingdianSkin, _super);
	var jingdianSkin$Skin140 = 	(function (_super) {
		__extends(jingdianSkin$Skin140, _super);
		function jingdianSkin$Skin140() {
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
					])
			];
		}
		var _proto = jingdianSkin$Skin140.prototype;

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
		return jingdianSkin$Skin140;
	})(eui.Skin);

	function jingdianSkin() {
		_super.call(this);
		this.skinParts = ["background","jingdian","jdname","jianjie","b0"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.background_i(),this.jingdian_i(),this.jdname_i(),this.jianjie_i(),this.b0_i()];
	}
	var _proto = jingdianSkin.prototype;

	_proto.background_i = function () {
		var t = new eui.Image();
		this.background = t;
		t.source = "tanchukuang_png";
		t.x = 0;
		t.y = 343;
		return t;
	};
	_proto.jingdian_i = function () {
		var t = new eui.Image();
		this.jingdian = t;
		t.scaleX = 3;
		t.scaleY = 3;
		t.source = "jingdian_png";
		t.x = 20;
		t.y = 444.2;
		return t;
	};
	_proto.jdname_i = function () {
		var t = new eui.Label();
		this.jdname = t;
		t.height = 50;
		t.size = 50;
		t.text = "";
		t.textColor = 0xfc1111;
		t.width = 123;
		t.x = 108.5;
		t.y = 376.7;
		return t;
	};
	_proto.jianjie_i = function () {
		var t = new eui.Label();
		this.jianjie = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 319.79;
		t.size = 35;
		t.text = "";
		t.textColor = 0xfc0a0a;
		t.width = 272;
		t.x = 347.21;
		t.y = 456.81;
		return t;
	};
	_proto.b0_i = function () {
		var t = new eui.Button();
		this.b0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "";
		t.width = 50;
		t.x = 569.21;
		t.y = 351.7;
		t.skinName = jingdianSkin$Skin140;
		return t;
	};
	return jingdianSkin;
})(eui.Skin);generateEUI.paths['resource/skins/maps.exml'] = window.mapsSkin = (function (_super) {
	__extends(mapsSkin, _super);
	var mapsSkin$Skin141 = 	(function (_super) {
		__extends(mapsSkin$Skin141, _super);
		function mapsSkin$Skin141() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin141.prototype;

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
		return mapsSkin$Skin141;
	})(eui.Skin);

	var mapsSkin$Skin142 = 	(function (_super) {
		__extends(mapsSkin$Skin142, _super);
		function mapsSkin$Skin142() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin142.prototype;

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
		return mapsSkin$Skin142;
	})(eui.Skin);

	var mapsSkin$Skin143 = 	(function (_super) {
		__extends(mapsSkin$Skin143, _super);
		function mapsSkin$Skin143() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin143.prototype;

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
		return mapsSkin$Skin143;
	})(eui.Skin);

	var mapsSkin$Skin144 = 	(function (_super) {
		__extends(mapsSkin$Skin144, _super);
		function mapsSkin$Skin144() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin144.prototype;

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
		return mapsSkin$Skin144;
	})(eui.Skin);

	var mapsSkin$Skin145 = 	(function (_super) {
		__extends(mapsSkin$Skin145, _super);
		function mapsSkin$Skin145() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin145.prototype;

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
		return mapsSkin$Skin145;
	})(eui.Skin);

	var mapsSkin$Skin146 = 	(function (_super) {
		__extends(mapsSkin$Skin146, _super);
		function mapsSkin$Skin146() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin146.prototype;

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
		return mapsSkin$Skin146;
	})(eui.Skin);

	var mapsSkin$Skin147 = 	(function (_super) {
		__extends(mapsSkin$Skin147, _super);
		function mapsSkin$Skin147() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin147.prototype;

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
		return mapsSkin$Skin147;
	})(eui.Skin);

	var mapsSkin$Skin148 = 	(function (_super) {
		__extends(mapsSkin$Skin148, _super);
		function mapsSkin$Skin148() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin148.prototype;

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
		return mapsSkin$Skin148;
	})(eui.Skin);

	var mapsSkin$Skin149 = 	(function (_super) {
		__extends(mapsSkin$Skin149, _super);
		function mapsSkin$Skin149() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin149.prototype;

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
		return mapsSkin$Skin149;
	})(eui.Skin);

	var mapsSkin$Skin150 = 	(function (_super) {
		__extends(mapsSkin$Skin150, _super);
		function mapsSkin$Skin150() {
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
						new eui.SetProperty("_Image1","source","red2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","red2_png")
					])
			];
		}
		var _proto = mapsSkin$Skin150.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "red2_png";
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
		return mapsSkin$Skin150;
	})(eui.Skin);

	var mapsSkin$Skin151 = 	(function (_super) {
		__extends(mapsSkin$Skin151, _super);
		function mapsSkin$Skin151() {
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
						new eui.SetProperty("_Image1","source","red2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","red2_png")
					])
			];
		}
		var _proto = mapsSkin$Skin151.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "red2_png";
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
		return mapsSkin$Skin151;
	})(eui.Skin);

	var mapsSkin$Skin152 = 	(function (_super) {
		__extends(mapsSkin$Skin152, _super);
		function mapsSkin$Skin152() {
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
						new eui.SetProperty("_Image1","source","red2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","red2_png")
					])
			];
		}
		var _proto = mapsSkin$Skin152.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "red2_png";
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
		return mapsSkin$Skin152;
	})(eui.Skin);

	var mapsSkin$Skin153 = 	(function (_super) {
		__extends(mapsSkin$Skin153, _super);
		function mapsSkin$Skin153() {
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
						new eui.SetProperty("_Image1","source","red2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","red2_png")
					])
			];
		}
		var _proto = mapsSkin$Skin153.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "red2_png";
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
		return mapsSkin$Skin153;
	})(eui.Skin);

	var mapsSkin$Skin154 = 	(function (_super) {
		__extends(mapsSkin$Skin154, _super);
		function mapsSkin$Skin154() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin154.prototype;

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
		return mapsSkin$Skin154;
	})(eui.Skin);

	var mapsSkin$Skin155 = 	(function (_super) {
		__extends(mapsSkin$Skin155, _super);
		function mapsSkin$Skin155() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin155.prototype;

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
		return mapsSkin$Skin155;
	})(eui.Skin);

	var mapsSkin$Skin156 = 	(function (_super) {
		__extends(mapsSkin$Skin156, _super);
		function mapsSkin$Skin156() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin156.prototype;

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
		return mapsSkin$Skin156;
	})(eui.Skin);

	var mapsSkin$Skin157 = 	(function (_super) {
		__extends(mapsSkin$Skin157, _super);
		function mapsSkin$Skin157() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin157.prototype;

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
		return mapsSkin$Skin157;
	})(eui.Skin);

	var mapsSkin$Skin158 = 	(function (_super) {
		__extends(mapsSkin$Skin158, _super);
		function mapsSkin$Skin158() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin158.prototype;

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
		return mapsSkin$Skin158;
	})(eui.Skin);

	var mapsSkin$Skin159 = 	(function (_super) {
		__extends(mapsSkin$Skin159, _super);
		function mapsSkin$Skin159() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin159.prototype;

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
		return mapsSkin$Skin159;
	})(eui.Skin);

	var mapsSkin$Skin160 = 	(function (_super) {
		__extends(mapsSkin$Skin160, _super);
		function mapsSkin$Skin160() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin160.prototype;

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
		return mapsSkin$Skin160;
	})(eui.Skin);

	var mapsSkin$Skin161 = 	(function (_super) {
		__extends(mapsSkin$Skin161, _super);
		function mapsSkin$Skin161() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin161.prototype;

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
		return mapsSkin$Skin161;
	})(eui.Skin);

	var mapsSkin$Skin162 = 	(function (_super) {
		__extends(mapsSkin$Skin162, _super);
		function mapsSkin$Skin162() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin162.prototype;

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
		return mapsSkin$Skin162;
	})(eui.Skin);

	var mapsSkin$Skin163 = 	(function (_super) {
		__extends(mapsSkin$Skin163, _super);
		function mapsSkin$Skin163() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin163.prototype;

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
		return mapsSkin$Skin163;
	})(eui.Skin);

	var mapsSkin$Skin164 = 	(function (_super) {
		__extends(mapsSkin$Skin164, _super);
		function mapsSkin$Skin164() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin164.prototype;

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
		return mapsSkin$Skin164;
	})(eui.Skin);

	var mapsSkin$Skin165 = 	(function (_super) {
		__extends(mapsSkin$Skin165, _super);
		function mapsSkin$Skin165() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin165.prototype;

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
		return mapsSkin$Skin165;
	})(eui.Skin);

	var mapsSkin$Skin166 = 	(function (_super) {
		__extends(mapsSkin$Skin166, _super);
		function mapsSkin$Skin166() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin166.prototype;

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
		return mapsSkin$Skin166;
	})(eui.Skin);

	var mapsSkin$Skin167 = 	(function (_super) {
		__extends(mapsSkin$Skin167, _super);
		function mapsSkin$Skin167() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin167.prototype;

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
		return mapsSkin$Skin167;
	})(eui.Skin);

	var mapsSkin$Skin168 = 	(function (_super) {
		__extends(mapsSkin$Skin168, _super);
		function mapsSkin$Skin168() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin168.prototype;

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
		return mapsSkin$Skin168;
	})(eui.Skin);

	var mapsSkin$Skin169 = 	(function (_super) {
		__extends(mapsSkin$Skin169, _super);
		function mapsSkin$Skin169() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin169.prototype;

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
		return mapsSkin$Skin169;
	})(eui.Skin);

	var mapsSkin$Skin170 = 	(function (_super) {
		__extends(mapsSkin$Skin170, _super);
		function mapsSkin$Skin170() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin170.prototype;

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
		return mapsSkin$Skin170;
	})(eui.Skin);

	var mapsSkin$Skin171 = 	(function (_super) {
		__extends(mapsSkin$Skin171, _super);
		function mapsSkin$Skin171() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin171.prototype;

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
		return mapsSkin$Skin171;
	})(eui.Skin);

	var mapsSkin$Skin172 = 	(function (_super) {
		__extends(mapsSkin$Skin172, _super);
		function mapsSkin$Skin172() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin172.prototype;

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
		return mapsSkin$Skin172;
	})(eui.Skin);

	var mapsSkin$Skin173 = 	(function (_super) {
		__extends(mapsSkin$Skin173, _super);
		function mapsSkin$Skin173() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin173.prototype;

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
		return mapsSkin$Skin173;
	})(eui.Skin);

	var mapsSkin$Skin174 = 	(function (_super) {
		__extends(mapsSkin$Skin174, _super);
		function mapsSkin$Skin174() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin174.prototype;

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
		return mapsSkin$Skin174;
	})(eui.Skin);

	var mapsSkin$Skin175 = 	(function (_super) {
		__extends(mapsSkin$Skin175, _super);
		function mapsSkin$Skin175() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin175.prototype;

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
		return mapsSkin$Skin175;
	})(eui.Skin);

	var mapsSkin$Skin176 = 	(function (_super) {
		__extends(mapsSkin$Skin176, _super);
		function mapsSkin$Skin176() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin176.prototype;

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
		return mapsSkin$Skin176;
	})(eui.Skin);

	var mapsSkin$Skin177 = 	(function (_super) {
		__extends(mapsSkin$Skin177, _super);
		function mapsSkin$Skin177() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin177.prototype;

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
		return mapsSkin$Skin177;
	})(eui.Skin);

	var mapsSkin$Skin178 = 	(function (_super) {
		__extends(mapsSkin$Skin178, _super);
		function mapsSkin$Skin178() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin178.prototype;

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
		return mapsSkin$Skin178;
	})(eui.Skin);

	var mapsSkin$Skin179 = 	(function (_super) {
		__extends(mapsSkin$Skin179, _super);
		function mapsSkin$Skin179() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin179.prototype;

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
		return mapsSkin$Skin179;
	})(eui.Skin);

	var mapsSkin$Skin180 = 	(function (_super) {
		__extends(mapsSkin$Skin180, _super);
		function mapsSkin$Skin180() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin180.prototype;

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
		return mapsSkin$Skin180;
	})(eui.Skin);

	var mapsSkin$Skin181 = 	(function (_super) {
		__extends(mapsSkin$Skin181, _super);
		function mapsSkin$Skin181() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin181.prototype;

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
		return mapsSkin$Skin181;
	})(eui.Skin);

	var mapsSkin$Skin182 = 	(function (_super) {
		__extends(mapsSkin$Skin182, _super);
		function mapsSkin$Skin182() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin182.prototype;

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
		return mapsSkin$Skin182;
	})(eui.Skin);

	var mapsSkin$Skin183 = 	(function (_super) {
		__extends(mapsSkin$Skin183, _super);
		function mapsSkin$Skin183() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin183.prototype;

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
		return mapsSkin$Skin183;
	})(eui.Skin);

	var mapsSkin$Skin184 = 	(function (_super) {
		__extends(mapsSkin$Skin184, _super);
		function mapsSkin$Skin184() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin184.prototype;

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
		return mapsSkin$Skin184;
	})(eui.Skin);

	var mapsSkin$Skin185 = 	(function (_super) {
		__extends(mapsSkin$Skin185, _super);
		function mapsSkin$Skin185() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin185.prototype;

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
		return mapsSkin$Skin185;
	})(eui.Skin);

	var mapsSkin$Skin186 = 	(function (_super) {
		__extends(mapsSkin$Skin186, _super);
		function mapsSkin$Skin186() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin186.prototype;

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
		return mapsSkin$Skin186;
	})(eui.Skin);

	var mapsSkin$Skin187 = 	(function (_super) {
		__extends(mapsSkin$Skin187, _super);
		function mapsSkin$Skin187() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin187.prototype;

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
		return mapsSkin$Skin187;
	})(eui.Skin);

	var mapsSkin$Skin188 = 	(function (_super) {
		__extends(mapsSkin$Skin188, _super);
		function mapsSkin$Skin188() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin188.prototype;

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
		return mapsSkin$Skin188;
	})(eui.Skin);

	var mapsSkin$Skin189 = 	(function (_super) {
		__extends(mapsSkin$Skin189, _super);
		function mapsSkin$Skin189() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin189.prototype;

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
		return mapsSkin$Skin189;
	})(eui.Skin);

	var mapsSkin$Skin190 = 	(function (_super) {
		__extends(mapsSkin$Skin190, _super);
		function mapsSkin$Skin190() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin190.prototype;

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
		return mapsSkin$Skin190;
	})(eui.Skin);

	var mapsSkin$Skin191 = 	(function (_super) {
		__extends(mapsSkin$Skin191, _super);
		function mapsSkin$Skin191() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin191.prototype;

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
		return mapsSkin$Skin191;
	})(eui.Skin);

	var mapsSkin$Skin192 = 	(function (_super) {
		__extends(mapsSkin$Skin192, _super);
		function mapsSkin$Skin192() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin192.prototype;

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
		return mapsSkin$Skin192;
	})(eui.Skin);

	var mapsSkin$Skin193 = 	(function (_super) {
		__extends(mapsSkin$Skin193, _super);
		function mapsSkin$Skin193() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin193.prototype;

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
		return mapsSkin$Skin193;
	})(eui.Skin);

	var mapsSkin$Skin194 = 	(function (_super) {
		__extends(mapsSkin$Skin194, _super);
		function mapsSkin$Skin194() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin194.prototype;

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
		return mapsSkin$Skin194;
	})(eui.Skin);

	var mapsSkin$Skin195 = 	(function (_super) {
		__extends(mapsSkin$Skin195, _super);
		function mapsSkin$Skin195() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin195.prototype;

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
		return mapsSkin$Skin195;
	})(eui.Skin);

	var mapsSkin$Skin196 = 	(function (_super) {
		__extends(mapsSkin$Skin196, _super);
		function mapsSkin$Skin196() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin196.prototype;

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
		return mapsSkin$Skin196;
	})(eui.Skin);

	var mapsSkin$Skin197 = 	(function (_super) {
		__extends(mapsSkin$Skin197, _super);
		function mapsSkin$Skin197() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin197.prototype;

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
		return mapsSkin$Skin197;
	})(eui.Skin);

	var mapsSkin$Skin198 = 	(function (_super) {
		__extends(mapsSkin$Skin198, _super);
		function mapsSkin$Skin198() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin198.prototype;

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
		return mapsSkin$Skin198;
	})(eui.Skin);

	var mapsSkin$Skin199 = 	(function (_super) {
		__extends(mapsSkin$Skin199, _super);
		function mapsSkin$Skin199() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin199.prototype;

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
		return mapsSkin$Skin199;
	})(eui.Skin);

	var mapsSkin$Skin200 = 	(function (_super) {
		__extends(mapsSkin$Skin200, _super);
		function mapsSkin$Skin200() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin200.prototype;

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
		return mapsSkin$Skin200;
	})(eui.Skin);

	var mapsSkin$Skin201 = 	(function (_super) {
		__extends(mapsSkin$Skin201, _super);
		function mapsSkin$Skin201() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin201.prototype;

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
		return mapsSkin$Skin201;
	})(eui.Skin);

	var mapsSkin$Skin202 = 	(function (_super) {
		__extends(mapsSkin$Skin202, _super);
		function mapsSkin$Skin202() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin202.prototype;

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
		return mapsSkin$Skin202;
	})(eui.Skin);

	var mapsSkin$Skin203 = 	(function (_super) {
		__extends(mapsSkin$Skin203, _super);
		function mapsSkin$Skin203() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin203.prototype;

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
		return mapsSkin$Skin203;
	})(eui.Skin);

	var mapsSkin$Skin204 = 	(function (_super) {
		__extends(mapsSkin$Skin204, _super);
		function mapsSkin$Skin204() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin204.prototype;

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
		return mapsSkin$Skin204;
	})(eui.Skin);

	var mapsSkin$Skin205 = 	(function (_super) {
		__extends(mapsSkin$Skin205, _super);
		function mapsSkin$Skin205() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin205.prototype;

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
		return mapsSkin$Skin205;
	})(eui.Skin);

	var mapsSkin$Skin206 = 	(function (_super) {
		__extends(mapsSkin$Skin206, _super);
		function mapsSkin$Skin206() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin206.prototype;

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
		return mapsSkin$Skin206;
	})(eui.Skin);

	var mapsSkin$Skin207 = 	(function (_super) {
		__extends(mapsSkin$Skin207, _super);
		function mapsSkin$Skin207() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin207.prototype;

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
		return mapsSkin$Skin207;
	})(eui.Skin);

	var mapsSkin$Skin208 = 	(function (_super) {
		__extends(mapsSkin$Skin208, _super);
		function mapsSkin$Skin208() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin208.prototype;

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
		return mapsSkin$Skin208;
	})(eui.Skin);

	var mapsSkin$Skin209 = 	(function (_super) {
		__extends(mapsSkin$Skin209, _super);
		function mapsSkin$Skin209() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin209.prototype;

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
		return mapsSkin$Skin209;
	})(eui.Skin);

	var mapsSkin$Skin210 = 	(function (_super) {
		__extends(mapsSkin$Skin210, _super);
		function mapsSkin$Skin210() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin210.prototype;

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
		return mapsSkin$Skin210;
	})(eui.Skin);

	var mapsSkin$Skin211 = 	(function (_super) {
		__extends(mapsSkin$Skin211, _super);
		function mapsSkin$Skin211() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin211.prototype;

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
		return mapsSkin$Skin211;
	})(eui.Skin);

	var mapsSkin$Skin212 = 	(function (_super) {
		__extends(mapsSkin$Skin212, _super);
		function mapsSkin$Skin212() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin212.prototype;

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
		return mapsSkin$Skin212;
	})(eui.Skin);

	var mapsSkin$Skin213 = 	(function (_super) {
		__extends(mapsSkin$Skin213, _super);
		function mapsSkin$Skin213() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin213.prototype;

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
		return mapsSkin$Skin213;
	})(eui.Skin);

	var mapsSkin$Skin214 = 	(function (_super) {
		__extends(mapsSkin$Skin214, _super);
		function mapsSkin$Skin214() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin214.prototype;

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
		return mapsSkin$Skin214;
	})(eui.Skin);

	var mapsSkin$Skin215 = 	(function (_super) {
		__extends(mapsSkin$Skin215, _super);
		function mapsSkin$Skin215() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin215.prototype;

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
		return mapsSkin$Skin215;
	})(eui.Skin);

	var mapsSkin$Skin216 = 	(function (_super) {
		__extends(mapsSkin$Skin216, _super);
		function mapsSkin$Skin216() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin216.prototype;

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
		return mapsSkin$Skin216;
	})(eui.Skin);

	var mapsSkin$Skin217 = 	(function (_super) {
		__extends(mapsSkin$Skin217, _super);
		function mapsSkin$Skin217() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin217.prototype;

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
		return mapsSkin$Skin217;
	})(eui.Skin);

	var mapsSkin$Skin218 = 	(function (_super) {
		__extends(mapsSkin$Skin218, _super);
		function mapsSkin$Skin218() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin218.prototype;

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
		return mapsSkin$Skin218;
	})(eui.Skin);

	var mapsSkin$Skin219 = 	(function (_super) {
		__extends(mapsSkin$Skin219, _super);
		function mapsSkin$Skin219() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin219.prototype;

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
		return mapsSkin$Skin219;
	})(eui.Skin);

	var mapsSkin$Skin220 = 	(function (_super) {
		__extends(mapsSkin$Skin220, _super);
		function mapsSkin$Skin220() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin220.prototype;

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
		return mapsSkin$Skin220;
	})(eui.Skin);

	var mapsSkin$Skin221 = 	(function (_super) {
		__extends(mapsSkin$Skin221, _super);
		function mapsSkin$Skin221() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin221.prototype;

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
		return mapsSkin$Skin221;
	})(eui.Skin);

	var mapsSkin$Skin222 = 	(function (_super) {
		__extends(mapsSkin$Skin222, _super);
		function mapsSkin$Skin222() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin222.prototype;

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
		return mapsSkin$Skin222;
	})(eui.Skin);

	var mapsSkin$Skin223 = 	(function (_super) {
		__extends(mapsSkin$Skin223, _super);
		function mapsSkin$Skin223() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin223.prototype;

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
		return mapsSkin$Skin223;
	})(eui.Skin);

	var mapsSkin$Skin224 = 	(function (_super) {
		__extends(mapsSkin$Skin224, _super);
		function mapsSkin$Skin224() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin224.prototype;

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
		return mapsSkin$Skin224;
	})(eui.Skin);

	var mapsSkin$Skin225 = 	(function (_super) {
		__extends(mapsSkin$Skin225, _super);
		function mapsSkin$Skin225() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin225.prototype;

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
		return mapsSkin$Skin225;
	})(eui.Skin);

	var mapsSkin$Skin226 = 	(function (_super) {
		__extends(mapsSkin$Skin226, _super);
		function mapsSkin$Skin226() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin226.prototype;

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
		return mapsSkin$Skin226;
	})(eui.Skin);

	var mapsSkin$Skin227 = 	(function (_super) {
		__extends(mapsSkin$Skin227, _super);
		function mapsSkin$Skin227() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin227.prototype;

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
		return mapsSkin$Skin227;
	})(eui.Skin);

	var mapsSkin$Skin228 = 	(function (_super) {
		__extends(mapsSkin$Skin228, _super);
		function mapsSkin$Skin228() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin228.prototype;

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
		return mapsSkin$Skin228;
	})(eui.Skin);

	var mapsSkin$Skin229 = 	(function (_super) {
		__extends(mapsSkin$Skin229, _super);
		function mapsSkin$Skin229() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin229.prototype;

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
		return mapsSkin$Skin229;
	})(eui.Skin);

	var mapsSkin$Skin230 = 	(function (_super) {
		__extends(mapsSkin$Skin230, _super);
		function mapsSkin$Skin230() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin230.prototype;

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
		return mapsSkin$Skin230;
	})(eui.Skin);

	var mapsSkin$Skin231 = 	(function (_super) {
		__extends(mapsSkin$Skin231, _super);
		function mapsSkin$Skin231() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin231.prototype;

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
		return mapsSkin$Skin231;
	})(eui.Skin);

	var mapsSkin$Skin232 = 	(function (_super) {
		__extends(mapsSkin$Skin232, _super);
		function mapsSkin$Skin232() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin232.prototype;

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
		return mapsSkin$Skin232;
	})(eui.Skin);

	var mapsSkin$Skin233 = 	(function (_super) {
		__extends(mapsSkin$Skin233, _super);
		function mapsSkin$Skin233() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin233.prototype;

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
		return mapsSkin$Skin233;
	})(eui.Skin);

	var mapsSkin$Skin234 = 	(function (_super) {
		__extends(mapsSkin$Skin234, _super);
		function mapsSkin$Skin234() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin234.prototype;

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
		return mapsSkin$Skin234;
	})(eui.Skin);

	var mapsSkin$Skin235 = 	(function (_super) {
		__extends(mapsSkin$Skin235, _super);
		function mapsSkin$Skin235() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin235.prototype;

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
		return mapsSkin$Skin235;
	})(eui.Skin);

	var mapsSkin$Skin236 = 	(function (_super) {
		__extends(mapsSkin$Skin236, _super);
		function mapsSkin$Skin236() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin236.prototype;

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
		return mapsSkin$Skin236;
	})(eui.Skin);

	var mapsSkin$Skin237 = 	(function (_super) {
		__extends(mapsSkin$Skin237, _super);
		function mapsSkin$Skin237() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin237.prototype;

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
		return mapsSkin$Skin237;
	})(eui.Skin);

	var mapsSkin$Skin238 = 	(function (_super) {
		__extends(mapsSkin$Skin238, _super);
		function mapsSkin$Skin238() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin238.prototype;

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
		return mapsSkin$Skin238;
	})(eui.Skin);

	var mapsSkin$Skin239 = 	(function (_super) {
		__extends(mapsSkin$Skin239, _super);
		function mapsSkin$Skin239() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin239.prototype;

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
		return mapsSkin$Skin239;
	})(eui.Skin);

	var mapsSkin$Skin240 = 	(function (_super) {
		__extends(mapsSkin$Skin240, _super);
		function mapsSkin$Skin240() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin240.prototype;

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
		return mapsSkin$Skin240;
	})(eui.Skin);

	var mapsSkin$Skin241 = 	(function (_super) {
		__extends(mapsSkin$Skin241, _super);
		function mapsSkin$Skin241() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin241.prototype;

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
		return mapsSkin$Skin241;
	})(eui.Skin);

	var mapsSkin$Skin242 = 	(function (_super) {
		__extends(mapsSkin$Skin242, _super);
		function mapsSkin$Skin242() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin242.prototype;

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
		return mapsSkin$Skin242;
	})(eui.Skin);

	var mapsSkin$Skin243 = 	(function (_super) {
		__extends(mapsSkin$Skin243, _super);
		function mapsSkin$Skin243() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin243.prototype;

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
		return mapsSkin$Skin243;
	})(eui.Skin);

	var mapsSkin$Skin244 = 	(function (_super) {
		__extends(mapsSkin$Skin244, _super);
		function mapsSkin$Skin244() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin244.prototype;

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
		return mapsSkin$Skin244;
	})(eui.Skin);

	var mapsSkin$Skin245 = 	(function (_super) {
		__extends(mapsSkin$Skin245, _super);
		function mapsSkin$Skin245() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin245.prototype;

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
		return mapsSkin$Skin245;
	})(eui.Skin);

	var mapsSkin$Skin246 = 	(function (_super) {
		__extends(mapsSkin$Skin246, _super);
		function mapsSkin$Skin246() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin246.prototype;

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
		return mapsSkin$Skin246;
	})(eui.Skin);

	var mapsSkin$Skin247 = 	(function (_super) {
		__extends(mapsSkin$Skin247, _super);
		function mapsSkin$Skin247() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin247.prototype;

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
		return mapsSkin$Skin247;
	})(eui.Skin);

	var mapsSkin$Skin248 = 	(function (_super) {
		__extends(mapsSkin$Skin248, _super);
		function mapsSkin$Skin248() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin248.prototype;

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
		return mapsSkin$Skin248;
	})(eui.Skin);

	var mapsSkin$Skin249 = 	(function (_super) {
		__extends(mapsSkin$Skin249, _super);
		function mapsSkin$Skin249() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin249.prototype;

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
		return mapsSkin$Skin249;
	})(eui.Skin);

	var mapsSkin$Skin250 = 	(function (_super) {
		__extends(mapsSkin$Skin250, _super);
		function mapsSkin$Skin250() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin250.prototype;

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
		return mapsSkin$Skin250;
	})(eui.Skin);

	var mapsSkin$Skin251 = 	(function (_super) {
		__extends(mapsSkin$Skin251, _super);
		function mapsSkin$Skin251() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin251.prototype;

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
		return mapsSkin$Skin251;
	})(eui.Skin);

	var mapsSkin$Skin252 = 	(function (_super) {
		__extends(mapsSkin$Skin252, _super);
		function mapsSkin$Skin252() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin252.prototype;

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
		return mapsSkin$Skin252;
	})(eui.Skin);

	var mapsSkin$Skin253 = 	(function (_super) {
		__extends(mapsSkin$Skin253, _super);
		function mapsSkin$Skin253() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin253.prototype;

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
		return mapsSkin$Skin253;
	})(eui.Skin);

	var mapsSkin$Skin254 = 	(function (_super) {
		__extends(mapsSkin$Skin254, _super);
		function mapsSkin$Skin254() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin254.prototype;

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
		return mapsSkin$Skin254;
	})(eui.Skin);

	var mapsSkin$Skin255 = 	(function (_super) {
		__extends(mapsSkin$Skin255, _super);
		function mapsSkin$Skin255() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin255.prototype;

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
		return mapsSkin$Skin255;
	})(eui.Skin);

	var mapsSkin$Skin256 = 	(function (_super) {
		__extends(mapsSkin$Skin256, _super);
		function mapsSkin$Skin256() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin256.prototype;

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
		return mapsSkin$Skin256;
	})(eui.Skin);

	var mapsSkin$Skin257 = 	(function (_super) {
		__extends(mapsSkin$Skin257, _super);
		function mapsSkin$Skin257() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin257.prototype;

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
		return mapsSkin$Skin257;
	})(eui.Skin);

	var mapsSkin$Skin258 = 	(function (_super) {
		__extends(mapsSkin$Skin258, _super);
		function mapsSkin$Skin258() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin258.prototype;

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
		return mapsSkin$Skin258;
	})(eui.Skin);

	var mapsSkin$Skin259 = 	(function (_super) {
		__extends(mapsSkin$Skin259, _super);
		function mapsSkin$Skin259() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin259.prototype;

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
		return mapsSkin$Skin259;
	})(eui.Skin);

	var mapsSkin$Skin260 = 	(function (_super) {
		__extends(mapsSkin$Skin260, _super);
		function mapsSkin$Skin260() {
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
						new eui.SetProperty("_Image1","source","xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","luxian1_png")
					])
			];
		}
		var _proto = mapsSkin$Skin260.prototype;

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
		return mapsSkin$Skin260;
	})(eui.Skin);

	function mapsSkin() {
		_super.call(this);
		this.skinParts = ["background","t1","lx114","lx105","lx106","lx107","lx108","lx109","lx097","lx087","lx077","b0","b1","b2","b3","zd022","zd035","zd083","zd147","zd151","lx081","lx082","lx092","lx103","lx113","lx124","lx134","lx145","lx155","lx166","lx011","lx012","lx013","lx014","lx015","lx016","lx017","lx018","lx021","lx023","lx024","lx025","lx026","lx027","lx028","lx029","lx031","lx032","lx033","lx034","lx036","lx037","lx041","lx042","lx043","lx044","lx045","lx046","lx047","lx051","lx055","lx056","lx061","lx062","lx063","lx064","lx065","lx066","lx067","lx071","lx072","lx073","lx074","lx075","lx076","lx078","lx084","lx085","lx086","lx088","lx089","lx091","lx093","lx094","lx095","lx096","lx098","lx101","lx102","lx104","lx111","lx112","lx115","lx116","lx117","lx118","lx121","lx122","lx123","lx125","lx126","lx128","lx129","lx135","lx136","lx138","lx141","lx142","lx143","lx144","lx146","lx148","lx149","lx152","lx153","lx154","lx156","lx157","lx158","lx161","lx162","lx163","lx164","lx165","lx167","lx168","lx169","jingdian1"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.background_i(),this.t1_i(),this.lx114_i(),this.lx105_i(),this.lx106_i(),this.lx107_i(),this.lx108_i(),this.lx109_i(),this.lx097_i(),this.lx087_i(),this.lx077_i(),this.b0_i(),this.b1_i(),this.b2_i(),this.b3_i(),this.zd022_i(),this.zd035_i(),this.zd083_i(),this.zd147_i(),this.zd151_i(),this.lx081_i(),this.lx082_i(),this.lx092_i(),this.lx103_i(),this.lx113_i(),this.lx124_i(),this.lx134_i(),this.lx145_i(),this.lx155_i(),this.lx166_i(),this.lx011_i(),this.lx012_i(),this.lx013_i(),this.lx014_i(),this.lx015_i(),this.lx016_i(),this.lx017_i(),this.lx018_i(),this.lx021_i(),this.lx023_i(),this.lx024_i(),this.lx025_i(),this.lx026_i(),this.lx027_i(),this.lx028_i(),this.lx029_i(),this.lx031_i(),this.lx032_i(),this.lx033_i(),this.lx034_i(),this.lx036_i(),this.lx037_i(),this.lx041_i(),this.lx042_i(),this.lx043_i(),this.lx044_i(),this.lx045_i(),this.lx046_i(),this.lx047_i(),this.lx051_i(),this.lx055_i(),this.lx056_i(),this.lx061_i(),this.lx062_i(),this.lx063_i(),this.lx064_i(),this.lx065_i(),this.lx066_i(),this.lx067_i(),this.lx071_i(),this.lx072_i(),this.lx073_i(),this.lx074_i(),this.lx075_i(),this.lx076_i(),this.lx078_i(),this.lx084_i(),this.lx085_i(),this.lx086_i(),this.lx088_i(),this.lx089_i(),this.lx091_i(),this.lx093_i(),this.lx094_i(),this.lx095_i(),this.lx096_i(),this.lx098_i(),this.lx101_i(),this.lx102_i(),this.lx104_i(),this.lx111_i(),this.lx112_i(),this.lx115_i(),this.lx116_i(),this.lx117_i(),this.lx118_i(),this.lx121_i(),this.lx122_i(),this.lx123_i(),this.lx125_i(),this.lx126_i(),this.lx128_i(),this.lx129_i(),this.lx135_i(),this.lx136_i(),this.lx138_i(),this.lx141_i(),this.lx142_i(),this.lx143_i(),this.lx144_i(),this.lx146_i(),this.lx148_i(),this.lx149_i(),this.lx152_i(),this.lx153_i(),this.lx154_i(),this.lx156_i(),this.lx157_i(),this.lx158_i(),this.lx161_i(),this.lx162_i(),this.lx163_i(),this.lx164_i(),this.lx165_i(),this.lx167_i(),this.lx168_i(),this.lx169_i(),this.jingdian1_i()];
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
		t.skinName = mapsSkin$Skin141;
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
		t.skinName = mapsSkin$Skin142;
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
		t.skinName = mapsSkin$Skin143;
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
		t.skinName = mapsSkin$Skin144;
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
		t.skinName = mapsSkin$Skin145;
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
		t.skinName = mapsSkin$Skin146;
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
		t.skinName = mapsSkin$Skin147;
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
		t.skinName = mapsSkin$Skin148;
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
		t.skinName = mapsSkin$Skin149;
		return t;
	};
	_proto.b0_i = function () {
		var t = new eui.Button();
		this.b0 = t;
		t.label = "背包";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 125;
		t.x = 497.5;
		t.y = 1075.33;
		t.skinName = mapsSkin$Skin150;
		return t;
	};
	_proto.b1_i = function () {
		var t = new eui.Button();
		this.b1 = t;
		t.label = "任务";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 125;
		t.x = 181.4;
		t.y = 1075.33;
		t.skinName = mapsSkin$Skin151;
		return t;
	};
	_proto.b2_i = function () {
		var t = new eui.Button();
		this.b2 = t;
		t.label = "成就";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 125;
		t.x = 23.3;
		t.y = 1075.33;
		t.skinName = mapsSkin$Skin152;
		return t;
	};
	_proto.b3_i = function () {
		var t = new eui.Button();
		this.b3 = t;
		t.anchorOffsetX = 0;
		t.label = "新建站点";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 131;
		t.x = 339.5;
		t.y = 1075.33;
		t.skinName = mapsSkin$Skin153;
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
		t.skinName = mapsSkin$Skin154;
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
		t.skinName = mapsSkin$Skin155;
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
		t.skinName = mapsSkin$Skin156;
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
		t.skinName = mapsSkin$Skin157;
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
		t.skinName = mapsSkin$Skin158;
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
		t.skinName = mapsSkin$Skin159;
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
		t.skinName = mapsSkin$Skin160;
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
		t.skinName = mapsSkin$Skin161;
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
		t.skinName = mapsSkin$Skin162;
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
		t.skinName = mapsSkin$Skin163;
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
		t.skinName = mapsSkin$Skin164;
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
		t.skinName = mapsSkin$Skin165;
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
		t.skinName = mapsSkin$Skin166;
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
		t.skinName = mapsSkin$Skin167;
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
		t.skinName = mapsSkin$Skin168;
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
		t.skinName = mapsSkin$Skin169;
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
		t.skinName = mapsSkin$Skin170;
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
		t.skinName = mapsSkin$Skin171;
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
		t.skinName = mapsSkin$Skin172;
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
		t.skinName = mapsSkin$Skin173;
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
		t.skinName = mapsSkin$Skin174;
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
		t.skinName = mapsSkin$Skin175;
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
		t.skinName = mapsSkin$Skin176;
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
		t.skinName = mapsSkin$Skin177;
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
		t.skinName = mapsSkin$Skin178;
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
		t.skinName = mapsSkin$Skin179;
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
		t.skinName = mapsSkin$Skin180;
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
		t.skinName = mapsSkin$Skin181;
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
		t.skinName = mapsSkin$Skin182;
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
		t.skinName = mapsSkin$Skin183;
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
		t.skinName = mapsSkin$Skin184;
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
		t.skinName = mapsSkin$Skin185;
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
		t.skinName = mapsSkin$Skin186;
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
		t.skinName = mapsSkin$Skin187;
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
		t.skinName = mapsSkin$Skin188;
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
		t.skinName = mapsSkin$Skin189;
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
		t.skinName = mapsSkin$Skin190;
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
		t.skinName = mapsSkin$Skin191;
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
		t.skinName = mapsSkin$Skin192;
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
		t.skinName = mapsSkin$Skin193;
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
		t.skinName = mapsSkin$Skin194;
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
		t.skinName = mapsSkin$Skin195;
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
		t.skinName = mapsSkin$Skin196;
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
		t.skinName = mapsSkin$Skin197;
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
		t.skinName = mapsSkin$Skin198;
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
		t.skinName = mapsSkin$Skin199;
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
		t.skinName = mapsSkin$Skin200;
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
		t.skinName = mapsSkin$Skin201;
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
		t.skinName = mapsSkin$Skin202;
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
		t.skinName = mapsSkin$Skin203;
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
		t.skinName = mapsSkin$Skin204;
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
		t.skinName = mapsSkin$Skin205;
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
		t.skinName = mapsSkin$Skin206;
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
		t.skinName = mapsSkin$Skin207;
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
		t.skinName = mapsSkin$Skin208;
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
		t.skinName = mapsSkin$Skin209;
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
		t.skinName = mapsSkin$Skin210;
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
		t.skinName = mapsSkin$Skin211;
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
		t.skinName = mapsSkin$Skin212;
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
		t.skinName = mapsSkin$Skin213;
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
		t.skinName = mapsSkin$Skin214;
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
		t.skinName = mapsSkin$Skin215;
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
		t.skinName = mapsSkin$Skin216;
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
		t.skinName = mapsSkin$Skin217;
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
		t.skinName = mapsSkin$Skin218;
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
		t.skinName = mapsSkin$Skin219;
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
		t.skinName = mapsSkin$Skin220;
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
		t.skinName = mapsSkin$Skin221;
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
		t.skinName = mapsSkin$Skin222;
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
		t.skinName = mapsSkin$Skin223;
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
		t.skinName = mapsSkin$Skin224;
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
		t.skinName = mapsSkin$Skin225;
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
		t.skinName = mapsSkin$Skin226;
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
		t.skinName = mapsSkin$Skin227;
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
		t.skinName = mapsSkin$Skin228;
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
		t.skinName = mapsSkin$Skin229;
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
		t.skinName = mapsSkin$Skin230;
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
		t.skinName = mapsSkin$Skin231;
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
		t.skinName = mapsSkin$Skin232;
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
		t.skinName = mapsSkin$Skin233;
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
		t.skinName = mapsSkin$Skin234;
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
		t.skinName = mapsSkin$Skin235;
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
		t.skinName = mapsSkin$Skin236;
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
		t.skinName = mapsSkin$Skin237;
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
		t.skinName = mapsSkin$Skin238;
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
		t.skinName = mapsSkin$Skin239;
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
		t.skinName = mapsSkin$Skin240;
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
		t.skinName = mapsSkin$Skin241;
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
		t.skinName = mapsSkin$Skin242;
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
		t.skinName = mapsSkin$Skin243;
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
		t.skinName = mapsSkin$Skin244;
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
		t.skinName = mapsSkin$Skin245;
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
		t.skinName = mapsSkin$Skin246;
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
		t.skinName = mapsSkin$Skin247;
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
		t.skinName = mapsSkin$Skin248;
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
		t.skinName = mapsSkin$Skin249;
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
		t.skinName = mapsSkin$Skin250;
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
		t.skinName = mapsSkin$Skin251;
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
		t.skinName = mapsSkin$Skin252;
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
		t.skinName = mapsSkin$Skin253;
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
		t.skinName = mapsSkin$Skin254;
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
		t.skinName = mapsSkin$Skin255;
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
		t.skinName = mapsSkin$Skin256;
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
		t.skinName = mapsSkin$Skin257;
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
		t.skinName = mapsSkin$Skin258;
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
		t.skinName = mapsSkin$Skin259;
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
		t.skinName = mapsSkin$Skin260;
		return t;
	};
	_proto.jingdian1_i = function () {
		var t = new eui.Image();
		this.jingdian1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 117.23;
		t.scaleX = 0.673;
		t.scaleY = 0.673;
		t.source = "jingdian_png";
		t.width = 102.23;
		t.x = 458;
		t.y = 311.5;
		return t;
	};
	return mapsSkin;
})(eui.Skin);generateEUI.paths['resource/skins/rengwu.exml'] = window.rengwuSkin = (function (_super) {
	__extends(rengwuSkin, _super);
	var rengwuSkin$Skin261 = 	(function (_super) {
		__extends(rengwuSkin$Skin261, _super);
		function rengwuSkin$Skin261() {
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
		var _proto = rengwuSkin$Skin261.prototype;

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
		return rengwuSkin$Skin261;
	})(eui.Skin);

	var rengwuSkin$Skin262 = 	(function (_super) {
		__extends(rengwuSkin$Skin262, _super);
		function rengwuSkin$Skin262() {
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
						new eui.SetProperty("_Image1","source","blue1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","blue1_png")
					])
			];
		}
		var _proto = rengwuSkin$Skin262.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "blue1_png";
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
		return rengwuSkin$Skin262;
	})(eui.Skin);

	var rengwuSkin$Skin263 = 	(function (_super) {
		__extends(rengwuSkin$Skin263, _super);
		function rengwuSkin$Skin263() {
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
						new eui.SetProperty("_Image1","source","blue1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","blue1_png")
					])
			];
		}
		var _proto = rengwuSkin$Skin263.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "blue1_png";
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
		return rengwuSkin$Skin263;
	})(eui.Skin);

	var rengwuSkin$Skin264 = 	(function (_super) {
		__extends(rengwuSkin$Skin264, _super);
		function rengwuSkin$Skin264() {
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
						new eui.SetProperty("_Image1","source","blue1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","blue1_png")
					])
			];
		}
		var _proto = rengwuSkin$Skin264.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "blue1_png";
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
		return rengwuSkin$Skin264;
	})(eui.Skin);

	var rengwuSkin$Skin265 = 	(function (_super) {
		__extends(rengwuSkin$Skin265, _super);
		function rengwuSkin$Skin265() {
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
						new eui.SetProperty("_Image1","source","blue1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","blue1_png")
					])
			];
		}
		var _proto = rengwuSkin$Skin265.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "blue1_png";
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
		return rengwuSkin$Skin265;
	})(eui.Skin);

	var rengwuSkin$Skin266 = 	(function (_super) {
		__extends(rengwuSkin$Skin266, _super);
		function rengwuSkin$Skin266() {
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
						new eui.SetProperty("_Image1","source","blue1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","blue1_png")
					])
			];
		}
		var _proto = rengwuSkin$Skin266.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "blue1_png";
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
		return rengwuSkin$Skin266;
	})(eui.Skin);

	var rengwuSkin$Skin267 = 	(function (_super) {
		__extends(rengwuSkin$Skin267, _super);
		function rengwuSkin$Skin267() {
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
						new eui.SetProperty("_Image1","source","tishi_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","tishi_png")
					])
			];
		}
		var _proto = rengwuSkin$Skin267.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tishi_png";
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
		return rengwuSkin$Skin267;
	})(eui.Skin);

	function rengwuSkin() {
		_super.call(this);
		this.skinParts = ["background0","b0","t0","background1","background2","b1","t1","group1","background3","b2","t2","group2","background4","b3","t3","group3","background5","b4","t4","group4","background6","b5","t5","group5","group","scroller","b01"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.background0_i(),this.b0_i(),this.t0_i(),this.scroller_i(),this.b01_i()];
	}
	var _proto = rengwuSkin.prototype;

	_proto.background0_i = function () {
		var t = new eui.Image();
		this.background0 = t;
		t.anchorOffsetY = 0;
		t.height = 1200;
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
		t.scaleX = 0.1;
		t.scaleY = 0.11;
		t.x = 565;
		t.y = 602;
		t.skinName = rengwuSkin$Skin261;
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
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.enabled = true;
		t.height = 460;
		t.width = 640;
		t.x = 0;
		t.y = 676;
		t.viewport = this.group_i();
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.background1_i(),this.group1_i(),this.group2_i(),this.group3_i(),this.group4_i(),this.group5_i()];
		return t;
	};
	_proto.background1_i = function () {
		var t = new eui.Image();
		this.background1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 950;
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
		t.x = 475;
		t.y = 40;
		t.skinName = rengwuSkin$Skin262;
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
		t.label = "去完成";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 475;
		t.y = 40;
		t.skinName = rengwuSkin$Skin263;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Label();
		this.t2 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "ar扫一扫";
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
		t.label = "开始";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 475;
		t.y = 40;
		t.skinName = rengwuSkin$Skin264;
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Label();
		this.t3 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "一按到底";
		t.textColor = 0xFF0202;
		t.width = 300;
		t.x = 20;
		t.y = 50;
		return t;
	};
	_proto.group4_i = function () {
		var t = new eui.Group();
		this.group4 = t;
		t.height = 160;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 0;
		t.y = 480;
		t.elementsContent = [this.background5_i(),this.b4_i(),this.t4_i()];
		return t;
	};
	_proto.background5_i = function () {
		var t = new eui.Image();
		this.background5 = t;
		t.height = 140;
		t.source = "lanmukuang_png";
		t.width = 640;
		t.x = 0;
		t.y = 20;
		return t;
	};
	_proto.b4_i = function () {
		var t = new eui.Button();
		this.b4 = t;
		t.height = 80;
		t.label = "去抽奖";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 475;
		t.y = 40;
		t.skinName = rengwuSkin$Skin265;
		return t;
	};
	_proto.t4_i = function () {
		var t = new eui.Label();
		this.t4 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "大乐透";
		t.textColor = 0xFF0202;
		t.width = 300;
		t.x = 20;
		t.y = 50;
		return t;
	};
	_proto.group5_i = function () {
		var t = new eui.Group();
		this.group5 = t;
		t.height = 160;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 0;
		t.y = 640;
		t.elementsContent = [this.background6_i(),this.b5_i(),this.t5_i()];
		return t;
	};
	_proto.background6_i = function () {
		var t = new eui.Image();
		this.background6 = t;
		t.height = 140;
		t.source = "lanmukuang_png";
		t.width = 640;
		t.x = 0;
		t.y = 20;
		return t;
	};
	_proto.b5_i = function () {
		var t = new eui.Button();
		this.b5 = t;
		t.height = 80;
		t.label = "开始";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 475;
		t.y = 40;
		t.skinName = rengwuSkin$Skin266;
		return t;
	};
	_proto.t5_i = function () {
		var t = new eui.Label();
		this.t5 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "飞啊飞";
		t.textColor = 0xFF0202;
		t.width = 300;
		t.x = 20;
		t.y = 50;
		return t;
	};
	_proto.b01_i = function () {
		var t = new eui.Button();
		this.b01 = t;
		t.height = 494;
		t.label = "";
		t.scaleX = 0.1;
		t.scaleY = 0.1;
		t.width = 494;
		t.x = 495.3;
		t.y = 602;
		t.skinName = rengwuSkin$Skin267;
		return t;
	};
	return rengwuSkin;
})(eui.Skin);generateEUI.paths['resource/skins/tishi.exml'] = window.jingdianSkin = (function (_super) {
	__extends(jingdianSkin, _super);
	var jingdianSkin$Skin268 = 	(function (_super) {
		__extends(jingdianSkin$Skin268, _super);
		function jingdianSkin$Skin268() {
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
					])
			];
		}
		var _proto = jingdianSkin$Skin268.prototype;

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
		return jingdianSkin$Skin268;
	})(eui.Skin);

	function jingdianSkin() {
		_super.call(this);
		this.skinParts = ["background","jianjie","b0"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.background_i(),this.jianjie_i(),this.b0_i()];
	}
	var _proto = jingdianSkin.prototype;

	_proto.background_i = function () {
		var t = new eui.Image();
		this.background = t;
		t.source = "tanchukuang_png";
		t.x = 0;
		t.y = 343;
		return t;
	};
	_proto.jianjie_i = function () {
		var t = new eui.Label();
		this.jianjie = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 382;
		t.size = 35;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xfc0a0a;
		t.width = 440;
		t.x = 100;
		t.y = 390;
		return t;
	};
	_proto.b0_i = function () {
		var t = new eui.Button();
		this.b0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "";
		t.width = 50;
		t.x = 569.21;
		t.y = 351.7;
		t.skinName = jingdianSkin$Skin268;
		return t;
	};
	return jingdianSkin;
})(eui.Skin);generateEUI.paths['resource/skins/xiaoyouxi1.exml'] = window.xiaoyouxi1Skin = (function (_super) {
	__extends(xiaoyouxi1Skin, _super);
	var xiaoyouxi1Skin$Skin269 = 	(function (_super) {
		__extends(xiaoyouxi1Skin$Skin269, _super);
		function xiaoyouxi1Skin$Skin269() {
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
						new eui.SetProperty("_Image1","source","zw3_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = xiaoyouxi1Skin$Skin269.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zw2_png";
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
		return xiaoyouxi1Skin$Skin269;
	})(eui.Skin);

	var xiaoyouxi1Skin$Skin270 = 	(function (_super) {
		__extends(xiaoyouxi1Skin$Skin270, _super);
		function xiaoyouxi1Skin$Skin270() {
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
					])
			];
		}
		var _proto = xiaoyouxi1Skin$Skin270.prototype;

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
		return xiaoyouxi1Skin$Skin270;
	})(eui.Skin);

	var xiaoyouxi1Skin$Skin271 = 	(function (_super) {
		__extends(xiaoyouxi1Skin$Skin271, _super);
		function xiaoyouxi1Skin$Skin271() {
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
						new eui.SetProperty("_Image1","source","yinyue_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","yinyue_png")
					])
			];
		}
		var _proto = xiaoyouxi1Skin$Skin271.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yinyue_png";
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
		return xiaoyouxi1Skin$Skin271;
	})(eui.Skin);

	var xiaoyouxi1Skin$Skin272 = 	(function (_super) {
		__extends(xiaoyouxi1Skin$Skin272, _super);
		function xiaoyouxi1Skin$Skin272() {
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
						new eui.SetProperty("_Image1","source","tishi_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","tishi_png")
					])
			];
		}
		var _proto = xiaoyouxi1Skin$Skin272.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tishi_png";
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
		return xiaoyouxi1Skin$Skin272;
	})(eui.Skin);

	function xiaoyouxi1Skin() {
		_super.call(this);
		this.skinParts = ["background","button1","text1","button0","img1","button2","button3"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.background_i(),this.button1_i(),this.text1_i(),this.button0_i(),this.img1_i(),this.button2_i(),this.button3_i()];
	}
	var _proto = xiaoyouxi1Skin.prototype;

	_proto.background_i = function () {
		var t = new eui.Image();
		this.background = t;
		t.height = 1136;
		t.source = "beijing_jpg";
		t.width = 640;
		t.x = 0;
		t.y = -1;
		return t;
	};
	_proto.button1_i = function () {
		var t = new eui.Button();
		this.button1 = t;
		t.label = "开始";
		t.x = 270;
		t.y = 892;
		t.skinName = xiaoyouxi1Skin$Skin269;
		return t;
	};
	_proto.text1_i = function () {
		var t = new eui.Label();
		this.text1 = t;
		t.size = 100;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xe80dd6;
		t.width = 300;
		t.x = 170;
		t.y = 426;
		return t;
	};
	_proto.button0_i = function () {
		var t = new eui.Button();
		this.button0 = t;
		t.label = "";
		t.scaleX = 0.1;
		t.scaleY = 0.1;
		t.x = 590;
		t.y = 0;
		t.skinName = xiaoyouxi1Skin$Skin270;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "changpian_png";
		t.x = 245;
		t.y = 95;
		return t;
	};
	_proto.button2_i = function () {
		var t = new eui.Button();
		this.button2 = t;
		t.height = 494;
		t.label = "";
		t.scaleX = 0.1;
		t.scaleY = 0.1;
		t.width = 494;
		t.x = 520;
		t.y = 0;
		t.skinName = xiaoyouxi1Skin$Skin271;
		return t;
	};
	_proto.button3_i = function () {
		var t = new eui.Button();
		this.button3 = t;
		t.height = 494;
		t.label = "";
		t.scaleX = 0.1;
		t.scaleY = 0.1;
		t.width = 494;
		t.x = 450;
		t.y = 0;
		t.skinName = xiaoyouxi1Skin$Skin272;
		return t;
	};
	return xiaoyouxi1Skin;
})(eui.Skin);
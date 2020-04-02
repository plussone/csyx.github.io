var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);n.prototype=e.prototype,t.prototype=new n},__awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(a,r){function s(t){try{l(i.next(t))}catch(e){r(e)}}function o(t){try{l(i["throw"](t))}catch(e){r(e)}}function l(t){t.done?a(t.value):new n(function(e){e(t.value)}).then(s,o)}l((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(a)throw new TypeError("Generator is already executing.");for(;l;)try{if(a=1,r&&(s=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,r=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(s=l.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){l.label=n[1];break}if(6===n[0]&&l.label<s[1]){l.label=s[1],s=n;break}if(s&&l.label<s[2]){l.label=s[2],l.ops.push(n);break}s[2]&&l.ops.pop(),l.trys.pop();continue}n=e.call(t,l)}catch(i){n=[6,i],r=0}finally{a=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var a,r,s,o,l={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},Scene=function(t){function e(){var e=t.call(this)||this;return e.config=Config.getInstance(),e.addEventListener(eui.UIEvent.CREATION_COMPLETE,e.onComplete,e),e}return __extends(e,t),e}(eui.Component);__reflect(Scene.prototype,"Scene");var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return[4,this.loadResource()];case 1:return n.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=n.sent(),this.startAnimation(t),[4,platform.login()];case 3:return n.sent(),[4,platform.getUserInfo()];case 4:return e=n.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return n.sent(),this.stage.removeChild(t),[3,5];case 4:return e=n.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,n){var i=new eui.Theme("resource/default.thm.json",t.stage);i.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){for(var t=1;16>=t;t++)for(var e=1;9>=e;e++){var n="ar"+t+e;Config.xl[t][e]=Number(egret.localStorage.getItem(n))}var n="sum";Config.num=Number(egret.localStorage.getItem(n));var n="mo";Config.money=Number(egret.localStorage.getItem(n));for(var t=0;17>=t;t++)for(var e=0;10>=e;e++)0==Config.xl[t][e]&&(Config.xl[t][e]=Config.xl_map[t][e]);var n="xlpf";Config.pf_num=Number(egret.localStorage.getItem(n)),0==Config.pf_num&&(Config.pf_num=1);var n="data";Config.time=egret.localStorage.getItem(n),SceneManager.Instance.rootLayer=this;var i=new maps;SceneManager.Instance.changeScene(i)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e.prototype.startAnimation=function(t){var e=this,n=new egret.HtmlTextParser,i=t.map(function(t){return n.parse(t)}),a=this.textfield,r=-1,s=function(){r++,r>=i.length&&(r=0);var t=i[r];a.textFlow=t;var n=egret.Tween.get(a);n.to({alpha:1},200),n.wait(2e3),n.to({alpha:0},200),n.call(s,e)};s()},e}(eui.UILayer);__reflect(Main.prototype,"Main");var Config=function(){function t(){}return t.getInstance=function(){return t.Instance||(t.Instance=new t),t.Instance},t.money=4e3,t.num=1,t.jiasuka_num=1,t.chengjiu_num=0,t.pf_num=1,t.pf_flag=0,t.time="0",t.xl=[[1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1,1],[1,0,5,0,0,0,0,0,0,0,1],[1,0,0,0,0,3,0,0,1,1,1],[1,0,0,0,0,0,0,0,1,1,1],[1,0,1,1,1,0,0,1,1,1,1],[1,0,0,0,0,0,0,0,1,1,1],[1,0,0,0,0,0,0,2,0,1,1],[1,2,2,3,0,0,0,2,0,0,1],[1,0,2,0,0,0,0,2,0,1,1],[1,0,0,2,0,2,2,2,2,2,1],[1,0,0,2,2,0,0,0,0,1,1],[1,0,0,0,2,0,0,1,0,0,1],[1,1,1,1,2,0,1,1,0,1,1],[1,0,0,0,0,2,0,3,0,0,1],[1,3,0,0,0,2,0,0,0,1,1],[1,0,0,0,0,0,2,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1]],t.xl_map=[[1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1,1],[1,0,5,0,0,0,0,0,0,0,1],[1,0,0,0,0,3,0,0,1,1,1],[1,0,0,0,0,0,0,0,1,1,1],[1,0,1,1,1,0,0,1,1,1,1],[1,0,0,0,0,0,0,0,1,1,1],[1,0,0,0,0,0,0,2,0,1,1],[1,2,2,3,0,0,0,2,0,0,1],[1,0,2,0,0,0,0,2,0,1,1],[1,0,0,2,0,2,2,2,2,2,1],[1,0,0,2,2,0,0,0,0,1,1],[1,0,0,0,2,0,0,1,0,0,1],[1,1,1,1,2,0,1,1,0,1,1],[1,0,0,0,0,2,0,3,0,0,1],[1,3,0,0,0,2,0,0,0,1,1],[1,0,0,0,0,0,2,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1]],t.array3=[0,1,0,0],t}();__reflect(Config.prototype,"Config");var daoju=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/skins/daoju.exml",e}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.onComplete=function(){},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.t1.text="x"+Config.jiasuka_num,this.b1.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){SceneManager.Instance.popScene()},this),this.b2.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){if(Config.jiasuka_num>0){Config.money+=2e3,Config.jiasuka_num--,this.t1.text="x"+Config.jiasuka_num;var t="jsk_num",e=String(Config.jiasuka_num);egret.localStorage.setItem(t,e);var t="mo",e=String(Config.money);egret.localStorage.setItem(t,e)}},this),this.bpf1.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){if(1!=Config.pf_num){Config.pf_num=1,Config.pf_flag=1;var t="xlpf";egret.localStorage.setItem(t,String(Config.pf_num))}},this),this.bpf2.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){if(2!=Config.pf_num){Config.pf_num=2,Config.pf_flag=1;var t="xlpf";egret.localStorage.setItem(t,String(Config.pf_num))}},this),this.bpf3.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){if(3!=Config.pf_num){Config.pf_num=3,Config.pf_flag=1;var t="xlpf";egret.localStorage.setItem(t,String(Config.pf_num))}},this),this.bpf4.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){if(4!=Config.pf_num){Config.pf_num=4,Config.pf_flag=1;var t="xlpf";egret.localStorage.setItem(t,String(Config.pf_num))}},this),this.bpf5.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){if(5!=Config.pf_num){Config.pf_num=5,Config.pf_flag=1;var t="xlpf";egret.localStorage.setItem(t,String(Config.pf_num))}},this)},e}(Scene);__reflect(daoju.prototype,"daoju",["eui.UIComponent","egret.DisplayObject"]);var jingdian=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/skins/jingdian.exml",e}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.onComplete=function(){},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.b0.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){SceneManager.Instance.popScene()},this),this.jdname.text="姑苏",this.jianjie.text="粉墙黛瓦，禅意造型。它由建筑大师贝聿铭设计，有着传统的苏州园林风格，粉墙黛瓦，几何造型与禅意的结合，清新雅致。"},e}(Scene);__reflect(jingdian.prototype,"jingdian",["eui.UIComponent","egret.DisplayObject"]);var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var chengjiu=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/skins/chengjiu.exml",e}return __extends(e,t),e.prototype.onComplete=function(){},e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this);for(var e=1;3>=e;e++){var n="ar3"+e;Config.array3[e]=Number(egret.localStorage.getItem(n))}var n="cj_num";Config.chengjiu_num=Number(egret.localStorage.getItem(n)),this.t0.text="您当前的成就数量："+Config.chengjiu_num,this.b0.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){var t=new maps;SceneManager.Instance.changeScene(t)},this)},e}(Scene);__reflect(chengjiu.prototype,"chengjiu",["eui.UIComponent","egret.DisplayObject"]);var maps=function(t){function e(){var e=t.call(this)||this;return e.maptranslate=[],e.skinName="resource/skins/maps.exml",e}return __extends(e,t),e.prototype.onComplete=function(){},e.prototype.onTaptc=function(){},e.prototype.onTapqiehuan=function(){},e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.init();var e=Number(egret.localStorage.getItem("choujiang"));console.log(e),this.time=new egret.Timer(1e3,0),this.t1.text="金钱:"+Config.money,this.b3.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){var t=this.lx011.group.selectedValue%10,e=(this.lx011.group.selectedValue-t)/10;Config.money>=1e3&&4==Config.xl[e][t]&&0==Config.xl_map[e][t]?(Config.xl[e][t]=5,Config.money-=1e3,this.t1.text="金钱"+Config.money,this.offbutton(this.lx011.group.selectedValue),this.lx011.group.selectedValue="0",this.write()):Config.money>=1500&&4==Config.xl[e][t]&&2==Config.xl_map[e][t]&&(Config.xl[e][t]=5,Config.money-=1500,this.t1.text="金钱"+Config.money,this.offbutton(this.lx011.group.selectedValue),this.lx011.group.selectedValue="0",this.write())},this),this.b0.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){var t=new daoju;SceneManager.Instance.pushScene(t)},this),this.b2.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){var t=new chengjiu;SceneManager.Instance.changeScene(t)},this),this.b1.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){var t=new rengwu;SceneManager.Instance.pushScene(t)},this),this.time.addEventListener(egret.TimerEvent.TIMER,function(){this.t1.text="金钱"+Config.money,1==Config.pf_flag&&(this.genxinditu(),this.zd022.source=this.zd035.source=this.zd083.source=this.zd147.source=this.zd151.source="zhandian"+Config.pf_num+"_png",Config.pf_flag=0)},this),this.time.start(),this.jingdian1.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){var t=new jingdian;SceneManager.Instance.pushScene(t)},this)},e.prototype.init=function(){this.maptranslate[11]=this.lx011,this.maptranslate[12]=this.lx012,this.maptranslate[13]=this.lx013,this.maptranslate[14]=this.lx014,this.maptranslate[15]=this.lx015,this.maptranslate[16]=this.lx016,this.maptranslate[17]=this.lx017,this.maptranslate[18]=this.lx018,this.maptranslate[21]=this.lx021,this.maptranslate[23]=this.lx023,this.maptranslate[24]=this.lx024,this.maptranslate[25]=this.lx025,this.maptranslate[26]=this.lx026,this.maptranslate[27]=this.lx027,this.maptranslate[28]=this.lx028,this.maptranslate[29]=this.lx029,this.maptranslate[31]=this.lx031,this.maptranslate[32]=this.lx032,this.maptranslate[33]=this.lx033,this.maptranslate[34]=this.lx034,this.maptranslate[36]=this.lx036,this.maptranslate[37]=this.lx037,this.maptranslate[41]=this.lx041,this.maptranslate[42]=this.lx042,this.maptranslate[43]=this.lx043,this.maptranslate[44]=this.lx044,this.maptranslate[45]=this.lx045,this.maptranslate[46]=this.lx046,this.maptranslate[47]=this.lx047,this.maptranslate[51]=this.lx051,this.maptranslate[55]=this.lx055,this.maptranslate[56]=this.lx056,this.maptranslate[61]=this.lx061,this.maptranslate[62]=this.lx062,this.maptranslate[63]=this.lx063,this.maptranslate[64]=this.lx064,this.maptranslate[65]=this.lx065,this.maptranslate[66]=this.lx066,this.maptranslate[67]=this.lx067,this.maptranslate[71]=this.lx071,this.maptranslate[72]=this.lx072,this.maptranslate[73]=this.lx073,this.maptranslate[74]=this.lx074,this.maptranslate[75]=this.lx075,this.maptranslate[76]=this.lx076,this.maptranslate[77]=this.lx077,this.maptranslate[78]=this.lx078,this.maptranslate[81]=this.lx081,this.maptranslate[82]=this.lx082,this.maptranslate[84]=this.lx084,this.maptranslate[85]=this.lx085,this.maptranslate[86]=this.lx086,this.maptranslate[87]=this.lx087,this.maptranslate[88]=this.lx088,this.maptranslate[89]=this.lx089,this.maptranslate[91]=this.lx091,this.maptranslate[92]=this.lx092,this.maptranslate[93]=this.lx093,this.maptranslate[94]=this.lx094,this.maptranslate[95]=this.lx095,this.maptranslate[96]=this.lx096,this.maptranslate[97]=this.lx097,this.maptranslate[98]=this.lx098,this.maptranslate[99]=this.lx099,this.maptranslate[101]=this.lx101,this.maptranslate[102]=this.lx102,this.maptranslate[103]=this.lx103,this.maptranslate[104]=this.lx104,this.maptranslate[105]=this.lx105,this.maptranslate[106]=this.lx106,this.maptranslate[107]=this.lx107,this.maptranslate[108]=this.lx108,this.maptranslate[109]=this.lx109,this.maptranslate[111]=this.lx111,this.maptranslate[112]=this.lx112,this.maptranslate[113]=this.lx113,this.maptranslate[114]=this.lx114,this.maptranslate[115]=this.lx115,this.maptranslate[116]=this.lx116,this.maptranslate[117]=this.lx117,this.maptranslate[118]=this.lx118,this.maptranslate[119]=this.lx119,this.maptranslate[121]=this.lx121,this.maptranslate[122]=this.lx122,this.maptranslate[123]=this.lx123,this.maptranslate[124]=this.lx124,this.maptranslate[125]=this.lx125,this.maptranslate[126]=this.lx126,this.maptranslate[128]=this.lx128,this.maptranslate[129]=this.lx129,this.maptranslate[134]=this.lx134,this.maptranslate[135]=this.lx135,this.maptranslate[138]=this.lx138,this.maptranslate[141]=this.lx141,this.maptranslate[142]=this.lx142,this.maptranslate[143]=this.lx143,this.maptranslate[144]=this.lx144,this.maptranslate[145]=this.lx145,this.maptranslate[146]=this.lx146,this.maptranslate[148]=this.lx148,this.maptranslate[149]=this.lx149,this.maptranslate[152]=this.lx152,this.maptranslate[153]=this.lx153,this.maptranslate[154]=this.lx154,this.maptranslate[155]=this.lx155,this.maptranslate[156]=this.lx156,this.maptranslate[157]=this.lx157,this.maptranslate[158]=this.lx158,this.maptranslate[161]=this.lx161,this.maptranslate[162]=this.lx162,this.maptranslate[163]=this.lx163,this.maptranslate[164]=this.lx164,this.maptranslate[165]=this.lx165,this.maptranslate[166]=this.lx166,this.maptranslate[167]=this.lx167,this.maptranslate[168]=this.lx168,this.maptranslate[169]=this.lx169,this.genxinditu()},e.prototype.write=function(){this.num_change();for(var t=1;16>=t;t++)for(var e=1;9>=e;e++){var n="ar"+t+e,i=String(Config.xl[t][e]);egret.localStorage.setItem(n,i)}var n="mo",i=String(Config.money);egret.localStorage.setItem(n,i)},e.prototype.num_change=function(){Config.num=1,(5==Config.xl[3][5]||5==Config.xl[2][5]||5==Config.xl[2][6]||5==Config.xl[3][4]||5==Config.xl[3][6]||5==Config.xl[5][5]||5==Config.xl[5][6])&&(Config.xl[3][5]=5,Config.num++),(5==Config.xl[8][3]||5==Config.xl[7][2]||5==Config.xl[7][3]||5==Config.xl[8][2]||5==Config.xl[8][4]||5==Config.xl[9][2]||5==Config.xl[9][3])&&(Config.xl[8][3]=5,Config.num++),(5==Config.xl[14][7]||5==Config.xl[13][6]||5==Config.xl[13][7]||5==Config.xl[14][6]||5==Config.xl[14][8]||5==Config.xl[15][6]||5==Config.xl[15][7])&&(Config.xl[14][7]=5,Config.num++),(5==Config.xl[15][1]||5==Config.xl[14][1]||5==Config.xl[14][2]||5==Config.xl[15][2]||5==Config.xl[16][1]||5==Config.xl[16][2])&&(Config.xl[15][1]=5,Config.num++);var t="sum",e=String(Config.num);egret.localStorage.setItem(t,e)},e.prototype.offbutton=function(t){this.maptranslate[Number(t)].enabled=!1,this.genxinditu()},e.prototype.genxinditu=function(){for(var t=1;16>=t;t++)for(var e=1;9>=e;e++)5==Config.xl[t][e]&&(Config.xl[t-1][e]=0==Config.xl[t-1][e]||2==Config.xl[t-1][e]?4:Config.xl[t-1][e],Config.xl[t][e-1]=0==Config.xl[t][e-1]||2==Config.xl[t][e-1]?4:Config.xl[t][e-1],Config.xl[t][e+1]=0==Config.xl[t][e+1]||2==Config.xl[t][e+1]?4:Config.xl[t][e+1],Config.xl[t+1][e]=0==Config.xl[t+1][e]||2==Config.xl[t+1][e]?4:Config.xl[t+1][e],1==e&&t%2==1?(Config.xl[t+1][e+1]=0==Config.xl[t+1][e+1]||2==Config.xl[t+1][e+1]?4:Config.xl[t+1][e+1],Config.xl[t-1][e+1]=0==Config.xl[t-1][e+1]||2==Config.xl[t-1][e+1]?4:Config.xl[t-1][e+1]):(Config.xl[t+1][e-1]=0==Config.xl[t+1][e-1]||2==Config.xl[t+1][e-1]?4:Config.xl[t+1][e-1],Config.xl[t-1][e-1]=0==Config.xl[t-1][e-1]||2==Config.xl[t-1][e-1]?4:Config.xl[t-1][e-1]));for(var t=1;16>=t;t++)for(var e=1;9>=e;e++)if(5==Config.xl[t][e])if(2==t&&2==e||3==t&&5==e||8==t&&3==e||15==t&&7==e||16==t&&1==e);else{this.maptranslate[10*t+e].enabled=!1;var n=this.maptranslate[10*t+e].getChildAt(0);n.source=RES.getRes("luxian"+Config.pf_num+"_png");var i=this.maptranslate[10*t+e].skin.states[2].overrides[0];i.value=n.source}else if(4==Config.xl[t][e])this.maptranslate[10*t+e].enabled=!0;else if(0==Config.xl[t][e]){console.log(Config.xl[t][e]),console.log(10*t+e),this.maptranslate[10*t+e].enabled=!1;var n=this.maptranslate[10*t+e].getChildAt(0);n.source=RES.getRes("wu_png");var i=this.maptranslate[10*t+e].skin.states[2].overrides[0];i.value=n.source}else if(2==Config.xl[t][e]){this.maptranslate[10*t+e].enabled=!1;var n=this.maptranslate[10*t+e].getChildAt(0);n.source=RES.getRes("heliu_png");var i=this.maptranslate[10*t+e].skin.states[2].overrides[0];i.value=n.source}},e}(Scene);__reflect(maps.prototype,"maps",["eui.UIComponent","egret.DisplayObject"]);var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var rengwu=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/skins/rengwu.exml",e}return __extends(e,t),e.prototype.onComplete=function(){},e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.gettime()!=Config.time?this.b1.label="签到":(this.b1.label="已签到",this.b1.enabled=!1),this.b0.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){SceneManager.Instance.popScene()},this),this.b1.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){if(this.gettime()!=Config.time){Config.time=this.gettime(),Config.money+=1e3+100*Config.num;var t="mo",e=String(Config.money);egret.localStorage.setItem(t,e);var t="data";egret.localStorage.setItem(t,Config.time),window.location.href="../choujiang/index.html"}},this),this.b2.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){window.location.href="../arsao/index.html"},this)},e.prototype.gettime=function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,i=t.getDate(),a=""+e+n+i;return a},e}(Scene);__reflect(rengwu.prototype,"rengwu",["eui.UIComponent","egret.DisplayObject"]);var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,n){function i(i){e.call(n,i,t)}if(RES.hasRes(t)){var a=RES.getRes(t);a?i(a):RES.getResAsync(t,i,this)}else RES.getResByUrl(t,i,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var SceneManager=function(){function t(){}return Object.defineProperty(t,"Instance",{get:function(){return null==t._manager&&(t._manager=new t),t._manager},enumerable:!0,configurable:!0}),t.prototype.changeScene=function(t){this.currentScene&&(this.rootLayer.removeChild(this.currentScene),this.currentScene=null),this.rootLayer.addChild(t),this.currentScene=t},t.prototype.pushScene=function(t){this.popScene(),this.pop_scene||(this.rootLayer.addChild(t),this.pop_scene=t)},t.prototype.popScene=function(){this.pop_scene&&(this.rootLayer.removeChild(this.pop_scene),this.pop_scene=null)},t}();__reflect(SceneManager.prototype,"SceneManager");var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,n,i){function a(t){e.call(i,t)}function r(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),n.call(i))}var s=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(i,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,n){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(i,generateEUI2)},s)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var o=t.split("/");o.pop();var l=o.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(i,generateJSON.paths[t])},this):RES.getResByUrl(l,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){e.call(i,generateJSON.paths[t])},s)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(i,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),RES.getResByUrl(t,a,this,RES.ResourceItem.TYPE_TEXT)},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);
if (self.CavalryLogger) { CavalryLogger.start_js(["KSCBO"]); }

__d("XLtgPostTranslationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/intl/see_translation/",{ftid:{type:"String",required:!0},text_size:{type:"Enum",defaultValue:"medium",enumType:1},data_ft:{type:"String"},tn:{type:"String"}})}),null);
__d("highlight",["Animation","Style"],(function(a,b,c,d,e,f){function a(a,c,d,e){new(b("Animation"))(a).from("background",e||"#fff9d7").to("background",d||"#fff").ease(b("Animation").ease.both).duration(2e3).ondone(function(){b("Style").set(a,"background",""),c&&c()}).go()}e.exports=a}),null);
__d("LtgPostTranslation",["cx","Arbiter","AsyncRequest","ContentTranslationStrings","DOM","Event","LoadingIndicator.react","React","ReactDOM","UFIUIEvents","XLtgPostTranslationController","collectDataAttributes","ge","highlight"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a={_renderTranslation:function(a,c){if(!a||!a.parentNode)return;var d=b("DOM").create("div",{className:"_63tb"},c||b("ContentTranslationStrings").NO_TRANSLATION_AVAILABLE);b("DOM").replace(a,d);c&&b("highlight")(d)},bindListener:function(a,c){__p&&__p();var d=this;b("Event").listen(a,"click",function(e){__p&&__p();e.prevent();var f=b("ge")("translationSpinnerPlaceholder_"+c);f&&b("ReactDOM").render(b("React").createElement(b("LoadingIndicator.react"),{size:"small",color:"white"}),f);f=e.getTarget();e=b("collectDataAttributes")(f,["ft"]);f=b("XLtgPostTranslationController").getURIBuilder().setString("ftid",c).setString("data_ft",JSON.stringify(e.ft)).getURI();new(b("AsyncRequest"))().setURI(f).setHandler(function(c){c=c.getPayload();d._renderTranslation(a,c&&c.text);b("Arbiter").inform(b("UFIUIEvents").TranslationRendered)}).setErrorHandler(function(){d._renderTranslation(a,null)}).send()})}};e.exports=a}),null);
if (self.CavalryLogger) { CavalryLogger.start_js(["ghr4q"]); }

__d("rayInterceptsBox",["invariant"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a,b){var c=Object.keys(a);b.forEach(function(b){c.indexOf(b)!==-1||g(0,4945),typeof a[b]==="number"||g(0,4946)})}a={check:function(a,b){__p&&__p();h(a,["minX","maxX","minY","maxY"]);h(b,["x","y","dx","dy"]);a.maxX>a.minX&&a.maxY>a.minY||g(0,4947);if(b.dx===0&&b.dy===0)return!1;if(b.x>=a.minX&&b.x<=a.maxX&&b.y>=a.minY&&b.y<=a.maxY)return!0;var c=(a.minX-b.x)/b.dx,d=(a.maxX-b.x)/b.dx,e=(a.minY-b.y)/b.dy;a=(a.maxY-b.y)/b.dy;b=Math.max(Math.min(c,d),Math.min(e,a));c=Math.min(Math.max(c,d),Math.max(e,a));if(b<0)return!1;return b>c?!1:!0}};e.exports=a}),null);
__d("AdsMouseStateStore",["invariant","Arbiter","Event","EventEmitter","Run","SubscriptionsHandler","Vector","$","ge","keyMirror","rayInterceptsBox","throttle"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=30,i=500,j="pagelet_ego_pane",k="pagelet_quick_promotion_rhc",l=b("keyMirror")({STATIONARY:null,INTENT:null,HOVER:null,NO_INTENT:null});function m(a){try{return{x:a.clientX||a.x,y:a.clientY||a.y}}catch(b){a=Math.random()*1e3;return{x:a,y:a}}}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e;c===void 0&&(c=j);d===void 0&&(d=i);e=a.call(this)||this;e.destroy=function(){e.$AdsMouseStateStore8&&e.$AdsMouseStateStore8.release(),e.removeAllListeners()};e.onPageTransition=function(a){e.$AdsMouseStateStore9()};e.onMouseMove=function(a){e.calculateState(m(a))};e.$AdsMouseStateStore7=c;e.$AdsMouseStateStore9();e.$AdsMouseStateStore8=new(b("SubscriptionsHandler"))().addSubscriptions(b("Event").listen(document,"mousemove",b("throttle")(e.onMouseMove,d)),b("Arbiter").subscribe("page_transition",e.onPageTransition));b("Run").onLeave(e.destroy);return e}var d=c.prototype;d.$AdsMouseStateStore9=function(){this.$AdsMouseStateStore1=l.STATIONARY,this.$AdsMouseStateStore2=this.$AdsMouseStateStore3=0,this.$AdsMouseStateStore4=Date.now(),this.$AdsMouseStateStore5=this.$AdsMouseStateStore7,this.$AdsMouseStateStore6=Infinity};d.getState=function(){return this.$AdsMouseStateStore1};d.updateRhcID=function(a){b("$")(a)||g(0,2967),this.$AdsMouseStateStore5=a};d.getRhcID=function(){return this.$AdsMouseStateStore5};d.__updateMousePos=function(a){this.$AdsMouseStateStore2=a.x,this.$AdsMouseStateStore3=a.y};d.isRhcPresent=function(){if(!b("ge")(this.$AdsMouseStateStore5))return!1;var a=this.getRhcDimensions();return a.y>0&&a.x>0};d.getRhc=function(){return b("$")(this.$AdsMouseStateStore5)};d.getRhcPosition=function(){return b("Vector").getElementPosition(this.getRhc())};d.getRhcScreenPos=function(){var a=b("Vector").getScrollPosition(),c=this.getRhcPosition();return{x:c.x-a.x,y:c.y-a.y}};d.getRhcDimensions=function(){return b("Vector").getElementDimensions(this.getRhc())};d.getPointToRectSquareDist=function(){return this.$AdsMouseStateStore6};d.isPointWithinDist=function(a){var b=this.getPointToRectSquareDist();return b<=a*a};d.getRhcBoundingBox=function(){var a=this.getRhcDimensions(),b=this.getRhcScreenPos();return{minX:b.x,maxX:b.x+a.x,minY:b.y,maxY:b.y+a.y}};d.$AdsMouseStateStore10=function(a){var b=this.getRhcBoundingBox(),c={x:(b.minX+b.maxX)/2,y:(b.minY+b.maxY)/2};b=[Math.abs(b.minX-b.maxX),Math.abs(b.minY-b.maxY)];var d=b[0];b=b[1];d=[Math.max(Math.abs(a.x-c.x)-d/2,0),Math.max(Math.abs(a.y-c.y)-b/2,0)];a=d[0];c=d[1];this.$AdsMouseStateStore6=a*a+c*c};d.isPosContainedInRhc=function(a){var b=this.getRhcBoundingBox();return a.x>=b.minX&&a.x<=b.maxX&&a.y>=b.minY&&a.y<=b.maxY};d.hasMovedMinDistance=function(a){var b=a.x-this.$AdsMouseStateStore2;a=a.y-this.$AdsMouseStateStore3;return b*b+a*a>=h*h};d.tooSoon=function(){return Date.now()-this.$AdsMouseStateStore4<i};d.$AdsMouseStateStore11=function(){this.$AdsMouseStateStore4=Date.now()};d.calculateState=function(a){__p&&__p();if(this.tooSoon())return;this.$AdsMouseStateStore11();if(!this.isRhcPresent())return;if(this.isPosContainedInRhc(a)){this.transitionToState(l.HOVER);this.$AdsMouseStateStore6=0;this.__updateMousePos(a);this.scheduleCheckup();return}else if(!this.hasMovedMinDistance(a)){this.transitionToState(l.STATIONARY);return}this.$AdsMouseStateStore10(a);var b=this.isMovingTowardsRhc(a)?l.INTENT:l.NO_INTENT;this.transitionToState(b);this.__updateMousePos(a);this.scheduleCheckup()};d.isMovingTowardsRhc=function(a){var c={x:this.$AdsMouseStateStore2,y:this.$AdsMouseStateStore3};if(this.isPosContainedInRhc(c))return!0;c=this.getRhcBoundingBox();a={x:this.$AdsMouseStateStore2,y:this.$AdsMouseStateStore3,dx:a.x-this.$AdsMouseStateStore2,dy:a.y-this.$AdsMouseStateStore3};return b("rayInterceptsBox").check(c,a)};d.scheduleCheckup=function(){var a={x:this.$AdsMouseStateStore2,y:this.$AdsMouseStateStore3};setTimeout(function(){this.calculateState(a)}.bind(this),i*1.5)};d.transitionToState=function(a){if(a===this.$AdsMouseStateStore1)return;this.$AdsMouseStateStore1=a;this.emit("change")};c.get=function(a){c.$AdsMouseStateStore12||(c.$AdsMouseStateStore12=new c(a?k:j));return c.$AdsMouseStateStore12};return c}(b("EventEmitter"));a.STATES=l;a.MIN_MOVE_DISTANCE=h;a.THROTTLE_TIME=i;e.exports=a}),null);
__d("AdsPagerConstants",["keyMirror"],(function(a,b,c,d,e,f){a=b("keyMirror")({ADD_PAGE:null,PAGE_TRANSITION:null,REQUEST_PAGE:null});c=b("keyMirror")({VIEW_ACTION:null,SERVER_ACTION:null});e.exports={ActionTypes:a,PayloadSources:c}}),null);
__d("AdsPagerDispatcher",["AdsPagerConstants","Dispatcher_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";c=b("AdsPagerConstants").PayloadSources;function a(a){return function(b){this.dispatch({payloadSource:a,action:b})}}d=Object.assign(new(b("Dispatcher_DEPRECATED"))(),{handleUpdateFromViewAction:a(c.VIEW_ACTION),handleUpdateFromServerAction:a(c.SERVER_ACTION)});e.exports=d}),null);
__d("cxodecode",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=36,i=2;function a(a){__p&&__p();if(!a)return"";a=a.cxononce;a||g(0,4289);var b=a.substr(0,a.length-i);a=parseInt(a.substr(-i),h);var c="";for(var d=0;d<b.length;d+=i)c+=String.fromCharCode(parseInt(b.substr(d,i),h)^a);return c}e.exports=a}),null);
__d("AdsRefreshHandler",["csx","invariant","AdsMouseStateStore","AdsPagerConstants","AdsPagerDispatcher","Arbiter","CSSFade","DataAttributeUtils","DOM","Event","FBLogger","IntersectionObserver","SubscriptionsHandler","Toggler","UIPagelet","VideoPlayerExperiments","cxodecode","debounceAcrossTransitions","getOrCreateDOMID","gkx"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=b("AdsMouseStateStore").STATES,j=600,k;a=function(){"use strict";__p&&__p();function a(a,c,d,e){__p&&__p();var f=this;e===void 0&&(e=!1);this.$12=function(){};this.$17=!1;c.nonce&&(k=b("cxodecode")(c.nonce));this.$1=a;this.$2=Date.now();this.$3=c;this.$4=d;this.$5=b("VideoPlayerExperiments").rhcWNSPauseAds;this.$6=0;this.$7=!1;this.$8=!0;this.$9=0;this.$10=null;this.$11=e;this.$15=new(b("SubscriptionsHandler"))();this.$16=new(b("SubscriptionsHandler"))();this.$13=b("AdsMouseStateStore").get(this.$11);this.$18={};if(d.data==null||d.pid==null){b("FBLogger")("ads_www").warn("Tried to start AdsRefreshHandler without egoContext");return}this.$12=b("debounceAcrossTransitions")(this.reloadAdsIfNeeded.bind(this),this.$3.delay);b("gkx")("678125")&&(this.$14=new(b("IntersectionObserver"))(function(a){f.$12()},{threshold:[0,1]}));this.$15.addSubscriptions(b("Event").listen(this.$1,"mouseenter",this.setMouseOver.bind(this,!0)),b("Event").listen(this.$1,"mouseleave",this.setMouseOver.bind(this,!1)),this.$13.addListener("change",this.onMouseStateStoreChange.bind(this)),b("Arbiter").subscribe("AdsPreferencesDialog/opened",this.stopRefreshingRHC.bind(this)),b("Arbiter").subscribe("AdsPreferencesDialog/closed",this.startRefreshingRHC.bind(this)),b("Arbiter").subscribe("VideoChannelView/opened",this.stopRefreshingRHC.bind(this)),b("Arbiter").subscribe("VideoChannelView/closed",this.startRefreshingRHC.bind(this)));b("VideoPlayerExperiments").rhcWNSPauseAds&&this.$15.addSubscriptions(b("Arbiter").subscribe("VideoWatchAndScrollController/init",this.stopRefreshingRHC.bind(this)),b("Arbiter").subscribe("VideoWatchAndScrollController/exit",this.startRefreshingRHC.bind(this)));this.$19();b("AdsPagerDispatcher").register(this.handlePageDispatch.bind(this))}var c=a.prototype;c.$19=function(){this.$16&&this.$16.release();this.$16=new(b("SubscriptionsHandler"))();var a=b("DOM").scry(this.$1,".uiToggle");for(var c=0;c<a.length;c++)this.$16.addSubscriptions(b("Toggler").listen("show",a[c],this.stopRefreshingRHC.bind(this)),b("Toggler").listen("hide",a[c],this.startRefreshingRHC.bind(this)))};c.handlePageDispatch=function(a){a=a.action||{};if(a.actionType===b("AdsPagerConstants").ActionTypes.REQUEST_PAGE){var c=a.queryAdImpToken;c&&(this.$18[c]=Date.now());a.waitForNextScheduledRefresh!==!0&&this.reloadAds()}};c.setMouseOver=function(a){this.$17=a,a&&this.$10!=null&&(this.$10.cancel(),this.$10=null)};c.subscribeDefaultEventsForRefresh=function(){b("gkx")("678125")?(this.$20(),this.$15.addSubscriptions(b("Event").listen(window,"resize",this.$12))):this.$15.addSubscriptions(b("Event").listen(window,"scroll",this.$12),b("Event").listen(window,"resize",this.$12));return this};c.$20=function(){this.$14||h(0,13341),this.$14.disconnect(),this.$14||h(0,13341),this.$14.observe(this.$1)};c.reloadWithDebounce=function(){this.$12()};c.reloadWithoutDebounce=function(){this.reloadAdsIfNeeded()};c.stopRefreshingRHC=function(){this.$5?this.$9++:this.$8=!1};c.startRefreshingRHC=function(){this.$2=Date.now(),this.$5?--this.$9<0&&(this.$9=0):this.$8=!0};c.forceLoadIfEnoughTimePassed=function(a){Date.now()-this.$2>a&&this.reloadAds()};c.containsPremium=function(){var a=b("DOM").scry(this.$1,k||"div._4u8");return!!a.filter(function(a){return JSON.parse(b("DataAttributeUtils").getDataAttribute(a,"data-ad")).segment==="premium"}).length};c.reloadAdsIfNeeded=function(){__p&&__p();if(!this.$1)return;b("Arbiter").inform("AdsRefreshHandler/CheckingReload");if(this.$3.stateRefresh){this.reloadAdsIfNeededStateBased();return}if(this.containsPremium()||this.$17||!this.$3.interval)return;Date.now()-this.$2>=this.$3.interval&&this.reloadAds()};c.reloadAdsIfNeededStateBased=function(){if(Date.now()-this.$2<this.$3.interval)return;if(this.containsPremium())return;if(!this.$3.interval)return;this.$7=!0;b("Arbiter").inform("AdsRefreshHandler/RefreshScheduled");this.checkScheduledRefresh()};c.getRefreshScheduled=function(){return this.$7};c.onMouseStateStoreChange=function(){this.checkScheduledRefresh()};c.checkScheduledRefresh=function(){__p&&__p();if(!this.$7)return;if(this.$17)return;var a=this.$13.getState(),b=!1;switch(a){case i.HOVER:case i.NO_INTENT:b=!0;break;default:break}if(!b)return;this.$7=!1;this.reloadAds()};c.reloadAds=function(){__p&&__p();var a=this.$1;if(a==null)return;this.$2=Date.now();if(this.$5){if(this.$9)return}else if(!this.$8)return;var c=this.$4&&this.$4.data;c=babelHelpers["extends"]({},c,{refresh_num:++this.$6,queryAdImpTokens:JSON.stringify(this.$18)});this.$10=b("UIPagelet").loadFromEndpoint(this.$11?"QuickPromotionRHCPagelet":"WebEgoPane",this.$1,{dom_id:b("getOrCreateDOMID")(a),pid:this.$4.pid,data:c},{bundle:!1,handler:this.onLoadHandler.bind(this)});this.$18={};b("Arbiter").inform("AdsRefreshHandler/AdsLoading")};c.onLoadHandler=function(){b("Arbiter").inform("AdsRefreshHandler/AdsLoaded");this.$10=null;this.$19();if(!this.$3.fade)return;this.$1==null?b("FBLogger")("ads_www").warn("Expected root element"):b("CSSFade").show(this.$1,{duration:j})};c.cleanup=function(){this.$1=null,this.$15.release(),this.$12.reset(),this.$14&&(this.$14.disconnect(),this.$14=null)};return a}();e.exports=a}),null);
__d("HomeRHCAdsBasicRefresh",["AdsRefreshHandler","Arbiter","NavigationMessage","Run","SubscriptionsHandler","ge"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i,j;function k(){g&&(g.cleanup(),g=null),h&&(h.release(),h=null),i=null}function l(){var a=b("ge")(j);a&&i&&(a.appendChild(i),i=null)}function m(a,b){i=b,g&&g.forceLoadIfEnoughTimePassed(0)}a={init:function(a,c,d,e){e===void 0&&(e=!1),j=a,g=new(b("AdsRefreshHandler"))(b("ge")(a),c,d,e).subscribeDefaultEventsForRefresh(),h=new(b("SubscriptionsHandler"))(),h.addSubscriptions(b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,k),b("Arbiter").subscribe("ProfileQuestionAnswered",m),b("Arbiter").subscribe("AdsRefreshHandler/AdsLoaded",l)),b("Run").onLeave(k)}};e.exports=a}),null);
__d("EntstreamInjectWarning",["CSS","DOM"],(function(a,b,c,d,e,f){var g=null;a={init:function(a){g=a},showWarning:function(a){g&&(b("CSS").show(g),b("DOM").setContent(g,a))}};e.exports=a}),null);
__d("XFeedSeeFirstStoryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/feed/control/see_first/story/",{})}),null);
__d("SeeFirstStoryLogger",["AsyncRequest","XFeedSeeFirstStoryController"],(function(a,b,c,d,e,f){a=function(){var a=b("XFeedSeeFirstStoryController").getURIBuilder().getURI();new(b("AsyncRequest"))(a).send()};e.exports={log:a}}),null);
__d("FeedImageErrorEventLogger",["Arbiter","BanzaiLogger","Bootloader","DataStore","DOMQuery","Parent","Run","URI","ge","getCrossOriginTransport"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=2;function a(a,b){return{containerId:b,errorsImageSrcs:{},numErrorUrlsLogged:0,surface:a}}var h=!1,i=0,j=!1,k=[a("feed","stream_pagelet"),a("profile","pagelet_timeline_main_column")];function l(a){return!!a&&(Object.prototype.hasOwnProperty.call(a.getQueryData(),"theater")||a.toString().indexOf("/videos/")>=0)}function m(a){b("BanzaiLogger").log("WebFeedImageErrorEventLoggerConfig",a)}function n(){__p&&__p();k.forEach(function(a){__p&&__p();var c=b("ge")(a.containerId);if(c){c=b("DOMQuery").scry(c,"img");var d=c.length,e=0,f=0;c.forEach(function(c){if(c&&c.src){var d="other";a.errorsImageSrcs[c.src]?(f++,d="error"):c.complete&&(e++,d="success");i>0&&Math.random()<1/i&&b("BanzaiLogger").log("WWWImageLoadSrcEventLoggerConfig",{surface:a.surface,src:c.src,result:d})}});j&&d>0&&b("BanzaiLogger").log("WWWImageLoadSummaryEventLoggerConfig",{surface:a.surface,num_total:d,num_success:e,num_errors:f,num_other:d-e-f});a.numErrorUrlsLogged=0}})}function o(a){__p&&__p();if(!a||!a.target||a.target.nodeName!=="IMG")return;var c=a.target,d=c.src;a=k.find(function(a){return b("Parent").bySelector(c,"#"+a.containerId)});if(!a)return;var e=a.surface;if(!b("DataStore").get(c,"retry"))b("DataStore").set(c,"retry",!0),c.src=d;else{a.errorsImageSrcs[d]=!0;if(a.numErrorUrlsLogged>=g)return;a.numErrorUrlsLogged++;b("Bootloader").loadModules(["XHRRequest"],function(a){a&&new a(d).setTransportBuilder(b("getCrossOriginTransport")).setMethod("GET").setResponseHandler(function(){m({error_type:"SUCCESS",src:d,surface:e})}).setErrorHandler(function(a){if(a){var b=a.errorMsg;b.indexOf('id="facebook"')>0&&(b="FB ERROR PAGE");m({error_code:a.errorCode,error_type:a.errorType,error_message:b,src:d,surface:e})}}).setTimeoutHandler(function(a){m({error_type:"TIMEOUT",src:a,surface:e})}).send()},"FeedImageErrorEventLogger")}}c={init:function(a){__p&&__p();if(h)return;h=!0;i=a&&a.loadSampleRate||0;j=a&&a.alwaysLogCounts;window.addEventListener("error",o,!0);b("Run").onUnload(function(){return n()});b("Arbiter").subscribe(["pre_page_transition"],function(a,c){if(l(b("URI").getMostRecentURI())||l(b("URI").getNextURI()))return;n()})}};e.exports=c}),null);
__d("FeedLoadEventWWWLogger",["Arbiter","BanzaiLogger","ErrorSignal","ErrorUtils","LitestandMessages","PageletEventConstsJS","URI"],(function(a,b,c,d,e,f){__p&&__p();var g=["substream_","more_pager_pagelet_","pagelet_composer","pagelet_navigation","pagelet_rhc_footer"],h=[b("PageletEventConstsJS").ARRIVE_END,b("PageletEventConstsJS").DISPLAY_END,b("PageletEventConstsJS").ONLOAD_END],i=["pre_page_transition","page_transition"],j=[b("LitestandMessages").NEWSFEED_LOAD,b("LitestandMessages").STORIES_REQUESTED,b("LitestandMessages").STORIES_INSERTED,b("LitestandMessages").NEWER_STORIES_REQUESTED,b("LitestandMessages").NEWER_STORIES_INSERTED,b("LitestandMessages").STREAM_LOAD_ERROR,b("LitestandMessages").STREAM_LOAD_RETRY,b("LitestandMessages").DUPLICATE_CURSOR_ERROR],k=!1;function l(a){return a&&(a.getPath()==="/"||a.getPath()==="/home.php")}function m(a){b("BanzaiLogger").log("WebFeedLoadLoggerConfig",a)}function n(a){if(!a)return null;if(a.indexOf("more_pager_pagelet_")===0)return"more_pager_pagelet_n";return a.indexOf("substream_")===0&&a!=="substream_0"&&a!=="substream_1"?"substream_n":a}a={init:function(){__p&&__p();if(k)return;b("Arbiter").subscribe("BigPipe/init",function(a,c){if(!c||!c.arbiter)return;c.arbiter.subscribe("pagelet_event",function(a,c){c&&h.indexOf(c.event)>=0&&g.some(function(a){return c.id.indexOf(a)===0})&&l(b("URI").getNextURI())&&m({event:"pagelet",pagelet_id:n(c.id),pagelet_event_type:c.event,pagelet_phase:c.phase.toString()})})});b("Arbiter").subscribe(i,function(a,b){if(b){b=b.to||b.uri;l(b)&&m({event:"page_transition",transition_event_type:a})}});b("Arbiter").subscribe(j,function(a,c){var d=null,e=null;a===b("LitestandMessages").STREAM_LOAD_ERROR?d=c:a===b("LitestandMessages").DUPLICATE_CURSOR_ERROR&&(e=c);m({event:"stream_load",stream_event_type:a,stream_cursor:e,stream_substream_id:n(c&&c.substream_id),error_name:d&&d.name,error_message:d&&d.message,error_stack:d&&d.stack})});b("ErrorUtils").addListener(function(a){a&&l(b("URI").getNextURI())&&m({event:"js_error",error_name:a.name,error_message:a.message,error_stack:a.stack})});k=!0}};e.exports=a}),null);
__d("NewsFeedReturnToHomeController",["QuicklingAugmenter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=/^(?:(?:\/)|(?:\/?home\.php))$/,h=["h_nor","nf"],i=!1;a={init:function(){__p&&__p();if(i)return;i=!0;b("QuicklingAugmenter").addHandler(function(a){var b=a.getPath();a=a.getQueryData();if(b.match(g)){b=a&&a.sk;if(!b||h.indexOf(b)>0)return{is_refresh:!0}}i=!1;return!1})}};e.exports=a}),null);
__d("ScrollPerfMonitor",["Event","MainThreadPerformanceLoggerActions","MainThreadPerformanceMonitor","Run","debounce"],(function(a,b,c,d,e,f){__p&&__p();a=500;var g=!1,h;function i(){g?k():(g=!0,b("MainThreadPerformanceMonitor").start(b("MainThreadPerformanceLoggerActions").SCROLL))}function j(){g=!1,b("MainThreadPerformanceMonitor").stop(b("MainThreadPerformanceLoggerActions").SCROLL)}var k=b("debounce")(j,a);function l(){h&&(h.remove(),h=null),j()}c={init:function(){b("MainThreadPerformanceMonitor").isEnabled()&&(h=b("Event").listen(window,"scroll",i,b("Event").Priority.NORMAL,{passive:!0}),b("Run").onLeave(l))}};e.exports=c}),null);
__d("Sketch",["regeneratorRuntime","requireCond","cr:902965"],(function(a,b,c,d,e,f){__p&&__p();a=babelHelpers["extends"]({},b("cr:902965"),{solveIntern:function(a,c,d,e){return b("regeneratorRuntime").async(function(f){while(1)switch(f.prev=f.next){case 0:f.next=2;return b("regeneratorRuntime").awrap(b("cr:902965").solveIntern(a,c,d,e));case 2:case"end":return f.stop()}},null,this)},solveAndCallAsyncController:function(a,c,d){return b("regeneratorRuntime").async(function(e){while(1)switch(e.prev=e.next){case 0:e.next=2;return b("regeneratorRuntime").awrap(b("cr:902965").solveAndCallAsyncController(a,c,d));case 2:case"end":return e.stop()}},null,this)},solveAndUpdateForm:function(a,c,d,e){return b("regeneratorRuntime").async(function(f){while(1)switch(f.prev=f.next){case 0:f.next=2;return b("regeneratorRuntime").awrap(b("cr:902965").solveAndUpdateForm(a,c,d,e));case 2:case"end":return f.stop()}},null,this)},solveAllPrimitivesAndCallAsyncController:function(a,c,d){return b("regeneratorRuntime").async(function(e){while(1)switch(e.prev=e.next){case 0:e.next=2;return b("regeneratorRuntime").awrap(b("cr:902965").solveAllPrimitivesAndCallAsyncController(a,c,d));case 2:case"end":return e.stop()}},null,this)}});e.exports=a}),null);
__d("SketchBase",["Promise","regeneratorRuntime","Alea","Base64","md5","performanceNow","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=10,h=16,i=function(){return new(b("Promise"))(function(a){b("setTimeout")(a)})},j=function(){__p&&__p();function a(a,c,d){this.seed=a,this.rounds=c,this.rng=b("Alea")(a),this.ctx=d.getContext("2d"),this.width=d.width,this.height=d.height}var c=a.prototype;c.solveAllRoundsAsync=function(a){__p&&__p();var c,d;return b("regeneratorRuntime").async(function(e){__p&&__p();while(1)switch(e.prev=e.next){case 0:c=Date.now()+g,d=0;case 2:if(!(d<this.rounds)){e.next=11;break}a(d);if(!(Date.now()>c)){e.next=8;break}e.next=7;return b("regeneratorRuntime").awrap(i());case 7:c=Date.now()+g;case 8:d++;e.next=2;break;case 11:case"end":return e.stop()}},null,this)};c.solveAsync=function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(this.solveAllRoundsAsync(this.pickPrimitiveAndDraw.bind(this)));case 2:case"end":return a.stop()}},null,this)};c.solveOnePrimitiveAsync=function(a){return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:c.next=2;return b("regeneratorRuntime").awrap(this.solveAllRoundsAsync(this.getDrawFunction(a)));case 2:case"end":return c.stop()}},null,this)};c.getDrawFunction=function(a){switch(a){case"text":return this.drawText.bind(this);case"bezier":return this.drawBezier.bind(this);case"circle":return this.drawCircle.bind(this);case"emoji":return this.drawEmoji.bind(this);default:return function(){return void 0}}};c.pickPrimitive=function(a){var b=["emoji","circle","bezier","text"];return b[a%b.length]};c.pickPrimitiveAndDraw=function(a){a=this.getDrawFunction(this.pickPrimitive(a));a()};c.drawText=function(){var a=Math.floor(this.rng()*50+100);this.ctx.font=a+"px Arial";var b=Math.floor(this.rng()*100).toString(),c=Math.floor(this.rng()*this.width/2);a=this.rngRange(a*2,this.height-a);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fillText(b,c,a)};c.drawEmoji=function(){var a=Math.floor(this.rng()*50+100);this.ctx.font=a+"px Arial";var b="\ud83d\ude03",c=Math.floor(this.rng()*this.width/2);a=this.rngRange(a*2,this.height-a);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fillText(b,c,a)};c.drawBezier=function(){this.ctx.beginPath();var a=this.rng()*this.width,b=this.rng()*this.height,c=this.rng()*this.width,d=this.rng()*this.height,e=this.rng()*this.width,f=this.rng()*this.height;this.ctx.moveTo(a,b);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,c,d);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,e,f);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,a,b);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fill()};c.drawCircle=function(){this.ctx.beginPath(),this.ctx.arc(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width/5,0,2*Math.PI),this.ctx.fillStyle=this.makeRadialGradient(),this.applyShadow(),this.ctx.fill(),this.ctx.lineWidth=2,this.ctx.strokeStyle=this.makeRadialGradient(),this.ctx.stroke()};c.makeRadialGradient=function(){var a=this.ctx.createRadialGradient(this.rng()*this.width,this.rng()*this.height,0,this.rng()*this.width,this.rng()*this.height,this.width*2);a.addColorStop(0,this.makeColor());a.addColorStop(.5,this.makeColor());a.addColorStop(1,this.makeColor());return a};c.makeColor=function(){var a=Math.floor(this.rng()*255),b=Math.floor(this.rng()*255),c=Math.floor(this.rng()*255);return"rgb("+a+","+b+","+c+")"};c.applyShadow=function(){this.ctx.shadowColor=this.makeColor(),this.ctx.shadowBlur=this.rng()*50,this.ctx.shadowOffsetX=this.rng()*15,this.ctx.shadowOffsetY=this.rng()*15};c.rngRange=function(a,b){var c=Math.min(a,b);a=Math.max(a,b);return this.rng()*(a-c)+c};return a}(),k={createCanvasAndSolveAllPrimitives:function(a,c,d){__p&&__p();var e,f,g,h;return b("regeneratorRuntime").async(function(i){__p&&__p();while(1)switch(i.prev=i.next){case 0:e=document.createElement("canvas");e.width=200;e.height=200;e.style.display="none";f={hash:"",hash_bezier:"",hash_circle:"",hash_emoji:"",hash_text:"",hash2:"",rounds:d,seed:a,seed2:c,time_taken:0};document.body&&document.body.appendChild(e);i.next=8;return b("regeneratorRuntime").awrap(k.solveAsync(e,a,d));case 8:g=i.sent;i.next=11;return b("regeneratorRuntime").awrap(k.solveAsync(e,c,d));case 11:h=i.sent;f.hash=g.hash;f.hash2=h.hash;f.time_taken=g.time_taken+h.time_taken;i.next=17;return b("regeneratorRuntime").awrap(k.solvePrimitive(e,a,d,"text"));case 17:f.hash_text=i.sent;i.next=20;return b("regeneratorRuntime").awrap(k.solvePrimitive(e,a,d,"bezier"));case 20:f.hash_bezier=i.sent;i.next=23;return b("regeneratorRuntime").awrap(k.solvePrimitive(e,a,d,"circle"));case 23:f.hash_circle=i.sent;i.next=26;return b("regeneratorRuntime").awrap(k.solvePrimitive(e,a,d,"emoji"));case 26:f.hash_emoji=i.sent;document.body&&document.body.removeChild(e);return i.abrupt("return",f);case 29:case"end":return i.stop()}},null,this)},encode:function(a){return b("Base64").encode(JSON.stringify(a))},getHash:function(a){return new(b("Promise"))(function(c){b("setTimeout")(function(){c(b("md5")(a.toDataURL()))},h)})},solveAsync:function(a,c,d){__p&&__p();var e,f,g,h,i,l;return b("regeneratorRuntime").async(function(m){__p&&__p();while(1)switch(m.prev=m.next){case 0:e=new j(c,d,a);e.ctx.clearRect(0,0,e.width,e.height);f=b("performanceNow")();m.next=5;return b("regeneratorRuntime").awrap(e.solveAsync());case 5:g=b("performanceNow")();h=parseInt((g-f)*1e3,10);m.next=9;return b("regeneratorRuntime").awrap(k.getHash(a));case 9:i=m.sent;l={hash:i,time_taken:h};return m.abrupt("return",l);case 12:case"end":return m.stop()}},null,this)},solvePrimitive:function(a,c,d,e){__p&&__p();var f,g;return b("regeneratorRuntime").async(function(h){__p&&__p();while(1)switch(h.prev=h.next){case 0:f=new j(c,d,a);f.ctx.clearRect(0,0,f.width,f.height);h.next=4;return b("regeneratorRuntime").awrap(f.solveOnePrimitiveAsync(e));case 4:h.next=6;return b("regeneratorRuntime").awrap(k.getHash(a));case 6:g=h.sent;return h.abrupt("return",g);case 8:case"end":return h.stop()}},null,this)}};e.exports=k}),null);
__d("SISketchSurface",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FEED:"feed",LOGIN:"login",REG:"registration"})}),null);
__d("XSISketchResultsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/sketch_results/",{})}),null);
__d("SketchBlue",["regeneratorRuntime","AsyncRequest","Form","SISketchSurface","SketchBase","XSISketchResultsController","emptyFunction","nullthrows"],(function(a,b,c,d,e,f){__p&&__p();var g={solveIntern:function(a,c,d,e){var f;return b("regeneratorRuntime").async(function(g){while(1)switch(g.prev=g.next){case 0:g.next=2;return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(a,d,e));case 2:f=g.sent,c.textContent=f.hash;case 4:case"end":return g.stop()}},null,this)},solveAndCallAsyncController:function(a,c,d){var e,f,h;return b("regeneratorRuntime").async(function(i){while(1)switch(i.prev=i.next){case 0:i.next=2;return b("regeneratorRuntime").awrap(g.createCanvasAndSolve(a,c,d));case 2:e=i.sent,f=b("SketchBase").encode(e),h=b("XSISketchResultsController").getURIBuilder().getURI(),new(b("AsyncRequest"))().setURI(h).setMethod("POST").setData({skstamp:f}).setTimeoutHandler(1e4,b("emptyFunction")).setErrorHandler(b("emptyFunction")).send();case 6:case"end":return i.stop()}},null,this)},solveAndUpdateForm:function(a,c,d,e){var f,h,i,j;return b("regeneratorRuntime").async(function(k){while(1)switch(k.prev=k.next){case 0:k.next=2;return b("regeneratorRuntime").awrap(g.createCanvasAndSolve(a,c,d));case 2:f=k.sent,h=babelHelpers["extends"]({},f,{surface:e=="login_form"?b("SISketchSurface").LOGIN:e=="reg"?b("SISketchSurface").REG:""}),i=b("SketchBase").encode(h),j=document.getElementById(e),b("Form").createHiddenInputs({skstamp:i},j);case 7:case"end":return k.stop()}},null,this)},solveAllPrimitivesAndCallAsyncController:function(a,c,d){var e,f,g;return b("regeneratorRuntime").async(function(h){while(1)switch(h.prev=h.next){case 0:h.next=2;return b("regeneratorRuntime").awrap(b("SketchBase").createCanvasAndSolveAllPrimitives(a,c,d));case 2:e=h.sent,f=b("SketchBase").encode(e),g=b("XSISketchResultsController").getURIBuilder().getURI(),new(b("AsyncRequest"))().setURI(g).setMethod("POST").setData({skstamp:f}).setTimeoutHandler(1e4,b("emptyFunction")).setErrorHandler(b("emptyFunction")).send();case 6:case"end":return h.stop()}},null,this)},createCanvasAndSolve:function(a,c,d){__p&&__p();var e,f,g,h;return b("regeneratorRuntime").async(function(i){__p&&__p();while(1)switch(i.prev=i.next){case 0:e=document.createElement("canvas");e.width=200;e.height=200;e.style.display="none";b("nullthrows")(document.body).appendChild(e);i.next=7;return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(e,a,d));case 7:f=i.sent;i.next=10;return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(e,c,d));case 10:g=i.sent;h={hash:f.hash,hash2:g.hash,rounds:d,seed:a,seed2:c,time_taken:f.time_taken+g.time_taken};b("nullthrows")(document.body).removeChild(e);return i.abrupt("return",h);case 14:case"end":return i.stop()}},null,this)}};e.exports=g}),null);
__d("FeedAdsGapRuleViolationDetectionFix",["csx","Banzai","BanzaiODS","CSS","DataAttributeUtils","DOM","$","ge","isEmpty"],(function(a,b,c,d,e,f,g){__p&&__p();var h="ei",i="qid",j="gap rule violation",k="non violating ads gap",l="non violating ego gap",m="first position violation",n="not first position violation",o="feed load",p="first position invalidation",q="spacing invalidation",r="ego_pymk",s="ego_other",t=[],u=[],v=[],w=[],x=[],y={},z={},A={},B=[],C={registerFeedStories:function(a,c){__p&&__p();a.containerID=="substream_0"&&(t=[],u=[]);c=b("ge")(a.containerID);if(!c)return;A=a.egoGapRule;B=a.invalidateEgo?a.egoStories:{};y=babelHelpers["extends"]({},a.demoAdChecks,y);var d=C._getAllStoriesFromContainer(c);a.isLoggingEnabled&&d.length!==0&&C._logFeedLoad();a.isNewerStories?t=d.concat(t):t=t.concat(d);for(var e in a.minGaps)Object.prototype.hasOwnProperty.call(a.minGaps,e)&&(z[e]=a.minGaps[e]);b("isEmpty")(y)&&(a.isLoggingEnabled&&C._checkFirstPosViolation(a,c),(a.isLoggingEnabled||a.isGapRuleInvalidationEnabled)&&C._checkGapRuleViolation(a))},_getAllStoriesFromContainer:function(a){return b("DOM").scry(a,"div._5jmm").map(C._convertStoryNodeToObject).filter(function(a){return a!==null})},_convertStoryNodeToObject:function(a){__p&&__p();if(b("CSS").matchesSelector(a,"._170y"))return null;var c=a.getAttribute("data-dedupekey");if(y[c])return null;var d=b("DOM").scry(a,"div._hye"),e=b("DOM").scry(a,"li._170x"),f=[];d.length!==0?f=d.map(function(a){return b("DataAttributeUtils").getDataFt(a)}).filter(function(a){return a!==null}):e.length!==0?f=e.map(function(a){return b("DataAttributeUtils").getDataFt(a)}).filter(function(a){return a!==null}):b("DataAttributeUtils").getDataFt(a)&&(f=[b("DataAttributeUtils").getDataFt(a)]);if(!f.length)return null;d=JSON.parse(f[0]);e={dataFTArray:f,dedupKey:c,isSponsored:!!d[h],isEgoPymk:B[c]===r,isEgoOther:B[c]===s,height:a.offsetHeight,qid:parseInt(d[i],10),nodeID:a.id};return e},_checkFirstPosViolation:function(a,c){__p&&__p();if(t.length>0&&!t[0].isSponsored){var d={qid:t[0].qid};a.isLoggingEnabled&&!(t[0].dedupKey in x)&&(C._logNotFirstPosViolation(d),x[t[0].dedupKey]=d)}while(t.length>0&&t[0].isSponsored){var d={ftArray:t[0].dataFTArray,qid:t[0].qid,nodeid:t[0].nodeID,firstStoryType:a.firstStoryType},e=b("DOM").scry(c,".uiBoxRed")[0];if(e){e=e.textContent||e.innerText;e&&(d.error_msg=e)}a.isLoggingEnabled&&!(t[0].dedupKey in w)&&(C._logFirstPosViolation(d),w[t[0].dedupKey]=d);break}},_getMinGap:function(a,b,c){a=Math.min(a?a:Number.MAX_VALUE,b?b:Number.MAX_VALUE);return a!==Number.MAX_VALUE?a:c},_getStoryDedupKeys:function(){return t.map(function(a){return a.dedupKey})},_getStoryDedupKeysJSONString:function(a,b){var c=[];for(var a=a;a<=b;a++)c.push(t[a].dedupKey);return JSON.stringify(c)},_getIdxOfStoryToSwap:function(a,b){__p&&__p();if(b>=t.length-a)return-1;for(var a=a+1;a<t.length&&b>0;a++){if(!t[a].isSponsored&&!t[a].isEgoPymk&&!t[a].isEgoOther)b--;else return-1;if(b===0)return a}return-1},_checkGapRuleViolation:function(a){__p&&__p();var c=null,d=null,e=null;for(var f=0;f<t.length;f++){var g=t[f],h=b("ge")(g.nodeID);if(!h||!b("CSS").shown(h)){t.splice(f,1);continue}if(g.isSponsored){h=!1;var i=!1;if(d!==null){var m=f-d,n=null,o=null;c===d?o=C._getMinGap(z[e.dedupKey],z[g.dedupKey],a.defaultMinGap):o=C._getMinGapBetweenStories(e,g);var p;m<o?(n=j,p=d):(n=k,p=c);a.isLoggingEnabled&&((!(g.dedupKey in u)||u[g.dedupKey].event_type!==n)&&(C._logGapEvent(n,p,f),u[g.dedupKey]={event_type:n}));if(a.isGapRuleInvalidationEnabled&&n==j){p=-1;a.isSwapOnGapRuleViolationEnabled&&(p=C._getIdxOfStoryToSwap(f,o-m));if(p>0){C._shiftAdOrEgoBelowOrganicStory(g.nodeID,t[p].nodeID);n=t[f];t.splice(f,1);t.splice(p,0,n);if(a.isLoggingEnabled){o={ft:t[p].dataFTArray[0],dist:p-f,qid:t[p].qid,event_type:"ad_swap"};b("Banzai").post("feed_ads_gap_rule_violation",o)}i=!0}else a.isGapRuleInvalidationEnabled&&(C._invalidateGapRuleViolatedAd(e,g),h=!0,t.splice(f--,1))}}!h&&!i&&(c=f,d=f,e=g)}if(a.invalidateEgo&&(g.isEgoPymk||g.isEgoOther)){m=!1;if(d!==null){n=f-d;p=C._getMinGapBetweenStories(e,g);if(n<p){m=!0;o=-1;h=p-n;i=f+1;for(;i<t.length;i++){if(t[i].isSponsored||t[i].isEgoPymk||t[i].isEgoOther)break;else h--;if(h===0){o=i;break}}o>0?C._swapAndLogEgo(f,i):(C._invalidateAndLogEgo(f),f--)}else a.shouldLogEgo&&!v[g.dedupKey]&&(v[g.dedupKey]=!0,C._logGapEvent(l,d,f))}m||(d=f,e=g)}}},_getMinGapBetweenStories:function(a,b){__p&&__p();var c;if(a.isSponsored||a.isEgoOther)c="ad";else if(a.isEgoPymk)c="pymk";else return 0;if(b.isSponsored||b.isEgoOther)a="ad";else if(b.isEgoPymk)a="pymk";else return 0;return A[c+"_"+a]},_swapAndLogEgo:function(a,c){C._shiftAdOrEgoBelowOrganicStory(t[a].nodeID,t[c].nodeID);var d=t[a];t.splice(a,1);t.splice(c,0,d);b("BanzaiODS").bumpEntityKey("feed_ego_invalidation","swap")},_invalidateAndLogEgo:function(a){var c=b("ge")(t[a].nodeID);c&&b("CSS").hide(c);t.splice(a,1);b("BanzaiODS").bumpEntityKey("feed_ego_invalidation","invalidate")},_logFirstPosViolation:function(a){var c={ft:a.ftArray[0],event_type:m,intValues:{qid:a.qid},first_story_type:a.firstStoryType};a.error_msg&&(c.error_msg=a.error_msg);b("Banzai").post("feed_ads_gap_rule_violation",c)},_logNotFirstPosViolation:function(a){var c={event_type:n,intValues:{qid:a.qid}};a.error_msg&&(c.error_msg=a.error_msg);b("Banzai").post("feed_ads_gap_rule_violation",c)},_logGapEvent:function(a,c,d){if(c===null)return;var e=t[c],f=t[d],g=0;for(var h=c+1;h<d;h++)g+=t[h].height;h={ft_A:e.dataFTArray[0],ft_B:f.dataFTArray[0],event_type:a,intValues:{dist:d-c,pdist:g,pos:d+1,qid_A:e.qid,qid_B:f.qid},strValues:{previous_unit_type:C._getUnitTypeForLogging(e),unit_type:C._getUnitTypeForLogging(f)},dedup_keys:C._getStoryDedupKeysJSONString(c,d)};b("Banzai").post("feed_ads_gap_rule_violation",h)},_getUnitTypeForLogging:function(a){if(a.isSponsored)return"ad";else if(a.isEgoPymk)return"pymk";else if(a.isEgoOther)return"ego_other";return null},_logFeedLoad:function(){var a={event_type:o};b("Banzai").post("feed_ads_gap_rule_violation",a)},_invalidateFirstPosAd:function(a){b("CSS").hide(b("$")(a.nodeid));a={ft_array:a.ftArray,event_type:p};b("Banzai").post("feed_ads_gap_rule_violation",a)},_invalidateGapRuleViolatedAd:function(a,c){var d=b("ge")(c.nodeID);d&&b("CSS").hide(d);d={ft_array_A:a.dataFTArray[0],ft_array_B:c.dataFTArray[0],event_type:q};b("Banzai").post("feed_ads_gap_rule_violation",d)},_shiftAdOrEgoBelowOrganicStory:function(a,c){a=b("ge")(a);c=b("ge")(c);a&&c&&b("DOM").insertAfter(c,a)}};e.exports=C}),null);
__d("FeedErrorDetection",["csx","Banzai","DataAttributeUtils","DOM","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h=0,i={},j=!1,k=!1;function l(a,c,d,e){a={event:a,shouldLogDetail:c,site:"www"};c&&(a.intValues=d,a.normalValues=e);b("Banzai").post("feed_error_detection",a,{delay:0})}a={registerFeedStories:function(a,c){__p&&__p();a=="substream_0"&&(h=0,i={},j=!1,k=!1);a=b("DOM").scry(b("ge")(a),"._5jmm");var d=a.length;if(!d&&!j){if(!k){k=!0;return}!h?l("empty_feed_js",c,{},{}):l("end_of_feed_js",c,c?{stories_count:h}:{},{});j=!0;return}k=!1;for(var e=0;e<d;e++){var f=a[e],g=f.getAttribute("data-dedupekey");f=b("DataAttributeUtils").getDataFt(f);if(!g||!f)continue;if(g in i){var m={};c&&(m={dedupKey:g,ft_A:f,ft_B:i[g]});l("duplicate_stories",c,{},{dup_field:m})}else i[g]=f,h++}}};e.exports=a}),null);
__d("StoryPositionTracking",["csx","DataAttributeUtils","DOM","ge"],(function(a,b,c,d,e,f,g){var h="._5jmm",i=0;a={registerNewStories:function(a){a=="substream_0"&&(i=0),b("DOM").scry(b("ge")(a),h).forEach(function(a){var c=JSON.parse(b("DataAttributeUtils").getDataFt(a));c&&(c.insertion_position=i++,b("DataAttributeUtils").setDataFt(a,JSON.stringify(c)))})}};e.exports=a}),null);
__d("AttachmentIssueDiversityShareConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ARTICLE_CLICK:"issueDiversity/article_click"})}),null);
__d("FbFeedAttachmentRelatedShare",["csx","Arbiter","AttachmentIssueDiversityShareConstants","AttachmentRelatedShareConstants","DOMQuery","Event","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h={loadRelatedAttachment:function(a,c){b("tidyEvent")(b("Event").listen(a,"click",function(){b("Arbiter").inform(b("AttachmentRelatedShareConstants").ARTICLE_CLICK,{attachment:a,global_share_id:c})}))},loadRelatedGameAttachment:function(a,c){b("tidyEvent")(b("Event").listen(a,"click",function(){b("Arbiter").inform(b("AttachmentRelatedShareConstants").GAME_CLICK,{attachment:a,global_share_id:c})}))},loadRelatedAttachmentForStream:function(a){h._loadChainableAttachmentForStreamImpl(a,b("AttachmentRelatedShareConstants").ARTICLE_CLICK)},_loadChainableAttachmentForStreamImpl:function(a,c){__p&&__p();var d=function(a,d){a=a.getTarget();if(a.getAttribute("target")!=="_blank")return;var e="^div._5pbx",f="^div._5pc9";e=b("DOMQuery").scry(a,e)[0]||b("DOMQuery").scry(a,f)[0];if(!e)return;b("Arbiter").inform(c,{attachment:e,global_share_id:0,link_url:a.getAttribute("href"),is_right_click:d})};b("tidyEvent")(b("Event").listen(a,"click",function(a){d(a,!1)}));b("tidyEvent")(b("Event").listen(a,"mousedown",function(a){(a.which==3||a.button==2)&&d(a,!0)}))}};e.exports=h}),null);
__d("FbFeedViewportTracking",["csx","Arbiter","LitestandMessages","LitestandStream","StreamViewportTracking","viewportTrackingBuilder"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.init=function(a){var d=this;c.prototype.init.call(this,a);this.subscriptions.addSubscriptions(b("Arbiter").subscribe(b("LitestandMessages").STORIES_INSERTED,function(){return d.invalidateAllStoriesCache()}),b("Arbiter").subscribe(b("LitestandMessages").LEAVE_HOME,function(){return d.updateTimeTrackingData(!0)}))};d.getSessionID=function(){return b("LitestandStream").isReady()?b("LitestandStream").getFeedStreamID():null};d.cleanup=function(){i.clearSingleton(),c.prototype.cleanup.call(this)};return a}(b("StreamViewportTracking")),i=b("viewportTrackingBuilder")(function(a){var c=b("StreamViewportTracking").getBehavior(a,b("LitestandStream").getStreamRoot(),"._5jmm");c=new h(c);c.init(a);return c});a=babelHelpers["extends"]({},i,{init:function(a){return this.factory(a)}});e.exports=a}),null);
__d("XDOMScannerResultsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ascend_mr_no/",{})}),null);
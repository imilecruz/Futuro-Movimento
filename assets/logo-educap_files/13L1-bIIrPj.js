if (self.CavalryLogger) { CavalryLogger.start_js(["+XNo+"]); }

__d("Clipboard",["Promise","UserAgent"],(function(a,b,c,d,e,f){__p&&__p();var g={isSupported:function(){return window.document.queryCommandSupported instanceof Function&&window.document.queryCommandSupported("copy")&&!(b("UserAgent").isBrowser("Firefox < 41")||b("UserAgent").isPlatform("iOS < 10.3"))||b("UserAgent").isBrowser("Chrome >= 43")},copy:function(a,c){__p&&__p();c=c||document.body;if(!c)return!1;var d=!0,e=document.createElement("textarea");c.appendChild(e);e.value=a;if(b("UserAgent").isPlatform("iOS >= 10.3")){a=document.createRange();a.selectNodeContents(e);var f=window.getSelection();f.removeAllRanges();f.addRange(a);e.setSelectionRange(0,999999)}else e.select();try{d=document.execCommand("copy")}catch(a){d=!1}c.removeChild(e);return d},copyAsync:function(a){var c=window.navigator;if(c&&c.clipboard&&typeof c.clipboard.writeText==="function")return c.clipboard.writeText(a);return g.copy(a)?b("Promise").resolve():b("Promise").reject()}};e.exports=g}),null);
__d("FBClipboardLink.react",["cx","fbt","Clipboard","DOMContainer.react","Event","KeyEventController","React","ReactDOM","SubscriptionsHandler","Tooltip.react","isKeyActivation","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={copied:!1,supported:b("Clipboard").isSupported()},d.$1=null,d.$2=null,d.$4=function(a){a.clipboardData&&(a.clipboardData.setData("text/html",d.$7()),a.clipboardData.setData("text",d.$8()),a.preventDefault())},d.$6=function(){if(!d.state.supported)return"Unsupported in this browser";return d.state.copied?d.props.tooltipSuccess:d.props.tooltip},d.$3=function(){d.$2&&(window.clearTimeout(d.$2),d.$2=null)},d.$9=function(){d.$2=window.setTimeout(d.$10,d.props.tooltipSuccessDuration)},d.$5=function(a){var c=b("ReactDOM").findDOMNode(d.refs.root);c=b("Clipboard").copy(d.$7(),c);d.$3();d.setState({copied:!0,supported:c});d.$9();d.props.onComplete&&d.props.onComplete(c);d.props.stopPropagation&&a.stopPropagation();d.props.preventDefaultOnClick&&a.preventDefault()},d.$10=function(){d.$3(),d.setState({copied:!1})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentWillUnmount=function(){this.$3(),this.$1&&this.$1.release()};d.componentDidMount=function(){if(this.props.type==="html"){var a=b("ReactDOM").findDOMNode(this);this.$1=this.$1||new(b("SubscriptionsHandler"))();this.$1.addSubscriptions(b("Event").listen(a,"copy",this.$4))}this.props.hotkey&&(this.$1=this.$1||new(b("SubscriptionsHandler"))(),this.$1.addSubscriptions(b("KeyEventController").registerKey(this.props.hotkey,this.$5)))};d.render=function(){var a=this,c=b("joinClasses")(this.props.className,"_xd6"),d=this.props.children||this.props.label;!d&&this.props.childrenDONOTUSE&&(d=b("React").createElement(b("DOMContainer.react"),null,this.props.childrenDONOTUSE));return b("React").createElement(b("Tooltip.react"),babelHelpers["extends"]({},this.props,{ref:"root",tabIndex:"0",className:c,tooltip:this.$6(),"data-pitloot-persistonclick":!0,onClick:this.$5,onKeyPress:function(c){return b("isKeyActivation")(c)&&a.$5()},position:this.props.position,alignH:this.props.alignment}),b("React").createElement("div",{ref:"content",className:"_2lj1"},d))};d.$7=function(){if(this.props.getValue)return this.props.getValue();else return this.props.value};d.$8=function(){return this.props.plainTextValue!=null?this.props.plainTextValue:this.$7()};return c}(b("React").PureComponent);a.defaultProps={tooltip:h._("Copiar texto para a \u00e1rea de transfer\u00eancia"),tooltipSuccess:h._("Texto copiado para a \u00e1rea de transfer\u00eancia"),tooltipSuccessDuration:1e3,type:"string"};e.exports=a}),null);
__d("FBLoadShimmer.react",["cx","LoadingMarker.react","React","UserAgent","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=a.className,d=a.height,e=a.style,f=a.width;a=a.disableAnimation;var g=b("UserAgent").isBrowser("Safari")&&b("UserAgent").isPlatform("Mac OS X");a="_1tt"+(a?" _300z":"")+(g?" _72_f":"");g=b("React").createElement("div",{className:b("joinClasses")(c,a),style:babelHelpers["extends"]({height:d!=null?d+"px":void 0,width:f!=null?f+"px":void 0},e)});return b("React").createElement(b("LoadingMarker.react"),null,g)}e.exports=a}),null);
__d("MenuSeparator.react",["MenuSeparator"],(function(a,b,c,d,e,f){function a(a){a.isReactLegacyFactory={},a.type=a}c=b("MenuSeparator");a(c);e.exports=c}),null);
__d("PopoverMenu.react",["cx","CSS","InlineBlock.react","Popover","PopoverMenu","React","ReactDOM","SubscriptionsHandler","areEqual","clearImmediate","joinClasses","setImmediate"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$3=null,c.$7=function(){c.$3&&(c.$3.release(),c.$3=null),c.$8(),c.$2.setMenu(c.$5(c.props.menu)),c.$6()},b)||babelHelpers.assertThisInitialized(c)}c.getFirstChild=function(a){a=a.children;return Array.isArray(a)?a[0]:a};c.getButtonSize=function(a){a=c.getFirstChild(a);return a?a.type.getButtonSize(a.props):0};var d=c.prototype;d.componentDidMount=function(){var a=b("ReactDOM").findDOMNode(this.refs.root),c=a==null?void 0:a.firstChild;c!=null&&(b("CSS").addClass(c,"_p"),this.$1=new(b("Popover"))(a,c,this.props.layerBehaviors,{alignh:this.props.alignh,position:this.props.position,disabled:this.props.disabled,arrowDimensions:{offset:0,length:0},disableArrowKeyActivation:this.props.disableArrowKeyActivation,enableActivationOnEnter:this.props.enableActivationOnEnter,"data-testid":this.props["data-testid"],shouldDisableHideOnScroll:this.props.shouldDisableHideOnScroll}),this.$2=new(b("PopoverMenu"))(this.$1,c,this.$5(this.props.menu),this.props.behaviors));this.$6()};d.componentDidUpdate=function(a){b("areEqual")(a.menu,this.props.menu)||(b("clearImmediate")(this.$4),this.$4=b("setImmediate")(this.$7)),this.props.alignh!==a.alignh&&this.$2.getPopover().getLayer().setAlignment(this.props.alignh),this.props.disabled!==a.disabled&&(this.props.disabled?this.$2.disable():this.$2.enable())};d.$6=function(){this.props.onReturnWithoutFocusedItem&&this.$3&&this.$2&&this.$3.addSubscriptions(this.$2.subscribe("returnWithoutFocusedItem",this.props.onReturnWithoutFocusedItem))};d.render=function(){__p&&__p();var a=b("React").Children.map(this.props.children,function(a,c){if(c===0)return b("React").cloneElement(a,{className:b("joinClasses")(a.props.className,"_p")});else return a}),c=Object.assign({},this.props);delete c.onShow;delete c.onHide;delete c.alignh;delete c.position;delete c.layerBehaviors;delete c.behaviors;delete c.menu;delete c.disabled;delete c.disableArrowKeyActivation;delete c.enableActivationOnEnter;return b("React").createElement(b("InlineBlock.react"),babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,"uiPopover"),ref:"root",disabled:null}),a)};d.componentWillUnmount=function(){b("clearImmediate")(this.$4),this.hidePopover(),this.$3&&(this.$3.release(),this.$3=null),this.$2&&this.$2.destroy()};d.$5=function(a){__p&&__p();var c=a.props;a=new a.type(c);this.$3=new(b("SubscriptionsHandler"))();c.onItemClick&&this.$3.addSubscriptions(a.subscribe("itemclick",c.onItemClick));c.onItemFocus&&this.$3.addSubscriptions(a.subscribe("focus",c.onItemFocus));c.onItemBlur&&this.$3.addSubscriptions(a.subscribe("blur",c.onItemBlur));c.onChange&&this.$3.addSubscriptions(a.subscribe("change",c.onChange));this.props.onShow&&this.$3.addSubscriptions(this.$1.subscribe("show",this.props.onShow));this.props.onHide&&this.$3.addSubscriptions(this.$1.subscribe("hide",this.props.onHide));return a};d.getMenu=function(){return this.$2.getMenu()};d.isShown=function(){return!!(this.$1&&this.$1.isShown())};d.showPopover=function(a){this.$1.showLayer();if(a){var b=this.$2.getMenu();b.blur();b.focusAnItem(a)}};d.hidePopover=function(){var a=this.$1;a&&a.isShown()&&a.hideLayer()};d.getFocusedItem=function(){var a=this.$2.getMenu();return a.getFocusedItem()};d.$8=function(){var a=this.getMenu();a&&a.forEachItem(function(a){a=a.getRoot().firstElementChild;a&&b("ReactDOM").unmountComponentAtNode(a)})};return c}(b("React").Component);c.propTypes={alignh:a.oneOf(["left","center","right"]),alignv:a.oneOf(["baseline","bottom","middle","top"]),position:a.oneOf(["above","below","left","right"]),layerBehaviors:a.array,menu:a.object.isRequired,disabled:a.bool,disableArrowKeyActivation:a.bool,enableActivationOnEnter:a.bool,onReturnWithoutFocusedItem:a.func,shouldDisableHideOnScroll:a.bool};c.defaultProps={alignv:"middle",shouldDisableHideOnScroll:!1};e.exports=c}),null);
__d("MenuItemNoAction",["MenuItem"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.hasAction=function(){return!1};return b}(b("MenuItem"));e.exports=a}),null);
__d("MenuTheme",["cx"],(function(a,b,c,d,e,f,g){e.exports={className:"_569t"}}),null);
__d("ReactMenu",["cx","Menu","MenuItem","MenuItemNoAction","MenuSelectableItem","MenuTheme","React","SelectableMenu","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a){var c=[];b("React").Children.forEach(a,function(a){a&&c.push(a)});return c}function a(a){a!=null&&(a.isReactLegacyFactory={},a.type=a)}c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){d=babelHelpers["extends"]({theme:b("MenuTheme"),maxheight:c?c.maxheight:null,className:c?c.className:null},d);return a.call(this,h(c.children),d)||this}return c}(b("Menu"));a(c);d=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){d=babelHelpers["extends"]({className:b("joinClasses")("_57di",c?c.className:null),theme:b("MenuTheme"),multiple:c&&c.multiple,closeOnSelectWithMultiple:c&&c.closeOnSelectWithMultiple,maxheight:c?c.maxheight:null,testid:c?c["data-testid"]:null},d);return a.call(this,h(c.children),d)||this}return c}(b("SelectableMenu"));a(d);c.SelectableMenu=d;a(b("MenuItem"));c.Item=b("MenuItem");c.ItemNoAction=b("MenuItemNoAction");a(b("MenuSelectableItem"));c.SelectableItem=b("MenuSelectableItem");e.exports=c}),null);
__d("ReactXUIMenu",["ReactMenu","XUIMenuTheme","XUIMenuWithSquareCorner"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){a.isReactLegacyFactory={},a.type=a}c=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d={behaviors:void 0,theme:b("XUIMenuTheme")};(!c||c.withsquarecorner!==!1)&&(d.behaviors=[b("XUIMenuWithSquareCorner")]);return a.call(this,c,d)||this}return c}(b("ReactMenu"));a(c);d=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d={behaviors:void 0,theme:b("XUIMenuTheme")};(!c||c.withsquarecorner!==!1)&&(d.behaviors=[b("XUIMenuWithSquareCorner")]);return a.call(this,c,d)||this}return c}(b("ReactMenu").SelectableMenu);a(d);c.SelectableMenu=d;c.Item=b("ReactMenu").Item;c.SelectableItem=b("ReactMenu").SelectableItem;e.exports=c}),null);
__d("VideoWithClickToSnowlift",["Bootloader","VideoPlayerReason","logVideosClickTracking"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,b){this.$1=a,this.$2=b,this.$1.addListener("clickVideo",this.$3.bind(this)),this.$1.hasSeenClick()&&this.$3()}var c=a.prototype;c.$3=function(){var a=this;if(this.$1.isFullscreen()){if(this.$1.getOption("VideoWithLiveBroadcast","isLive"))return;this.$1.isState("playing")?this.$1.pause(b("VideoPlayerReason").USER):(b("logVideosClickTracking")(this.$1.getVideoNode()),this.$1.play(b("VideoPlayerReason").USER))}else b("Bootloader").loadModules(["PhotoSnowlift"],function(b){return b.bootstrap(a.$2)},"VideoWithClickToSnowlift")};return a}();e.exports=a}),null);
__d("VideoPlayerLoggerEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AUTOPLAY_PREFERENCE_CHANGED:"autoplay_preference_changed",END_STALL_TIME:"end_stall_time",AUTOPLAY_PREFERENCE_STATUS:"autoplay_preference_status",ERROR_ALERT_SHOWN:"video_error_alert_shown",COMMERCIAL_BREAK_OFFSCREEN:"commercial_break_offscreen",COMMERCIAL_BREAK_ONSCREEN:"commercial_break_onscreen",NOT_AUTOPLAYING:"not_autoplaying",VIDEO_CHANNEL_NO_RELATED_VIDEO:"video_channel_no_related_video",VIDEO_ORIENTATION_CHANGED:"video_orientation_changed",AD_BREAK_STARTING_INDICATOR:"ad_break_starting_indicator",AD_BREAK_NON_INTERRUPTIVE_AD_START:"ad_break_non_interruptive_ad_start",AD_BREAK_NON_INTERRUPTIVE_AD_CLICK:"ad_break_non_interruptive_ad_click",AD_BREAK_PRE_ROLL_AD_START:"ad_break_pre_roll_ad_start",AD_BREAK_TAP_ON_TRAILER:"ad_break_tap_on_trailer",AD_BREAK_TAP_START_FROM_TRAILER:"ad_break_tap_start_from_trailer",ASSETS_LOADED:"assets_loaded",BUFFERED:"buffered",CANCELLED_REQUESTED_PLAYING:"cancelled_requested_playing",CAPTION_CHANGE:"caption_change",CAROUSEL_CHANGE:"carousel_change",CHROMECAST_AVAILABILITY_CHECKED:"chromecast_availability_checked",CHROMECAST_CAST_CLICKED:"chromecast_button_clicked",CHROMECAST_CAST_CONNECTED:"chromecast_connected",CHROMECAST_CAST_DISABLED:"chromecast_button_disabled",CHROMECAST_CAST_DISCONNECTED:"chromecast_disconnected",CHROMECAST_CAST_RECONNECTED:"chromecast_reconnected",CHROMECAST_CAST_VISIBLE:"chromecast_button_visible",CHROMECAST_NOT_SUPPORTED:"chromecast_not_supported",CLICK:"click",DISPLAYED:"displayed",REDISPLAYED:"redisplayed",ENTERED_FALLBACK:"entered_fallback",ENTERED_FS:"entered_fs",ENTERED_HD:"entered_hd",ERROR:"error",EXITED_FS:"exited_fs",EXITED_HD:"exited_hd",FINISHED_LOADING:"finished_loading",FINISHED_PLAYING:"finished_playing",HEADSET_CONNECTED:"headset_connected",HEADSET_DISCONNECTED:"headset_disconnected",HEART_BEAT:"heart_beat",HOST_ERROR:"host_error",HTTP_STATUS_UPDATE:"http_status_update",IMPRESSION:"impression",INVALID_URL:"invalid_url",MUTED:"muted",NO_SURFACE_UPDATE:"no_surface_update",PAUSED:"paused",PLAY_REQUESTED:"play_requested",PLAY_REQUESTED_OOB:"play_requested_oob",PLAYER_ALLOCATED:"player_allocated",PLAYER_FORMAT_CHANGED:"player_format_changed",PLAYER_LOADED:"player_loaded",PLAYING_LIVE_STARTED:"playing_live_started",PLAYING_LIVE_STOPPED:"playing_live_stopped",POP_FAILOVER:"pop_failover",PROGRESS:"progress",QUALITY_CHANGE:"quality_change",R2D2_SUMMARY:"r2d2_summary",R2D2_EVENT_VALIDATION:"r2d2_event_validation",READY_TO_PLAY:"ready_to_play",REPLAYED:"replayed",REPRESENTATION_ENDED:"representation_ended",REPRESENTATION_FIRST_ENDED:"representation_first_ended",REQUESTED:"requested",REQUESTED_PLAYING:"requested_playing",SCRUBBED:"scrubbed",SEEKED:"seeked",SPLASH_DISPLAYED:"splash_displayed",STALE:"stale",STARTED_PLAYING:"started_playing",STARTED_RECEIVING_BYTES:"started_receiving_bytes",STOPPED_PLAYING:"stopped_playing",STREAM_RESET:"stream_reset",SURFACE_UPDATED:"surface_updated",SWITCHED_IMPLEMENTATION:"switched_implementation",UNMUTED:"unmuted",UNPAUSED:"unpaused",USER_SELECTED_QUALITY:"user_selected_quality",VIDEO_CHAINING_IMPRESSION:"video_chaining_impression",VIDEO_CHAINING_TAP:"video_chaining_tap",VIDEO_CLICKED_WITHIN_PLAYER:"video_clicked_within_player",VIDEO_PLAYER_SERVICE_DISCONNECTED:"video_player_service_disconnected",VIDEO_PLAYER_SERVICE_RECONNECTED:"video_player_service_reconnected",VIDEO_PLAYER_SERVICE_UNAVAILABLE:"video_player_service_unavailable",VIDEO_PLAYING:"video_playing",VIDEO_SKIP_AD:"video_skip_ad",VOLUME_CHANGED:"volume_changed",VOLUME_DECREASE:"volume_decrease",VOLUME_INCREASE:"volume_increase",WATCH_AND_SCROLL_CHANNEL_ENTERED:"watch_and_scroll_channel_entered",WATCH_AND_SCROLL_EXITED:"watch_and_scroll_exited",WATCH_AND_SCROLL_ICON_HIGHLIGHTED:"watch_and_scroll_icon_highlighted",WATCH_AND_SCROLL_ICON_UNHIGHLIGHTED:"watch_and_scroll_icon_unhighlighted",WATCH_AND_SCROLL_PAUSED:"watch_and_scroll_paused",LIVE_SEGMENT_LOAD_ERROR:"live_segment_load_error",MANIFEST_DATA_TYPE_ERROR:"manifest_data_type_error",MANIFEST_LOAD_ERROR:"manifest_load_error",PLAYER_WARNING:"player_warning",PLAYHEAD_FELL_BEHIND_ERROR:"playhead_fell_behind_error",STREAM_SEGMENT_LOAD_ERROR:"stream_segment_load_error",UNEXPECTED_SEGMENT_ERROR:"unexpected_segment_error",NETWORK_TIMEOUT:"network_timeout",VIDEO_LOGGING_SESSION_TIMEOUT:"video_logging_session_timeout",RETRY_ON_ERROR:"retry_on_error",REPLICA_SWITCH:"replica_switch",REPLICA_SWITCH_SUCCESS:"replica_switch_success",REPLICA_SWITCH_FAILED:"replica_switch_failed",COMPLETION:"completion",VIEW:"view",PLAYED_FOR_THREE_SECONDS:"played_for_three_seconds",GUIDE_ENTERED:"guide_entered",GUIDE_EXITED:"guide_exited",HEADING_RESET:"heading_reset",SPHERICAL_FALLBACK_ENTERED:"spherical_fallback_entered",SPHERICAL_VIDEO_FALLBACK_CTA_CLICKED:"spherical_video_fallback_cta_clicked",VIEWPORT_ROTATED:"viewport_rotated",VIEWPORT_ZOOMED:"viewport_zoomed",BANZAI_OAUTH_GK_ERROR:"banzai_oauth_gk_error",BANZAI_OAUTH_PARSE_ERROR:"banzai_oauth_parse_error",BANZAI_OAUTH_SESSION_ERROR:"banzai_oauth_session_error",VIEWABILITY_CHANGED:"viewability_changed",PLAYER_SEEK:"player_seek",VIDEO_CDN_URL_EXPIRED:"video_cdn_url_expired",VIDEO_CDN_URL_REFRESHED:"video_cdn_url_refreshed",VIDEO_CDN_URL_REFRESH_ERROR:"video_cdn_url_refresh_error"})}),null);
__d("VideoPlayerLoggerFallbackReasons",[],(function(a,b,c,d,e,f){e.exports={TIMEOUT:"timeout",FLASH_ERROR:"flash_error",FLASH_UNAVAILABLE:"flash_unavailable"}}),null);
__d("VideoWithFallbackMode",["Event","SubscriptionsHandler","TimeSlice","VideoPlayerExperiments","VideoPlayerLoggerEvent","VideoPlayerLoggerFallbackReasons","VideoPlayerReason","Visibility"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c){__p&&__p();var d=this;this.$1=!1;this.$2=!1;this.$5=function(){d.$1=!0,b("VideoPlayerExperiments").disableFallbackModeForInactiveTab&&d.$2&&(d.$6.play(b("VideoPlayerReason").FALLBACK_MODE),d.$2=!1)};this.$8=function(){d.$1=!1};this.$3=new(b("SubscriptionsHandler"))();c||(c=a,a=null);this.$4=c;a&&this.enable(a)}var c=a.prototype;c.enable=function(a){__p&&__p();var c=this;this.$3.engage();this.$6=a;if(this.$6.isImplementationUnavailable()||this.$6.getOption("SphericalVideoPlayer","isUnavailable")){this.$7(b("VideoPlayerLoggerFallbackReasons").FLASH_UNAVAILABLE);return}this.$3.addSubscriptions(b("Event").listen(window,"blur",this.$8),b("Event").listen(window,"focus",this.$5),b("Visibility").addListener(b("Visibility").HIDDEN,this.$8),b("Visibility").addListener(b("Visibility").VISIBLE,this.$5),a.addListener("error",this.$9.bind(this)));if(this.$4.fallbackTimeoutMs){a=this.$4.fallbackTimeoutMs;this.$10=setTimeout(b("TimeSlice").guard(function(){c.$6.isState("loading")&&(c.$6.pause(b("VideoPlayerReason").FALLBACK_MODE),c.$7(b("VideoPlayerLoggerFallbackReasons").TIMEOUT),c.$2=!0)},"VideoWithFallbackMode fallbackTimeout",{propagationType:b("TimeSlice").PropagationType.EXECUTION}),a)}};c.disable=function(){this.$3.release(),clearTimeout(this.$10),this.$10=null,this.$6=null};c.$9=function(a){if(this.$6.isState("fallback"))return;this.$6.isState("playing")&&this.$6.pause(b("VideoPlayerReason").FALLBACK_MODE);this.$6.abortLoading();a?this.$7(a):(this.$7(b("VideoPlayerLoggerFallbackReasons").FLASH_ERROR),this.$2=!0)};c.$7=function(a){if(b("VideoPlayerExperiments").disableFallbackModeForInactiveTab&&!this.$1)return;this.$6.setState("fallback");a===b("VideoPlayerLoggerFallbackReasons").TIMEOUT&&this.$6.emit("VideoWithStallRecoveryOverlay/timeout");this.$6.logEvent(b("VideoPlayerLoggerEvent").ENTERED_FALLBACK,{debug_reason:a})};return a}();e.exports=a}),null);
__d("VideoCover",["invariant","Bootloader","CSS","EventListener","SubscriptionsHandler"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c,d,e){__p&&__p();var f=this;e===void 0&&(e=null);this.$7=new(b("SubscriptionsHandler"))();this.$13=function(){f.$5&&b("CSS").show(f.$1)};this.$14=function(){f.$5&&b("CSS").hide(f.$1)};this.$9=function(){f.$3!=null&&f.$3.length>0?b("Bootloader").loadModules(["PhotoSnowlift"],function(a){return a.bootstrap(f.$3)},"VideoCover"):f.$8&&f.$8.clickVideo()};this.$10=function(){b("CSS").hide(f.$1)};this.$12=function(){if(f.$8){var a=f.$8.getOption("Looping","isLooping");if(f.$4||a)return;b("CSS").show(f.$1)}};this.$11=function(){f.$8&&f.$8.isState("fallback")&&f.$6&&b("CSS").show(f.$1)};a instanceof Element||g(0,4829);this.$1=a;c[0]instanceof Element||g(0,4830);this.$2=c[0];this.$3=d;e&&(this.$4=e.hiddenAfterFinish,this.$5=e.showWhileBuffering,this.$6=e.showAfterFallback);b("EventListener").listen(this.$1,"click",this.$9)}var c=a.prototype;c.disable=function(){this.$7.release(),this.$8&&this.$8.unregisterOption("VideoCover","coverElement"),this.$8=null};c.enable=function(a){var b=this;this.$8=a;a.getState()==="playing"&&this.$10();this.$7.addSubscriptions(a.addListener("stateChange",this.$11),a.addListener("beginPlayback",this.$10),a.addListener("finishPlayback",this.$12),a.addListener("buffering",this.$13),a.addListener("buffered",this.$14));a.registerOption("VideoCover","coverElement",function(){return b.$1})};c.getCurrentCover=function(){return this.$2};c.setSnowLiftURI=function(a){this.$3=a};return a}();e.exports=a}),null);
__d("VideoNodeStaledScreen",["CSS","EventListener","SubscriptionsHandler"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){var c=this;this.$3=new(b("SubscriptionsHandler"))();this.$5=function(){b("CSS").show(c.$1)};this.$4=function(){b("CSS").hide(c.$1)};this.$1=a;this.$2=null;b("EventListener").listen(this.$1,"click",this.$4)}var c=a.prototype;c.enable=function(a){this.$2=a,this.$3.addSubscriptions(this.$2.addListener("videoNodeStaled",this.$5))};c.disable=function(){this.$3.release(),this.$2=null};return a}();e.exports=a}),null);
__d("VideoStateDirectory",["EventEmitter","VideoPlayerExperiments"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b;b=a.call(this)||this;b.$VideoStateDirectory1=new Map();return b}var d=c.prototype;d.setPlaybackState=function(a,c,d){var e=this.$VideoStateDirectory1.get(a)||{};e.currentTimePosition=c;e.playbackDuration=d;e.watched=e.currentTimePosition/e.playbackDuration>=b("VideoPlayerExperiments").watchedPercentage/100||!!e.watched;this.$VideoStateDirectory1.set(a,e);this.emit(a,e)};d.setSaveState=function(a,b){var c=this.$VideoStateDirectory1.get(a)||{};c.saved=b;this.emit(a,c)};d.setSubscriptionState=function(a,b){var c=this.$VideoStateDirectory1.get(a)||{};c.subscribed=b;this.emit(a,c)};d.getState=function(a){return this.$VideoStateDirectory1.get(a)};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("VideoUpdateStateDirectory",["VideoStateDirectory"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){var a=this;this.$2=function(){var c=a.$1,d=c.getVideoID(),e=c.getCurrentTimePosition();c=c.getPlaybackDuration();b("VideoStateDirectory").setPlaybackState(d,e,c)}}var c=a.prototype;c.enable=function(a){this.$1=a,a.addListener("finishPlayback",this.$2),a.addListener("pausePlayback",this.$2)};c.disable=function(){};return a}();e.exports=a}),null);
__d("XSavedForLaterDashboardController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/saved/",{collection_token:{type:"String"},tag_filter:{type:"String"},cref:{type:"Int"},suggestion_dialog:{type:"Int"},cursor:{type:"String"},notif_id:{type:"Int"},dashboard_section:{type:"Enum",enumType:1},cref_name:{type:"String"},a_type:{type:"String"},search_token:{type:"String"},list_id:{type:"Int"},tab:{type:"Enum",enumType:1},unlisted_only:{type:"Bool",defaultValue:!1},seen_state_filter:{type:"Enum",enumType:0},referrer:{type:"String"}})}),null);
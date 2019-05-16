if (self.CavalryLogger) { CavalryLogger.start_js(["PnAcS"]); }

__d("UFIOrderingModeSelector.react",["cx","invariant","FBLogger","InlineBlock.react","Link.react","PopoverMenu.react","React","ReactXUIMenu"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("ReactXUIMenu").SelectableMenu,j=b("ReactXUIMenu").SelectableItem;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.onMenuItemClick=function(a,b){c.props.onOrderChanged(b.item.getValue())},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){__p&&__p();var a=this;if(this.props.orderingModes===null||this.props.orderingModes===void 0||this.props.orderingModes.length===0)return null;var c=this.props.orderingModes.filter(function(b){return b.value==a.props.selectedMode}).map(function(a){return a.name}).pop();c==null&&b("FBLogger")("comments").mustfix("Invalid ordering mode "+this.props.selectedMode+". Available modes: "+this.props.orderingModes.map(function(a){return a.value}).join(", ")+" on feedback target "+(this.props.contextArgs?this.props.contextArgs.ftentidentifier:"(unknown)"));c||h(0,5064);var d=b("React").createElement(i,{className:"_4tju",onItemClick:this.onMenuItemClick},this.props.orderingModes.map(function(c){return b("React").createElement(j,{key:c.value,value:c.value,label:c.name,selected:c.value===a.props.selectedMode},b("React").createElement("div",{className:"_3scm"},b("React").createElement("div",{className:"_3scn"},c.name),b("React").createElement("div",{className:"_3sco"},c.description)))}));return b("React").createElement("div",{className:"_3scp"},b("React").createElement(b("InlineBlock.react"),null,b("React").createElement(b("PopoverMenu.react"),{className:"_3scs",menu:d,alignh:this.props.alignh||"right"},b("React").createElement(b("Link.react"),null,c,b("React").createElement("div",{className:"_3sct"})))))};return c}(b("React").Component);e.exports=a}),null);
__d("CommentsOrderingModeSelectorUsageTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:CommentsOrderingModeSelectorUsageLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:CommentsOrderingModeSelectorUsageLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:CommentsOrderingModeSelectorUsageLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAvailableOrders=function(a){this.$1.available_orders=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setEndOrder=function(a){this.$1.end_order=a;return this};c.setPostFbid=function(a){this.$1.post_fbid=a;return this};c.setPostOwnerFbid=function(a){this.$1.post_owner_fbid=a;return this};c.setStartOrder=function(a){this.$1.start_order=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={available_orders:!0,end_order:!0,post_fbid:!0,post_owner_fbid:!0,start_order:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("UFIOrderingModeSelectorContainer.react",["CommentsOrderingModeSelectorUsageTypedLogger","Random","React","SubscriptionsHandler","UFIConfig","UFIInstanceAction","UFIOrderingModeSelector.react","UFIOrderingModeStore","UFISharedDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={selectedMode:b("UFIOrderingModeStore").getState().get(d.props.contextArgs.instanceid)},d.$1=null,d.onOrderChanged=function(a){var c=d.props.feedback;if(c.orderingmodes&&b("UFIConfig").logChangeOrderingModeUsageSampleRate>b("Random").random()){var e=c.orderingmodes.map(function(a){return a.value});new(b("CommentsOrderingModeSelectorUsageTypedLogger"))().setStartOrder(d.state.selectedMode).setEndOrder(a).setPostFbid(c.commentstargetfbid).setPostOwnerFbid(c.ownerid).setAvailableOrders(e).log()}b("UFISharedDispatcher").dispatch(b("UFIInstanceAction").changeOrderingMode(d.props.contextArgs,a))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=this;this.$1=new(b("SubscriptionsHandler"))();this.$1.addSubscriptions(b("UFIOrderingModeStore").addListener(function(){if(!a.$1)return;a.setState({selectedMode:b("UFIOrderingModeStore").getState().get(a.props.contextArgs.instanceid)})}))};d.componentWillUnmount=function(){this.$1&&(this.$1.release(),this.$1=null)};d.shouldComponentUpdate=function(a,b){return this.state.selectedMode!==b.selectedMode};d.render=function(){return b("React").createElement(b("UFIOrderingModeSelector.react"),{alignh:this.props.alignh||"right",onOrderChanged:this.onOrderChanged,orderingModes:this.props.feedback.orderingmodes,selectedMode:this.state.selectedMode,contextArgs:this.props.contextArgs})};return c}(b("React").Component);c.propTypes={feedback:a.shape({defaultcommentorderingmode:a.string.isRequired,orderingmodes:a.arrayOf(a.shape({name:a.string.isRequired,description:a.string.isRequired,selected:a.bool.isRequired,value:a.string.isRequired})).isRequired,commentstargetfbid:a.string.isRequired,ownerid:a.string.isRequired}).isRequired,contextArgs:a.object.isRequired,alignh:a.string};e.exports=c}),null);
__d("FDSCloseButton.react",["fbt","React","SUICloseButton.react","SUICloseButtonUniform.fds","makeFDSStandardComponent","makeSUIFDSPrivateTheme"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("makeSUIFDSPrivateTheme")("FDSCloseButton",{SUICloseButton:b("SUICloseButtonUniform.fds")});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props;return b("React").createElement(b("SUICloseButton.react"),{"data-hover":a.tooltipContent!==null&&a.tooltipContent!==void 0?"tooltip":null,"data-testid":a["data-testid"],"data-tooltip-alignH":a.tooltipAlignH,"data-tooltip-content":a.tooltipContent,"data-tooltip-position":a.tooltipPosition,disabled:a.isDisabled,id:a.id,label:a.label,layerCancel:a.layerCancel,margin:a.margin,onClick:a.onClick,onFocus:a.onFocus,onMouseDown:a.onMouseDown,onMouseUp:a.onMouseUp,shade:a.shade,size:a.size,theme:h})};return c}(b("React").PureComponent);a.defaultProps={isDisabled:!1,label:g._("Fechar"),shade:"dark",size:"small"};e.exports=b("makeFDSStandardComponent")("FDSCloseButton",a)}),null);
__d("FDSPrivateInputIconSelectors",["ix","asset"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h={error:g("489535"),warning:g("480790"),validated:g("506111")},i={error:g("871824"),warning:g("480790"),validated:g("815791")};function a(a){switch(a){case"error":return i.error;case"warning":return i.warning;case"validated":return i.validated;default:return null}}function b(a){switch(a){case"error":return h.error;case"warning":return h.warning;case"validated":return h.validated;default:return null}}e.exports={classicSelector:b,geoSelector:a}}),null);
__d("FDSThreeStateCheckboxEnum",["SUIThreeStateCheckboxEnum"],(function(a,b,c,d,e,f){"use strict";e.exports=b("SUIThreeStateCheckboxEnum")}),null);
__d("FDSFormUtils",["FDSPrivateInputIconSelectors","FDSThreeStateCheckboxEnum"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("FDSPrivateInputIconSelectors").classicSelector,h=b("FDSPrivateInputIconSelectors").geoSelector;function a(a,b,c){if(b)return b;b=c===!0?h:g;return b(a)}function c(a){switch(a){case b("FDSThreeStateCheckboxEnum").CHECKED:return!0;case b("FDSThreeStateCheckboxEnum").PARTIAL:return"indeterminate";default:return!1}}e.exports={getIconSrc:a,mapCheckboxState:c}}),null);
__d("FDSMultiElementLayoutContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext({getLayout:function(){}});e.exports=a}),null);
__d("FDSPrivateDisabledContext",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").createContext(void 0)}),null);
__d("FDSPrivateInputSelectors",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var b=a.size==="large"?a.atoms.inputPrimitive.size.large:a.atoms.inputPrimitive.size.medium;return babelHelpers["extends"]({height:b},g(a))}function b(a){return g(a)}function g(a){__p&&__p();var b=a.isFocused,c=a.isDisabled,d=a.hasError,e=a.hasWarning,f=a.isValid,g=a.isEdited;a=a.atoms;var h=a.inputs["default"].boxShadow,i=a.binaryControls.unchecked.normal.border,j,k=a.colors.text.primary;b&&(h=a.inputs.focused.boxShadow,i=a.binaryControls.unchecked.active.border);d&&(h=b?a.inputs.focused.error.boxShadow:void 0,i=a.inputs.error.border);e&&(h=b?a.inputs.focused.warning.boxShadow:void 0,i=a.inputs.warning.border);f===!0&&(h=b?a.inputs.focused.valid.boxShadow:void 0,i=a.inputs.valid.border);c&&(h=a.inputs.disabled.boxShadow,i=a.binaryControls.unchecked.disabled.border,j=a.inputs.disabled.backgroundColor,k=a.colors.text.secondary);g&&(j=a.inputs.edited.backgroundColor);return{backgroundColor:j,border:i,borderRadius:a.inputs.borderRadius,boxShadow:h,color:k}}e.exports={getInputStyle:a,getTextAreaStyle:b}}),null);
__d("FDSPrivateSizeContext",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").createContext(null)}),null);
__d("isStringNullOrEmpty",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a==null||a===""}e.exports=a}),null);
__d("FDSBaseTextInput.react",["cx","AbstractTextInput.react","FDSCloseButton.react","FDSFormUtils","FDSMultiElementLayoutContext","FDSPrivateDisabledContext","FDSPrivateInputSelectors","FDSPrivateSizeContext","FDSPrivateThemeAtomsType","FDSPrivateThemeContext.react","Image.react","React","emptyFunction","isStringNullOrEmpty","makeFDSStandardComponent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("FDSPrivateInputSelectors").getInputStyle;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={isFocused:!1},d.$1=b("React").createRef(),d.$2=function(a){a=a.target.value;d.props.onChange(a)},d.$3=function(a){if(d.props.onEnter){var b=a.target.value;d.props.onEnter(b,a)}},d.$4=function(a){d.setState({isFocused:!1}),d.props.onBlur&&d.props.onBlur(a)},d.$5=function(a){d.setState({isFocused:!0}),d.props.onFocus&&d.props.onFocus(a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$6=function(a,c){return!b("isStringNullOrEmpty")(a)&&c!=null?b("React").createElement(b("FDSCloseButton.react"),{onClick:c,size:"large"}):null};d.$7=function(a,c,d){a=b("FDSFormUtils").getIconSrc(a,c,d);return a!=null?b("React").createElement(b("Image.react"),{src:a}):null};d.focus=function(){this.$1.current&&this.$1.current.focusInput()};d.blur=function(){this.$1.current&&this.$1.current.blurInput()};d.render=function(){__p&&__p();var a=this,c=this.props,d=c.autoComplete,e=c.busyIndicator,f=c.describedBy,g=c.errorMessageId,i=c.hasError,j=c.hasWarning,k=c.htmlForTargetId,l=c.iconSrc,m=c.isEdited,n=c.isValid,o=c.labelledBy,p=c.maxLength,q=c.name,r=c.onClear,s=c.onKeyDown,t=c.onKeyUp,u=c.onPaste,v=c.placeholder,w=c.type,x=c.value,y;i?y="error":j?y="warning":n===!0&&(y="validated");return b("React").createElement(b("FDSMultiElementLayoutContext").Consumer,null,function(c){var z=c.getLayout;return b("React").createElement(b("FDSPrivateSizeContext").Consumer,null,function(c){return b("React").createElement(b("FDSPrivateDisabledContext").Consumer,null,function(A){return b("React").createElement(b("FDSPrivateThemeContext.react").Consumer,null,function(B){var C=A!=null?A:a.props.isDisabled,D=c!=null?c:a.props.size,E=B.id===b("FDSPrivateThemeAtomsType").FDS_GEODESIC,F=z!=null?z(a.state.isFocused):void 0;D=h({isFocused:a.state.isFocused,isDisabled:C,size:D,hasError:i,hasWarning:j,isValid:n,isEdited:m,atoms:B});return b("React").createElement("span",{className:"_2gn0",style:babelHelpers["extends"]({},D,F)},b("React").createElement(b("AbstractTextInput.react"),{"aria-busy":e!=null?!0:void 0,"aria-describedby":f,"aria-errormessage":g,"aria-invalid":g?"true":"false","aria-labelledby":o,autoComplete:d,className:"_2gnb","data-testid":a.props["data-testid"],disabled:C,id:k,maxLength:p,name:q,onBlur:a.$4,onChange:a.$2,onClick:a.props.onClick,onEnter:a.$3,onFocus:a.$5,onKeyDown:s,onKeyUp:t,onPaste:u,placeholder:v,ref:a.$1,type:w,useLabel:!1,value:x}),e,a.$6(x,r),a.$7(y,l,E))})})})})};return c}(b("React").PureComponent);a.defaultProps={hasError:!1,hasWarning:!1,isDisabled:!1,isEdited:!1,isValid:null,onChange:b("emptyFunction"),size:"large",type:"text"};e.exports=b("makeFDSStandardComponent")("FDSBaseTextInput",a)}),null);
__d("SUISimplePopover.react",["cx","AlignmentEnum","KeyboardFocus.react","PositionEnum","React","SUIComponent","SUIPopover.react","SUITheme","uniqueID"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=["block","inline"];d={display:"inline",showIcon:!0,showIconHoverState:!0};f=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isShown:!1},c.$SUISimplePopover2=function(a){c.$SUISimplePopover1=a},c.$SUISimplePopover3=function(){return c.$SUISimplePopover1},c.$SUISimplePopover4=function(a){c.setState({isShown:a},c.$SUISimplePopover5)},c.$SUISimplePopover5=function(){c.props.onToggle&&c.props.onToggle(c.state.isShown)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this,c=this.props,d=c.children,e=c.display,f=c.showIcon,g=c.showIconHoverState,h=babelHelpers.objectWithoutPropertiesLoose(c,["children","display","showIcon","showIconHoverState"]);c=b("SUITheme").get(this).SUIPopover;var i=f?b("React").cloneElement(c.icon,{className:"_h6r _3-8r",hover:g&&this.state.isShown}):null,j=b("uniqueID")();return b("React").createElement(b("KeyboardFocus.react"),null,function(c){var f=c.isKeyboardFocused,g=c.onBlur;c=c.onFocus;return b("React").createElement("div",{className:"_4rhp"+(e==="block"?" _4rhq":"")},b("React").createElement("div",{"aria-describedby":j,"aria-haspopup":!0,className:"_4rhr",onBlur:g,onFocus:c,ref:a.$SUISimplePopover2,role:"tooltip",tabIndex:0},d,i),b("React").createElement(b("SUIPopover.react"),babelHelpers["extends"]({},h,{hoverContextRef:a.$SUISimplePopover3,id:j,isShown:f,onToggle:a.$SUISimplePopover4})))})};return c}(b("SUIComponent"));f.propTypes={alignment:b("AlignmentEnum").propType,children:a.node,content:a.node.isRequired,contentWidthUseSparingly:a.number,delay:a.number,display:a.oneOf(c),footer:a.node,helpLink:a.node,linger:a.number,offsetX:a.number,offsetY:a.number,position:b("PositionEnum").propType,theme:a.instanceOf(b("SUITheme")),title:a.node,showIcon:a.bool,showIconHoverState:a.bool};f.defaultProps=d;e.exports=f}),null);
__d("FDSSimplePopover.react",["FDSPrivateThemeContext.react","React","SUISimplePopover.react","getSUIPopoverUniform.fds","makeFDSStandardComponent","makeSUIThemeGetter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PureComponent;var g=b("makeSUIThemeGetter")({SUIPopover:b("getSUIPopoverUniform.fds")});c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=g(this.context);return b("React").createElement(b("SUISimplePopover.react"),{alignment:this.props.alignment,children:this.props.children,content:this.props.content,contentWidthUseSparingly:this.props.contentWidthUseSparingly,delay:this.props.delay,display:this.props.display,footer:this.props.footer,helpLink:this.props.helpLink,linger:this.props.linger,offsetX:this.props.offsetX,offsetY:this.props.offsetY,onToggle:this.props.onToggle,position:this.props.position,preserveThemeFromContext:!0,showIcon:this.props.showIcon,theme:a,title:this.props.title})};return c}(a);c.defaultProps=b("SUISimplePopover.react").defaultProps;c.contextType=b("FDSPrivateThemeContext.react");e.exports=b("makeFDSStandardComponent")("FDSSimplePopover",c)}),null);
__d("FDSPrivateFormLabel.react",["cx","fbt","FDSPrivateThemeAtomsType","FDSPrivateThemeContext.react","FDSSimplePopover.react","FDSText.react","FlexLayout.react","React","makeFDSStandardComponent","suiMargin"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("React").useContext,j="\u2219";function a(a){__p&&__p();var c=a.hasRequirementLabel;c=c===void 0?!1:c;var d=a.isRequired;d=d===void 0?!1:d;var e=a.labelIsHidden;e=e===void 0?!1:e;var f=a.description,g=a.descriptionId,h=a.inputId,j=a.popover,m=a.title;a=a.tooltipText;var n=i(b("FDSPrivateThemeContext.react"));n=n.id===b("FDSPrivateThemeAtomsType").FDS_GEODESIC;var o=n&&f!=null;c=b("React").createElement(k,{hasRequirementLabel:c,inputId:h,isGeo:n,isRequired:d,labelIsHidden:e,title:m});return e&&!o?c:b("React").createElement("div",{className:e?"":"_3-94"},b("React").createElement(b("FlexLayout.react"),{align:"center"},c,b("React").createElement(l,{popover:j,tooltipText:a})),f!=null&&n?b("React").createElement(b("FDSText.react"),{color:"secondary",display:"block",id:g,size:"small",weight:"normal"},f):null)}function k(a){var c=a.hasRequirementLabel,d=a.isGeo,e=a.isRequired,f=a.title;e=h._("{bullet character} {isRequired}",[h._param("bullet character",j),h._param("isRequired",e?"Required":"Optional")]);return b("React").createElement("span",{className:a.labelIsHidden?"accessible_elem":""},b("React").createElement("label",{htmlFor:a.inputId},b("React").createElement(b("FDSText.react"),{color:d?"header":"primary",size:d?"header4":"body2",weight:d?"bold":"normal"},f)),c?b("React").createElement("span",{className:"_7vu1"},b("React").createElement(b("FDSText.react"),{color:d?"secondary":"placeholder",margin:"_3-99",size:d?"body":"body2",weight:d?"bold":"normal"},e)):null)}function l(a){if(a.popover!=null)return a.popover;return a.tooltipText!=null?b("React").createElement(b("FDSSimplePopover.react"),{content:a.tooltipText,position:"above"}):null}e.exports=b("makeFDSStandardComponent")("FDSPrivateFormLabel",a)}),null);
__d("FDSPrivateLayoutContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext({isHorizontallyGroupedItem:!1,isVerticallyGroupedItem:!1});e.exports=a}),null);
__d("FDSFormInputLayout.react",["cx","FDSPrivateFormLabel.react","FDSPrivateLayoutContext","FDSPrivateThemeAtomsType","FDSPrivateThemeContext.react","FDSText.react","FlexLayout.react","React","suiMargin","useUniqueID"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React").useContext;function a(a){__p&&__p();var c,d=a.children,e=a.label,f=a.labelIsHidden;f=f===void 0?!1:f;var g=a.infoTooltipText,k=a.isOptional;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","label","labelIsHidden","infoTooltipText","isOptional"]);var l=h(b("FDSPrivateThemeContext.react"));l=l.id===b("FDSPrivateThemeAtomsType").FDS_GEODESIC;var m=b("useUniqueID")();c=(c=a.inputId)!=null?c:m;m=b("useUniqueID")();var n=b("useUniqueID")(),o=h(b("FDSPrivateLayoutContext")),p=o.isHorizontallyGroupedItem;o=o.isVerticallyGroupedItem;var q={inputId:c,describedBy:a.description!=null?m:void 0,errorMessageId:a.errorMessage!=null?n:void 0};c=b("React").createElement(b("FDSPrivateFormLabel.react"),{description:a.description,descriptionId:m,hasRequirementLabel:k===!0,inputId:c,isRequired:k===!1,labelIsHidden:f,popover:a.popover,title:e,tooltipText:g});return b("React").createElement(b("FlexLayout.react"),{className:"_7vwx"+(p?" _7vrf":"")+(o?" _7vrg":""),direction:"vertical"},f?c:b("React").createElement(b("FlexLayout.react"),{align:"center",className:"_7vwx",justify:"all"},b("React").createElement(b("FlexLayout.react"),{align:"center"},c),a.labelSupplementaryContent),d(q),b("React").createElement(j,{errorMessage:a.errorMessage,errorMessageId:n,warningMessage:a.warningMessage}),l?null:b("React").createElement(i,{id:m,text:a.description}))}function i(a){return a.text!==null&&a.text!==void 0?b("React").createElement(b("FDSText.react"),{color:"secondary",id:a.id,margin:"_3-8w",size:"body3"},a.text):null}function j(a){var c=h(b("FDSPrivateThemeContext.react"));if(c.id===b("FDSPrivateThemeAtomsType").FDS_GEODESIC)return b("React").createElement(k,{errorMessageId:a.errorMessageId,isWarning:a.warningMessage!=null,message:a.errorMessage!=null?a.errorMessage:a.warningMessage});if(a.errorMessage!==null&&a.errorMessage!==void 0)return b("React").createElement(b("FDSText.react"),{color:"negative",id:a.errorMessageId,margin:"_3-8w",size:"body3"},a.errorMessage);else if(a.warningMessage!==null&&a.warningMessage!==void 0)return b("React").createElement("span",{className:"_7vrh"},a.warningMessage);return null}function k(a){var c=h(b("FDSPrivateThemeContext.react"));if(a.message==null||a.message==="")return null;var d=c.inputs.borderRadius*2;c=c.inputs.borderRadius;c={backgroundColor:a.isWarning?"rgba(225, 186, 0, 0.1)":"rgba(242, 128, 70, 0.1)",borderBottomLeftRadius:c,borderBottomRightRadius:c,marginTop:-c,paddingTop:c+d,paddingLeft:d,paddingRight:d,paddingBottom:d};return b("React").createElement("div",{className:"_7vri",style:c},b("React").createElement(b("FDSText.react"),{id:a.errorMessageId,size:"meta1"},a.message))}e.exports=a}),null);
__d("FDSPrivateFormCounter.react",["FDSText.react","React"],(function(a,b,c,d,e,f){"use strict";a=function(a){a=a.limit-a.count;return b("React").createElement(b("FDSText.react"),{color:a>0?"positive":"negative"},a)};e.exports=a}),null);
__d("FDSTextInput.react",["FDSBaseTextInput.react","FDSFormInputLayout.react","FDSPrivateFormCounter.react","React","emptyFunction","makeFDSStandardComponent","uniqueID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d,e;for(var f=arguments.length,g=new Array(f),h=0;h<f;h++)g[h]=arguments[h];return(d=e=a.call.apply(a,[this].concat(g))||this,e.state={innerValue:(c=e.props.value)!=null?c:"",value:e.props.value},e.$1=b("React").createRef(),e.$2=b("uniqueID")(),e.$3=function(a){e.setState({innerValue:a}),e.props.onChange(a)},e.$4=function(){e.setState({innerValue:""}),e.props.onClear&&e.props.onClear()},d)||babelHelpers.assertThisInitialized(e)}c.getDerivedStateFromProps=function(a,b){if(b.value!==a.value){return{innerValue:(b=a.value)!=null?b:"",value:a.value}}return null};var d=c.prototype;d.focus=function(){this.$1.current&&this.$1.current.focus()};d.blur=function(){this.$1.current&&this.$1.current.blur()};d.render=function(){var a=this,c=this.props,d=c.autoComplete,e=c.busyIndicator,f=c.description,g=c.errorMessage,h=c.iconSrc,i=c.isDisabled,j=c.isEdited,k=c.isHighlighted,l=c.isOptional,m=c.isValid,n=c.label,o=c.labelIsHidden,p=c.maxLength,q=c.name,r=c.onBlur,s=c.onClear,t=c.onClick,u=c.onEnter,v=c.onFocus,w=c.onKeyDown,x=c.onKeyUp,y=c.onPaste,z=c.placeholder,A=c.size,B=c.tooltipText,C=c.type,D=c.warningMessage,E=(c=this.props.value)!=null?c:this.state.innerValue;c=p!=null?b("React").createElement(b("FDSPrivateFormCounter.react"),{count:E.length,limit:p}):null;return b("React").createElement(b("FDSFormInputLayout.react"),{description:f,errorMessage:g,infoTooltipText:B,inputId:this.$2,isOptional:l,label:n,labelIsHidden:o,labelSupplementaryContent:c,warningMessage:D},function(c){var f=c.describedBy;c=c.errorMessageId;return b("React").createElement(b("FDSBaseTextInput.react"),{autoComplete:d,busyIndicator:e,"data-testid":a.props["data-testid"],describedBy:f,errorMessageId:c,hasError:!!g,hasWarning:!!D,htmlForTargetId:a.$2,iconSrc:h,isDisabled:i,isEdited:j,isHighlighted:k,isValid:m,maxLength:p,name:q,onBlur:r,onChange:a.$3,onClear:s&&a.$4,onClick:t,onEnter:u,onFocus:v,onKeyDown:w,onKeyUp:x,onPaste:y,placeholder:z,ref:a.$1,size:A,type:C,value:E})})};return c}(b("React").PureComponent);a.defaultProps={isDisabled:!1,isEdited:!1,isValid:null,labelIsHidden:!1,onChange:b("emptyFunction"),size:"large",type:"text"};e.exports=b("makeFDSStandardComponent")("FDSTextInput",a)}),null);
__d("FDSButtonSpinner.react",["FDSSpinner.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("FDSSpinner.react"),{shade:this.props.shade,size:"small"})};return c}(b("React").PureComponent);a.defaultProps={shade:"dark"};e.exports=a}),null);
__d("VideoPollsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:VideoPollsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:VideoPollsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:VideoPollsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAdBreakVideoID=function(a){this.$1.ad_break_video_id=a;return this};c.setCometDesign=function(a){this.$1.comet_design=a;return this};c.setCorrectOptionIds=function(a){this.$1.correct_option_ids=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setDerivedFieldsInputMap=function(a){this.$1.derived_fields_input_map=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setDestinationSurface=function(a){this.$1.destination_surface=a;return this};c.setEnableWasLiveVoting=function(a){this.$1.enable_was_live_voting=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setExceptionMsg=function(a){this.$1.exception_msg=a;return this};c.setExceptionTrace=function(a){this.$1.exception_trace=a;return this};c.setNumComponentsInPayload=function(a){this.$1.num_components_in_payload=a;return this};c.setNumberOfExistingPolls=function(a){this.$1.number_of_existing_polls=a;return this};c.setOptionIds=function(a){this.$1.option_ids=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setOwnerID=function(a){this.$1.owner_id=a;return this};c.setPollCreationType=function(a){this.$1.poll_creation_type=a;return this};c.setPublishError=function(a){this.$1.publish_error=a;return this};c.setQuestionText=function(a){this.$1.question_text=a;return this};c.setRankingPayloadAvgCtrValue=function(a){this.$1.ranking_payload_avg_ctr_value=a;return this};c.setReshareMenuComposerSessionID=function(a){this.$1.reshare_menu_composer_session_id=a;return this};c.setShowPollResultsState=function(a){this.$1.show_poll_results_state=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setVideoBroadcastCvc=function(a){this.$1.video_broadcast_cvc=a;return this};c.setVideoCardID=function(a){this.$1.video_card_id=a;return this};c.setVideoChannelEntryPoint=function(a){this.$1.video_channel_entry_point=a;return this};c.setVideoID=function(a){this.$1.video_id=a;return this};c.setVideoOffsetEnd=function(a){this.$1.video_offset_end=a;return this};c.setVideoOffsetStart=function(a){this.$1.video_offset_start=a;return this};c.setVideoPollDuration=function(a){this.$1.video_poll_duration=a;return this};c.setVideoPollID=function(a){this.$1.video_poll_id=a;return this};c.setVideoPollVoterID=function(a){this.$1.video_poll_voter_id=a;return this};c.setVideoPollWwwPlacement=function(a){this.$1.video_poll_www_placement=a;return this};c.setVotingPillRenderSurface=function(a){this.$1.voting_pill_render_surface=a;return this};c.setVpvDuration=function(a){this.$1.vpv_duration=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={ad_break_video_id:!0,comet_design:!0,correct_option_ids:!0,derived_fields_input_map:!0,destination_surface:!0,enable_was_live_voting:!0,event:!0,exception_msg:!0,exception_trace:!0,num_components_in_payload:!0,number_of_existing_polls:!0,option_ids:!0,owner_id:!0,poll_creation_type:!0,publish_error:!0,question_text:!0,ranking_payload_avg_ctr_value:!0,reshare_menu_composer_session_id:!0,show_poll_results_state:!0,time:!0,vc:!0,video_broadcast_cvc:!0,video_card_id:!0,video_channel_entry_point:!0,video_id:!0,video_offset_end:!0,video_offset_start:!0,video_poll_duration:!0,video_poll_id:!0,video_poll_voter_id:!0,video_poll_www_placement:!0,voting_pill_render_surface:!0,vpv_duration:!0,weight:!0};e.exports=a}),null);
__d("KeyframeAnimation",["invariant","CSS","ReactTransitionEvents","UserAgent","nullthrows","queryThenMutateDOM","uniqueID"],(function(a,b,c,d,e,f,g){__p&&__p();var h="KeyframeAnimation-",i="animation-";a=function(){"use strict";__p&&__p();function a(c){__p&&__p();this.$3=c;this.$8=!0;this.$5=new Map();this.$5.set("animation-name",h+b("uniqueID")());this.$4=new Map();if(!a.$1){c=document.createElement("style");b("nullthrows")(document.head).appendChild(c);c=b("nullthrows")(c.sheet);c instanceof CSSStyleSheet||g(0,920);a.$1=c;a.$2=new Map()}this.$9=b("UserAgent").isEngine("WebKit")?"-webkit-":""}var c=a.prototype;c.defineKeyframes=function(a){__p&&__p();a=Object.entries(a);for(var b=0;b<a.length;b++){var c=a[b],d=c[0];c=c[1];d=parseFloat(d,10);d>=0&&d<=100||g(0,921);var e="";for(var c=Object.entries(c).sort(),f=Array.isArray(c),h=0,c=f?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(f){if(h>=c.length)break;i=c[h++]}else{h=c.next();if(h.done)break;i=h.value}i=i;var j=i[0];i=i[1];e+=j+": "+i+";"}this.$4.set(d,e)}return this};c.defineKeyframe=function(a,b){__p&&__p();a=parseFloat(a,10);a>=0&&a<=100||g(0,921);var c="";for(var b=Object.entries(b).sort(),d=Array.isArray(b),e=0,b=d?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=b.length)break;f=b[e++]}else{e=b.next();if(e.done)break;f=e.value}f=f;var h=f[0];f=f[1];(h.substring(0,i.length)===i||h==="transform")&&(h=this.$9+h);c+=h+": "+f+";"}this.$4.set(a,c);return this};c.setDirection=function(a){this.$5.set("animation-direction",a);return this};c.setDuration=function(a){this.$5.set("animation-duration",a+"s");return this};c.setTimingFunction=function(a){this.$5.set("animation-timing-function",a);return this};c.setIterationCount=function(a){this.$5.set("animation-iteration-count",a+"");return this};c.setFillMode=function(a){this.$5.set("animation-fill-mode",a);return this};c.setAnimationDelay=function(a){this.$5.set("animation-delay",a+"s");return this};c.setFinishedCallback=function(a){this.$6=a;return this};c.setMemoize=function(a){this.$8=a;return this};c.start=function(){__p&&__p();var c=this;this.$5.has("animation-duration")||g(0,922);if(this.$7){this.restartAnimation();return}var d=this.$3,e=this.$10(),f=this.$11(e),h;if(this.$8&&a.$2.has(f)){var i=b("nullthrows")(a.$2.get(f));this.$5.set("animation-name",i);h=i}else a.$1.insertRule(e,a.$1.cssRules.length),h=b("nullthrows")(this.$5.get("animation-name")),this.$8&&a.$2.set(f,h);i=this.$12(h);(!this.$8||!a.$2.has(i))&&(a.$1.insertRule(i,a.$1.cssRules.length),this.$8&&a.$2.set(i,h));b("queryThenMutateDOM")(function(){},function(){c.$13(),b("CSS").addClass(d,h)})};c.restartAnimation=function(){var a=this.$3;b("CSS").removeClass(a,b("nullthrows")(this.$5.get("animation-name")));a.offsetWidth;this.$7=!1;b("CSS").addClass(a,b("nullthrows")(this.$5.get("animation-name")))};c.$13=function(){b("ReactTransitionEvents").addEndEventListener(this.$3,this.$14.bind(this))};c.$12=function(a){__p&&__p();var b="";b+="."+a+" {";for(var a=this.$5,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;var f=e[0];e=e[1];b+=f+": "+e+";"}b+="}";return b};c.$10=function(){__p&&__p();var a=this.$5.get("animation-name"),c;b("UserAgent").isEngine("WebKit")?c="@-webkit-keyframes":c="@keyframes";c=c+" "+a+" {";for(var a=this.$4,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;var g=f[0];f=f[1];c+=g+"% {"+f+"}"}return c+"}"};c.$14=function(){this.$7||(this.$6&&this.$6(this.$3),this.$7=!0)};c.$11=function(a){return a.substring(a.indexOf("{")+1).toLowerCase().replace(/\s+/g,"")};return a}();e.exports=a}),null);
__d("CSSAnimationBuilder",["KeyframeAnimation"],(function(a,b,c,d,e,f){a={keyframeAnimation:function(a){return new(b("KeyframeAnimation"))(a)}};e.exports=a}),null);
__d("VideoPollsLoggerEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AD_BREAK_POLL_RENDER_INTENT:"ad_break_poll_render_intent",ADD_IMAGE_TO_OPTION:"add_image_to_option",BUMP_REACH_EXCEPTION:"bump_reach_exception",CHANGE_VOTING:"change_voting",CREATE_OPTION:"create_option",CREATE_POLL:"create_poll",DISCOVERY_PILL_SHOWN:"discovery_pill_shown",DISCOVERY_PILL_TAPPED:"discovery_pill_tapped",FBB_BOTTOM_SHEET_POPUP:"fbb_bottom_sheet_popup",FIRST_END_TIME_ENTERED_VOD:"first_end_time_entered_vod",FIRST_OPTION_ENTERED:"first_option_entered",FIRST_OPTION_ENTERED_VOD:"first_option_entered_vod",FIRST_QUESTION_ENTERED:"first_question_entered",FIRST_QUESTION_ENTERED_VOD:"first_question_entered_vod",FIRST_START_TIME_ENTERED_VOD:"first_start_time_entered_vod",GEN_PAYLOAD_LIVE_SUBSCRIPTION:"gen_payload_live_subscription",GEN_PAYLOAD_LIVE_SUBSCRIPTION_EXCEPTION:"gen_payload_live_subscription_exception",GRAPH_API_VIDEO_POLL_SETTINGS_POST_EXCEPTION:"graph_api_video_poll_settings_post_exception",IMAGE_OPTION_REMOVED:"image_option_removed",IMAGE_OPTION_RENDERED:"image_option_rendered",IMAGE_OPTION_SELECTED:"image_option_selected",IMAGE_OPTION_UPLOAD_VALIDATION_PASSED:"image_option_upload_validation_passed",LIVE_API_LIVE_VIDEO_POLLS_POST_EXCEPTION:"live_api_live_video_polls_post_exception",LIVE_API_VIDEO_POLLS_POST_EXCEPTION:"live_api_video_polls_post_exception",LIVE_VIDEO_POLL_CREATE_ENT_MUTATION_FAIL:"live_vieo_poll_create_ent_mutation_fail",LIVE_VIDEO_POLL_CREATE_GENERIC_POLL_SETTING_EXCEPTION:"live_video_poll_create_generic_poll_setting_exception",LIVE_VIDEO_POLL_CREATE_MUTATION_FAIL:"live_video_poll_create_mutation_fail",NEGATIVE_POLL_DURATION:"negative_poll_duration",POLL_AUTO_CLOSED:"poll_auto_closed",POLL_CARD_VPV:"poll_card_vpv",POLL_MANUALLY_CLOSED:"poll_manually_closed",POLL_SHARE_OPTION_IMPRESSION:"poll_share_option_impression",POLL_SHARE_OPTION_TAPPED:"poll_share_option_tapped",PUBLISH_GQLS_UPDATE:"publish_gqls_update",PUBLISH_GQLS_UPDATE_EXCEPTION:"publish_gqls_update_exception",PUBLISH_POLL:"publish_poll",PUBLISH_RESULT_CARD:"publish_result_card",PUBLISH_VOTE_CARD:"publish_vote_card",RANKING_PAYLOAD_UPDATE_AVG_CTR:"ranking_payload_upload_avg_ctr",RANKING_PAYLOAD_UPDATE_AVG_CTR_EXCEPTION:"ranking_payload_upload_avg_ctr_exception",REMOVE_VOTE_CALL_FAILED:"remove_vote_call_failed",RESULT_CARD_SHOWN:"result_card_shown",SCRUBBER_POLL_INDICATOR_TAPPED:"scrubber_poll_indicator_tapped",SECOND_OPTION_ENTERED_VOD:"second_option_entered_vod",SET_ENABLE_WAS_LIVE_VOTING:"set_enable_was_live_voting",SET_VIDEO_POLL_WWW_PLACEMENT:"set_video_poll_www_placement",SHOW_POLL_RESULTS_RENDER:"show_poll_results_render",SHOW_POLL_RESULTS_STATE_SET:"show_poll_results_state_set",SHOW_POLL_RESULTS_TIME_CHANGE:"show_poll_results_time_change",SHOW_POLL_RESULTS_TOGGLE:"show_poll_results_toggle",SUBSCRIBER_RESPONSE_GQLS_UPDATE:"subscriber_response_gqls_update",SUBSCRIBER_RESPONSE_GQLS_UPDATE_RELOADED:"subscriber_response_gqls_update_reloaded",TIME_STAMP_SCRUBBER_MOVED_FROM_MIDDLE:"time_stamp_scrubber_moved_from_middle",TIME_STAMP_SCRUBBER_TOGGLED:"time_stamp_scrubber_toggled",UNDO_VOTE:"undo_vote",UNPUBLISH_CARD:"unpublish_card",VOD_COMPOSER_ADD_ANOTHER_POLL_CLICKED:"vod_composer_add_another_poll_clicked",VOD_COMPOSER_CREATE_POLL_CLICKED:"vod_composer_create_poll_clicked",VOD_COMPOSER_POLLS_TAB_CLICKED:"vod_composer_polls_tab_clicked",VOD_COMPOSER_POLLS_TAB_ITEM_RENDERED:"vod_composer_polls_tab_item_rendered",VOD_COMPOSER_SAVE_POLL_BUTTON_CLICK:"vod_composer_save_poll_button_click",VOD_REMIX_POLL_PREVIEW_CLICK:"vod_remix_poll_preview_click",VOD_REMIX_POLL_PREVIEW_IMPRESSION:"vod_remix_poll_preview_impression",VOD_REMIX_RANKING_EXCEPTION:"vod_remix_ranking_exception",VOD_REMIX_REMOVE_POLL_CLICK:"vod_remix_remove_poll_click",VOTE:"vote",VOTE_CALL_FAILED:"vote_call_failed",VOTE_CARD_SHOWN:"vote_card_shown",VOTING_PILL_SHOWN:"voting_pill_shown",VOTING_PILL_TAPPED:"voting_pill_tapped",WWW_FEED_INLINE_FBB_CLICKED:"www_feed_inline_fbb_clicked",WWW_FEED_INLINE_FBB_RENDERED:"www_feed_inline_fbb_rendered",WWW_FULL_SCREEN_PLAYER_FBB_SNIPPET_RENDERED:"www_full_screen_player_fbb_snippet_rendered",WWW_LIVE_COMPOSER_ADD_QUESTION_TAPPED:"www_live_composer_add_question_tapped",WWW_LIVE_COMPOSER_ATTACH_POLL_ATTEMPT:"www_live_composer_attach_poll_attempt",WWW_LIVE_COMPOSER_ATTACH_POLL_SUCCESS:"www_live_composer_attach_poll_success",WWW_LIVE_COMPOSER_CREATE_POLL_MENU_ITEM_TAPPED:"www_live_composer_create_poll_menu_item_tapped",WWW_LIVE_COMPOSER_POLL_CREATION_ATTEMPT:"www_live_composer_poll_creation_attempt",WWW_LIVE_COMPOSER_POLL_CREATION_SUCCESS:"www_live_composer_poll_creation_success",WWW_LIVE_COMPOSER_POLLS_TAB_RENDERED:"www_live_composer_polls_tab_rendered",WWW_LIVE_COMPOSER_PUBLISH_POLL_RESULTS_TAPPED:"www_live_composer_publish_poll_results_tapped"})}),null);
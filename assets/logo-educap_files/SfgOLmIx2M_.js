if (self.CavalryLogger) { CavalryLogger.start_js(["ESiCG"]); }

__d("GroupChatMessageBlockAlert",["fbt","DialogX","GenderConst","MessengerParticipants.bs","React","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIDialogTitle.react"],(function(a,b,c,d,e,f,g){__p&&__p();a={show:function(a,c,d){a=new(b("DialogX"))({width:445},b("React").createElement("div",null,b("React").createElement(b("XUIDialogTitle.react"),null,g._("See Conversations?")),b("React").createElement(b("XUIDialogBody.react"),null,this.dialogBodyText(a)),b("React").createElement(b("XUIDialogFooter.react"),null,b("React").createElement(b("XUIDialogButton.react"),{action:"cancel",label:this.leaveGroupButton(),onClick:function(){return d()}}),b("React").createElement(b("XUIDialogButton.react"),{use:"confirm",action:"cancel",label:this.openChatButton(),onClick:function(){return c()}}))));a.show()},openChatButton:function(){return g._("Ver conversa")},leaveGroupButton:function(){return g._("Sair do grupo")},dialogBodyText:function(a){__p&&__p();if(a.length!==1)return g._("People you've blocked are in this conversation. If you see this conversation, you'll get each other's messages to the group.");else{var c="";b("MessengerParticipants.bs").get(a.pop(),function(a){switch(a.gender){case b("GenderConst").FEMALE_SINGULAR:c=g._("{name} is in this group conversation but you've blocked her. If you see this conversation, you'll see her messages to the group and she'll see yours.",[g._param("name",a.short_name)]);break;case b("GenderConst").MALE_SINGULAR:c=g._("{name} is in this group conversation but you've blocked him. If you see this conversation, you'll see his messages to the group and he'll see yours.",[g._param("name",a.short_name)]);break;default:c=g._("{name} is in this group conversation but you've blocked them. If you see this conversation, you'll see their messages to the group and they'll see yours.",[g._param("name",a.short_name)])}});return c}}};e.exports=a}),null);
__d("IgnoreMessagesLoggingEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IGNORE_CLICKED:"ignore_clicked",IGNORE_CONFIRMED:"ignore_confirmed",BLOCK_CLICKED:"block_clicked",BLOCK_CONFIRMED:"block_confirmed",GROUP_WITH_IGNORED_PERSON_WARNING:"group_with_ignored_person_warning",GROUP_WITH_BLOCKED_PERSON_WARNING:"group_with_blocked_person_warning",MESSAGE_IGNORED:"message_ignored"})}),null);
__d("IgnoreMessagesPlatforms",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MOBILE:"mobile",CHAT_TABS:"chat_tabs",MESSENGERDOTCOM:"messengerdotcom"})}),null);
__d("GroupChatMessageIgnoreAlert",["cx","fbt","DialogX","IgnoreMessagesLoggingEvent","IgnoreMessagesPlatforms","IgnoreMessagesTypedLogger","MessengerParticipants.bs","React","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIDialogTitle.react","gkx","intlList"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a={show:function(a,c,d,e){var f=b("gkx")("762398");a=new(b("DialogX"))({width:445},b("React").createElement("div",null,b("React").createElement(b("XUIDialogTitle.react"),null,f?h._("Permanently Hide chat?"):h._("Ignorar grupo?")),b("React").createElement(b("XUIDialogBody.react"),null,b("React").createElement("div",null,this._getDialogBodyPeopleInGroupText(a,f)),b("React").createElement("div",{className:"_3-8x"},this._getDialogBodyEffectText(f))),b("React").createElement(b("XUIDialogFooter.react"),null,b("React").createElement(b("XUIDialogButton.react"),{action:"cancel",label:this._getIgnoreGroupButton(f),onClick:function(){return e()}}),b("React").createElement(b("XUIDialogButton.react"),{use:"confirm",action:"cancel",label:this._getOpenChatButton(f),onClick:function(){return d()}}))));a.show();new(b("IgnoreMessagesTypedLogger"))().setEvent(b("IgnoreMessagesLoggingEvent").GROUP_WITH_IGNORED_PERSON_WARNING).setThreadID(c).setPlatform(b("IgnoreMessagesPlatforms").CHAT_TABS).log()},_getOpenChatButton:function(a){return a?h._("See Chat"):h._("Ver grupo")},_getIgnoreGroupButton:function(a){return a?h._("Permanently Hide"):h._("Ignorar grupo")},_getDialogBodyEffectText:function(a){return a?h._("Se ocultar este bate-papo permanentemente, voc\u00ea poder\u00e1 encontr\u00e1-lo em \"Ocultados permanentemente\"."):h._("Se voc\u00ea ignorar esse grupo, poder\u00e1 encontr\u00e1-lo em Mensagens filtradas.")},_getDialogBodyPeopleInGroupText:function(a,c){__p&&__p();if(a.length===0)return c?h._("People you've permanently hidden are in this chat."):h._("Pessoas que voc\u00ea ignorou est\u00e3o neste grupo.");var d="";b("MessengerParticipants.bs").getMulti(a,function(a){a=Object.values(a);a=a;d=c?h._("This chat has members, {Message sender's names}, who you have permanently hidden.",[h._param("Message sender's names",b("intlList")(a.map(function(a){return a.name})))]):h._("Este grupo tem membros, {Message sender's names}, cujas mensagens voc\u00ea ignorou.",[h._param("Message sender's names",b("intlList")(a.map(function(a){return a.name})))])});return d}};e.exports=a}),null);
__d("ChatGroupBlockMemberDialogBootloader",["Bootloader","React"],(function(a,b,c,d,e,f){"use strict";a={show:function(a,c,d){b("Bootloader").loadModules(["MessengerDialogs.bs","MessengerState.bs","ChatGroupBlockMemberDialog.react"],function(e,f,g){e.showDialog(function(){return b("React").createElement(f.jsComponent,{fbid:a},function(a){var h=f.thread(a,c);return h==null?null:b("React").createElement(g,{blockedIDs:f.blockedIds(a),isShown:!0,onHide:function(){return e.removeDialog()},participants:d,thread:h})})})},"ChatGroupBlockMemberDialogBootloader")}};e.exports=a}),null);
__d("ChatGroupBlockedEntranceWarning.react",["cx","fbt","ChatGroupBlockMemberDialogBootloader","ChatGroupLeaveConversationDialogBootloader","CurrentUser","FacepileRounded.react","FantaTabActions","FDSButton.react","FDSModal.react","FDSModalFooter.react","FDSModalHeader.react","FDSSection.react","FDSText.react","GenderConst","Link.react","MercuryThreadActions","MessengerState.bs","MessengerBlockEntryPoint","React","ReactDOM","XSettingsController","goURI","qex","suiMargin"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("MercuryThreadActions").get();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$5=function(){__p&&__p();var a=d.props,c=a.allParticipants,e=a.blockees,f=a.onHide;a=a.threadID;if(e.length===1){i.blockMessagesForGroupThread(a,e[0].id,b("MessengerBlockEntryPoint").THREAD_VIEW,b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d)));return}if(e.length>1){b("ChatGroupBlockMemberDialogBootloader").show(b("CurrentUser").getID(),a,c);return}e=b("XSettingsController").getURIBuilder().setString("tab","blocking").getURI();f();b("FantaTabActions").closeTab(a);b("goURI")(e)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$1=function(){var a=this.props.blockees;return a.length===1?h._({"*":"{name} est\u00e1 neste grupo"},[h._name("name",a[0].short_name,j(a[0].gender))]):h._("Pessoas que voc\u00ea bloqueou est\u00e3o neste grupo")};d.$2=function(){var a=this.props.blockees;return b("React").createElement(b("FacepileRounded.react"),{className:"_7xx_",direction:"descending",hoverBehavior:"name",imageSize:48,numProfilesToDisplay:2,profiles:a.map(function(a){return{image_src:a.image_src,name:a.name}})})};d.$3=function(){var a=this.props.blockees;if(a.length===1)return h._({"*":{"*":{"*":"Voc\u00ea bloqueou {name}. Se continuar, voc\u00ea e {name} poder\u00e3o ligar, participar de bate-papo de v\u00eddeo e ver as mensagens e a atividade um do outro neste grupo."}},"1":{"*":{"1":"Voc\u00ea bloqueou {name}. Se continuar, voc\u00ea e {name} poder\u00e3o ligar, participar de bate-papo de v\u00eddeo e ver as mensagens e a atividade uns dos outros neste grupo."},"1":{"*":"Voc\u00ea bloqueou {name}. Se continuar, voc\u00ea e {name} poder\u00e3o ligar, participar de bate-papo de v\u00eddeo e ver as mensagens e a atividade uns dos outros neste grupo."}},"2":{"*":{"2":"Voc\u00ea bloqueou {name}. Se continuar, voc\u00ea e {name} poder\u00e3o ligar, participar de bate-papo de v\u00eddeo e ver as mensagens e a atividade uma da outra neste grupo."},"2":{"*":"Voc\u00ea bloqueou {name}. Se continuar, voc\u00ea e {name} poder\u00e3o ligar, participar de bate-papo de v\u00eddeo e ver as mensagens e a atividade uma da outra neste grupo."}},"__vcg":1},[h._name("name",a[0].short_name,j(a[0].gender)),h._name("name",a[0].short_name,j(a[0].gender))]);if(a.length===2)return h._({"*":{"*":{"*":"{person1} e {person2} est\u00e3o neste grupo. Se continuar, voc\u00ea e eles poder\u00e3o fazer liga\u00e7\u00f5es, bate-papo de v\u00eddeo e ver as mensagens e a atividade uns dos outros nesse grupo."},"2":{"2":"{person1} e {person2} est\u00e3o neste grupo. Se continuar, voc\u00ea e elas poder\u00e3o fazer liga\u00e7\u00f5es, bate-papo de v\u00eddeo e ver as mensagens e a atividade uns dos outros nesse grupo."}},"2":{"2":{"2":"{person1} e {person2} est\u00e3o neste grupo. Se continuar, voc\u00ea e elas poder\u00e3o fazer liga\u00e7\u00f5es, bate-papo de v\u00eddeo e ver as mensagens e a atividade umas das outras nesse grupo."}},"__vcg":1},[h._name("person1",a[0].short_name,j(a[0].gender)),h._name("person2",a[1].short_name,j(a[1].gender))]);return a.length===3?h._({"*":{"*":{"*":{"*":"{person1}, {person2} e {person3} est\u00e3o neste grupo. Se continuar, voc\u00ea e eles poder\u00e3o fazer liga\u00e7\u00f5es, bate-papo de v\u00eddeo e ver as mensagens e a atividade uns dos outros nesse grupo."}},"2":{"2":{"2":"{person1}, {person2} e {person3} est\u00e3o neste grupo. Se continuar, voc\u00ea e elas poder\u00e3o fazer liga\u00e7\u00f5es, bate-papo de v\u00eddeo e ver as mensagens e a atividade uns dos outros nesse grupo."}}},"2":{"2":{"2":{"2":"{person1}, {person2} e {person3} est\u00e3o neste grupo. Se continuar, voc\u00ea e elas poder\u00e3o fazer liga\u00e7\u00f5es, bate-papo de v\u00eddeo e ver as mensagens e a atividade umas das outras nesse grupo."}}},"__vcg":1},[h._name("person1",a[0].short_name,j(a[0].gender)),h._name("person2",a[1].short_name,j(a[1].gender)),h._name("person3",a[2].short_name,j(a[2].gender))]):h._({"*":{"*":{"*":"{person1}, {person2} e outras {number} pessoas est\u00e3o neste grupo. Se continuar, voc\u00ea e eles poder\u00e3o fazer liga\u00e7\u00f5es, bate-papo de v\u00eddeo e ver as mensagens e a atividade uns dos outros nesse grupo."},"2":{"2":"{person1}, {person2} e outras {number} pessoas est\u00e3o neste grupo. Se continuar, voc\u00ea e elas poder\u00e3o fazer liga\u00e7\u00f5es, bate-papo de v\u00eddeo e ver as mensagens e a atividade uns dos outros nesse grupo."}},"2":{"2":{"2":"{person1}, {person2} e outras {number} pessoas est\u00e3o neste grupo. Se continuar, voc\u00ea e elas poder\u00e3o fazer liga\u00e7\u00f5es, bate-papo de v\u00eddeo e ver as mensagens e a atividade umas das outras nesse grupo."}},"__vcg":1},[h._name("person1",a[0].short_name,j(a[0].gender)),h._name("person2",a[1].short_name,j(a[1].gender)),h._param("number",a.length-2)])};d.$4=function(){var a=this.props.blockees;return a.length===1?h._({"*":"Para desbloquear {name}, voc\u00ea pode {=Manage Block Settings} nesta conversa."},[h._name("name",a[0].short_name,j(a[0].gender)),h._param("=Manage Block Settings",b("React").createElement(b("Link.react"),{className:"_7xy0",onClick:this.$5},h._("Gerenciar as configura\u00e7\u00f5es de bloqueio")))]):h._("Para desbloquear qualquer pessoa, voc\u00ea pode {=Manage Blocked Users} nesta conversa.",[h._param("=Manage Blocked Users",b("React").createElement(b("Link.react"),{className:"_7xy0",onClick:this.$5},h._("Gerenciar usu\u00e1rios bloqueados")))])};d.$6=function(){var a=this;return b("React").createElement(b("FDSButton.react"),{label:h._("Ver conversa"),onClick:function(){a.props.onHide(),b("FantaTabActions").focusTab(a.props.threadID)},use:"default"})};d.$7=function(){var a=this;return b("React").createElement(b("FDSButton.react"),{label:h._("Sair do grupo"),onClick:function(){var c=a.props,d=c.threadID;c=c.onHide;b("qex")._("922586")===!0?(c(),b("ChatGroupLeaveConversationDialogBootloader").show(b("CurrentUser").getID(),d)):(b("FantaTabActions").closeTab(d),b("MessengerState.bs").isEmptyLocalThread(b("CurrentUser").getID(),d)||i.leaveGroup(d),c())},use:"default"})};d.render=function(){return this.props.blockees.length===0?null:b("React").createElement(b("FDSModal.react"),{isShown:this.props.isShown,onHide:this.props.onHide,footer:b("React").createElement(b("FDSModalFooter.react"),{primaryButton:this.$6(),secondaryButton:this.$7()}),header:b("React").createElement(b("FDSModalHeader.react"),{title:this.$1()}),width:410},b("React").createElement(b("FDSSection.react"),null,b("React").createElement("div",{className:"_7xy5"},this.$2(),b("React").createElement(b("FDSText.react"),{margin:"_3-8o",size:"body1"},this.$3()),b("React").createElement(b("FDSText.react"),{size:"body1"},this.$4()))))};return c}(b("React").Component);function j(a){return a!==b("GenderConst").FEMALE_SINGULAR&&a!==b("GenderConst").MALE_SINGULAR?b("GenderConst").UNKNOWN_SINGULAR:a}e.exports=a}),null);
__d("WorkGalahadNavBarViewProfileMenuItem.react",["cx","fbt","FlexLayout.react","Image.react","Link.react","React","URI","WorkGalahadDropdownMenuItem.react"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){var c=a.profileImage,d=a.userFullName,e=a.userID,f=a.onAfterClick,g=new(b("URI"))("/profile.php").setQueryData({id:e}),i=b("React").createElement("div",{className:"_3-9b"},b("React").createElement("div",{className:"_7tgn"},d),b("React").createElement("div",{className:"_7te0"},h._("Ver perfil")));a=function(a){a.children;return b("React").createElement("div",{className:"_7te1"},b("React").createElement(b("Link.react"),{className:"_78g3",href:g,onClick:f},b("React").createElement(b("FlexLayout.react"),{align:"center"},b("React").createElement(b("Image.react"),{className:"_7te2",src:c,width:40,height:40}),i)))};return b("React").createElement(b("WorkGalahadDropdownMenuItem.react"),{id:"view-profile",key:"view-profile",hideOnClick:!0,LinkRenderer:a})}e.exports=a}),null);
__d("XFeedAwesomizerDesktopDialogAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/feed_preferences/dialog/",{card:{type:"Enum",enumType:1},__asyncDialog:{type:"Int"}})}),null);
__d("XWorkLogoutDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/work/logout/dialog/",{__asyncDialog:{type:"Int"}})}),null);
__d("WorkGalahadNavBarProfileMenu.react",["fbt","LocaleSwitchingReferrers","ProfileTabConst","React","URI","WorkGalahadAppTabID","WorkGalahadConfig","WorkGalahadDropdownMenu.react","WorkGalahadDropdownMenuItem.react","WorkGalahadNavActions","WorkGalahadNavBarViewProfileMenuItem.react","WorkUserDoNotDisturbSettingsSource","XFeedAwesomizerDesktopDialogAsyncController","XLanguageDialogController","XSettingsController","XWorkLogoutDialogController","isClickWithModifierKey","stylex","useDoNotDisturbMenu"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){var c=a.profileImage,d=a.userID,e=a.userFullName,f=a.contextRef,k=a.shown,n=a.onToggle;a=b("useDoNotDisturbMenu")(b("WorkUserDoNotDisturbSettingsSource").GALAHAD_NAV_BAR_MENU);var o=a[0],p=a[1];a=a[2];c=[b("React").createElement(b("WorkGalahadNavBarViewProfileMenuItem.react"),{key:"view-profile-item",profileImage:c,userFullName:e,userID:d,onAfterClick:function(){return n(!1)}}),b("React").createElement(b("WorkGalahadDropdownMenuItem.react").Separator,{key:"view-profile-separator"}),o,b("React").createElement(b("WorkGalahadDropdownMenuItem.react").Separator,{key:"dnd-separator"}),h(d),i(),j(),l(),b("React").createElement(b("WorkGalahadDropdownMenuItem.react").Separator,{key:"logout-separator"}),m()];return b("React").createElement(b("React").Fragment,null,b("React").createElement(b("WorkGalahadDropdownMenu.react"),{alignment:"left",contextRef:function(){return f.current},label:g._("Op\u00e7\u00f5es do perfil"),items:c,onToggle:n,navigateToRootOnHide:!0,position:"above",shown:k,width:280,offsetX:76,offsetY:50,contextualLayerBehaviours:{}}),p,a)}function h(a){a=new(b("URI"))("/profile.php").setQueryData({id:a,sk:b("ProfileTabConst").ALL_ACTIVITY});return b("React").createElement(b("WorkGalahadDropdownMenuItem.react"),{id:"activity-log",key:"activity-log",icons:"list_bullet",href:a,hideOnClick:!0,label:g._("Registro de Atividades")})}function i(){var a=b("XFeedAwesomizerDesktopDialogAsyncController").getURIBuilder().getURI();return b("React").createElement(b("WorkGalahadDropdownMenuItem.react"),{id:"new-feed-preferences",key:"new-feed-preferences",icons:"news_feed",ajaxify:a,rel:"dialog",hideOnClick:!0,label:g._("Prefer\u00eancias do Feed de Not\u00edcias")})}function j(){var a=b("XSettingsController").getURIBuilder().getURI();return b("React").createElement(b("WorkGalahadDropdownMenuItem.react"),{id:"settings",key:"settings",icons:"settings",href:a,onClick:function(c){if(b("isClickWithModifierKey")(c))return;b("WorkGalahadNavActions").markPendingTransition({appTabID:b("WorkGalahadAppTabID").PROFILE,entityKeys:[],uri:a})},hideOnClick:!0,label:g._("Configura\u00e7\u00f5es")})}function k(a,c){c===void 0&&(c=!1);return b("React").createElement("span",{key:a.id,className:c?"e7asi6j9":""},a.display_name)}function l(){__p&&__p();var a=b("XLanguageDialogController").getURIBuilder().setString("uri",window.location.href).setEnum("source",b("LocaleSwitchingReferrers").WORKPLACE_GALAHAD_CHANNEL).getURI(),c=[k(b("WorkGalahadConfig").locale_config.current_locale,!0)];c=[].concat(c,b("WorkGalahadConfig").locale_config.predicted_locales.map(function(a){return k(a)}));c=c.reduce(function(a,d,e){a.push(d);e!==c.length-1&&a.push(b("React").createElement("span",{"aria-hidden":"true",key:"separator-"+e}," ","\xb7"," "));return a},[]);return b("React").createElement(b("WorkGalahadDropdownMenuItem.react"),{id:"select-language",key:"select-language",icons:"language",ajaxify:a,hideOnClick:!0,rel:"dialog",label:b("React").createElement("span",{className:"ca90y9vs"},g._("Selecionar idioma")),desc:function(a){a=a.hovered;return b("React").createElement("span",{className:b("stylex").dedupe({"color-1":"exwtzifa","font-size-1":"rs2tq4r1"},a?{"color-1":"qhxk620v"}:null)},c)}})}function m(){var a=b("XWorkLogoutDialogController").getURIBuilder().getURI();return b("React").createElement(b("WorkGalahadDropdownMenuItem.react"),{id:"logout",key:"logout",icons:"leave_door",ajaxify:a,hideOnClick:!0,rel:"dialog",label:g._("Sair")})}e.exports=a}),null);
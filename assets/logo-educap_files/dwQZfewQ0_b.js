if (self.CavalryLogger) { CavalryLogger.start_js(["uWcId"]); }

__d("ChatTabPolicy",["ChatBehavior","ChatOptions","ChatSidebarDropdownConstants","CurrentUser","LogHistory","MercuryActionType","MercuryAssert","MercuryIDs","MercuryIgnoredBlockedParticipants.bs","MercuryLogMessageType","MercuryParticipantTypes","MercurySourceType","MercuryThreadActions","MercuryThreadInfo","MercuryViewer","MessagingTag","MessengerState.bs","PresencePrivacy","ShortProfiles","WorkModeConfig","gkx","killswitch"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MercuryThreadActions").get(),h=new Set(["1579802578966277","881263441913087","506060876211905"]),i=b("LogHistory").getInstance("tab_policy"),j=function(){return b("gkx")("678577")&&b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").TURN_OFF_CHAT_TABS)!==void 0};e.exports={messageIsAllowed:function(a,c,d){__p&&__p();if(j()&&b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").TURN_OFF_CHAT_TABS))return;var e=a.thread_id,f=c.message_id,k=b("MercuryIDs").getUserIDFromParticipantID(b("MercuryViewer").getID());b("MercuryAssert").isThreadID(e);b("MercuryAssert").isParticipantID(c.author);var l;if(b("MercuryThreadInfo").isMuted(a)){l={thread_id:e,message_id:f,mute_until:a.mute_until};i.log("message_thread_muted",JSON.stringify(l));if(!b("MercuryThreadInfo").areMentionsMuted(a)){if(!c.profile_ranges||!c.profile_ranges.some||!c.profile_ranges.some(function(a){return a.id===k})){i.log("message_mentions_viewer",JSON.stringify(l));return}}else return}if(a.read_only){l={thread_id:e,message_id:f,mode:a.mode};i.log("message_read_only",JSON.stringify(l));return}if(c.source==b("MercurySourceType").EMAIL||c.source==b("MercurySourceType").TITAN_EMAIL_REPLY){l={thread_id:e,message_id:f,source:c.source};i.log("message_source_not_allowed",JSON.stringify(l));return}var m=b("MercuryIDs").getUserIDFromParticipantID(c.author);if(!m){i.log("message_bad_author",JSON.stringify({thread_id:e,message_id:f,user:m}));return}if(c.action_type!=b("MercuryActionType").USER_GENERATED_MESSAGE&&!this._messageIsNewlyCreatedGroup(c,a)){l={thread_id:e,message_id:f,type:c.action_type};i.log("message_non_user_generated",JSON.stringify(l));return}if(a.is_canonical_user&&!b("ChatBehavior").notifiesUserMessages()){i.log("message_jabber",JSON.stringify({thread_id:e,message_id:f}));g.markSeen(e,!0);return}if(a.is_canonical&&!a.other_user_fbid){i.log("message_canonical_contact",JSON.stringify({thread_id:e,message_id:f}));return}if(a.folder!=b("MessagingTag").INBOX){i.log("message_folder",JSON.stringify({thread_id:e,message_id:f,folder:a.folder}));return}var n=b("CurrentUser").getID();b("MessengerState.bs").compute(n,function(c){__p&&__p();c=c.blocked_ids;if(b("MercuryIgnoredBlockedParticipants.bs").isPresentInGroupThread(n,c,a)){l={thread_id:e,message_id:f};i.log("message_blocked_participants",JSON.stringify(l));return}b("ShortProfiles").getMulti([m,k],function(a){__p&&__p();if(!j()&&!b("PresencePrivacy").allows(m)){i.log("message_privacy",JSON.stringify({thread_id:e,message_id:f,user:m}));return}var c=a[m].employee&&a[k].employee,g=b("WorkModeConfig").is_work_user;if(!c&&!g&&!a[m].isCommercePage&&!h.has(m)&&a[m].type!==b("MercuryParticipantTypes").FRIEND&&a[m].type!==b("MercuryParticipantTypes").PAGE){i.log("message_non_friend",JSON.stringify({thread_id:e,message_id:f,user:m}));return}if(b("killswitch")("MESSENGER_WEB_STOP_AUTOMATIC_CHAT_TAB_RAISING")){i.log("chat_tab_automatic_popup_killswitch",JSON.stringify({thread_id:e,message_id:f,user:m}));return}d()})})},_messageIsNewlyCreatedGroup:function(a,c){return a.action_type===b("MercuryActionType").LOG_MESSAGE&&a.log_message_type===b("MercuryLogMessageType").THREAD_NAME&&c.message_count===1}}}),null);
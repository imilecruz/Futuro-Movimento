if (self.CavalryLogger) { CavalryLogger.start_js(["tauLS"]); }

__d("ChatGroupLeaveConversationDialogBootloader",["Bootloader","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={show:function(a,c){b("Bootloader").loadModules(["MessengerDialogs.bs","MessengerState.bs","ChatGroupLeaveConversationDialog.react","MercuryIgnoredBlockedParticipants.bs","MessengerAdminGroupUtils"],function(d,e,f,g,h){e.compute(a,function(i){i=i.blocked_ids;var j=e.getThreadMetaNow(a,c),k=g.isPresentInGroupThread(a,i,j),l=(j==null?void 0:j.admins)&&(j==null?void 0:j.admins[a])!==void 0;d.showDialog(function(){return b("React").createElement(f,{isAdmin:l,isShown:!0,isWorkSyncedChat:h.isWorkSyncedGroupChat(j),onHide:function(){return d.removeDialog()},threadID:c,viewer:a,showCanAddBack:k})})})},"ChatGroupLeaveConversationDialogBootloader")}};e.exports=a}),null);
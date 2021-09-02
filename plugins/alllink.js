/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/


const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('evaluators');
const SLang = Language.getString('conventer');
const NLang = Language.getString('scrapers');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);

}
var alllink_var = ''
async function megalink() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        alllink_var = vars.ALL_LINK_BAN
    });
}
megalink()
var ldc = ''
if (Config.LANG == 'AZ') ldc = '*Bağlantı Aşkarlandı!*'
if (Config.LANG == 'TR') ldc = '*‎Link Tespit Edildi!*'
if (Config.LANG == 'EN') ldc = '*Link Detected!🚀whatsapp Group Link Not Allowed This group.. ◽Action:⭕KICK*'
if (Config.LANG == 'ML') ldc = '*ലിങ്ക് കണ്ടെത്തി!* ```മോനെ ഈ ലിങ്ക് ഇവിടെ അലോഡഡ് അല്ല അപ്പോൾ പിന്നെ എങ്ങനെയാ പോവുവാല്ലേ...``` , *WARNING⚠️* *ആണ് കേട്ടോ 🚫*'
if (Config.LANG == 'ID') ldc = '*Tautan Terdeteksi!*'
if (Config.LANG == 'SI') ldc = '*Link Detected!මෙම සමූහයේ Link දැමීමට අවසර නොමැත.. ◽ක්‍රියාමාර්ගය:ඉවත් කිරීම*'
if (Config.LANG == 'RU') ldc = '*Ссылка обнаружена!*'
if (Config.LANG == 'HI') ldc = '*लिंक का पता चला!*'
if (Config.LANG == 'ES') ldc = '*Enlace Detectado!*'
Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (alllink_var == 'true' && message.jid !== '9082891698-1616356915@g.us') {
        let regex1 = new RegExp('whatsapp.com')
        let regex2 = new RegExp('www.')
        if (regex1.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
           await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
          await message.client.groupRemove(message.jid, [message.data.participant]);
        } 
        else if (regex2.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
        else if (message.message.match(/((?:[.]www)\b)/i)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
    }
}));

var alllink_var = ''
async function kt() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        AI_var = vars.Z_AMAZONE_AI
    });
}
kt()
var tb1 = ''
var tb2 = ''
var tb3 = ''
var tb4 = ''
var tb5 = ''
var tb6 = ''
var tb7 = ''
var tb8 = ''
var tb9 = ''

 if (Config.LANG == 'ML') {
         ktb1 = '```എല്ലാ കമാൻഡുകളും ലഭിക്കാൻ .list ടൈപ്പ് ചെയ്യുക```'
         ktb2 = 'എന്റെ പേര് '
         ktb3 = 'അതെ എന്നോട് പറയൂ, ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കും'
         ktb4 = '👻Boo-o-o-oh👻'
         ktb5 = 'എനിക്കറിയാം അവൻ എന്റെ സ്രഷ്ടാവാണെന്ന്'
         ktb6 = 'ᴍᴏꜱꜱ , ꜱᴀʜᴀʟ , ᴄʜᴇʀʀʏ , ꜰᴀʀʜᴀɴ'
         ktb7 = 'ഞാൻ .... ആഹ് ഞാൻ ആരാണെന്ന് എനിക്കറിയില്ല \n ഞാൻ ആരാണെന്ന് നിങ്ങൾക്കറിയാമെങ്കിൽ ദയവായി എന്നോട് പറയു🥺🥺'
         ktb8 = 'ആരെങ്കിലും എന്നെ സഹായിക്കൂ, ഈ വ്യക്തി മോശമായി സംസാരിക്കുന്നു \n ഞാൻ ഒരു നല്ല കുട്ടിയാണ് ... \n\n ട്രിൻ..ട്രിൻ ... *ഹലോ പോലീസ് സ്റ്റേഷൻ *'
         ktb9 = ' https://github.com/afnanplk/lastpink '
      }//afnanplk creation
    else {
        ktb1 = 'to get all commands type .list*'
        ktb2 = 'hey am '
        ktb3 = 'ʏᴇꜱ ᴛᴇʟʟ ᴍᴇ, ʜᴏᴡ ᴄᴀɴ ɪ ʜᴇʟᴘ ʏᴏᴜ'
        ktb4 = '👻Boo-o-o-oh👻'
        ktb5 = 'i know him he is my creator'
        ktb6 = 'ᴍᴏꜱꜱ , ꜱᴀʜᴀʟ , ᴄʜᴇʀʀʏ , ꜰᴀʀʜᴀɴ'
        ktb7 = 'i am .... aah i dont know who i am \n please tell me if you know who i am 🥺🥺'
        ktb8 = 'somebody help me this person is talking bad things \n i am a good ...\n\n trin..trin... *hello police station*'
        ktb9 = ' https://github.com/afnanplk/lastpink '
    }  


Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
   if (AI_var == 'true' && message.jid !== '919562803423-1627735504@g.us') {

        let regex1 = new RegExp('')
        let regex2 = new RegExp('')
        let regex3 = new RegExp('sew')
        let regex4 = new RegExp('')
        let regex5 = new RegExp('')
        let regex6 = new RegExp('')
        let regex7 = new RegExp('')
        let regex8 = new RegExp('')
        let regex9 = new RegExp('')
        let regex10 = new RegExp('')
        if (regex1.test(message.message)) {              
            await message.client.sendMessage(message.jid,ktb1, MessageType.text, {quoted: message.data })
        } 
        else if (regex2.test(message.message)) {
           await message.client.sendMessage(message.jid,ktb2 + White.OB_NAME, MessageType.text, {quoted: message.data })
        }
         else if (regex3.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);
        }
        else if (regex4.test(message.message)) {
           await message.client.sendMessage(message.jid,ktb4, MessageType.text, {quoted: message.data })
        }
        else if (regex5.test(message.message)) {
          await message.client.sendMessage(message.jid,ktb5, MessageType.text, {quoted: message.data })
        }
         else if (regex6.test(message.message)) {
           await message.client.sendMessage(message.jid,ktb6, MessageType.text, {quoted: message.data })
        }
         else if (regex7.test(message.message)) {
           await message.client.sendMessage(message.jid,ktb7, MessageType.text, {quoted: message.data })
        }
         else if (regex8.test(message.message)) {
           await message.client.sendMessage(message.jid,ktb8, MessageType.text, {quoted: message.data })
        }
         else if (regex9.test(message.message)) {
   await message.client.sendMessage(message.jid,ktb9, MessageType.text, {quoted: message.data })
        }
        else if (regex10.test(message.message)) {
   await message.client.sendMessage(message.jid,White.OA_REPLY, MessageType.text, {quoted: message.data })
        }      
   }
}));

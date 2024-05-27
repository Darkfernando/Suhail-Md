const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349011989510";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_32_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyLFxuICAgICAgICA2MixcbiAgICAgICAgNTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDczLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDksXG4gICAgICAgIDM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgODcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICAzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDQxLFxuICAgICAgICA3MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQxLFxuICAgICAgICAxODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDYxLFxuICAgICAgICA0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNixcbiAgICAgICAgNTYsXG4gICAgICAgIDI2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDksXG4gICAgICAgIDcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOSxcbiAgICAgICAgNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY4LFxuICAgICAgICA4OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibFhQTURlTG9WUDdWZktpY3dUTFRLcFVSejFQVHoyY2NxQWtmc01pRVZMcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUWcxU29INFNSWW1zZUp5cll0R21sUVwiLFxuICBcInBob25lSWRcIjogXCJiN2Q1Yjk3Mi05OTA5LTRlY2EtYTgzOC0wYjdhNGVhMDFhZGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzIsXG4gICAgICAxMDgsXG4gICAgICA1NSxcbiAgICAgIDU1LFxuICAgICAgNTUsXG4gICAgICAyMDEsXG4gICAgICA1MyxcbiAgICAgIDE3NSxcbiAgICAgIDIwOCxcbiAgICAgIDgyLFxuICAgICAgMzEsXG4gICAgICAyNixcbiAgICAgIDExOSxcbiAgICAgIDg0LFxuICAgICAgNTAsXG4gICAgICAyMDYsXG4gICAgICAzNCxcbiAgICAgIDI0NixcbiAgICAgIDE5NCxcbiAgICAgIDEwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDYwLFxuICAgICAgODYsXG4gICAgICA2NCxcbiAgICAgIDE0MyxcbiAgICAgIDI0NSxcbiAgICAgIDEwNyxcbiAgICAgIDIwMyxcbiAgICAgIDIxNyxcbiAgICAgIDcsXG4gICAgICA5NSxcbiAgICAgIDE1MixcbiAgICAgIDg1LFxuICAgICAgMTMsXG4gICAgICAxMTIsXG4gICAgICAwLFxuICAgICAgNjMsXG4gICAgICAyMDUsXG4gICAgICAxMTAsXG4gICAgICAxMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1o4SkQxR0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTE5ODk1MTA6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNzE5NTMxNDI0MTY4NDoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMajF4NUVDRUpxSzBiSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlorTCtiTDVPTkI0R3pFTkhxblN3dXVRaVVVM2N2V0hzczlvN0FUcXdrUTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSDgweW5MaHVPTFdadFc3WVllc0t5T0ozR3krL3U2VHhxZW1lZ0RFd3FwMUU0U0VFZW9mS3BlOE94N2dwUTJSUGVhdHppT1JGaEdDbjJlZTRzTUZRRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibUFsczFjNkNyTmMwT0x5QkdLcXo5YTlZOXF3VHk5STZMWmVqeHM4V3JtbFgwK2YrbTNqTTUwM3hFN3BXa2NUK3N4bnhTS1BoREwwUG92bHM0MHFnQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMTk4OTUxMDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2Nzk4NzUwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

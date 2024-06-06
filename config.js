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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_54_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDkxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgODMsXG4gICAgICAgIDY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjksXG4gICAgICAgIDcxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwLFxuICAgICAgICAyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NixcbiAgICAgICAgMjIyLFxuICAgICAgICA0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJySjVTdEloMFRLREIwMUMzOFdKNGpMLzJ4cmNoSW82T1BBTHFYZzYyYjk4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJOEFjQlpQdlFVaTVuWF8yMGZoenpBXCIsXG4gIFwicGhvbmVJZFwiOiBcImU4MWVjOGYyLTUxMmEtNDQxYS04NjVlLTAzMTUzZDUxNjE3OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDE5MixcbiAgICAgIDE2MCxcbiAgICAgIDIxMSxcbiAgICAgIDIxNixcbiAgICAgIDE0OSxcbiAgICAgIDEsXG4gICAgICAxNzIsXG4gICAgICAxMzksXG4gICAgICAxODIsXG4gICAgICAxNTgsXG4gICAgICA4NixcbiAgICAgIDE3NCxcbiAgICAgIDEsXG4gICAgICAxMjYsXG4gICAgICAxMDksXG4gICAgICA3MCxcbiAgICAgIDEzMSxcbiAgICAgIDIyOCxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICAxMDMsXG4gICAgICAxMzUsXG4gICAgICAxNzUsXG4gICAgICA1OSxcbiAgICAgIDEwMCxcbiAgICAgIDIwLFxuICAgICAgMjQ3LFxuICAgICAgMTcwLFxuICAgICAgMjIyLFxuICAgICAgMTcxLFxuICAgICAgMTEsXG4gICAgICAxMTMsXG4gICAgICAxOTksXG4gICAgICAxMDUsXG4gICAgICAxNjIsXG4gICAgICA1MixcbiAgICAgIDE5MyxcbiAgICAgIDk3LFxuICAgICAgMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSks3RFhLN0FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTE5ODk1MTA6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNzE5NTMxNDI0MTY4NDoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdjF4NUVDRU5UR2hyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlorTCtiTDVPTkI0R3pFTkhxblN3dXVRaVVVM2N2V0hzczlvN0FUcXdrUTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieVNlU1RqeTBjUnVleitMaTg0RHpoMzZzTUVEcUpHclpQdGtLbVNBVW0rV0huVjc2MWtZcW5QeUZKd09vK1NOU052RUlpSjhCM3F0K3dPakx0ZS9xQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidkM5TGtDWGNKVlhSdExSejNKSEhsZFduZzNPTUdlQ1NDd29IUHkvVEF3bTZ0M1pud2RJNmRKQVQ1TkJhYUxxNzM2MnRDQVF4RlNxVDY4b09GOGZValE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMTk4OTUxMDoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3Njc0ODQwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT2JTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPYlMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhMWhlZkdsRmZoVFFKRXA1SU93Nkc4Wk1KK3Z6cUlzRngyWkdRSnNFUGgwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU3MzcwMDc5MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_20_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDI4LFxuICAgICAgICA0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgODYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NCxcbiAgICAgICAgNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NixcbiAgICAgICAgMTcxLFxuICAgICAgICA0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDczLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNyxcbiAgICAgICAgMyxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMyxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDcwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NixcbiAgICAgICAgNjksXG4gICAgICAgIDkzLFxuICAgICAgICA5NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1LFxuICAgICAgICAzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgODIsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMzLFxuICAgICAgICA3MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSGVUaU9xZVprZGR0MytzZnM1MHhxMGk5dnVkVi9QeDB6TVlVTG5hVWwraz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLWF3VWZyTU5RT2VIMWFpeXRGT0cyZ1wiLFxuICBcInBob25lSWRcIjogXCJjYmJlNTM5ZC02MjhjLTRmYzgtYmExOS1mZjNlNGFkZDkxMzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgNTEsXG4gICAgICAyMzMsXG4gICAgICAyMzcsXG4gICAgICA5NixcbiAgICAgIDE3NSxcbiAgICAgIDEwOCxcbiAgICAgIDEzMyxcbiAgICAgIDExOCxcbiAgICAgIDE3MSxcbiAgICAgIDIzNSxcbiAgICAgIDIwMixcbiAgICAgIDE4LFxuICAgICAgMTMxLFxuICAgICAgNTYsXG4gICAgICAzNCxcbiAgICAgIDIwNSxcbiAgICAgIDIzNSxcbiAgICAgIDY1LFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEzLFxuICAgICAgMjMsXG4gICAgICAxNTgsXG4gICAgICAxMTEsXG4gICAgICAxOTgsXG4gICAgICAxOTEsXG4gICAgICAyNDMsXG4gICAgICAzOCxcbiAgICAgIDIzOCxcbiAgICAgIDExNyxcbiAgICAgIDEwNixcbiAgICAgIDEwOSxcbiAgICAgIDE3MixcbiAgICAgIDE5MCxcbiAgICAgIDIwNCxcbiAgICAgIDIzNixcbiAgICAgIDMsXG4gICAgICAyNTEsXG4gICAgICA2OSxcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYN01MODdTSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxMTk4OTUxMDoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI3MTk1MzE0MjQxNjg0OjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xuMXg1RUNFTTdKMHJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWitMK2JMNU9OQjRHekVOSHFuU3d1dVFpVVUzY3ZXSHNzOW83QVRxd2tRND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQajUvbDRnV0VtMzBlR1E4NUl6R2RqQURWSHM2Z3N6N1RDeUVMeUVSRXBDcUhGejVId0RpNUF0eXNuTkVEdzJrZTdmaFJ3Z0xlQzZSSjQxbGF4NUdBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvUzNYbUZRUVhud2ZNTHd1ZEJLa2tHc210ZVorSDdkK1hPYUZqYkRqWG5wQXlaSDlXN1dMOGdkVFJPcHYzdjFvdDVqeE1uSHNNTG0zckpuTFZaT29ndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDExOTg5NTEwOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY4MjMyNTBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
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

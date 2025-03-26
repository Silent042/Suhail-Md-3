const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "alive-madlen-silentbots-8d6ca2f1.koyeb.app/"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348168855791";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348168855791,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_42_03_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzMixcbiAgICAgICAgOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMixcbiAgICAgICAgMTcyLFxuICAgICAgICA1MSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3LFxuICAgICAgICAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM1LFxuICAgICAgICA1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDMwLFxuICAgICAgICA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMwLFxuICAgICAgICA1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA3LFxuICAgICAgICA2MixcbiAgICAgICAgMTkxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMTQwLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDcwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc5LFxuICAgICAgICA0NixcbiAgICAgICAgODEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICAzMixcbiAgICAgICAgNDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXTVdhcGpPWkpVRzU1YjZKVldxVXJyN1FnV1pvaW9DTENqSThYZnN6VWVFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHQ3d1ejR5Q1F5cTFCNEQ0Tmc0ZmtRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgxMGNkZThlLTc5Y2MtNDlhMC05ZDVkLWE0Njk3MjM1YmI2MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICAyNDYsXG4gICAgICAxNCxcbiAgICAgIDE1MCxcbiAgICAgIDIxNyxcbiAgICAgIDI5LFxuICAgICAgMTk1LFxuICAgICAgNTgsXG4gICAgICAxNjcsXG4gICAgICAyMjEsXG4gICAgICAxMzIsXG4gICAgICAyNDEsXG4gICAgICA3MyxcbiAgICAgIDIwNCxcbiAgICAgIDE1NCxcbiAgICAgIDExMCxcbiAgICAgIDI0NCxcbiAgICAgIDg3LFxuICAgICAgMjQxLFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDE5MCxcbiAgICAgIDU2LFxuICAgICAgMTM2LFxuICAgICAgMjUzLFxuICAgICAgMjIyLFxuICAgICAgNDEsXG4gICAgICAyMTksXG4gICAgICAzMSxcbiAgICAgIDQwLFxuICAgICAgMTcwLFxuICAgICAgNDQsXG4gICAgICA1MCxcbiAgICAgIDEzMSxcbiAgICAgIDE2MCxcbiAgICAgIDEzOCxcbiAgICAgIDg3LFxuICAgICAgNzQsXG4gICAgICAxODMsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYMkZYNEpOWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2ODg1NTc5MToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI2OTU1MDQ3NzU1NzgwOjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09IZHo3Y0NFTFBzajc4R0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZk1XWFBpU29NUlYyUDFZak9XTHdReEJMU01xZjltWmU1UkJ5MlpObG16QT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkM25yTUE4S1ZxejVFUmRCQkRUQ2luWFUzZGdWejYyckYwVXBQM0EwVk9VTlJlNldrRDlIWkNLNlByTlFRN3h5aEpQUG92em5LQkY0ZmZ1VkxBd0JCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSZWh5bE5wZ0FhVklCTFQzcnJqQlhxMUZMdW9UZ0xIOXJzWU90QWlCMU4vOUZyY1FWNklEVWVyVFdjSDlTajhEVE9OZE53eGNhN1QrYlhYeE5rYWtEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY4ODU1NzkxOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDI5OTI5NTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOY2pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5jai5qc29uIjogIntcImtleURhdGFcIjpcIjFjaGc5MVlVSURPMUt3ZlRJV2p4bFlWUCtpdVZZZDdwRmJSREpDSm1QWGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjUzNTIwNjA5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDI3MDgzMDM2NDRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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

const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : r3d`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`TEXT`,"https://www.twitch.tv/ra3dal3arb")
client.user.setStatus("dnd")
});

client.login("NDA0MjkyMzk1MzEyODczNDcz.XVhabg.R-0yW-7PMTpttvf8V3x1F9mIZ9c");// لا تغير فيها شيء

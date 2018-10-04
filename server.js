const Discord = require('discord.js');

const Client = new Discord.Client();

const prefix = "!"

client.on("ready", () => {
  console.log(`Bot is online!`)
  client.user.setActivity(`with ${client.guilds.size} servers!`);
});

client.on("message", async message => {

if(message.author.bot) return;
if(message.content.indexOf(prefix) !== 0) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
  
if(command = "test") {
 message.reply("message")
}


});



client.login('token')


const Discord = require('discord.js');

const Client = new Discord.Client();
const fs = require('fs')
const prefix = "!"

client.on("ready", () => {
  console.log(`Bot is online!`)
  client.user.setActivity(`with ${client.guilds.size} servers!`);
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./commands/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", async message => {

if(message.author.bot) return;
if(message.content.indexOf(prefix) !== 0) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
  
if(command = "test") {
 message.reply("message")
}

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }

});



client.login('token')


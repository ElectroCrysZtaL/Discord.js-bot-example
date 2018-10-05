const Discord = require('discord.js');
const money = require('money.js');

module.exports.run = async (bot, message, args) => {

// TheSourceCode Credit for giving me this **method**
if(!money[message.author.id]){
    money[message.author.id] = {
      money: 0
    }
 }
 
 let bal = money[message.author.id].money;

const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANDOM")
  .addField("You currently have $", bal);

message.channel.send(embed)
}

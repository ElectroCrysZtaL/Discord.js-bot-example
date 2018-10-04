const Discord = require('discord.js')

exports.run = (client.message.args) => {

const embed = new Discord.RichEmbed();

.setTitle("Title")
.setColor("RED")
.setTimestamp()
.setThumbnail(mesaage.author.avatarURL)
.setDescription("Description")
.addField("Field 1")
.addField("Field 2")
.addField("Field 3")
.addField("Field 4", true)
.setFooter("footer")

message.channel.send(embed)
}

exports.run = (client, message, args) => {

const embed = new Discord.RichEmbed();
.setTitle('**Arguments**')
.addField(args[0])
.addField(args[1])
.addField(args[2])

// Returns the message sent with spaces seperate each argument
message.channel.send(embed)
}

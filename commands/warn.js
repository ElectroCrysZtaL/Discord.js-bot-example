exports.run = (client, message, args) => {
 const member = message.mentions.members.first()
 // Your code
 member.send(`You have been warned in ${message.guild.name} because ${args[1]}`)
 console.log('sucsessfully warned user.')
}

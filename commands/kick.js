exports.run => (client, message, args) {
let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("Sorry, i cannot kick this member!");
    
if(!message.author.hasPermission("KICK_MEMBER")) return message.reply("Sorry, you don't have permissions to use this command!");

let r = args.slice(1).join(' ');
if(!r) reason = "No reason provided";

await member.kick(r)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} was banned!`);
    member.send(`You were banned from ${message.guild.name} by ${message.author.username} because ${reason}`)
}

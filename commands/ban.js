exports.run = (message, client, args) => {
 // Your code
 const member = message.mentions.members.first();
 member.ban('reason');
}

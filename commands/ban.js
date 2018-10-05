exports.run = (message, client, args) => {
 // Your code
 const member = message.mentions.members.first();
 member.ban('reason');
 console.log(`sucsessfully banned ${member.id}`)
}

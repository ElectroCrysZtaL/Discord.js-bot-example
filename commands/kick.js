exports.run => (client, message, args) {

const member = message.mentions.members.first();
member.kick('reason');
}

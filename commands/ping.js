
exports.run = (client, message, args) => {
 if(command === "ping") {
    const m = await message.channel.send("Pinging...");
    m.edit(`Pong! ${m.createdTimestamp - message.createdTimestamp}ms`);
  }   
}

exports.run = (client, message, args) => {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); // Ignores the error 
    message.channel.send(sayMessage);
  }

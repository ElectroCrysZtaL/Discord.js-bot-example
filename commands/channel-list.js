exports.get(client, message, args) => {
  const list = client.channels.array().sort()
  message.channel.send('Channels:' + list);
}

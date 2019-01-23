module.exports.getMember = (message, args) => {
  let member = message.mentions.members.first();
  if(!member) {
    let id = args[0];
    if (!message.guild.members.get(id)) return false;
    member = message.guild.members.get(id);
  }
  return member;
}

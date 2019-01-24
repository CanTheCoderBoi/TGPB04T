const Discord = require("discord.js");
const schemas = require("../schemas.js")


module.exports.getMember = (message, args) => {
  let member = message.mentions.members.first();
  if (!member) {
    let id = args[0];
    if (!message.guild.members.get(id)) return false;
    member = message.guild.members.get(id);
  }
  return member;
}

module.exports.randomXP = (client, message) => {
  if(message.channel.type == "dm") return;
  if (Math.floor(Math.random() * 100) < 99) return;
  let randomAmount = Math.floor(Math.random() * 4) + 1;
  schemas.userPoints.findOne({userID: message.author.id}, (err, res) => {
    res.points += randomAmount;
    let pointEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setTitle("Biraz oradan biraz buradan...")
      .setDescription(`+ ${randomAmount}<:tgpcoin:530810516629618718>`)
      .setThumbnail(client.user.avatarURL)
      .setFooter("Yine iyisin :D")
      .setTimestamp();
    message.channel.send(pointEmbed).then(msg => { msg.delete(8000) });
    res.save()
  })

}
const Discord = require("discord.js");
const schemas = require("../schemas.js")
const items = require("../items.json")
const ms = require("ms");
let lastPointWinners = [];

getMember = (message, args) => {
  let member = message.mentions.members.first();
  if (!member) {
    let id = args[0];
    if (!message.guild.members.get(id)) return false;
    member = message.guild.members.get(id);
  }
  return member;
}

randomXP = (client, message) => {

  if (message.channel.type == "dm" || message.channel.id == "529031030636806144" || message.channel.id == "527501700307746817") return;
  if (Math.floor(Math.random() * 100) < 90) return;
  if (lastPointWinners.includes(message.author.id)) return;
  let randomAmount = Math.floor(Math.random() * 2) + 1;
  schemas.userPoints.findOne({ userID: message.author.id }, (err, res) => {
    res.points += randomAmount;
    let pointEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setTitle("Biraz oradan biraz buradan...")
      .setDescription(`+ ${randomAmount}<:tgpcoin:530810516629618718>`)
      .setThumbnail(client.user.avatarURL)
      .setFooter("Yine iyisin :D")
      .setTimestamp();
    message.channel.send(pointEmbed).then(msg => { msg.delete(8000) });
    lastPointWinners.push(message.author.id);
    setTimeout(() => {
      lastPointWinners.splice(lastPointWinners.indexOf(message.author.id, 1));
    }, 60000);
    res.save()
  })

}

kasaAc = (message, kasa) => {
  let randomItem = items.kasalar[kasa].items[Math.floor(Math.random() * items.kasalar[kasa].items.length)];
  let kasaEmbed = new Discord.RichEmbed().setAuthor(message.author.tag, message.author.avatarURL).setTimestamp().setDescription("İçinden:\n" + randomItem + "\n çıktı!").setColor(0x0000ff).setTitle(`${message.author.tag} kullanıcısı ${kasa} kasasını açtı!`);
  message.channel.send("Kasa açılıyor... **3**").then(msg => {
    for (let sure = 3; sure > 0; sure--) {
      setTimeout(() => {
        msg.edit(`Kasa açılıyor... **${sure}**`)
      }, timeout);
      
    }
    msg.edit(kasaEmbed);
  })
}

module.exports = {
  randomXP,
  kasaAc,
  getMember
}
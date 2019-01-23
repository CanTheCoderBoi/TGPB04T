const Discord = require("discord-js");
const shortcuts = require("../utils/shortcuts.js");
module.exports.run = (client, message, args) => {
  if(!message.member.roles.has("523196081417224216") && !message.member.hasPermission("ADMINISTRATOR")) return;
  let member = shortcuts.getMember(messsage, args);
  if(!member) return message.channel.send("Lütfen geçerli bir üye belirtiniz.");
  let reason = args.slice(1).join(" ");
  if(!reason) {reason = "Belirtilmedi."}
  member.addRole(message.guild.roles.get("529661981003874314"), `Susturma: ${reason}, Moderator: ${message.author.id}`);
  client.channels.get("534411959723098122").send("**" + member.user.tag + "**" + " (`" + member.id + "`)" + " kullanıcısı , **" + message.author.tag + "** (`" + message.author.id + "`) tarafından sunucudan yasaklandı. Yasaklama sebebi : (`" +reason+ "`)" )
  client.channels.get("529042995769507840").send("**" + member.user.tag + "**" + " (`" + member.id + "`)" + " kullanıcısı , **" + message.author.tag + "** (`" + message.author.id + "`) tarafından sunucudan yasaklandı. Yasaklama sebebi : (`" +reason+ "`)" )
}

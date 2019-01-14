const discord = require("discord.js");
module.exports.run = (client, message, args) => {

let bankisi = message.mentions.users.first()
if(!bankisi) return message.channel.send("Sunucudan yasaklayacağım üyeyi seçmediniz.");
let bansebep = args.slice(1).join(" ")
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bu komudu kullanmak için yetkiniz yok.")
message.guild.member(bankisi).ban(bansebep)
client.channels.get("534411959723098122").send("**" + bankisi.tag + "**" + "(`" + bankisi.id + "`)" + "kullanıcısı , " + message.author.tag + "(`" + message.author.id + "`) tarafından sunucudan yasaklandı. Yasaklama sebebi : (*" +bansebep+ "*)" )

}

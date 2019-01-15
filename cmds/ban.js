const discord = require("discord.js");
module.exports.run = (client, message, args) => {

let bankisi = message.mentions.users.first()
if(!message.member.roles.has("523179624772010004")) return message.channel.send("Bu komudu kullanmak için yetkiniz yok.")
if(!bankisi) return message.channel.send("Sunucudan yasaklayacağım üyeyi seçmediniz.");
let bansebep = args.slice(1).join(" ")

message.channel.send("Başarıyla **" + bankisi.tag + "** (`"+bankisi.id+"`) kullanıcısını sunucudan yasakladım." )
message.guild.member(bankisi).ban(bansebep)
client.channels.get("534411959723098122").send("**" + bankisi.tag + "**" + " (`" + bankisi.id + "`)" + " kullanıcısı , **" + message.author.tag + "** (`" + message.author.id + "`) tarafından sunucudan yasaklandı. Yasaklama sebebi : (`" +bansebep+ "`)" )
client.channels.get("529042995769507840").send("**" + bankisi.tag + "**" + " (`" + bankisi.id + "`)" + " kullanıcısı , **" + message.author.tag + "** (`" + message.author.id + "`) tarafından sunucudan yasaklandı. Yasaklama sebebi : (`" +bansebep+ "`)" )

}

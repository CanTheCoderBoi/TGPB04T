const discord = require("discord.js");
module.exports.run = (client, message, args) => {

let bankisi = message.mentions.members.first()
let baankisi = message.mentions.users.first()
if(!bankisi.bannable) return message.reply(" Bu kişiyi yasaklayamazsınız.")
if(!message.member.roles.has("523179624772010004")) return message.channel.send("Bu komudu kullanmak için yetkiniz yok.")
if(!baankisi) return message.channel.send("Komut kullanımı yanlış (`<kullanıcı>| [Sebep:...]`)");
let bansebep = args.slice(1).join(" ")

message.channel.send("Başarıyla **" + bankisi.user.tag + "** (`"+bankisi.id+"`) kullanıcısını sunucudan yasakladım." )
bankisi.ban(bansebep + "by : " +message.author.tag)
client.channels.get("534411959723098122").send("**" + bankisi.user.tag + "**" + " (`" + bankisi.id + "`)" + " kullanıcısı , **" + message.author.tag + "** (`" + message.author.id + "`) tarafından sunucudan yasaklandı. Yasaklama sebebi : (`" +bansebep+ "`)" )
client.channels.get("529042995769507840").send("**" + bankisi.user.tag + "**" + " (`" + bankisi.id + "`)" + " kullanıcısı , **" + message.author.tag + "** (`" + message.author.id + "`) tarafından sunucudan yasaklandı. Yasaklama sebebi : (`" +bansebep+ "`)" )

}

module.exports.info = {
    DM: false
}

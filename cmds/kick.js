const discord = require("discord.js");
module.exports.run = (client, message, args) => {

    const discord = require("discord.js");
    module.exports.run = (client, message, args) => {
    
    let kickkisi = message.mentions.users.first()
    if(kickkisi.id === message.author.id) return message.channel.send("Smh kendini sunucudan atamazsın ama belki ben atarım <a:jsmeme:528931472288120832>")
    if(!kickkisi.kickable) return message.reply(" Maalesef bu kişi sunucudan atılamayacak kadar havalı.")
    if(!message.member.roles.has("523179624772010004")) return message.channel.send("Bu komudu kullanmak için yetkiniz yok.")
    if(!kickkisi) return message.channel.send("Sunucudan atacağım üyeyi seçmediniz.");
    let kicksebep = args.slice(1).join(" ")
    message.channel.send("Başarıyla **" + kickkisi.tag + "** (`"+kickkisi.id+"`) kullanıcısını sunucudan attım." )
    message.guild.member(kickkisi).kick(message.author.tag + kicksebep)
    client.channels.get("534411959723098122").send("**" + kickkisi.tag + "**" + " (`" + kickkisi.id + "`)" + " kullanıcısı , **" + message.author.tag + "** (`" + message.author.id + "`) tarafından sunucudan atıldı. Atılma sebebi : (`" +kicksebep+ "`)" )
    client.channels.get("529042995769507840").send("**" + kickkisi.tag + "**" + " (`" + kickkisi.id + "`)" + " kullanıcısı , **" + message.author.tag + "** (`" + message.author.id + "`) tarafından sunucudan atıldı. Atılma sebebi : (`" +kicksebep+ "`)" )
    
    }

}

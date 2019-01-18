const discord = require("discord.js");
module.exports.run = (client, message, args) => {
    if (message.channel.id != "531395962904641538") return;
    if(!args[0]) return message.channel.send("Lütfen mesaj kodunu belirtiniz.")
    message.channel.fetchMessage(args[0]).then(msg => {
        let user = client.users.find("tag", msg.embeds[0].author.name);
        if (!user) return message.channel.send("Lütfen mesaj kodunu belirtiniz.")
        msg.react(message.guild.emojis.get(`527600881378787328`))
        user.send("Üzgünüm, Partnerlik başvurunuz yetkililerimiz tarafından gözden geçirilmiş ve onaylanmamıştır. Bazı nedenleri şunlar olabilir:\n Sunucuda bulunan üye azlığı.\nKanallarda aktiflik olmaması.\nSunucu düzeninin karışık olması.\n").catch(err => {
            return message.channel.send(`\`${args[0]}\` reddedildi. Gerekli kişiye bilgilendirme yapılırken hata oluştu.`)    
        })
        return message.channel.send(`\`${args[0]}\` reddedildi. Gerekli kişiye bilgilendirme yapıldı.`)
    })
}



const discord = require("discord.js");
module.exports.run = (client, message, args) => {
    if (message.channel.id != "531395962904641538") return;
    if(!args[0]) return message.channel.send("Lütfen mesaj kodunu belirtiniz.")
    message.channel.fetchMessage(args[0]).then(msg => {
       client.channels.get("530795148242583552").send(msg)
        client.channels.get("530795148242583552").send(msg)
        let user = client.users.find("tag", msg.embeds[0].author.name);
        if (!user) return message.channel.send("Lütfen mesaj kodunu belirtiniz.")
        message.guild.members.get(user.id).addRole(message.guild.roles.get("530794727780646953"));
        msg.react(message.guild.emojis.get(`527600859513618432`));
        user.send("Partnerlik Başvurunuz onaylanmıştır! Lütfen aşağıda belirttiğim metni kopyalayıp kendi sunucunuzda ilgili yere yapıştırınız."+ "```\n**Türk Geliştiriciler Platformu(TGP)**\nKodlamayı seviyorsanız kesinlikle bize katılmalısınız! TGP, Türk yazılımcıları ve geliştiricleri bir araya getirip aralarında bir bağ oluşturmaya dayalı bir sunucudur.\nSunucuda Neler Var ?\n• Kendine özel rol ve puan sistemi.\n• Neredeyse her programlama dili için özel kanallar.\n• Aktif Kitle\n• Discord Botunuzu geliştirmeye yardımcı olacak kişiler\n• Özel emojiler\n• Çekilişler\n\nVe daha fazlası!\n**Hemen Katılmak İçin Tıkla:** https://discord.gg/tRZuCYj```").catch(err => {
            return message.channel.send(`\`${args[0]}\` kabul edildi. Gerekli kişiye bilgilendirme yapılırken hata oluştu.`);
            
        })
        return message.channel.send(`\`${args[0]}\` kabul edildi. Gerekli kişiye bilgilendirme yapıldı.`);
    })
}



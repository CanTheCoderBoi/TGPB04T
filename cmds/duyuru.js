const discord = require("discord.js");
module.exports.run = (client, message, args) => {
   message.delete()
   if (!message.member.roles.has("523180483639771137")) return message.reply("Bunu kullanmak için yetkiniz yok")
   var dtext = args.join(' ')
   if (!dtext) return message.reply('Metin girişi yapılmadı! Lütfen metin giriniz.')

   let duyuruembed = new discord.RichEmbed()
   .setDescription(dtext)
   .setColor(0x00FFFF)
   message.channel.send("@Ping")
   message.channel.send(duyuruembed);
}

module.exports.info = {
   DM: false
}

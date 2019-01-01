const discord = require("discord.js");
module.exports.run = (client, message, args) => {


        message.delete()
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bunu kullanmak için yetkiniz yok")
        var dtext = message.content.split(' ').slice(1).join(' ')
        if(!dtext) return message.reply('Metin girişi yapılmadı. Lütfen metin giriniz.')
        
        let duyuruembed = new discord.RichEmbed()
        duyuruembed.setDescription(dtext)
        
        duyuruembed.setColor(0x00FFFF)       
     message.channel.send("@here")
        message.channel.send(duyuruembed);        
        }
      

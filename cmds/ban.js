const discord = require("discord.js");
module.exports.run = (client, message, args) => {
    let hedef = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let sebep = args.slice(1).join(' ');
    if (!message.member.roles.has('523179624772010004')) return message.channel.send('🔒 Bu komudu kullanmak için yetkiniz yok. ');
    if (!hedef) return message.channel.send("Komut kullanımında eksik argüman girildi. (`user:<user>| [sebep...]`)");
    if(hedef.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Seçilen üye yasaklanamaz.")

    

    let bembed = new discord.RichEmbed()

        .setColor('RANDOM')
        .setThumbnail(hedef.user.avatarURL)
        .addField('Banlanan üye', `${hedef.user.username} (${hedef.user.id})`)
        .addField('Banlayan moderatör', `${message.author.username} (${message.author.id})`)
        .addField('Komudun kullanıldığı kanal', message.channel)
        .addField('Ban sebebi', sebep)      


    message.channel.send(`<a:jsok:531920639968280605> ${hedef.user.username} adlı kullanıcı sunucudan yasaklandı.(\`${sebep}\`)`);

    hedef.ban(sebep);

    client.channels.get("534411959723098122").send(bembed)

  
    
}

module.exports.info = {
    DM: false
}

const discord = require("discord.js");
module.exports.run = (client, message, args) => {
    let hedef = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let sebep = args.slice(1).join(' ');
    if (!message.member.roles.has('523179624772010004')) return message.channel.send(':lock: Bu komudu kullanmak için yetkiniz yok.');
    if (!hedef) return message.reply("Komut kullanımı yanlış. (`user:<user>| [sebep...]`)");
    

    

    let bembed = new discord.RichEmbed()

        .setColor('RANDOM')

        .setThumbnail(hedef.user.avatarURL)

        .addField('Banlanan üye', `${hedef.user.username} (${hedef.user.id})`)

        .addField('Banlayan moderatör', `${message.author.username} (${message.author.id})`)

        .addField('Banlama zamanı', message.createdAt)

        .addField('Komudun kullanıldığı kanal', message.channel)

        .addField('Ban sebebi', sebep)
        .setFooter('Banlanan üye hakkında', hedef.user.displayAvatarURL);


    message.channel.send(`${hedef.user.username} adlı kullanıcı sunucudan yasaklandı.`);

    hedef.ban(sebep);

    client.channels.get("534411959723098122").send(bembed)

  
    
}

module.exports.info = {
    DM: false
}

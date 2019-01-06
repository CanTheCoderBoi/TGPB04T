const discord = require("discord.js");
module.exports.run = (client, message, args) => {
    if(!args[0]) return message.channel.send("Lütfen önerinizi yazarak komutu kullanınız `?öner <öneri>`");
    let oneriEmbed = new discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setColor(0x7289DA)
        .setTitle("Yeni öneri!")
        .setFooter("Önerileri oylamak için aşağıdaki tepki butonlarını kullanınız.")
        .setTimestamp()
        .setDescription(args.join(" "))
    message.guild.channels.get("531489438186864661").send(oneriEmbed).then(async msg => {
        await msg.react(message.guild.emojis.get("527600859513618432"));
        msg.react(message.guild.emojis.get("527600881378787328"));
    })
}

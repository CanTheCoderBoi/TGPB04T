const discord = require("discord.js");
module.exports.run = (client, message, args) => {
    let embed = new discord.RichEmbed();
    embed.setAuthor(message.author.tag, message.author.avatarURL);
    embed.setTimestamp()
    if (args.length == 0) return message.reply("?docs <class> [function/definer] *Büyük/Küçük harfe dikkat ediniz!*")
    if(args.length>1) {
        embed.setTitle(`${args[0]}.${args[1]} hakkında bilgi:`)
        embed.setDescription(`[Tıkla](https://discord.js.org/#/docs/main/stable/class/${args[0]}?scrollTo=${args[1]})`)
        embed.setThumbnail("https://discord.js.org/static/logo-square.png")
        embed.setFooter("Eğer sayfa boş ise Büyük/Küçük harfe dikkat ederek tekrar yazınız.")
    } else {
        embed.setTitle(`${args[0]} hakkında bilgi:`)
        embed.setDescription(`[Tıkla](https://discord.js.org/#/docs/main/stable/class/${args[0]})`)
        embed.setThumbnail("https://discord.js.org/static/logo-square.png")
        embed.setFooter("Eğer sayfa boş ise Büyük/Küçük harfe dikkat ederek tekrar yazınız.")
        return message.channel.send(embed)
    }
}
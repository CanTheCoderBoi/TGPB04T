const discord = require("discord.js");
module.exports.run = (client, message, args) => {

    let basvuruyer = args[0]
    let basvurumesaj = args.slice(1).join(" ")

    if (!basvuruyer || !["partner", "geliştirici", "içerik"].includes(basvuruyer.toLowerCase())) return message.reply("Hangi dalda başvuracağınızı seçmediniz. Kullanım : ?başvur içerik/partner/geliştirici <başvuru mesaj> ")
    if (!basvurumesaj) return message.reply("Başvuru mesajınızı girmediniz. **Kullanım : ?başvur içerik/partner/geliştirici <başvuru mesaj>**")
    message.delete()
    message.reply("Başvurunuz eklendi. Yakın zamanda size özelden mesaj atacağım.")
    let embed = new discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(basvurumesaj)
        .setFooter(basvuruyer.toLowerCase())
        .setTimestamp();
    switch (basvuruyer.toLowerCase()) {
        case "partner":
            embed.setTitle("Partner Başvurusu")
            break;
        case "içerik":
            embed.setTitle("İçerik Üretici Başvurusu")
            break;
        case "geliştirici":
            embed.setTitle("Geliştirici Başvurusu")
            break;
    }
    client.channels.get("531395962904641538").send(embed)

}

module.exports.info = {
    DM: true
}
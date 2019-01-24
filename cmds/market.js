const discord = require("discord.js");
module.exports.run = (client, message, args) => {
    let marketembed = new discord.RichEmbed()
    marketembed.setAuthor(message.author.tag, message.author.avatarURL);
    marketembed.setTitle("TGP Market")
    marketembed.addField("Regular", "<@&529706013905911811> rolünü kazanırsınız. Rolde ekstradan nick değişme hakkı sunulur. \nFiyat : 30 <:tgpcoin:530810516629618718> ")
    marketembed.addField("Veteran", "<@&529706657605877772> rolünü kazanırsınız. \nFiyat : 60 <:tgpcoin:530810516629618718> ")
    marketembed.addField("TGP Specialist", "<@&529047857500520458> rolünü kazanırsınız. \nFiyat : 100 <:tgpcoin:530810516629618718> ")
    marketembed.addField("Proficient", "<@&523181300857962506> rolünü kazanırsınız. \nFiyat : 200 <:tgpcoin:530810516629618718> ")
    marketembed.addField("<:tgpcoin:530810516629618718> Katlayıcı", "Bu ürünü alarak her puan kazandığınızda, kazandığınızın iki katını kazanırsınız.\nFiyat : 75 <:tgpcoin:530810516629618718>")
    marketembed.setColor("#ff599c")
    marketembed.setFooter("Markette sorun olursa C4Navar#1337 ' a mesaj atınız.")
    marketembed.setTimestamp()
    message.channel.send(marketembed)

}

module.exports.info = {
    DM: true
}
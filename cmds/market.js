const discord = require("discord.js");
module.exports.run = (client, message, args) => {
let marketembed = new discord.RichEmbed()
marketembed.setAuthor(message.author.tag, message.author.avatarURL);
marketembed.setTitle("TGP Market")
marketembed.addField("Regular","<@&529706013905911811> rolünü kazanırsınız. Rolde ekstradan nick değişme hakkı sunulur. Fiyat : 15 coin. ")
marketembed.addField("Veteran","<@&529706657605877772> rolünü kazanırsınız. Fiyat : 30 coin. ")
marketembed.addField("TGP Specialist","<@&529047857500520458> rolünü kazanırsınız. Fiyat : 60 coin. ")
marketembed.addField("Proficient","<@&523181300857962506> rolünü kazanırsınız. Fiyat : 100 coin. ")
marketembed.setColor("#ff599c")
marketembed.setFooter("Markette sorun olursa C4Navar#1337 ' a mesaj atınız.")
 marketembed.setTimestamp()
message.channel.send(marketembed)

}
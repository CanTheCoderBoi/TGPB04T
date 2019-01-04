const discord = require("discord.js");
module.exports.run = (client, message, args) => {
let marketembed = new discord.RichEmbed()
marketembed.setAuthor(message.author.tag, message.author.avatarURL);
marketembed.setTitle("TGP Market")
marketembed.addField("<@&529706013905911811>","<@&529706013905911811>")
marketembed.setFooter("yoo")
message.channel.send(marketembed)

}

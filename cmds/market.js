const discord = require("discord.js");
module.exports.run = (client, message, args) => {
let marketembed = new discord.RichEmbed()
marketembed.setTitle("Deneme")
marketembed.addField("deneme","deneme2")
marketembed.setFooter("yoo")
message.channel.send(marketembed)

}

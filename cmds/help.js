const discord = require("discord.js");
module.exports.run = (client, message, args) => {
    let helpembed = new discord.RichEmbed();
    helpembed.setAuthor(message.author.tag, message.author.avatarURL);
    helpembed.setTimestamp()
    helpembed.setTitle("Test1")
    helpembed.addField("Deneme","Deneme")
    helpembed.setThumbnail("https://discord.js.org/static/logo-square.png")
    helpembed.setFooter("Footer")
    message.channel.send(helpembed)
    } 

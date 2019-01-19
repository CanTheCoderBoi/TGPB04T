const discord = require("discord.js");
const mongoose = require("mongoose");
const schemas = require("../schemas.js")
module.exports.run = (client, message, args) => {
    let points;
    let pointEmbed = new discord.RichEmbed().setAuthor(message.author.tag, message.author.avatarURL).setFooter("Başkalarına yardım ederek puan kazanabilirsin!", client.user.avatarURL).setColor(0xffff00).setThumbnail("https://cdn.discordapp.com/attachments/529654481718345728/530798982948061195/Untitled.png").setTitle("Puanların:")
    schemas.userPoints.findOne({userID: message.author.id}, (err, user) => {
        if(!user) {
            let newUser = new schemas.userPoints({userID: message.author.id})
            pointEmbed.setDescription(0)
            newUser.save()
        } else {
            pointEmbed.setDescription(user.points);
        }
        return message.channel.send(pointEmbed);
    })
}

module.exports.info = {
    DM: true
}
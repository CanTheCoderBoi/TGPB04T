const discord = require("discord.js");
const mongoose = require("mongoose");
const schemas = require("../schemas.js")
const delayedUsers = [];
module.exports.run = (client, message, args) => {
    if (delayedUsers.includes(message.author.id)) return message.reply("Son 5dk içerisinde birine teşekkür etmişsin! Lütfen daha sonra tekrar dene.").then(msg=>{msg.delete(8000)})
    
    let member = message.mentions.members.first();
    if (!member || member == message.member || member.user.bot) return message.reply("Lütfen teşekkür etmek için birini etiketle ve tekrar dene.").then(msg => {msg.delete(10000)});
    schemas.userPoints.findOne({ userID: member.id }, (err, user) => {
        if (!user) {
            let newUser = new schemas.userPoints({ userID: member.id, points: 1})
            newUser.save()
        } else {
            user.points += 1;
            user.save();
        }
        message.channel.send(`**${message.author.tag}** kullanıcısı **${member.user.tag}** kullanıcısına teşekkür etti! *+1 puan*`);
        delayedUsers.push(message.author.id);
    })
    setTimeout(() => {
        delayedUsers.splice(delayedUsers.indexOf(message.author.id), 1);
    }, 300000);
}

module.exports.info = {
    DM: false
}
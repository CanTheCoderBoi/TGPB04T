const Discord = require("discord.js");
const shortcuts = require("../utils/shortcuts.js");
const schemas = require("../schemas.js")

module.exports.run = (client, message, args) => {
    if(!client.owners.includes(message.author.id)) return;
    let member = shortcuts.getMember(message, args);
    if (!member) return message.reply("Hmm");
    if (Number(args[0])) return message.reply("Hmm");
    schemas.userPoints.findOne({userID: member.id}, (err, Dmember) => {
        Dmember.points += parseInt(args[0]);
        Dmember.save();
        return message.channel.send(`:ok_hand: **${member.user.tag}** + ${args[0]} = ${Dmember.points}`);
    })
}

module.exports.info = {
    DM: false
}
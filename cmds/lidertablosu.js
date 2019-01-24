const Discord = require("discord.js");
const shortcuts = require("../utils/shortcuts.js");
const schemas = require("../schemas.js")

module.exports.run = (client, message, args) => {
    schemas.userPoints.find({}).sort('userID').limit(10).exec((err, results) => {
        let leaderBoardEmbed = new Discord.RichEmbed().setTitle("Lider Tablosu:").setTimestamp().setFooter(client.user.tag, client.user.avatarURL).setColor(0x9f6f78);
        let text = [];
        for (let i = 0; i < results.length; i++) {
            text.push(`${i}. <@${results[i].userID}> | ${results[i].points}<:tgpcoin:530810516629618718>`);
        }
        leaderBoardEmbed.setDescription(`${text.join("\n")}`);
        message.channel.send(leaderBoardEmbed);
    })
}

module.exports.info = {
    DM: false
}
const Discord = require("discord.js");
const shortcuts = require("../utils/shortcuts.js");
const schemas = require("../schemas.js")
const {table} = require("table");
module.exports.run = (client, message, args) => {
    let data, output, config;
    config = config = {
        border: {
            topBody: ``,
            topJoin: ``,
            topLeft: ``,
            topRight: ``,

            bottomBody: ``,
            bottomJoin: ``,
            bottomLeft: ``,
            bottomRight: ``,

            bodyLeft: `│`,
            bodyRight: `│`,
            bodyJoin: `│`,

            joinBody: ``,
            joinLeft: ``,
            joinRight: ``,
            joinJoin: ``
        }
    };
    data = [["Sıralama", "Kullanıcı", "Puanı"]]
    schemas.userPoints.find({}).sort('-points').limit(10).exec((err, results) => {
        let leaderBoardEmbed = new Discord.RichEmbed().setTitle("Lider Tablosu:").setTimestamp().setFooter(client.user.tag, client.user.avatarURL).setColor(0x9f6f78);
        for (let i = 0; i < results.length; i++) {
            data.push([`#${ i+ 1}`, `${message.guild.members.get(results[i].userID).tag}`,`${ results[i].points }<:tgpcoin:530810516629618718>`]);
        }
        leaderBoardEmbed.setDescription(table(data, config));
        message.channel.send(leaderBoardEmbed);
    })
}

module.exports.info = {
    DM: false
}
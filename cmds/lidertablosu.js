const Discord = require("discord.js");
const shortcuts = require("../utils/shortcuts.js");
const schemas = require("../schemas.js")
module.exports.run = (client, message, args) => {
    let data = []
    schemas.userPoints.find({}).sort('-points').limit(10).exec((err, results) => {
        let leaderBoardEmbed = new Discord.RichEmbed().setTitle("Lider Tablosu:").setTimestamp().setFooter(client.user.tag, client.user.avatarURL).setColor(0x9f6f78);
        for (let i = 0; i < results.length; i++) {
            data.push(`#${ i+ 1} ${message.guild.members.get(results[i].userID).user.tag.split("#")[0]} | ${ results[i].points } <:tgpcoin:530810516629618718>`);
        }
        leaderBoardEmbed.setDescription(data.join("\n"));
        message.channel.send(leaderBoardEmbed);

    })
    
    console.log("Even weird")
}

module.exports.info = {
    DM: false
}

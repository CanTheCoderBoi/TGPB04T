const discord = require("discord.js");
module.exports.run = (client, message, args) => {
    if (message.channel.id != "531395962904641538") return;
    if (!args[0]) return message.channel.send("Lütfen mesaj kodunu belirtiniz.")
    
    message.channel.fetchMessage(args[0]).then( async msg => {

        let user = client.users.find("tag", msg.embeds[0].author.name);
        if (!user) return message.channel.send("Lütfen mesaj kodunu belirtiniz.")
        
    })
}


module.exports.info = {
    DM: true
}

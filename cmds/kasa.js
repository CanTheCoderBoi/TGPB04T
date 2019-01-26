const Discord = require("discord.js");
const mongoose = require("mongoose");
const schemas = require("../schemas.js");
const items = require("../items.json");
const shortcuts = require("../utils/shortcuts.js")
module.exports.run = (client, message, args) => {
    schemas.userPoints.findOne({ userID: message.author.id }).then(user => {
        if (!user) {
            let newUser = new schemas.userPoints({ userID: message.author.id })
            newUser.save()
            return message.channel.send("Üzgünüm ama yeterli miktarda puanınız bulunmamaktadır.")
        } else {
            let item = args.join(" ").toLowerCase().toString();
            if (!items.kasalar[item]) return message.reply("Üzgünüm ama böyle bir kasa bulunmamaktadır.");
            if (user.points < items.kasalar[item].price) return message.channel.send("Üzgünüm ama yeterli miktarda puanınız bulunmamaktadır.");
            user.points -= items.kasalar[item].price;
            shortcuts.kasaAc(message, item);

        }
    })
}

module.exports.info = {
    DM: false
}
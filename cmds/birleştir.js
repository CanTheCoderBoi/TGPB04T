const Discord = require("discord.js");
const mongoose = require("mongoose");
const schemas = require("../schemas.js");
const items = require("../items.json");
const shortcuts = require("../utils/shortcuts.js")
module.exports.run = async (client, message, args) => {
    let role = args.join(" ").toLowerCase();
    if(!items.crafting[role]) return message.reply("Rol ismini doğru yazdığına emin misin?");
    schemas.userPoints.findOne({userID: message.author.id}).then( async user => {
        if (!user) {
            let newUser = new schemas.userPoints({ userID: message.author.id })
            newUser.save()
            return message.reply("Envanterinizde şema bulunmamaktadır.");
        }
        if (!user.inv[0]) return message.reply("Envanterinizde şema bulunmamaktadır.");
        let crafted = await shortcuts.removeItem(message.author, role, items.crafting[role]);
        if (!crafted) return message.reply("Envanterinizde bu şemadan yeteri kadar bulunmamaktadır.");
        if (crafted) {
            // message.member.addRole(message.guild.roles.find(`name`, role));
            return message.channel.send(`Birleştirme başarılı! \`${role}\` rolünü ${items.crafting[role]} şema karşılığında birleştirdin!`);
        }
    })
}
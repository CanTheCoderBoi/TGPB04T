const Discord = require("discord.js");
const mongoose = require("mongoose");
const schemas = require("../schemas.js");
const items = require("../items.json");
const shortcuts = require("../utils/shortcuts.js")
module.exports.run = async (client, message, args) => {
    let role = args.join(" ").toLowerCase();
    if(!items.crafting[role]) return message.reply("Rol ismini doğru yazdığına emin misin?");
    schemas.userPoints.findOne({userID: message.author.id}).then(user => {
        if (!user) {
            let newUser = new schemas.userPoints({ userID: message.author.id })
            newUser.save()
            return message.reply("Envanterinizde şema bulunmamaktadır.");
        }
        if (!user.inv[0]) return message.reply("Envanterinizde şema bulunmamaktadır.");
        let crafted = false;
        await user.inv.map(item => {
            let element = item.split(" ");
            if(elemet[1] == role) {
                if (parseInt(element[0]) >= items.crafting[role]) {
                    if (parseInt(element[0]) - items.crafting[role] < 0) {
                        user.inv.splice(user.inv.indexOf(item), 1);
                        crafted = true;
                    } else {
                        user.inv.splice(user.inv.indexOf(item), 1);
                        user.inv.push(`${parseInt(element[0]) - items.crafting[role]} ${element.slice(1).join(" ")}`);
                        crafted = true;
                    }
                }
            }       
        })
        if (!crafted) return message.reply("Envanterinizde bu şemadan yeteri kadar bulunmamaktadır.");
        if (crafted) {
            user.save();
            message.member.addRole(message.guild.roles.find(`name`, role));
            return message.channel.send(`Birleştirme başarılı! \`${role}\` rolünü ${items.crafting[role]} şema karşılığında birleştirdin!`)
        }
    })
}
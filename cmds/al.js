const discord = require("discord.js");
const mongoose = require("mongoose");
const schemas = require("../schemas.js")

module.exports.run = (client, message, args) => {
    schemas.userPoints.findOne({ userID: message.author.id }).then(user => {
        if (!user) {
            let newUser = new schemas.userPoints({ userID: message.author.id })
            newUser.save()
            return message.channel.send("Üzgünüm ama yeterli miktarda puanınız bulunmamaktadır.")
        } else {
            let item = args.join(" ").toLowerCase().toString();
            switch (item) {
                case "regular" || "1":
                    if (user.points < 15) return message.channel.send("Üzgünüm ama yeterli miktarda puanınız bulunmamaktadır.")
                    let regular = message.guild.roles.get("529706013905911811")
                    user.points -= 15;
                    message.member.addRole(regular);
                    message.reply("Satın Alım Başarılı! 15 <:tgpcoin:530810516629618718> karşılığında \`Regular\` Rolünü satın aldın!")
                    user.save()
                    break;
                case "veteran" || "2":
                    if (user.points < 30) return message.channel.send("Üzgünüm ama yeterli miktarda puanınız bulunmamaktadır.")
                    let veteran = message.guild.roles.get("529706657605877772")
                    user.points -= 30;
                    message.member.addRole(veteran);
                    message.reply("Satın Alım Başarılı! 30 <:tgpcoin:530810516629618718> karşılığında \`Veteran\` Rolünü satın aldın!")
                    user.save()
                    break;
                case "tgp specialist" || "3" || "specialist":
                    if (user.points < 60) return message.channel.send("Üzgünüm ama yeterli miktarda puanınız bulunmamaktadır.")
                    let specialist = message.guild.roles.get("529047857500520458")
                    user.points -= 60;
                    message.member.addRole(specialist);
                    message.reply("Satın Alım Başarılı! 60 <:tgpcoin:530810516629618718> karşılığında \`TGP Specialist\` Rolünü satın aldın!")
                    user.save()
                    break;
                case "proficient" || "4":
                    if (user.points < 100) return message.channel.send("Üzgünüm ama yeterli miktarda puanınız bulunmamaktadır.")
                    let proficient = message.guild.roles.get("523181300857962506")
                    user.points -= 100;
                    message.member.addRole(proficient);
                    message.reply("Satın Alım Başarılı! 100 <:tgpcoin:530810516629618718> karşılığında \`Proficient\` Rolünü satın aldın!")
                    user.save()
                    break;
                default:
                    return message.channel.send("Üzgünüm ama böyle bir rol bulunmamaktadır ya da satın alıma açık değildir.")
                    break;
            }

        }
    })
}
const Discord = require("discord.js");
const mongoose = require("mongoose");
const schemas = require("../schemas.js");
const items = require("../items.json");
const shortcuts = require("../utils/shortcuts.js")
module.exports.run = async (client, message, args) => {
    message.delete()
    let advert = await schemas.sales.findOne({messageID: args[0]})
    if (!advert) return message.reply("Doğru ID'yi girdiğine emin misin?").then(msg => {msg.delete(10000)});
    let user = await schemas.userPoints.findOne({messageID: message.author.id});
    if (user.points < advert.points) return message.reply("Satın alımı gerçekleştirmek için yeterli puanınız bulunmamaktadır.").then(msg => { msg.delete(10000) });
    message.guild.channels.get("538717078958637056").fetchMessage(advert.messageID).delete()
    user.points -= advert.points;
    shortcuts.removeItem(client.users.get(advert.userID), advert.product.split(" ")[0], advert.quantity);
    shortcuts.addItem(message.author, advert.product.split(" ")[0], advert.quantity);
    message.reply(`İşlem Başarılı! ${advert.points}<:tgpcoin:530810516629618718> karşılığında ${advert.quantity} tane ${advert.product} aldın!`);
}
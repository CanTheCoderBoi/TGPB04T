const Discord = require("discord.js");
const mongoose = require("mongoose");
const schemas = require("../schemas.js");
const items = require("../items.json");
const shortcuts = require("../utils/shortcuts.js")
module.exports.run = async (client, message, args) => {
    message.delete()
    let item = args[0] + " " + args[1];
    if (!items.crafting[args[0]]) return message.reply("Hatalı şema girdiniz. Lütfen tekrar deneyiniz.").then(msg => { msg.delete(5000) });
    if (!parseInt(args[2])) return message.reply("Hatalı miktar girdiniz. Lütfen tekrar deneyiniz.").then(msg => { msg.delete(5000) });
    if (!parseInt(args[3])) return message.reply("Hatalı puan girdiniz. Lütfen tekrar deneyiniz.").then(msg => { msg.delete(5000) });
    if (!shortcuts.checkItem(message.author, args[0], parseInt(args[2]))) return message.reply("Miktarı doğru girdiğinizden emin olunuz.").then(msg => { msg.delete(5000) });
    let msg = await message.guild.channels.get("538717078958637056").send("Yeni Satış!");
    let saleEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .addField("Satılık:", `${args[3]} tane ${item}`, 1)
        .addBlankField(1)
        .addField("Karşılık:", `${args[3]}<:tgpcoin:530810516629618718>`,1)
        .addField("ID", msg.id)
        .setColor(0x00ff00)
        .setTimestamp();
    msg.edit(saleEmbed);
    let newSale = new schemas.sales({
        userID: message.author.id,
        product: item,
        quantity: parseInt(args[2]),
        points: parseInt(args[3]),
        messageID: msg.id,
    })
    newSale.save();
}
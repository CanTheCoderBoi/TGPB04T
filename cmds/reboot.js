const discord = require("discord.js");
module.exports.run = (client, message, args) => {

    if(message.member.hasPermission("ADMINISTRATOR")) {
    
    message.channel.send('<:onay111:528931634586714132> Başarıyla yeniden başlattım.').then ((message) => {
    
    console.log('Bot yeniden başladı');
    process.exit(0);
    
    });
    } else {
    
    message.channel.send('Gerekli izine sahip değilsin.');
    }
    }
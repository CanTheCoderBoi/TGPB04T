const discord = require("discord.js");
module.exports.run = (client, message, args) => {

    if(message.member.hasPermission("ADMINISTRATOR")) {
    
    message.channel.send('Yeniden başlatılıyor...').then ((message) => {
    
    console.log('Başarıyla yeniden başlattım.');
    process.exit(0);
    
    });
    } else {
    
    message.channel.send('Gerekli izine sahip değilsin.');
    }
    }

const discord = require("discord.js");
module.exports.run = (client, message, args) => {
    if (args.length == 0) {
    let helpembed = new discord.RichEmbed();
    helpembed.setAuthor(message.author.tag, message.author.avatarURL);
    helpembed.addField("<help class","Class bilgisini gösterir")
    helpembed.setThumbnail("https://discord.js.org/static/logo-square.png")
    helpembed.setFooter("Komutlar ile ilgili daha fazla bilgi almak için belirtilen komudu giriniz")
    message.channel.send(helpembed)
    }
    if(args.length>0){
    let helparg = args[0]
    if(helparg === "class") {
        message.channel.send("That works beep boop");
        
    
    }
    }
    } 

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
        let classembed = new Discord.RichEmbed()
        classembed.setAuthor(message.author.tag, message.author.avatarURL);
        classembed.setTitle("yo")
        classembed.setDescription("hmm");
        classembed.setFooter("Komutlar çalışmıyorsa büyük/küçük harf uyumuna dikkat ediniz.")
        message.channel.send(classembed);        
    }
        
        
        
        
        
    }
    
    
    
    
    
    
    
    } 

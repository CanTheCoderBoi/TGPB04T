const discord = require("discord.js");
module.exports.run = (client, message, args) => {
    if (args.length == 0) {
    let helpembed = new discord.RichEmbed();
    helpembed.setAuthor(message.author.tag, message.author.avatarURL);
    helpembed.addField("?docs <alt-başlık>","Belirlenen dosyanın anlatımına götürür. Örnek olarak class başlığının alt başlığı olan Attachments i görmek için ?docs Attachments")
    helpembed.addField("?yardım class","Class başlığının alt başlıklarını gösterir.")
    helpembed.addField("?davet","Sunucu davet linkini gösterir")
    helpembed.addField("Puanlama ve market sistemi "," Sunucumuzda puan ve market sistemi vardır. Birisi size yardım ettiğinde ona teşekkür etmek için ?ty @etiket komudunu kullanınız. Puanlarınıza bakmak için ?puan ve markete gitmek için ?market komudunu kullanınız.")
    helpembed.setThumbnail("https://discord.js.org/static/logo-square.png")
    helpembed.setFooter("Komutlar ile ilgili daha fazla bilgi almak için belirtilen komudu giriniz")
    helpembed.setColor(0xFF8000)    
    message.channel.send(helpembed)
    }
    if(args.length>0){
    let helparg = args[0]
    
    if(helparg === "class") {
        let classembed = new discord.RichEmbed()
        classembed.setAuthor(message.author.tag, message.author.avatarURL);
        classembed.setTitle("Class komutları: ")
        classembed.setDescription("Attachment  CategoryChannel  Channel  Client  ClientUser  ClientUserChannelOverride  ClientUserGuildSettings  ClientUserSettings  Collection  Collector  DiscordAPIError  DMChannel  Emoji  EvaluatedPermissions  Game  GroupDMChannel  Guild  GuildAuditLogs  GuildAuditLogsEntry  GuildChannel  GuildMember  Invite  Message  MessageAttachment  MessageCollector  MessageEmbed  MessageEmbedAuthor  MessageEmbedField  MessageEmbedFooter  MessageEmbedImage  MessageEmbedProvider  MessageEmbedThumbnail  MessageEmbedVideo  MessageMentions  MessageReaction  OAuth2Application  PartialGuild  PartialGuildChannel  PermissionOverwrites  Permissions  Presence  ReactionCollector  ReactionEmoji  RichEmbed  RichPresenceAssets  Role  Shard  ShardClientUtil  ShardingManager  SnowflakeUtil  StreamDispatcher  TextChannel  User  UserConnection  UserProfile  Util  VoiceBroadcast  VoiceChannel  VoiceConnection  VoiceReceiver  VoiceRegion  VolumeInterface  Webhook  WebhookClient  ");
        classembed.setFooter("Komutlar çalışmıyorsa büyük/küçük harf uyumuna dikkat ediniz.")
        classembed.setColor(0x8000ff)
        message.channel.send(classembed);        
    }
        
        
        
        
        
    }
    
    
    
    
    
    
    
    } 

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
        classembed.addField("Alfabetik sıraya göre class komutları","Attachment  CategoryChannel  Channel  Client  ClientUser  ClientUserChannelOverride  ClientUserGuildSettings  ClientUserSettings  Collection  Collector  DiscordAPIError  DMChannel  Emoji  EvaluatedPermissions  Game  GroupDMChannel  Guild  GuildAuditLogs  GuildAuditLogsEntry  GuildChannel  GuildMember  Invite  Message  MessageAttachment  MessageCollector  MessageEmbed  MessageEmbedAuthor  MessageEmbedField  MessageEmbedFooter  MessageEmbedImage  MessageEmbedProvider  MessageEmbedThumbnail  MessageEmbedVideo  MessageMentions  MessageReaction  OAuth2Application  PartialGuild  PartialGuildChannel  PermissionOverwrites  Permissions  Presence  ReactionCollector  ReactionEmoji  RichEmbed  RichPresenceAssets  Role  Shard  ShardClientUtil  ShardingManager  SnowflakeUtil  StreamDispatcher  TextChannel  User  UserConnection  UserProfile  Util  VoiceBroadcast  VoiceChannel  VoiceConnection  VoiceReceiver  VoiceRegion  VolumeInterface  Webhook  WebhookClient");
        classembed.setFooter("Komutlar çalışmıyorsa büyük/küçük harf uyumuna dikkat ediniz.")
        message.channel.send(classembed);        
    }
        
        
        
        
        
    }
    
    
    
    
    
    
    
    } 

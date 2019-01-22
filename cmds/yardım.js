const discord = require("discord.js");
module.exports.run = (client, message, args) => {
    let helparg = args[0];
    
    if (!helparg) {
    let sembed = new discord.RichEmbed();
    sembed.setAuthor(message.author.tag, message.author.avatarURL);
        sembed.addField("[1] Moderasyon"," Moderatör+ Role sahip olan kişiler görüntüleyebilir. Kullanım : `?yardım moderasyon` ya da `?yardım 1`")
        sembed.addField("[2] Market","Sunucumuzdaki teşekkür ve market sistemi hakkında bilgi verir. Kullanım : `?yardım market` ya da `?yardım 2`")
        sembed.addField("[3] Genel","Sunucudaki genel olarak kullanılabilen komutları gösterir. Kullanım : `?yardım genel` ya da `?yardım 3`")
        sembed.addField("[4] Kodlama"," Kodlama ile ilgili olan komutları gösterir. Kullanım : `?yardım kodlama` ya da `?yardım 4`")
    sembed.setColor(0x8000ff)
    message.channel.send(sembed)
    }
    
    
    if(helparg.toLowerCase() === "moderasyon" || helparg == 1){
    if(!message.member.roles.has("523179624772010004")) return message.reply("Moderatör+ rolüne sahip olmadığınız için bu komut listesini görüntüleyemezsiniz.")
    let modembed = new discord.RichEmbed();
    modembed.setAuthor(message.author.tag, message.author.avatarURL);
        modembed.addField("Sunucudan yasaklama / banlama","`?ban @üye` sebep komudu ile sunucudan üye yasaklayabilirsiniz.")
        modembed.addField("Sunucudan atma / kickleme ","`?kick @üye` sebep komudu ile sunucudan üye atabilirsiniz.")
        modembed.addField("Üye muteleme / susturma","`.mute @üye` sebep komudu ile sunucuda bir kişiyi susturabilirsiniz. (TGP Bot için yapılacaktır..)")
    modembed.setFooter("Komutlarda sorun olursa veya daha detaylı bilgi için yetkililere ulaşınız.")
    modembed.setColor(0x8000ff)
    message.channel.send(modembed)
    }

    if (helparg.toLowerCase() === "market" || helparg == 2){
    let markembed = new discord.RichEmbed();
    markembed.setAuthor(message.author.tag, message.author.avatarURL);
        markembed.addField("Teşekkür komudu","Bir kullanıcıya teşekkür etmek için `?ty @üye` komudunu kullanınız. Unutmayın, teşekkür komudunu her 5 dakikada bir kullanabilirsiniz.")
        markembed.addField("Puan kontrol","`?puan` komudu ile sahip olduğunuz <:tgpcoin:530810516629618718> leri görüntüleyebilirsiniz.")
        markembed.addField("Market","Sahip olduğunuz puanları harcamak için güzel bir mağazamız var. `?market` komudu ile bu mağazaya göz atın!")
        markembed.addField("Rol satın alma","Markette bulunan rollerden birini almak için `?al <rol adı>`. Örnek kullanım: `?al Proficient`")
    markembed.setFooter("Komutlarda sorun olursa veya daha detaylı bilgi için yetkililere ulaşınız.")
    markembed.setColor(0x8000ff)
    message.channel.send(markembed)
    }

    if (helparg.toLowerCase() === "genel" || helparg == 3){
    let genelembed = new discord.RichEmbed();  
    genelembed.setAuthor(message.author.tag, message.author.avatarURL);
        genelembed.addField("Başvur ","Sunucu Partneri ve İçerik / Bot Üreticileri Rolleri için başvurularınızı artık `?başvur <partner/içerik/geliştirici> <mesaj>`  komutuyla alıyoruz. <@529333893954797588>'a DM'den başvurunuzu yaptığınız zaman, başvurunuz önce yetkili üyelerimiz arasında kontrol ediliyor, daha sonra ise gerekli işlemler yapılıyor. Daha fazla bilgi için <#531498282149478410>")
        genelembed.addField("Davet","`?davet` komudu ile kalıcı davet linkini görüntüleyebilirsiniz.")
        genelembed.addField("Linkler","`?linkler` komudu ile sunucumuzun bağlı olduğu platformların linklerini görüntüleyebilirsiniz.")
        genelembed.addField("Öner","`?öner <mesaj>` komudunu <#529031030636806144> kanalına girerek sunucumuz için öneri/tavsiyede bulunabilirsiniz.")
    genelembed.setFooter("Komutlarda sorun olursa veya daha detaylı bilgi için yetkililere ulaşınız.")
    genelembed.setColor(0x8000ff)
    message.channel.send(genelembed)
    }

    if (helparg.toLowerCase() === "kodlama" || helparg == 4){
    let kodlamaembed = new discord.RichEmbed();  
    kodlamaembed.setAuthor(message.author.tag, message.author.avatarURL);
        kodlamaembed.addField("Dokümanlar","Belirlenen dosyanın anlatımına götürür. Kullanım : `?docs <alt-başlık>` .  Örnek olarak class başlığının alt başlığı olan Attachments i görmek için ?docs Attachments")
        kodlamaembed.addField("Başlıklar", "Şu anda belirli olan başlığımız class başlığıdır. Bu başlığın alt-başlıklarını görüntülemek için: `?yardım class`")
    kodlamaembed.setFooter("Komutlarda sorun olursa veya daha detaylı bilgi için yetkililere ulaşınız.")
    kodlamaembed.setColor(0x8000ff)
    message.channel.send(kodlamaembed)
    }

    if(helparg.toLowerCase() === "class") {
    let classembed = new discord.RichEmbed();
    classembed.setTitle("Class başlığının alt-başlıkları")
    classembed.setDescription("Attachment  CategoryChannel  Channel  Client  ClientUser  ClientUserChannelOverride  ClientUserGuildSettings  ClientUserSettings  Collection  Collector  DiscordAPIError  DMChannel  Emoji  EvaluatedPermissions  Game  GroupDMChannel  Guild  GuildAuditLogs  GuildAuditLogsEntry  GuildChannel  GuildMember  Invite  Message  MessageAttachment  MessageCollector  MessageEmbed  MessageEmbedAuthor  MessageEmbedField  MessageEmbedFooter  MessageEmbedImage  MessageEmbedProvider  MessageEmbedThumbnail  MessageEmbedVideo  MessageMentions  MessageReaction  OAuth2Application  PartialGuild  PartialGuildChannel  PermissionOverwrites  Permissions  Presence  ReactionCollector  ReactionEmoji  RichEmbed  RichPresenceAssets  Role  Shard  ShardClientUtil  ShardingManager  SnowflakeUtil  StreamDispatcher  TextChannel  User  UserConnection  UserProfile  Util  VoiceBroadcast  VoiceChannel  VoiceConnection  VoiceReceiver  VoiceRegion  VolumeInterface  Webhook  WebhookClient ")
    classembed.setFooter("Komutlarda sorun olursa veya daha detaylı bilgi için yetkililere ulaşınız.")
    classembed.setColor(0x8000ff)
    message.channel.send(classembed)
    }
  
    

    } 

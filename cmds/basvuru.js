const discord = require("discord.js");
module.exports.run = (client, message, args) => {

let basvuruyer = args[0]
let basvurumesaj = args.slice(1).join(" ")

if(!basvuruyer) return message.reply("Hangi dalda başvuracağınızı seçmediniz. Kullanım : ?basvuru icerik/partner/gelistirici <başvuru mesaj> ")
if(!basvurumesaj) return message.reply("Başvuru mesağınızı girmediniz. **Kullanım : ?basvuru icerik/partner/gelistirici <başvuru mesaj>**")

if(basvuruyer === "partner") {
message.delete()
message.reply("Başvurunuz <#531395962904641538> kanalına eklendi.")
let partnerembed = new discord.RichEmbed();
partnerembed.setThumbnail(message.author.avatarURL)
partnerembed.setAuthor(message.author.tag, message.author.avatarURL);
partnerembed.setTitle("Partner kanalında yeni bir başvuru eklendi.")
partnerembed.setDescription(basvurumesaj)
partnerembed.setTimestamp()
client.channels.get("531395962904641538").send(partnerembed)
}

if(basvuruyer === "icerik") {
message.delete()
message.reply("Başvurunuz <#531395962904641538> kanalına eklendi.")
let icerikembed = new discord.RichEmbed();
icerikembed.setThumbnail(message.author.avatarURL)
icerikembed.setAuthor(message.author.tag, message.author.avatarURL);
icerikembed.setTitle("Partner kanalında yeni bir başvuru eklendi.")
icerikembed.setDescription(basvurumesaj)
icerikembed.setTimestamp()
client.channels.get("531395962904641538").send(icerikembed)
}

if(basvuruyer === "gelistirici") {
message.delete()
message.reply("Başvurunuz <#531395962904641538> kanalına eklendi.")
let gelistiriciembed = new discord.RichEmbed();
gelistiriciembed.setThumbnail(message.author.avatarURL)
gelistiriciembed.setAuthor(message.author.tag, message.author.avatarURL);
gelistiriciembed.setTitle("Geliştirici kanalında yeni bir başvuru eklendi.")
gelistiriciembed.setDescription(basvurumesaj)
gelistiriciembed.setTimestamp()
client.channels.get("531395962904641538").send(gelistiriciembed)
}


}

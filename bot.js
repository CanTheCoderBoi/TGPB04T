const discord = require("discord.js")
const mongoose = require("mongoose")
const shortcuts = require("./utils/shortcuts.js")
const client = new discord.Client();
const pref = "?";
client.owners = ["478307244509888532", "316641074967871500"]
client.on("ready", () => {
    console.log("I am up and running!");
    client.user.setActivity("komutları", {type: "LISTENING"});
    
})

client.on("guildMemberAdd", async member => {
    client.channels.get("528947965604265984").send(`Hoş Geldin, <@${member.id}>! Sunucu Üye Sayısı \`${client.guilds.get("403879632656662528").members.size}\``)
    let role = client.guilds.get("403879632656662528").roles.get("523183261518921728");
    member.addRole(role);
})

client.on("message", async (message) => {
    if (message.author.bot) return;
    shortcuts.randomXP(client, message);
    if (!message.content.startsWith(pref)) return;
    // if (!process.env.TOKEN && message.author.id != "316641074967871500") return message.channel.send("Bakımdayım!")
    const args = message.content.slice(pref.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let commandFile = require(`./cmds/${command}.js`);
    if (message.channel.type === "dm" && !commandFile.info.DM) return;
    
    return commandFile.run(client, message, args);
})

client.on("messageUpdate", async(oldMessage, newMessage) => {

if(oldMessage.content === newMessage.content) return;

client.channels.get("540134798946205696").send(`📝${oldMessage.author.tag} (\`${oldMessage.author.id}\`)kullanıcısı tarafından <#${oldMessage.channel.id}> kanalında mesaj editlendi. \n **Ö:** *${oldMessage}* \n **S:** *${newMessage}* `)

})

client.on("messageDelete" , async("message") =>{
client channels get("540134798946205696").send(`🗑 ${message.author.tag} (\`{message.author.id}\`) kullanıcısı tarafından <#${message.channel.id}>  kanalında mesaj silindi: \n **${message}** `)
})



client.login(process.env.TOKEN || require("./config.json").TOKEN);
mongoose.connect(process.env.URI || require("./config.json").URI, { useNewUrlParser: true })

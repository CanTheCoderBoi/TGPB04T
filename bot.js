const discord = require("discord.js")
const mongoose = require("mongoose")
const client = new discord.Client();
const pref = "?";
const modMail = require("./utils/modmail.js")
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
    if (message.channel.type == "dm" && !message.content.startsWith(pref)) {
        return modMail.createNewThread(client, message);
    }
    if (!message.content.startsWith(pref)) return;
    const args = message.content.slice(pref.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let commandFile = require(`./cmds/${command}.js`);
    if (message.channel.type === "dm" && !commandFile.info.DM) return;
    return commandFile.run(client, message, args);
})

client.login(process.env.TOKEN)
mongoose.connect(process.env.URI, { useNewUrlParser: true })

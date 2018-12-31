const discord = require("discord.js")
const client = new discord.Client();
const pref = "?";

client.on("ready", () => {
    console.log("I am up and running!");
    client.user.setActivity("komutları", {type: "LISTENING"});
})

client.on("message", async (message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(pref)) return;
    const args = message.content.slice(pref.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let commandFile = require(`./cmds/${command}.js`);
    return commandFile.run(client, message, args);
})

client.login(process.env.TOKEN)
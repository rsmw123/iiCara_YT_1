const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("562992616094957578")
setInterval(function() {
channel.send(`ãÍãæÏ ÑæíÇá ÇÕØæÑå…`);
}, 30)
})

client.login(process.env.BOT_TOKEN);

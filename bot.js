const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("563445089557413898")
setInterval(function() {
channel.send(`CARA_KING…`);
}, 30)
})

client.login(process.env.BOT_TOKEN);

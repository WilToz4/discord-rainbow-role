const 
    Discord = require('discord.js'),
    client = new Discord.Client(),
    config = require('./config.json')

bot.on('ready', () => {
    console.log(`Rainbow bot is activated\nServer ID: ${config.server}`); 
    setInterval(() => {
     bot.guilds.cache.get(config.server).roles.cache.find(u => u.id === config.role).edit({color: 'RANDOM'});
    },config.time)
  })

client.on('message', msg => {
  if (msg.content === `${config.prefix}ping`)
    msg.reply(`🏓 Pong!\nPing with Discord server: **${Math.floor(client.ws.ping)}**ms`);
})

client.login(config.token)

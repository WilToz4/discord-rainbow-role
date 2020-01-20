const 
    Discord = require('discord.js'),
    client = new Discord.Client(),
    config = require('./config.json')

client.on('ready', () => {console.log(`Rainbow bot is activated\nServer ID: ${config.}`); setInterval(() => client.guilds.get(config.server).roles.find('name', config.role).edit({color: 'RANDOM'}), config.time);})

client.on('message', msg => {
  if (msg.content === `${config.prefix}ping`)
    msg.reply(`🏓 Pong!\nPing with Discord server: **${Math.floor(client.ping)}**ms`);
})

client.login(config.token)

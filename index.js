const { Client, version } = require('discord.js');
const { token, serverID, roleID, interval } = require('./config.json')
const bot = new Client();

bot.on("ready", async() => {
    console.log(`[ Client ] ${bot.user.tag} успешно подключился к DiscordAPI`);

    let guild = bot.guilds.cache.get(serverID) // Ищем сервер по айди
    if(!guild) throw `[ Error ] Бота не было найдено на сервере с айди: ${serverID}` // Если сервера нету, выдаем ошибку

    let role = guild.roles.cache.find(u => u.id === roleID) // Тоже самое.. Ищем роль
    if(!role) throw `[ Error ] Роли не было найдено на сервере с названием ${guild.name}` // Если роли нету, то ошибка...
    
    if(interval < 60000) console.log(`\n[!!!] Вы усказали слишком маленькое время. Будте аккуратнее! У вас могут появится проблемы..`) // Предупреждение, если интервал меньше минуты.

    setInterval(() => {
        role.edit({color: 'RANDOM'}).catch(err => Error(`[ Error ] Произошла ошибка во время изменении роли.`));
    }, interval)

})

bot.login(token)
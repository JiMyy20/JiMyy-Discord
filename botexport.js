const commando = require('discord.js-commando');
const bot = new commando.Client();
const TOKEN = 'NTM2MzMyMjk4NTYwMjA4OTE2.DyXKkQ.BcGDDymrgzWsZUAoUHKlGwhEixI'
bot.registry.registerGroupe('music', 'Music');
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on("message", function(message){
    if(message.content == 'hello')
    {
        message.reply('u r gaaaay');
    }
})
bot.on("ready", function(){
    console.log("Ready")
});
bot.login(TOKEN);

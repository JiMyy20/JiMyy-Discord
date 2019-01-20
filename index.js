const discord = require('discord.js');
const bot = new discord.Client();
const TOKEN = process.env.token;


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
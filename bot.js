const Discord = require('discord.js');

const client = new Discord.Client();
let intel = 0;
let fun = 0;
let charisma = 0;
 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '!study') {
       intel = intel +1;
       message.reply('you feel smarter');
       message.reply('Intelligence +1');
       }
    if(message.content === '!profile'){
       message.reply('Intelligence: '+intel);
       message.reply('Fun: '+fun);
       message.reply('Charisma: '+charisma);
    }
   
});


 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

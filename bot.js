const Discord = require('discord.js');
const {client, Attachment} = new Discord.Client();
 
client.on('ready', () => {
    console.log('I am ready!');
});
 
client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong');
       }
    if(message.content === 'daddy is hungry'){
     
       message.reply('come get a piece of this ass, daddy uwu');

    }
    if(message.content === '!hello'){
       const attachment = new Attachment('https://i.imgur.com/YJ6TPda.mp4');
       message.channel.send(attachment);
    }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

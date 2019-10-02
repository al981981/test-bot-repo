const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');


const client = new Client();

 

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
       const attachment = new Attachment('https://imgur.com/gallery/YJ6TPda.png');
       message.channel.send(attachment);
    }
});


 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

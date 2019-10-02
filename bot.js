const Discord = require('discord.js');

// Extract the required classes from the discord.js module
const { Client, MessageAttachment } = require('discord.js');

// Create an instance of a Discord client
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
       const attachment = new MessageAttachment('https://i.imgur.com/IKZBxc4.jpg');
     
       message.channel.send(attachment);
    }
});


 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

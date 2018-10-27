const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});











const developers = ["452379478618800129","","346343289861046273"]
const adminprefix = "-";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**Now Playig   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leaveserver")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wat')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Now Watching   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Now Listening   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'stream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**Now Streaming   ${argresult}**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

cconst misaka = new Set();
    client.on('message', async msg => {
  if(msg.content.startsWith("رابط")) {
  if (misaka.has(msg.author.id)) {
    let misakaemb = new Discord.RichEmbed()
    .setDescription(`يجب عليك الانتظار 24 ساعه!`)
    .setColor(`RED`)
    return msg.channel.send(misakaemb).then(message => {
     message.delete(10000) 
    })
    
    }
    misaka.add(msg.author.id);

  
   msg.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400,
  }).then(invite =>
   msg.author.sendMessage(`
         <@${msg.author.id}> 
         **maxUses: 5 **
         ${invite.url}`)
  )
    msg.channel.send(`**:link: Invite Linke Sent In DM Successfully**`)
  }
    setTimeout(() => {
    },86400000);
    })

client.login(process.env.BOT_TOKEN);

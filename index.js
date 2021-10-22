const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageButton, MessageActionRow } = require('discord-buttons'); 
require('discord-buttons')(client);

client.on("ready", () => {

    console.log("Bot onlin")
    client.user.setActivity("Playing verifing user's || made by ThunderDEV#1111")
})

client.on("message", (message) => {
if (message.content !== "!rverify") return;
  const embed = new Discord.MessageEmbed()
  .setTitle("Welcome to Thunder Development")
  .setDescription("Please verify by clicking on the button below.")
  .setColor('#38A800')
  
  let verify = new MessageButton()
   .setLabel("Verify")
   .setStyle("blurple")
   .setEmoji("✅")
   .setID("Verify")


  message.channel.send({
    button: verify,
    embed: embed 
  });
})
client.on('clickButton', async (button) => {
    if (button.id !== "Verify") return;
    button.reply.send('You are now sucessfully verified.', true)
    const role = button.guild.roles.cache.get("Your-role-if") 
    const member = button.clicker.member
    await member.roles.add(role)
})

client.login(process.env.token)

// Do npm i discord.js@12.5.3 in Shell before running

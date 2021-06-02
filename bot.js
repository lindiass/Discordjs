const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 


client.on("ready", () => {
  console.log(`To on`);
  client.user.setPresence({ game: { name: 'comando', type: 1, url: 'https://www.twitch.tv/midphob1a'} });
    //0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

  if(comando === "maconha") {
    const m = await message.channel.send("Eu gosto muito, não passo o beck");
  }
  if(comando === "elo") {
      const m = await message.channel.send("https://br.op.gg/summoner/userName=Midphobia");
  }
  if(comando === "cobrando") {
      const m = await message.channel.send("Não estou te comendo.");
  }
  if(comando === "duo") {
    const m = await message.channel.send("https://media.discordapp.net/attachments/751078497170096151/849724353855619082/dsadasdas.png?width=510&height=676");
  }
});

client.login(config.token);
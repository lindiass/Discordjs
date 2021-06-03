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
  if(comando === "namoro") {
      const m = await message.channel.send("Amo minha namorada sou pet dela");
  }
  if(comando === "cleber") {
      const m = await message.channel.send("Clebinblox, mais conhecido como tremzinho da fumaça. Ama um F1");
  }
  if(comando === "lelo") {
      const m = await message.channel.send("Burro pra krl");
  }
  if(comando === "caum") {
      const m = await message.channel.send("https://media.discordapp.net/attachments/667933608803303439/812854849749385226/unknown.png");
  }
  if(comando === "fabin") {
      const m = await message.channel.send("Cabeça de botão\n" +
          "Cabeça de bola\n" +
          "Abobrão\n" +
          "Astronauta\n" +
          "Balão mágico\n" +
          "Big Head\n" +
          "Cabessauro\n" +
          "Cabeça de aço\n" +
          "Cabeça de balão\n" +
          "Cabeça de circulo\n" +
          "Cabeça de cabaça\n" +
          "Cabeça de coité\n" +
          "Cabeça de coco\n" +
          "Cabeça de jaca\n" +
          "Cabeça de gás hélio\n" +
          "Cabeça de espaço\n" +
          "Cabeça de jerimum\n" +
          "Cabeça de lua\n" +
          "Cabeça de jupiter\n" +
          "Cabeça de melancia\n" +
          "Cabeça de martelo\n" +
          "Cabeça de nós todos\n" +
          "Cabeça de prego\n" +
          "Cabeça de pirulito\n" +
          "Cabeça de repolho\n" +
          "Cabeça de vento\n" +
          "Cabeça do satanás\n" +
          "Cabeça grávida\n" +
          "Cabeça lascada\n" +
          "Cabeça de todos nós" +
          "Globo terrestre\n" +
          "Cabeça oco\n" +
          "Cabeção\n" +
          "Caixa d’água\n" +
          "Cabeçoide\n" +
          "Capacete\n" +
          "Capô de fusca\n" +
          "Cérebro\n" +
          "Cebola mutante\n" +
          "Cabeça GG Gigante\n" +
          "Chamada na cabeça\n" +
          "Cocão\n" +
          "Faz sombra\n" +
          "Fantástico mundo de Bob\n" +
          "ET cabeção\n" +
          "Estoura gola\n" +
          "Espaçonave invade a terra\n" +
          "Mega mente\n" +
          "Maçã do amor\n" +
          "Lula molusco\n" +
          "Lua cheia\n" +
          "Homer Simpson"
      );
      if(comando === "live") {
          const m = await message.channel.send("https://www.twitch.tv/midphob1a")
      }
  }
});

client.login(config.token);
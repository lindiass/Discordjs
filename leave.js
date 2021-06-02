
    module.exports = {
    name: 'leave',
    description: 'Parar a musica e sair do canal',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send("Não!");
        await voiceChannel.leave();
        await message.channel.send('Vazando :smiling_face_with_tear:')

    }
}
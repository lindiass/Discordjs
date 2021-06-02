const Commando = require('join.js-commando');

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'playaudio',
            memberName: 'playaudio',
            description: 'Plays some audio'
        });
    }
    async run(message) {
        const { voice } = message.member

        if (!voice.channelID) {
            message.reply('Entre em um canal de voz')
            return
        }
        voice.channel.join()
    }
}
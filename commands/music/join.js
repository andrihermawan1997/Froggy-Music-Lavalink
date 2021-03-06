const chalk = require('chalk');
const { MessageEmbed } = require('discord.js');

module.exports = { 
    config: {
        name: "join",
        aliases: ["summon"],
        description: "Makes the bot join the voice channel.",
        accessableby: "Member",
        category: "music",
    },
    run: async (client, message, args) => {
        const msg = await message.channel.send(`<a:loading:850828723988856902> **Loading please wait...**`);

        const { channel } = message.member.voice;
        if(!channel) return msg.edit("You need to be in a voice channel to use the join command.");

        const player = client.manager.create({
            guild: message.guild.id,
            voiceChannel: message.member.voice.channel.id,
            textChannel: message.channel.id,
            selfDeafen: true,
        });

        await player.connect();

        const embed = new MessageEmbed()
            .setDescription(`\`🔊\` | **Joined:** \`${channel.name}\``)
            .setColor('#fcc700');

        msg.edit({ content: " ", embeds: [embed] })
    }
}

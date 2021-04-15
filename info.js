const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('info', 'i', 'I', []);
  }

  async run(client, message, args) {
    message.channel.send({embed: {
      color: 8913151,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      url: "",
      fields: [{
          name: "Scrirmmage Twitch-followers Bot.",
          value: "``Created by Scrim ``"
        },
        

      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "SCRIMMAGE"
      }
    }
  });
  }
}
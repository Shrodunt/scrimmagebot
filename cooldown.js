const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('cooldown', 'c', 'C', []);
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
          name: "Cooldown:",
          value: "``You are currently on cooldown please wait and look at the channel cooldown...``"
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
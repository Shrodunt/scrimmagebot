const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require('node-fetch');
const Discord = require('discord.js');
var fs = require('fs');
var readline = require('readline');fb
var cntr = 0;
const talkedRecently = new Set();
let cooldown;
let max;

module.exports = class FollowCommand extends BaseCommand {
	constructor() {
		super(s!follow', 'twitch', []);
	}

	async run(client, message, args, member) {
		if (talkedRecently.has(message.author.id)) {
			message.channel.send(
				'You are currently on cooldown please wait... - ' +
					messsage.author.username
			);
		} else {
			if (isNaN(args[1])) {
				return message.channel.send({embed: {
					color: 8913151,
					description: "The correctly command is: **s!follow** (**channel**) (**amount**)"
				  }});
            }

			if (message.member.roles.cache.has('830434469810143232')) {
                if (args[1] > 2500) {
				return message.channel.send({embed: {
					color: 8913151,
					description: "You can not use more than ``2500`` followers with the **Metal** plan"
				  }});
            }};


		//	if (message.member.roles.cache.has('830434469810143232')) {
          //      if (args[1] > 12500) {
			//	return message.channel.send({embed: {
				//	color: 16776960,
				//	description: "You can not use more than ``12500`` followers with the **Admin** plan"
tge				 // }});
           // }};



			if (message.member.roles.cache.has('830434513922424852')) {
                if (args[1] > 5000) {
				return message.channel.send({embed: {
					color: 8913151,
					description: "You can not use more than ``5000`` followers with the **Gold** plan"
				  }});
            }};


			if (message.member.roles.cache.has('828799452654338099')) {
                if (args[1] > 1500) {
				 return message.channel.send({embed: {
					 color: 16776960,
					description: "You can not use more than ``1500`` followers with the **Metal** plan"
				  }});
           }};


			if (message.member.roles.cache.has('829101675893227580')) {
                if (args[1] > 650) {
				return message.channel.send({embed: {
					color: 8913151,
					description: "You can not use more than ``650`` followers with the **Bronze** plan"
				  }});
            }};

			if (message.member.roles.cache.has('828290829272612885')) {
                if (args[1] > 2500) {
				return message.channel.send({embed: {
					color: 8913151,
					description: "You can not use more than ``2500`` followers with the **VIP** plan"
				  }});
            }};

            if (message.member.roles.cache.has('829369472660930580')) {
                if (args[1] > 1500) {
				return message.channel.send({embed: {
                    color: 8913151,
                    description: "You can not use more than ``1500`` followers with the **Gold access** plan"
                  }});
            }};       

            
            if (message.member.roles.cache.has('800884436693811230')) {
                if (args[1] > 400) {
				return message.channel.send({embed: {
                    color: 8913151,
                    description: "You can not use more than ``400`` followers with the **normal** plan"
                  }});
            }};


			if (message.member.roles.cache.has('829269672079654933')) {
			    if (args[1] > 5000) {
				return message.channel.send({embed: {
                    color: 8913151,
                    description: "You can not use more than ``5000`` followers with the **Booster** plan"
                  }});
            }};

			if (message.member.roles.cache.has('829370249911599125')) {
			    if (args[1] > 650) {
				return message.channel.send({embed: {
                    color: 8913151,
                    description: "You can not use more than ``650`` followers with the **Silver access** plan"
                  }});
            }};

			if (message.member.roles.cache.has('829369909737291827 ')) {
			    if (args[1] > 100) {
				return message.channel.send({embed: {
                    color: 8913151,
                    description: "You can not use more than ``100`` followers with the **Bronze access** role"
                  }});
            }};


			let id = await fetch(
				`https://api.twitch.tv/helix/users?login=${args[0].toString()}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer awrxthdsaol34wuqzyvwf3c2r3hghg',
						'Client-id': 'kimne78kx3ncx6brgo4mv6wki5h1ko'
					}
				}
			);
			
		    let json = await id.json();
			let sending = new Discord.MessageEmbed()
				.setAuthor(
			   `Adding ${args[1]} Twitch followers!`, 
					json.data[0].profile_image_url,
					`https://www.twitch.tv/${json.data[0].display_name}`
				).setColor('#8800FF')
				.addField('Channel name', json.data[0].display_name)
				.addField('Channel ID', json.data[0].id) 
				.setFooter(`You may run this command again in 5 minutes.`);
				
			message.channel.send(sending);
			console.log(
				`Adding ${args[1]} follows to ${
					json.data[0].display_name
				} || Executed by: ${message.author.username}`
				
			);
			
			var rl = readline.createInterface({
				input: fs.createReadStream('./all.txt')
			});
			rl.on('line', function(line) {
				if (cntr++ < args[1]) {
					fetch('https://gql.twitch.tv/gql', {
						headers: {
							accept: '*/*',
							'accept-language': 'en-US',
							authorization: `OAuth ${line}`,
							'client-id': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
							'content-type': 'text/plain;charset=UTF-8',
							'sec-ch-ua':
								'"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
							'sec-ch-ua-mobile': '?0',
							'sec-fetch-dest': 'empty',
							'sec-fetch-mode': 'cors',
							'sec-fetch-site': 'same-site',
							'x-device-id': 'fkWkLSFgnouOunvs9uZvuJa0xrtCxKom'
						},
						referrer: 'https://www.twitch.tv/',
						referrerPolicy: 'strict-origin-when-cross-origin',
						body: `[{\"operationName\":\"FollowButton_FollowUser\",\"variables\":{\"input\":{\"disableNotifications\":false,\"targetID\":\"${
							json.data[0].id
						}\"}},\"extensions\":{\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"3efee1acda90efdff9fef6e6b4a29213be3ee490781c5b54469717b6131ffdfe\"}}}]`,
						method: 'POST',
						mode: 'cors'
					}).catch(err => console.log(err));
				}
			});
			cntr = 0;
			talkedRecently.add(message.author.id);
			setTimeout(() => {
				talkedRecently.delete(message.author.id);
			}, 1000);
		}
	}
};
const { Events } = require("discord.js");

module.exports = {
	name: Events.MessageCreate,

	async execute(message) {
		if (message.type === 6) {
			return message.delete();
		}
	},
};

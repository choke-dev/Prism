/**
 * @file Sample help command with slash command.
 * @author Naman Vrati & Thomas Fournier
 * @since 3.0.0
 * @version 3.3.0
 */

// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
	// The data needed to register slash commands to Discord.

	data: new SlashCommandBuilder()
		.setName("wiki")
		.setDescription(
			"Returns a wiki article"
		)
		.addStringOption((option) =>
	    option
	      .setName("article_page")
	      .setDescription("The article page in the wiki")
		),

	async execute(interaction) {
		const articlePage = interaction.options.getString("article_page");

		return interaction.reply(`https://pillars.miraheze.org/wiki/${articlePage}`)
	},
};

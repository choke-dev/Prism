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
		.setName("token")
		.setDescription(
			"Returns detailed information about a token."
		)
		.addStringOption((option) =>
	    option
			.setName("selected_token")
			.setDescription("The string to search for in the wiki")
			.addChoices(
				{ name: 'Blindfold Token', value: 'Blindfold_Token' },
				{ name: 'Lava Token', value: 'Lava_Token' },
				{ name: 'Nudge Token', value: 'Nudge_Token' },
				{ name: 'Side Token', value: 'Side_Token' },
				{ name: 'Tower Token', value: 'Tower_Token' },
				{ name: 'Instant Death Token', value: 'InstantDeath_Token' },
				{ name: 'Cure Token', value: 'Cure_Token' },
				{ name: 'Shrink Token', value: 'Shrink_Token' },
				{ name: 'Skip Token', value: 'Skip_Token' },
				{ name: 'Trash Token', value: 'Trash_Token' },
			)
		),

	async execute(interaction) {
		const selectedToken = interaction.options?.getString("selected_token");

		await interaction.deferReply();

        const queryResponse = await fetch(`https://pillars.miraheze.org/w/api.php?action=query&prop=revisions&titles=${selectedToken}&rvslots=*&rvprop=content&formatversion=2&format=json`)
        const queryJson = await queryResponse.json()

		const resultEmbed = new EmbedBuilder()
		.setTitle(queryJson.query.pages[0].title)
		.setDescription(queryJson.query.pages[0].revisions[0].slots.main.content)

        return await interaction.editReply({ embeds: [resultEmbed] })
	},
};

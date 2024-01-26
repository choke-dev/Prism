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
		.setName("editserver")
		.setDescription(
			"Edit something about the server."
		)
		.addStringOption((option) =>
	    option
	      .setName("name")
	      .setDescription("Edits the server name")
	      .setRequired(false)
		)
		.addAttachmentOption((option) =>
	    option
	      .setName("icon")
	      .setDescription("Edits the server icon")
	      .setRequired(false)
		)
		.addStringOption((option) =>
	    option
	      .setName("icon_link")
	      .setDescription("Edits the server icon from the specified link")
	      .setRequired(false)
		),

	async execute(interaction) {
		const oldServerName = interaction.guild.name;
		const newServerName = interaction.options?.getString("name");
    	let newServerIcon = (interaction.options.getAttachment("icon")?.url || interaction.options?.getString("icon_link"));

    	const updateOptions = {
			reason: `Edited by ${interaction.user.username} (${interaction.user.id})`
		};
		
		await interaction.deferReply();

    	if (newServerIcon) {
    	    const iconResponse = await fetch(newServerIcon);
    	    newServerIcon = await iconResponse.body
    	    updateOptions.icon = newServerIcon;
    	}

    	if (newServerName) {
    	    updateOptions.name = newServerName;
    	}

    	try {
    	    await interaction.guild.edit(updateOptions);
    	    let replyMessage = ':white_check_mark: Successfully';
    	    if (newServerName && newServerIcon) {
    	        replyMessage += ` changed the server icon and name from "${oldServerName}" to "${newServerName}"`;
    	    } else if (newServerName) {
    	        replyMessage += ` changed the server name from "${oldServerName}" to "${newServerName}"`;
    	    } else if (newServerIcon) {
    	        replyMessage += ' changed the server icon.';
    	    }
    	    return await interaction.editReply(replyMessage);
    	} catch (error) {
    	    console.error(error);
    	    return await interaction.editReply(':x: Failed to update server properties.')
    	}
	},
};

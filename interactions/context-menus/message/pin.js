/**
 * @file Sample Message Context Menu interaction
 * @author Krish Garg
 * @since 3.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../../typings').ContextInteractionCommand}
 */
module.exports = {
	data: {
		name: "Pin / Unpin Message",
		type: 3, // 3 is for message context menus
	},

	async execute(interaction) {
		const message = interaction.targetMessage;

		await interaction.deferReply({
			ephemeral: true
		});

		if (message.pinned) {
			await message.unpin(`Unpinned by ${interaction.user.username} (${interaction.user.id})`)

			message.reply({
				content: `:wastebasket: Message unpinned by ${interaction.user}`, 
				allowedMentions: { 
					repliedUser: false,
					parse: []
				}
			});
			
			return await interaction.editReply({
				content: ':white_check_mark: Successfully unpinned message.',
				ephemeral: true
			})
		} else {
			await message.pin(`Pinned by ${interaction.user.username} (${interaction.user.id})`)

			message.reply({
				content: `:pushpin: Message pinned by ${interaction.user}`, 
				allowedMentions: { 
					repliedUser: false,
					parse: []
				}
			});

			return await interaction.editReply({
				content: ':white_check_mark: Successfully pinned message.',
				ephemeral: true
			})
		}
	},
};

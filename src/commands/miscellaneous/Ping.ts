import type { DiscordClient } from "@/registry/DiscordClient";
import BaseCommand, {
	type DiscordChatInputCommandInteraction,
} from "@/registry/Structure/BaseCommand";
import { ApplicationIntegrationType, EmbedBuilder, InteractionContextType, SlashCommandBuilder } from "discord.js";

export default class PingCommand extends BaseCommand {
	constructor() {
		super(
			new SlashCommandBuilder()
				.setName("ping")
				.setDescription("Pong!")
				.setContexts(InteractionContextType.Guild)
				.setIntegrationTypes(ApplicationIntegrationType.GuildInstall),
		);
	}

	async execute(
		client: DiscordClient<true>,
		interaction: DiscordChatInputCommandInteraction,
	) {
		await interaction.deferReply();
		const deferredReply = await interaction.fetchReply();

		const embed = new EmbedBuilder().setAuthor({
			name: `Pong! | Client: ${deferredReply.createdTimestamp - interaction.createdTimestamp}ms | WebSocket: ${client.ws.ping}`,
			iconURL: client.user.displayAvatarURL(),
		});

		await interaction.followUp({
			embeds: [embed],
		});
	}
}

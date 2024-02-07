import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import BaseCommand from '../registry/Structure/BaseCommand';
import { getJoke } from '../utils/jokes';

export default class JokeCommand extends BaseCommand {
    constructor() {
        super(
            new SlashCommandBuilder()
                .setName('joke')
                .setDescription('Get a random joke'),
        );
    }

    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.reply(getJoke());
    }
}

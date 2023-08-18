const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("reminder")
        .setDescription("a command to make reminders"),
    async execute(interaction) {
    },
};
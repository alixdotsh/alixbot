const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("replies with pong (use this to make sure bot is working)"),
  async execute(interaction) {
    return interaction.reply("pong");
  },
};

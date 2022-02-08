import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/Command";

export const OneHundred: Command = {
  data: new SlashCommandBuilder()
    .setName("100")
    .setDescription("Check in for the 100 days of code challenge")
    .addStringOption((opt) =>
      opt
        .setName("message")
        .setDescription("The message to go in your 100 days of code update.")
        .setRequired(true)
    ),
  run: async (inter) => {
    await inter.deferReply();
    const { user } = inter;
    const text = inter.options.getString("message", true);
  },
};

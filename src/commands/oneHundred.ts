import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { Command } from "../interfaces/Command";
import { getCamperData } from "../modules/getCamperData";
import { updateCamperData } from "../modules/updateCamperData";

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

    const targetCamper = await getCamperData(user.id);
    const updatedCamper = await updateCamperData(targetCamper);

    const oneHundredEmbed = new MessageEmbed()
      .setTitle("100 Days of code")
      .setDescription(text)
      .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL() })
      .addFields(
        { name: "Round", value: updatedCamper.round.toString() },
        { name: "Day", value: updatedCamper.day.toString() }
      )
      .setFooter({
        text:
          "Day Completed: " +
          new Date(updatedCamper.timestamp).toLocaleDateString(),
      });

    await inter.editReply({ embeds: [oneHundredEmbed] });
  },
};

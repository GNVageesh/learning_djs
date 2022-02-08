import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { connectDB } from "./database/connectDB";
import { onInteraction } from "./events/onInteraction";
import { validateEnv } from "./utils/validateEnv";

(async () => {
  if (!validateEnv()) return;

  const bot = new Client({ intents: IntentOptions });

  bot.on("ready", () => console.log("[BOT] Connected"));
  bot.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction)
  );
  await connectDB();

  await bot.login(process.env.TOKEN);
})();

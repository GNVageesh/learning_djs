import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { connectDB } from "./database/connectDB";
import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady";
import { validateEnv } from "./utils/validateEnv";

(async () => {
  if (!validateEnv()) return;
  const BOT = new Client({ intents: IntentOptions });

  BOT.on("ready", async () => await onReady(BOT));

  BOT.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction)
  );

  await connectDB();

  await BOT.login(process.env.TOKEN);
})();

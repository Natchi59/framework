import { ButtonInteraction } from "discord.js";
import { ShewenyClient } from "../ShewenyClient";
import { Inhibitor } from "../structures";

export default async function run(client: ShewenyClient, interaction: ButtonInteraction) {
  if (!client.buttons) return;

  const button = client.buttons.find((value) =>
    value.customId.includes(interaction.customId)
  );

  if (!button) return;

  /**
   * Handle inhibitors
   */
  const inhibitors = client.inhibitors?.filter(
    (i: Inhibitor) => i.type === "BUTTON" || i.type === "ALL"
  );
  if (!inhibitors || !inhibitors.size) return;
  const sorted = [...inhibitors.values()].sort((a, b) => b.priority - a.priority);
  for (const i of sorted) {
    if (!i.execute(client, interaction)) return i.onFailure(client, interaction);
  }

  try {
    await button.execute!(interaction);
  } catch (e) {
    console.error(e);
  }
}

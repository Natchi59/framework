import type { CommandInteraction } from "discord.js";
import type { ShewenyClient } from "..";
interface CommandInteractionExtend extends CommandInteraction {
    subCommand: string | null;
}
export default function run(client: ShewenyClient, interaction: CommandInteractionExtend): Promise<boolean>;
export {};

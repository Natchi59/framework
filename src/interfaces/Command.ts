import { ApplicationCommandOptionData, PermissionString } from "discord.js";

interface SlashCommandData {
  name: string;
  description: string;
  type: "SLASH_COMMAND";
  options?: ApplicationCommandOptionData[];
  defaultPermission?: boolean;
  category?: string;
  channel?: "GUILD" | "DM";
  cooldown?: null;
  adminsOnly?: boolean;
  userPermissions?: PermissionString[];
  clientPermissions?: PermissionString[];
}

interface ContextMenuUserData {
  name: string;
  type: "CONTEXT_MENU_USER";
  defaultPermission?: boolean;
  category?: string;
  channel?: "GUILD" | "DM";
  cooldown?: null;
  adminsOnly?: boolean;
  userPermissions?: PermissionString[];
  clientPermissions?: PermissionString[];
}

interface ContextMenuMessageData {
  name: string;
  type: "CONTEXT_MENU_MESSAGE";
  defaultPermission?: boolean;
  category?: string;
  channel?: "GUILD" | "DM";
  cooldown?: null;
  adminsOnly?: boolean;
  userPermissions?: PermissionString[];
  clientPermissions?: PermissionString[];
}

interface MessageData {
  name: string;
  type: "MESSAGE";
  description?: string;
  category?: string;
  channel?: "GUILD" | "DM";
  cooldown?: null;
  adminsOnly?: boolean;
  userPermissions?: PermissionString[];
  clientPermissions?: PermissionString[];
}

export type CommandData =
  | SlashCommandData
  | ContextMenuUserData
  | ContextMenuMessageData
  | MessageData;

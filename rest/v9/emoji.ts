import type { Snowflake } from '../../globals';
import type { APIEmoji } from '../../payloads/v9/index';
import type { AddUndefinedToPossiblyUndefinedPropertiesOfInterface } from '../../utils/internals';

/**
 * https://discord.com/developers/docs/resources/emoji#list-guild-emojis
 */
export type RESTGetAPIGuildEmojisResult = APIEmoji[];

/**
 * https://discord.com/developers/docs/resources/emoji#get-guild-emoji
 */
export type RESTGetAPIGuildEmojiResult = APIEmoji;

/**
 * https://discord.com/developers/docs/resources/emoji#create-guild-emoji-json-params
 */
export type RESTPostAPIGuildEmojiJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
	/**
	 * Name of the emoji
	 */
	name: string;
	/**
	 * The 128x128 emoji image
	 *
	 * https://discord.com/developers/docs/reference#image-data
	 */
	image: string;
	/**
	 * Roles for which this emoji will be whitelisted
	 */
	roles?: Snowflake[];
}>;

/**
 * https://discord.com/developers/docs/resources/emoji#create-guild-emoji
 */
export type RESTPostAPIGuildEmojiResult = APIEmoji;

/**
 * https://discord.com/developers/docs/resources/emoji#modify-guild-emoji
 */
export type RESTPatchAPIGuildEmojiJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
	/**
	 * Name of the emoji
	 */
	name?: string;
	/**
	 * Roles for which this emoji will be whitelisted
	 */
	roles?: Snowflake[] | null;
}>;

/**
 * https://discord.com/developers/docs/resources/emoji#modify-guild-emoji
 */
export type RESTPatchAPIGuildEmojiResult = APIEmoji;

/**
 * https://discord.com/developers/docs/resources/emoji#delete-guild-emoji
 */
export type RESTDeleteAPIGuildEmojiResult = never;

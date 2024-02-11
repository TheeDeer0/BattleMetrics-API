import { Relation, Relationships } from './Common';
/**
 * Represents the options for the resources to include in the response when fetching a player from the BattleMetrics system.
 *
 * @typedef {Array} PlayerIncludeOptions
 * @property {'server'} - Include the servers associated with the player.
 * @property {'identifier'} - Include the identifiers associated with the player.
 * @property {'playerCounter'} - Include the player counters associated with the player.
 * @property {'playerFlag'} - Include the player flags associated with the player.
 * @property {'flagPlayer'} - Include the flags of the player.
 */
export type PlayerIncludeOptions = ('server' | 'identifier' | 'playerCounter' | 'playerFlag' | 'flagPlayer')[];

/**
 * Represents the options for the resources to include in the response when fetching a list of players from the BattleMetrics system.
 *
 * @typedef {Array} PlayersIncludeOptions
 * @property {'identifier'} - Include the identifiers associated with the player.
 */
export type PlayersIncludeOptions = ('server' | 'identifier' | 'playerCounter' | 'playerFlag' | 'flagPlayer')[];

export type RelationIncludeOptions = ('player' | 'identifier')[];

/**
 * Represents the main attributes of a player in the BattleMetrics system.
 *
 * @interface
 * @property {string} id - The unique ID of the player.
 * @property {string} createdAt - The date and time when the player was created.
 * @property {string} updatedAt - The date and time when the player was last updated.
 * @property {string} name - The name of the player.
 * @property {boolean} private - Whether the player is private.
 * @property {boolean} positiveMatch - Whether the player is a positive match.
 */
export interface PlayerAttributes {
	id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	private: boolean;
	positiveMatch: boolean;
}

/**
 * Represents the main data of a player in the BattleMetrics system.
 *
 * @interface
 * @property {string} type - The type of the player. Always "player" for players.
 * @property {string} id - The unique ID of the player.
 * @property {PlayerAttributes} attributes - The main attributes of the player.
 * @property {any} meta - Any additional metadata associated with the player.
 */
export interface PlayerData {
	type: string;
	id: string;
	attributes: PlayerAttributes;
	meta: any;
}

/**
 * Represents the relationships of a player with other entities in the BattleMetrics system.
 *
 * @interface
 * @property {Relationships} [organizations] - Optional. The organizations associated with the player.
 * @property {Relationships} [player] - Optional. The player's relationship with themselves. This is typically used for self-referential relationships.
 * @property {Relationships} [server] - Optional. The servers associated with the player.
 * @property {Relationships} [game] - Optional. The games associated with the player.
 * @property {Relationships} [user] - Optional. The users associated with the player.
 * @property {Relationships} [playerFlag] - Optional. The flags associated with the player.
 */
export interface PlayerRelationships {
	organizations?: Relationships;
	player?: Relationships;
	server?: Relationships;
	game?: Relationships;
	user?: Relationships;
	playerFlag?: Relationships;
}

/**
 * Represents an identifier associated with a player in the BattleMetrics system.
 *
 * @interface
 * @property {string} type - The type of the included resource. Always "identifier" for identifiers.
 * @property {string} id - The unique ID of the identifier.
 * @property {object} attributes - The main data of the identifier.
 * @property {string} attributes.type - The type of the identifier.
 * @property {string} attributes.identifier - The identifier itself.
 * @property {string} attributes.lastSeen - The date and time when the identifier was last seen.
 * @property {boolean} attributes.private - Whether the identifier is private.
 * @property {any} attributes.metadata - Any additional metadata associated with the identifier.
 * @property {PlayerRelationships} relationships - The relationships of the identifier with other entities in the BattleMetrics system.
 */
export interface PlayerIdentifierInclude {
	type: string;
	id: string;
	attributes: {
		type: string;
		identifier: string;
		lastSeen: string;
		private: boolean;
		metadata: any;
	};
	relationships: PlayerRelationships;
}

/**
 * Represents a server associated with a player in the BattleMetrics system.
 *
 * @interface
 * @property {string} type - The type of the included resource. Always "server" for servers.
 * @property {string} id - The unique ID of the server.
 * @property {object} attributes - The main data of the server.
 * @property {string} attributes.name - The name of the server.
 * @property {string} attributes.game - The game that the server is for.
 * @property {string} attributes.ip - The IP address of the server.
 * @property {number} attributes.port - The port of the server.
 * @property {Relationships} relationships - The relationships of the server with other entities in the BattleMetrics system.
 */
export interface PlayerServerInclude {
	type: string;
	id: string;
	attributes: {
		id: string;
		name: string;
		address: any;
		ip: string;
		port: number;
		rank: number;
		players: number;
		maxPlayers: number;
		location: [number, number];
		status: string;
		details: {
			[key: string]: string | number | boolean | null | undefined | object | any[];
		};
		private: boolean;
		createdAt: string;
		updatedAt: string;
		portQuery: number;
		country: string;
		queryStatus: string;
	};
	relaationships: PlayerRelationships;
	meta: {
		timePlayed: number;
		firstSeen: string;
		lastSeen: string;
		online: boolean;
	};
}

/**
 * Represents a player associated with a flag in the BattleMetrics system.
 *
 * @interface
 * @property {string} type - The type of the included resource. Always "flagPlayer" for flagPlayer.
 * @property {string} id - The unique ID of the flag.
 * @property {object} attributes - The main data of the flag.
 * @property {string} attributes.addedAt - The date and time when the flag was added to the player.
 * @property {string} [attributes.removedAt] - Optional. The date and time when the player was removed from the flag.
 * @property {Relationships} relationships - The relationships of the player with other entities in the BattleMetrics system.
 */
export interface PlayerFlagPlayerInclude {
	type: string;
	id: string;
	attributes: {
		addedAt: string;
		removedAt?: string;
	};
	relationships: Relationships;
}

/**
 * Represents a flag associated with a player in the BattleMetrics system.
 *
 * @interface
 * @property {string} type - The type of the included resource. Always "playerFlag" for flags.
 * @property {string} id - The unique ID of the flag.
 * @property {object} attributes - The main data of the flag.
 * @property {string} attributes.createdAt - The date and time when the flag was created.
 * @property {string} attributes.updatedAt - The date and time when the flag was last updated.
 * @property {string} attributes.icon - The icon associated with the flag.
 * @property {string} attributes.name - The name of the flag.
 * @property {string} attributes.color - The color associated with the flag.
 * @property {string} attributes.description - The description of the flag.
 * @property {object} relationships - The relationships of the flag with other entities in the BattleMetrics system.
 * @property {Relationships} relationships.players - The players associated with the flag.
 */
export interface PlayerFlagInclude {
	type: string;
	id: string;
	attributes: {
		createdAt: string;
		updatedAt: string;
		icon: string;
		name: string;
		color: string;
		description: string;
	};
	relationships: {
		players: Relationships;
	};
}

/**
 * Represents a player in the BattleMetrics system.
 *
 * @interface
 * @property {PlayerData} data - The main data of the player.
 * @property {PlayerRelationships} relationships - The relationships of the player with other entities in the BattleMetrics system.
 * @property {Array<PlayerServerInclude | PlayerIdentifierInclude | PlayerFlagPlayerInclude | PlayerFlagInclude | null>} [included] - Optional. Additional resources related to the player that are included in the response. This can include servers the player has played on, identifiers associated with the player, flags on the player, and flags on the player's server.
 */
export interface Player {
	data: PlayerData;
	relationships: PlayerRelationships;
	included?: [
		| PlayerServerInclude
		| PlayerIdentifierInclude
		| PlayerFlagPlayerInclude
		| PlayerFlagInclude
		| PlayerServerInclude
		| null
	];
}

export interface Players {
	data: Player[];
	included?: [
		| PlayerServerInclude
		| PlayerIdentifierInclude
		| PlayerFlagPlayerInclude
		| PlayerFlagInclude
		| PlayerServerInclude
		| null
	];
	links: {
		next: string | null;
		prev: string | null;
	};
}

export interface relatedIdentiferData {
	id: string;
	meta: {
		commonIdentifier: boolean;
	};
	type: string;
	attributes: {
		type: string;
		identifier: string;
		lastSeen: string;
		private: boolean;
		metadata: any;
	};
	relationships: {
		player?: {
			data: Relation[];
		};
		relatedPlayers?: {
			Data: Relation[];
		};
		relatedIdentifiers?: {
			Data: Relation[];
		};
		organizations?: {
			Data: Relation[];
		};
	};
}

export interface relatedIdentifiers {
	data: relatedIdentiferData[];
	included: any[];
	links: {
		next: string | null;
		prev: string | null;
	};
}

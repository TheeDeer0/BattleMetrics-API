export type PlayerIncludeOptions = ('server' | 'identifier' | 'playerCounter' | 'playerFlag' | 'flagPlayer')[];

export interface PlayerAttributes {
	id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	private: boolean;
	positiveMatch: boolean;
}

export interface PlayerData {
	type: string;
	id: string;
	attributes: PlayerAttributes;
	meta: any;
}

export interface Relation {
	type: string;
	id: string;
	meta?: {
		firstSeen?: string;
		lastSeen?: string;
		timePlayed?: number;
		online?: boolean;
	};
}

export interface Relationships {
	data: Relation[] | Relation;
}

export interface PlayerRelationships {
	organizations?: Relationships;
	player?: Relationships;
	server?: Relationships;
	game?: Relationships;
	user?: Relationships;
	playerFlag?: Relationships;
}

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

export interface PlayerFlagPlayerInclude {
	type: string;
	id: string;
	attributes: {
		addedAt: string;
		removedAt?: string;
	};
	relationships: Relationships;
}

export interface PlayerFlagInclude {
	type: string;
	id: string;
	attributes: {
		createdAt: string;
		uppdatedAt: string;
		icon: string;
		name: string;
		color: string;
		description: string;
	};
	relationships: {
		players: Relationships;
	};
}

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

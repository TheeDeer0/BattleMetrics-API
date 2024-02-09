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
    }
}

export interface Relationships {
    data: Relation[] | Relation;
}

export interface PlayerRelationships {
    organizations: Relationships;
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
}

export interface Player {
    data: PlayerData;
    relationships: PlayerRelationships;
    included?: [PlayerServerInclude | PlayerIdentifierInclude | null];
}
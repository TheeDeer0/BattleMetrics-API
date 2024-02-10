import { Relation } from './Player';

export interface QuickMatchOptions {
	type: 'identifier';
	attributes: {
		type:
			| 'steamID'
			| 'BEGUID'
			| 'legacyBEGUID'
			| 'ip'
			| 'name'
			| 'survivorName'
			| 'steamFamilyShareOwner'
			| 'conanCharName'
			| 'egsID'
			| 'eosID'
			| 'funcomID'
			| 'playFabID'
			| 'mcUUID'
			| '7dtdEOS'
			| 'battlebitHWID'
			| 'hllWindowsID'
			| 'palworldUID';
		identifier: string;
	};
}

export interface QuickMatchData {
	data: QuickMatchOptions[];
}

export interface QuickMatchResponseData {
	id: string;
	type: string;
	attributes: {
		type: string;
		identifier: string;
		lastSeen: string;
		private: boolean;
		metadata: any;
	};
	relationships: {
		player?: Relation;
		organizations?: Relation;
	};
}

export interface QuickMatchResponse {
	data: QuickMatchResponseData[] | QuickMatchResponseData;
	included: [];
	links: {
		next: string | null;
		prev: string | null;
	};
}

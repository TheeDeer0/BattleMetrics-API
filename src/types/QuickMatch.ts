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

export interface QuickMatchResponse {
	data: [];
	included: [];
	links: {
		next: '';
		prev: '';
	};
}

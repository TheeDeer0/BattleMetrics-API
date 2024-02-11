/**
 * @fileoverview This file is the primary service for the BattleMetrics API Wrapper.
 *
 * The BattleMetrics class is used to interact with the BattleMetrics API.
 *
 * Dependencies:
 * - axios: Used to make HTTP requests to the BattleMetrics API.
 */

import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import {
	Player,
	PlayerIncludeOptions,
	Players,
	PlayersIncludeOptions,
	RelationIncludeOptions,
	relatedIdentifiers,
} from './structure/Player';
import { QuickMatchOptions, QuickMatchResponse } from './structure/QuickMatch';

export default class BattleMetricsClass {
	private axios: AxiosInstance;
	constructor(token: string) {
		if (typeof token !== 'string' || token.length === 0) {
			throw new Error('Invalid token provided for BattleMetrics API');
		}
		this.axios = axios.create({
			baseURL: 'https://api.battlemetrics.com',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
	}

	/**
	 * Fetches players from the BattleMetrics API.
	 *
	 * @param {string} search - The search query.
	 * @param {PlayersIncludeOptions[]} include - The resources to include in the response.
	 * @param {number} pageSize - The number of results per page.
	 * @returns {Promise<Players>} A Promise that resolves to an object of Players.
	 * @throws {Error} Will throw an error if the request fails.
	 *
	 * For more information, see the [BattleMetrics API documentation](https://www.battlemetrics.com/developers/documentation#link-GET-player-/players)}).
	 */
	async getPlayers(
		search: string = '',
		include: PlayersIncludeOptions[] = [],
		pageSize: number = 42
	): Promise<Players> {
		try {
			const params = new URLSearchParams();
			if (search.length > 0) params.append('filter[search]', search);
			if (include.length > 0) params.append('include', include.join(','));
			if (pageSize) params.append('page[size]', String(pageSize));

			const res: AxiosResponse = await this.axios.get(`/players?${params.toString()}`);
			const players: Players = res.data as Players;
			return players;
		} catch (err: AxiosError | any) {
			console.error(`Failed to get players. Error: ${err.message}`);
			throw err;
		}
	}

	/**
	 * Fetches a player's data from the BattleMetrics API by their BM ID.
	 *
	 * @param {string} bmId - The Battlemetrics ID of the player to fetch.
	 * @param {PlayerIncludeOptions[]} [include=[]] - An array of strings specifying additional resources to include in the API response. Valid options are "servers" and "identifiers".
	 * @returns {Promise<Player>} A Promise that resolves to the Player object.
	 * @throws {Error} Will throw an error if the request fails.
	 *
	 * For more information, see the [BattleMetrics API documentation](https://www.battlemetrics.com/developers/documentation#link-GET-player-/players/{(%23%2Fdefinitions%2Fplayer%2Fdefinitions%2Fidentity)}).
	 */
	async getPlayerById(bmId: string, include: PlayerIncludeOptions[] = []): Promise<Player> {
		try {
			const params = new URLSearchParams();
			if (include.length > 0) params.append('include', include.join(','));

			const res: AxiosResponse = await this.axios.get(`/players/${bmId}?${params.toString()}`);
			const player: Player = res.data as Player;
			return player;
		} catch (err: AxiosError | any) {
			console.error(`Failed to find players by quick match. Error: ${err.message}`);
			throw err;
		}
	}

	/**
	 * Fetches players from the BattleMetrics API using the quick match feature.
	 *
	 * @param {QuickMatchOptions} options - The options for the quick match feature. This should be an object that conforms to the QuickMatchOptions interface, which includes the type of identifier and the identifier itself.
	 * @returns {Promise<QuickMatchResponse[]>} A Promise that resolves to an array of QuickMatchResponse objects.
	 * @throws {Error} Will throw an error if the request fails.
	 *
	 * For more information, see the [BattleMetrics API documentation](https://www.battlemetrics.com/developers/documentation#link-POST-player-/players/quick-match).
	 */
	async findPlayersByQuickMatch(options: QuickMatchOptions): Promise<QuickMatchResponse[]> {
		try {
			const res: AxiosResponse = await this.axios.post(`/players/match`, {
				data: [options],
			});
			const players: QuickMatchResponse[] = res.data as QuickMatchResponse[];
			return players;
		} catch (err: AxiosError | any) {
			console.error(`Failed to find players by quick match. Error: ${err.message}`);
			throw err;
		}
	}

	/**
	 * Fetches related identifiers for a player from the BattleMetrics API.
	 *
	 * @param {string} bmId - The BattleMetrics ID of the player.
	 * @param {RelationIncludeOptions[]} [include=[]] - An array of strings specifying additional resources to include in the API response.
	 * @returns {Promise<RelatedIdentifiers>} A Promise that resolves to an object of related identifiers.
	 * @throws {Error} Will throw an error if the request fails.
	 */
	async getRelatedIdentifiersForPlayer(
		bmId: string,
		include: RelationIncludeOptions[] = []
	): Promise<relatedIdentifiers> {
		try {
			const params = new URLSearchParams();
			if (include.length > 0) params.append('include', include.join(','));

			const res: AxiosResponse = await this.axios.get(
				`/players/${bmId}/relationships/related-identifiers?${params.toString()}`
			);
			const relatedIdentifiers: relatedIdentifiers = res.data as relatedIdentifiers;
			return relatedIdentifiers;
		} catch (err: AxiosError | any) {
			console.error(`Failed to get related identifiers for player. Error: ${err.message}`);
			throw err;
		}
	}
}

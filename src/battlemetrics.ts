/**
 * @fileoverview This file is the primary service for the BattleMetrics API Wrapper.
 *
 * The BattleMetrics class is used to interact with the BattleMetrics API.
 *
 * Dependencies:
 * - axios: Used to make HTTP requests to the BattleMetrics API.
 */

import axios, { AxiosResponse, AxiosError } from 'axios';
import { Player, PlayerIncludeOptions } from './types/Player';
import { QuickMatchOptions } from './types/QuickMatch';

export default class BattleMetrics {
	private axios: any;
	constructor(token: string) {
		if (!token) throw new Error('No token provided for BattleMetrics API');
		this.axios = axios;
		this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
		this.axios.defaults.baseURL = 'https://api.battlemetrics.com';
		this.axios.defaults.headers.post['Content-Type'] = 'application/json';
	}

	/**
	 * Fetches a player's data from the BattleMetrics API by their BM ID.
	 *
	 * @param {string} id - The Battlemetrics ID of the player to fetch.
	 * @param {PlayerIncludeOptions[]} [include=[]] - An array of strings specifying additional resources to include in the API response. Valid options are "servers" and "identifiers".
	 * @returns {Promise<Player>} A Promise that resolves to the Player object.
	 * @throws {Error} Will throw an error if the request fails.
	 */
	async getPlayerById(id: string, include: PlayerIncludeOptions[] = []): Promise<Player> {
		try {
			const res: AxiosResponse = await this.axios.get(
				`/players/${id}${include.length > 0 ? `?include=${include.join(',')}` : ''}`
			);
			const player: Player = res.data;
			return player;
		} catch (err: AxiosError | any) {
			throw new Error(`Failed to get player by id: ${id}. Error: ${err.message}`);
		}
	}

	/**
	 * Fetches players from the BattleMetrics API using the quick match feature.
	 *
	 * @param {QuickMatchOptions} options - The options for the quick match feature. This should be an object that conforms to the QuickMatchOptions interface, which includes the type of identifier and the identifier itself.
	 * @returns {Promise<Player[]>} A Promise that resolves to an array of Player objects.
	 * @throws {Error} Will throw an error if the request fails.
	 */
	async findPlayersByQuickMatch(options: QuickMatchOptions): Promise<Player[]> {
		try {
			const res: AxiosResponse = await this.axios.post(`/players/match`, {
				data: [options],
			});
			const players: Player[] = res.data;
			return players;
		} catch (err: AxiosError | any) {
			throw new Error(`Failed to find players by quick match. Error: ${err.message}`);
		}
	}
}

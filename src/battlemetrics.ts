/**
 * @fileoverview This file is the primary service for the BattleMetrics API Wrapper.
 * 
 * The BattleMetrics class is used to interact with the BattleMetrics API.
 * 
 * Dependencies:
 * - axios: Used to make HTTP requests to the BattleMetrics API.
 */

import axios, { AxiosResponse, AxiosError } from 'axios';
import { Player } from './types/Player';

export default class BattleMetrics {
    private axios: any;
    constructor(token: string) {
        if (!token) throw new Error("No token provided for BattleMetrics API");
        this.axios = axios
        this.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        this.axios.defaults.baseURL = "https://api.battlemetrics.com";
        this.axios.defaults.headers.post["Content-Type"] = "application/json";
    }

    /**
     * Fetches a player's data from the BattleMetrics API by their ID.
     *
     * @param {string} id - The ID of the player to fetch.
     * @returns {Promise<Player>} A Promise that resolves to the Player object.
     * @throws {Error} Will throw an error if the request fails.
    */
    async getPlayerById(id: string): Promise<Player> {
        try {
            const res: AxiosResponse = await this.axios.get(`/players/${id}`);
            const player: Player = res.data;
            return player;
        } catch (err: AxiosError | any) {
            throw new Error(`Failed to get player by id: ${id}. Error: ${err.message}`);
        }
    }
}
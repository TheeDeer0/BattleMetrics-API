/**
 * Represents a relationship of an entity with another entity in the BattleMetrics system.
 *
 * @interface
 * @property {string} type - The type of the related entity.
 * @property {string} id - The unique ID of the related entity.
 * @property {object} [meta] - Optional. Additional metadata about the relationship.
 * @property {string} [meta.firstSeen] - Optional. The date and time when the related entity was first seen.
 * @property {string} [meta.lastSeen] - Optional. The date and time when the related entity was last seen.
 * @property {number} [meta.timePlayed] - Optional. The total time, in minutes, that the related entity has been played.
 * @property {boolean} [meta.online] - Optional. Whether the related entity is currently online.
 */
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

/**
 * Represents the relationships of an entity with other entities in the BattleMetrics system.
 *
 * @interface
 * @property {Relation[] | Relation} data - The data of the relationships. This can be a single Relation object or an array of Relation objects.
 */
export interface Relationships {
	data: Relation[] | Relation;
}

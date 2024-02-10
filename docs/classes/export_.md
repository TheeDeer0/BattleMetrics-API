[@theedeer/battlemetrics](../README.md) / export=

# Class: export=

## Table of contents

### Constructors

- [constructor](export_.md#constructor)

### Properties

- [axios](export_.md#axios)

### Methods

- [findPlayersByQuickMatch](export_.md#findplayersbyquickmatch)
- [getPlayerById](export_.md#getplayerbyid)

## Constructors

### constructor

• **new export=**(`token`): [`export=`](export_.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`export=`](export_.md)

#### Defined in

src/BattleMetrics.ts:16

## Properties

### axios

• `Private` **axios**: `any`

#### Defined in

src/BattleMetrics.ts:15

## Methods

### findPlayersByQuickMatch

▸ **findPlayersByQuickMatch**(`options`): `Promise`\<`Player`[]\>

Fetches players from the BattleMetrics API using the quick match feature.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `QuickMatchOptions` | The options for the quick match feature. This should be an object that conforms to the QuickMatchOptions interface, which includes the type of identifier and the identifier itself. |

#### Returns

`Promise`\<`Player`[]\>

A Promise that resolves to an array of Player objects.

**`Throws`**

Will throw an error if the request fails.

#### Defined in

src/BattleMetrics.ts:51

___

### getPlayerById

▸ **getPlayerById**(`id`, `include?`): `Promise`\<`Player`\>

Fetches a player's data from the BattleMetrics API by their BM ID.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | The Battlemetrics ID of the player to fetch. |
| `include?` | `PlayerIncludeOptions`[] | `[]` | An array of strings specifying additional resources to include in the API response. Valid options are "servers" and "identifiers". |

#### Returns

`Promise`\<`Player`\>

A Promise that resolves to the Player object.

**`Throws`**

Will throw an error if the request fails.

#### Defined in

src/BattleMetrics.ts:32

# BattleMetrics-API

<div align="center">
  <p>
    <a href="https://discord.gg/8rFdXNX8"><img src="https://img.shields.io/discord/1186098831151091712" alt="Discord server" /></a>
    <a href="https://github.com/TheeDeer0/BattleMetrics-API"><img src="https://img.shields.io/github/license/TheeDeer0/BattleMetrics-API" alt="Github License">
    <a href="https://www.npmjs.com/package/@theedeer0/battlemetrics-api"><img src="https://img.shields.io/npm/v/%40theedeer0%2Fbattlemetrics-api" alt="NPM version" /></a>
  </p>
</div>

This is a robust, TypeScript-supported BattleMetrics API wrapper. It leverages the power of Promises for efficient and readable asynchronous operations, providing a seamless interface for interacting with the BattleMetrics API.

This package is still heavily under development and is missing a lot of the availible BattleMetrics API endpoints

## Support

Support is offered through direct messages on discord (theedeer) or in my [discord server](https://discord.gg/8rFdXNX8)

## Installation

This module is designed for [Node.js](https://nodejs.org/en/).

To install the module, use the following command in your terminal:

``` 
npm i @theedeer0/battlemetrics-api --save
```
After installation, you can import and use the module in your project.

If you're using TypeScript, import the module like this:
``` ts
import BattleMetrics from '@theedeer0/battlemetrics-api'

const bmAPI = new BattleMetrics('BM-TOKEN')
```
If you're using CommonJS, require the module like this:
``` js
const BattleMetrics = require('@theedeer0/battlemetrics-api')

const bmAPI = new BattleMetrics('BM-TOKEN')
```

Remember to replace `BM-TOKEN` with your actual BattleMetrics API token, which can be obtained [here](https://www.battlemetrics.com/developers)


## Example Use

``` ts
import BattleMetrics, { Player } from '@theedeer0/battlemetrics-api';

bmAPI.getPlayerById('123').then(response => {
    const player: Player = response;
    console.log(player);
})
```
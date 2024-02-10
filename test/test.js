const BattleMetrics = require('../dist/index.js')

const bm = new BattleMetrics('123')

const test = async () => {
    const theed = await bm.getPlayerById('1121096958')
    console.log(theed)
}
test();
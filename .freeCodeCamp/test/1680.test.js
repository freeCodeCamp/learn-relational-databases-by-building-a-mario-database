const assert = require('assert');
const { getLastQueryResult, getLastLog } = require('./utils');

describe('You', () => {
  it('should view all the data from "character_actions", "characters", "actions" with JOIN statements', async () => {
    const lastLog = await getLastLog(true);
    const lastQueryResult = await getLastQueryResult();
    const test1 = lastLog.match(/fulljoin/gi).length === 2;
    const column_1 = /character_id/.test(lastQueryResult);
    const column_2 = /action_id/.test(lastQueryResult);
    const correctNumberOfRows = /\(21rows\)/.test(lastQueryResult);

    assert(correctNumberOfRows && test1 && column_1 && column_2);
  });
});

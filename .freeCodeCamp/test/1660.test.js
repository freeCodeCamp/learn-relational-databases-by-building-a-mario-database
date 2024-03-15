const assert = require('assert');
const { getLastQueryResult, getLastLog } = require('./utils');

describe('You', () => {
  it('should view all the data from "characters" and "more_info" with a JOIN statement', async () => {
    const lastLog = await getLastLog(true);
    const lastQueryResult = await getLastQueryResult();
    const test1 = lastLog.match(/fulljoin/gi).length === 1;
    const column_1 = /character_id/.test(lastQueryResult);
    const column_2 = /more_info_id/.test(lastQueryResult);
    const correctNumberOfRows = /\(7rows\)/.test(lastQueryResult);

    assert(correctNumberOfRows && test1 && column_1 && column_2);
  });
});
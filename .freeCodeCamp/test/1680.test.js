const assert = require('assert');
const { getLastQueryResult, getLastLog } = require('./utils');

describe('You', () => {
  it('view all the data from "characters" and "more_info" with a JOIN statement', async () => {
    const lastLog = await getLastLog(true);
    const lastQueryResult = await getLastQueryResult();
    const test1 = /fulljoin/i.test(lastLog);
    const test2 = /character_actions\.character_id=characters\.character_id/i.test(lastLog);
    const test3 = /character_actions\.action_id=actions\.action_id/i.test(lastLog);
    const correctNumberOfRows = /\(21rows\)/.test(lastQueryResult);

    assert(correctNumberOfRows && test1 && test2 && test3);
  });
});

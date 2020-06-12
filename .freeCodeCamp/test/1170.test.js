const assert = require('assert');
const { getLastLog, getLastQueryResult } = require('./utils');

describe('You', () => {
  it('should view suggested columns from "characters" for only Yoshi\'s row', async () => {
    const lastLog = await getLastLog(true);
    const lastQueryResult = await getLastQueryResult()
    const select1 = /statement:selectname,character_idfromcharacterswhere/i;
    const select2 = /statement:selectcharacter_id,namefromcharacterswhere/i;
    const correctColumnsInQuery = select1.test(lastLog) || select2.test(lastLog);
		const correctNumberOfRows = /\(1row\)/.test(lastQueryResult);
    const correctResults = /Yoshi/.test(lastQueryResult);

    assert(correctColumnsInQuery && correctNumberOfRows && correctResults && !/ERROR/.test(lastLog));
  });
});

const assert = require('assert');
const { getLastLog, getLastQueryResult } = require('./utils');

describe('You', () => {
  it('should view the "character_id" and "name" column\'s from "more_info" for Toad\'s row', async () => {
    const lastLog = await getLastLog(true);
    const lastQueryResult = await getLastQueryResult()
    const select1 = /statement:selectname,character_idfromcharacterswhere/i;
    const select2 = /statement:selectcharacter_id,namefromcharacterswhere/i;
    const correctColumnsInQuery = select1.test(lastLog) || select2.test(lastLog);
    const correctNumberOfRows = /\(1row\)/.test(lastQueryResult);
    const correctResult = /Toad/.test(lastQueryResult);

    assert(correctColumnsInQuery && correctNumberOfRows && correctResult && !/ERROR/.test(lastLog));
  });
});

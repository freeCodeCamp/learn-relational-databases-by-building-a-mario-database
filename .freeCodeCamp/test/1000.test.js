const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should view "character_id" column for all rows from "characters"', async () => {
    const lastLog = await getLastLog(true);
    const selectAll = /statement:selectcharacter_idfromcharacters;/i;

    assert(selectAll.test(lastLog) && !/ERROR/.test(lastLog));
  });
});

const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should view "character_id" and "name" column for all rows from "characters"', async () => {
    const lastLog = await getLastLog(true);
    const select1 = /statement:selectname,character_idfromcharacters;/i;
    const select2 = /statement:selectcharacter_id,namefromcharacters;/i;

    assert((select1.test(lastLog) || select2.test(lastLog)) && !/ERROR/.test(lastLog));
  });
});

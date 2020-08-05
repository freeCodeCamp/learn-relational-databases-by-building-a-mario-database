const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  let lastLog;
  before(async () => {
    lastLog = await getLastLog(true);
  });

  it('should view "character_id" and "name" column for all rows from "characters"', () => {
    const select1 = /statement:selectname,character_idfromcharacters;/;
    const select2 = /statement:selectcharacter_id,namefromcharacters;/;
    assert(select1.test(lastLog) || select2.test(lastLog));
  });
});

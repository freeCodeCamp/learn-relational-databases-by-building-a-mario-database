/*const assert = require('assert');
const { getLastLog, getLastQueryResult } = require('./utils');

describe('You', () => {
  let lastLog, lastQueryResult;
  before(async () => {
    lastLog = await getLastLog(true);
		lastQueryResult = await getLastQueryResult();
  });

  it('should view the "character_id" and "name" column\'s from "more_info" for Toad\'s row', () => {
    const select1 = /statement:selectname,character_idfromcharacterswherename='toad';/i;
    const select2 = /statement:selectcharacter_id,namefromcharacterswherename='toad';/i;

    const queryResultTest = /Toad/.test(lastQueryResult);
    const selectTest = select1.test(lastLog) || select2.test(lastLog);

    assert(select1.test(lastLog) || select2.test(lastLog));
  });
});*/

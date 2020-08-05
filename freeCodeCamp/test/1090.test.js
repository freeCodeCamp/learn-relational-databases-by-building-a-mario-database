const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  let lastLog;
  before(async () => {
    lastLog = await getLastLog(true);
  });

  it('should view the "character_id" and "name" column\'s from "more_info" for Toad\'s row', () => {
    const select1 = /statement:selectname,character_idfromcharacterswherename='Toad';/i;
    const select2 = /statement:selectcharacter_id,namefromcharacterswherename='Toad';/i;
		const caseSensitive = /'Toad'/;

		const test1 = select1.test(lastLog) && caseSensitive.test(lastLog);
		const test2 = select2.test(lastLog) && caseSensitive.test(lastLog);

		assert(false);
    assert(select1.test(lastLog) || select2.test(lastLog));
  });
});

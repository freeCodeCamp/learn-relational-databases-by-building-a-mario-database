const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should view all the data in "characters" ordered by "name"', async () => {
    const lastLog = await getLastLog(true);
    const selectAll = /statement:select\*fromcharactersorderbycharacter_id;/i;

    assert(selectAll.test(lastLog) && !/ERROR/.test(lastLog));
  });
});

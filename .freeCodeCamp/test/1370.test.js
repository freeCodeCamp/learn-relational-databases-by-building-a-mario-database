const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should view all the data in "characters" ordered by "character_id"', async () => {
    const lastLog = await getLastLog(true);
    const selectAll = /statement:select\*fromsounds;/i;

    assert(selectAll.test(lastLog) && !/ERROR/.test(lastLog));
  });
});

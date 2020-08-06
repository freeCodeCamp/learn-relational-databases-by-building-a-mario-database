const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  let lastLog;
  before(async () => {
    lastLog = await getLastLog(true);
  });

  it('should view all the data in "characters" ordered by "character_id"', () => {
    const selectAll = /statement:select\*fromsounds;/;
    assert(selectAll.test(lastLog));
  });
});

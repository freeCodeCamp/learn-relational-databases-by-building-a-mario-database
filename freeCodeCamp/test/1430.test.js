const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  let lastLog;
  before(async () => {
    lastLog = await getLastLog(true);
  });

  it('should view all the data in "actions"', () => {
    const selectAll = /statement:select\*fromactions;/;
    assert(selectAll.test(lastLog));
  });
});

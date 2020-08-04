const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  let lastLog;
  before(async () => {
    lastLog = await getLastLog(true);
  });

  it('should use "SELECT" to view all the data in "characters"', () => {
    const selectAll = /statement:select\*fromcharacters;/;
    assert(selectAll.test(lastLog));
  });
});

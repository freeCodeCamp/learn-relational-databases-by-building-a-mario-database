const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  let lastLog;
  before(async () => {
    lastLog = await getLastLog(true);
  });

  it('should use "SELECT" to view all the data in "second_table"', () => {
    const selectAll = /statement:select\*fromsecond_table;/i;
    assert(selectAll.test(lastLog));
  });
});

const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should use "SELECT" to view all the data in "second_table"', async () => {
    const lastLog = await getLastLog(true);
    const selectAll = /statement:select\*fromsecond_table;/i;

    assert(selectAll.test(lastLog) && !/ERROR/.test(lastLog));
  });
});

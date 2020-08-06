const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should use "SELECT" to view all the data in "characters"', async () => {
    const lastLog = await getLastLog(true);
    const selectAll = /statement:select\*frommore_info;/i;

    assert(selectAll.test(lastLog) && !/ERROR/.test(lastLog));
  });
});

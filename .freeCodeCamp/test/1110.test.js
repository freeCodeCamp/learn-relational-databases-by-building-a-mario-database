const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should view all the data in "more_info"', async () => {
    const lastLog = await getLastLog(true);
    const selectAll = /statement:select\*frommore_info;/i;

    assert(selectAll.test(lastLog) && !/ERROR/.test(lastLog));
  });
});

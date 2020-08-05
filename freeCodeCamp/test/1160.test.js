const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  let lastLog;
  before(async () => {
    lastLog = await getLastLog(true);
  });

  it('should view all the data in "more_info"', () => {
    const selectAll = /statement:select\*frommore_info;/;
    assert(selectAll.test(lastLog));
  });
});

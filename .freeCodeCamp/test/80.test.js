const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should be connected to "second_database"', async () => {
    const lastLog = await getLastLog(true);
    const re = /connectionauthorized:user=freecodecampdatabase=second_databaseapplication_name=psql/;

    assert(re.test(lastLog));
  });
});

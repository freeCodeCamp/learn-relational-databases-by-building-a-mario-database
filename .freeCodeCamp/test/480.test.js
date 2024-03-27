const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should be connected to "mario_database"', async () => {
    const lastLog = await getLastLog(true);
    const re = /connectionauthorized:user=freecodecampdatabase=mario_databaseapplication_name=psql/;

    assert(re.test(lastLog));
  });
});

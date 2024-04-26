const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should be logged in to postgresql', async () => {
    const lastLog = await getLastLog(true);
    const re = /connectionauthorized:user=freecodecampdatabase=postgresapplication_name=psql/;

    assert(re.test(lastLog));
  });
});

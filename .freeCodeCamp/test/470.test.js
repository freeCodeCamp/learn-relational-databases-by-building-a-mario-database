const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  it('should list the databases', async () => {
    const lastQueryResult = await getLastQueryResult();

    assert(/Listofdatabases/.test(lastQueryResult))
  });
});

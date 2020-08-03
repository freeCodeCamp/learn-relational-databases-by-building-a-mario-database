const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  let lastQueryResult;
  before(async () => {
    lastQueryResult = await getLastQueryResult();
  });

  it('should list the databases', () => {
    assert(/Listofdatabases/.test(lastQueryResult))
  });
});

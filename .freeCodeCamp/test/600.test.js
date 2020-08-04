const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  it('should display the details of the "characters" table', async () => {
    const lastQueryResult = await getLastQueryResult();

    assert(/Table"public\.characters"/.test(lastQueryResult));
  });
});

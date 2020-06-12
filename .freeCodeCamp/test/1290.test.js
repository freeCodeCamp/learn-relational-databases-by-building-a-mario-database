const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  it('should display the details of the "sounds" table', async () => {
    const lastQueryResult = await getLastQueryResult();

    assert(/Table"public\.sounds"/.test(lastQueryResult));
  });
});

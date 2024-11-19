const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  it('should display the details of the "more_info" table', async () => {
    const lastQueryResult = await getLastQueryResult();

    assert(/Table"public\.more_info"/.test(lastQueryResult));
  });
});

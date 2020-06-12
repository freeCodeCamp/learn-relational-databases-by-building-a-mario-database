const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  it('should display the details of the "character_actions" table', async () => {
    const lastQueryResult = await getLastQueryResult();

    assert(/Table"public\.character_actions"/.test(lastQueryResult));
  });
});

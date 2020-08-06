const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  let lastQueryResult;
  before(async () => {
    lastQueryResult = await getLastQueryResult();
  });

  it('should display the details of the "character_actions" table', () => {
    assert(/Table"public\.character_actions"/.test(lastQueryResult));
  });
});

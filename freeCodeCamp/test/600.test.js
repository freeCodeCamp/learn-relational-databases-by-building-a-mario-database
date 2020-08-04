const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  let lastQueryResult;
  before(async () => {
    lastQueryResult = await getLastQueryResult();
  });

  it('should display the details of the "characters" table', () => {
    assert(/Table"public\.characters"/.test(lastQueryResult));
  });
});

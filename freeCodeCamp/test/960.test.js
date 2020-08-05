const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  let lastQueryResult;
  before(async () => {
    lastQueryResult = await getLastQueryResult();
  });

  it('should display the details of the "more_info" table', () => {
    assert(/Table"public\.more_info"/.test(lastQueryResult));
  });
});

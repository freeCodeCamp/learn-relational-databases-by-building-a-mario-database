const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  let lastQueryResult;
  before(async () => {
    lastQueryResult = await getLastQueryResult();
  });

  it('should display the details of "second_table"', () => {
    assert(/Table"public\.second_table"/.test(lastQueryResult));
  });
});
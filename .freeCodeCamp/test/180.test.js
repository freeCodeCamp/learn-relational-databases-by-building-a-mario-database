const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  it('should display the details of "second_table"', async () => {
    const lastQueryResult = await getLastQueryResult();

    assert(/Table"public\.second_table"/.test(lastQueryResult));
  });
});

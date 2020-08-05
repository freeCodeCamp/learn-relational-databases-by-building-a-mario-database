const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  it('should view the "character_id" column from "characters" for only Bowser\'s row', async () => {
		const lastQueryResult = await getLastQueryResult();
		const correctCharacterId = /\|5\|/.test(lastQueryResult);
		const correctNumberOfRows = /\(1row\)/.test(lastQueryResult);

    assert(correctCharacterId && correctNumberOfRows);
  });
});

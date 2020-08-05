const assert = require('assert');
const { getLastQueryResult } = require('./utils');

describe('You', () => {
  let lastQueryResult;
  before(async () => {
		lastQueryResult = await getLastQueryResult();
  });

  it('should view the "character_id" column from "characters" for only Bowser\'s row', () => {
		const correctCharacterId = /\|5\|/.test(lastQueryResult);
		const correctNumberOfRows = /\(1row\)/.test(lastQueryResult);

    assert(correctCharacterId && correctNumberOfRows);
  });
});

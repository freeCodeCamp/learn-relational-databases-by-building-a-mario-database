const assert = require('assert');
const { getLastQueryResult, getLastLog } = require('./utils');

describe('You', () => {
  let lastLog, lastQueryResult;
  before(async () => {
		lastLog = await getLastLog(true);
		lastQueryResult = await getLastQueryResult();
  });

  it('view all the data from "characters" and "more_info" with a JOIN statement', () => {
		const test1 = /fulljoin/i.test(lastLog);
		const test2 = /characters\.character_id=sounds\.character_id/i.test(lastLog) || /sounds\.character_id=characters\.character_id/i.test(lastLog);

    assert(test1 && test2);
  });
});

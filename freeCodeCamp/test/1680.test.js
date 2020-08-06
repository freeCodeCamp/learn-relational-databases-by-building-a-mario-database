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
		const test2 = /character_actions\.character_id=characters\.character_id/i.test(lastLog);
		const test3 = /character_actions\.action_id=actions\.action_id/i.test(lastLog);

    assert(test1 && test2 && test3);
  });
});

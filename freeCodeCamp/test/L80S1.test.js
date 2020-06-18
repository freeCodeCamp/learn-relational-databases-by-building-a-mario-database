/*const assert = require('assert');
const { removeWhiteSpace, getPsqlLogFile } = require('./utils');

describe('postgres', () => {
  let logFile;
  before(async () => {
    logFile = await getPsqlLogFile();
  });

  it('should be logged in to postgresql', () => {
    const logs = logFile.split('LOG:');
    const lastLog = removeWhiteSpace(logs[logs.length - 1]);
    const re = /connectionauthorized:user=postgresdatabase=second_databaseapplication_name=psql/;
    assert(re.test(lastLog));
  });
});*/

// solution

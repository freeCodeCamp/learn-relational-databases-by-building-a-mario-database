/*const assert = require('assert');
const { removeWhiteSpace, getPsqlLogFile } = require('./utils');

describe('camper', () => {
  let logFile;
  before(async () => {
    logFile = await getPsqlLogFile();
  });

  it('should list the databases', () => {
    const logs = logFile.split('LOG:');
    const lastLog = removeWhiteSpace(logs[logs.length - 1]);
    const re = /statement:SELECTd\.datnameas"Name",pg_catalog\.pg_get_userbyid\(d\.datdba\)as"Owner",pg_catalog\.pg_encoding_to_char\(d\.encoding\)as"Encoding",d\.datcollateas"Collate",d\.datctypeas"Ctype",pg_catalog\.array_to_string\(d\.datacl,E'\\n'\)AS"Accessprivileges"FROMpg_catalog\.pg_databasedORDERBY1;/;
    assert(re.test(lastLog));
  });
});*/

// solution

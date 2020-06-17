/*const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  let lastLog;
  before(async () => {
    lastLog = await getLastLog(true);
  });

  it('should list the databases', () => {
    const l = /statement:SELECTd\.datnameas"Name",pg_catalog\.pg_get_userbyid\(d\.datdba\)as"Owner",pg_catalog\.pg_encoding_to_char\(d\.encoding\)as"Encoding",d\.datcollateas"Collate",d\.datctypeas"Ctype",pg_catalog\.array_to_string\(d\.datacl,E'\\n'\)AS"Accessprivileges"FROMpg_catalog\.pg_databasedORDERBY1;/;
    assert(l.test(lastLog));
  });
});*/

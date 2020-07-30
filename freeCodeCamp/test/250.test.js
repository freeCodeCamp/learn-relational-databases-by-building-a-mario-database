/*const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  let lastLog;
  before(async () => {
    lastLog = await getLastLog(true, 8);
  });

  it('should display the details of "second_table" with suggested command', () => {
    const dSecondTable = /statement:SELECTc\.oid,n\.nspname,c\.relnameFROMpg_catalog\.pg_classcLEFTJOINpg_catalog\.pg_namespacenONn\.oid=c\.relnamespaceWHEREc\.relnameOPERATOR\(pg_catalog\.~\)'\^\(second_table\)\$'COLLATEpg_catalog\.defaultANDpg_catalog\.pg_table_is_visible\(c\.oid\)ORDERBY2,3;/;
    assert(dSecondTable.test(lastLog));
  });
});*/

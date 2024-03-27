const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should display the tables with suggested command', async () => {
    const lastLog = await getLastLog(true);
    const d = /statement:SELECTn\.nspnameas"Schema",c\.relnameas"Name",CASEc\.relkindWHEN'r'THEN'table'WHEN'v'THEN'view'WHEN'm'THEN'materializedview'WHEN'i'THEN'index'WHEN'S'THEN'sequence'WHEN's'THEN'special'WHEN'f'THEN'foreigntable'WHEN'p'THEN'partitionedtable'WHEN'I'THEN'partitionedindex'ENDas"Type",pg_catalog\.pg_get_userbyid\(c\.relowner\)as"Owner"FROMpg_catalog\.pg_classcLEFTJOINpg_catalog\.pg_namespacenONn\.oid=c\.relnamespaceWHEREc\.relkindIN\('r','p','v','m','S','f',''\)ANDn\.nspname<>'pg_catalog'ANDn\.nspname<>'information_schema'ANDn\.nspname!~'\^pg_toast'ANDpg_catalog\.pg_table_is_visible\(c\.oid\)ORDERBY1,2;/;

    assert(d.test(lastLog));
  });
});

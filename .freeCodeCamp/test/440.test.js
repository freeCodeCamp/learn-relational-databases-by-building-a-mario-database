const assert = require('assert');
const { Client } = require('pg');

const database = 'second_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"second_database"', () => {
  it('should not have a table named "first_table"', async () => {
    const dQuery = `SELECT n.nspname as "Schema",
        c.relname as "Name",
        CASE c.relkind WHEN 'r' THEN 'table' WHEN 'v' THEN 'view' WHEN 'm' THEN 'materialized view' WHEN 'i' THEN 'index' WHEN 'S' THEN 'sequence' WHEN 's' THEN 'special' WHEN 'f' THEN 'foreign table' WHEN 'p' THEN 'partitioned table' WHEN 'I' THEN 'partitioned index' END as "Type",
        pg_catalog.pg_get_userbyid(c.relowner) as "Owner"
      FROM pg_catalog.pg_class c
          LEFT JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
      WHERE c.relkind IN ('r','p','v','m','S','f','')
            AND n.nspname <> 'pg_catalog'
            AND n.nspname <> 'information_schema'
            AND n.nspname !~ '^pg_toast'
        AND pg_catalog.pg_table_is_visible(c.oid)
      ORDER BY 1,2;`;
  
    try {
      await client.connect();
      const res = await client.query(dQuery);

      const firstTable = res.rows.findIndex(row => {
        return row.Name === 'first_table';
      })

      assert(firstTable < 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

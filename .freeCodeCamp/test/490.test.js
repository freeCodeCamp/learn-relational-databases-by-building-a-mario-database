const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"You"', () => {
  it('should not have a database named "second_database"', async () => {
    const lQuery = `SELECT d.datname as "Name",
          pg_catalog.pg_get_userbyid(d.datdba) as "Owner",
          pg_catalog.pg_encoding_to_char(d.encoding) as "Encoding",
          d.datcollate as "Collate",
          d.datctype as "Ctype",
          pg_catalog.array_to_string(d.datacl, E'\n') AS "Access privileges"
      FROM pg_catalog.pg_database d
      ORDER BY 1;`;
  
    try {
      await client.connect();
      const res = await client.query(lQuery);

      const secondDatabase = res.rows.findIndex(row => {
        return row.Name === 'second_database';
      });

      assert(secondDatabase < 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

const assert = require('assert');
const { Client } = require('pg');

const database = 'second_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"You"', () => {
  it('should have a database named "mario_database" and not one named "first_database"', async () => {
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

      const marioDatabase = res.rows.findIndex(row => {
        return row.Name === 'mario_database';
      })

      const firstDatabase = res.rows.findIndex(row => {
        return row.Name === 'first_database';
      })

      assert(firstDatabase < 0 && marioDatabase >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

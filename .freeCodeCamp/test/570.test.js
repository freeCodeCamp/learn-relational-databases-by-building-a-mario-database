const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"characters"', () => {
  it('should have a column named "name" of type "VARCHAR(30)" that cannot be NULL', async () => {
    const query = `SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = 'public' AND is_nullable = 'NO' AND table_name = 'characters' AND column_name = 'name' AND data_type = 'character varying' AND character_maximum_length = 30;`;

    try {
      await client.connect();
      const res = await client.query(query);

      assert(res.rows.length >= 1);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

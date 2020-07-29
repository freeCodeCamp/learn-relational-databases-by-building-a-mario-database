const assert = require('assert');
const { Client } = require('pg');

const database = 'second_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"second_database"', () => {
  it('should have a table named "first_table"', async () => {
    const query = 'SELECT * FROM first_table;'

    try {
      await client.connect();
      const res = await client.query(query);
      assert(!!res);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

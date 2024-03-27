const assert = require('assert');
const { Client } = require('pg');

const database = 'second_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"second_table"', () => {
  it('should have the correct row for "Luigi"', async () => {
    const query = `SELECT * FROM second_table;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const luigiRow = res.rows.findIndex(row => {
        return row.id === 3 && row.username === 'Luigi';
      });

      assert(luigiRow >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

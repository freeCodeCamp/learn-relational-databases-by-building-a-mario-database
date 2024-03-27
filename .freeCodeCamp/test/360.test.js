const assert = require('assert');
const { Client } = require('pg');

const database = 'second_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"second_table"', () => {
  it('should not have a row for "Mario"', async () => {
    const query = `SELECT * FROM second_table;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const marioRow = res.rows.findIndex(row => {
        return row.username === 'Mario';
      });

      assert(marioRow < 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

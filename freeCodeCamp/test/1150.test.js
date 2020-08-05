const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "more_info" table', () => {
  it('should have the correct row for "Daisy"', async () => {
    const query = `SELECT * FROM more_info WHERE birthday = '1989-07-31';`;

    try {
      await client.connect();
      const res = await client.query(query);

      const daisyRow = res.rows.findIndex(row => {
        return row.height === null && row.weight === null && row.character_id === 6;
      });

      assert(daisyRow >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

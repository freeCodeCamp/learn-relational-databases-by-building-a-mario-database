/*const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "more_info" table', () => {
  it('should have the correct row for "Bowser"', async () => {
    const query = `SELECT * FROM more_info WHERE birthday = '1990-10-29' AND height = 258 AND weight = 300 AND character_id = 5;`;

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
});*/

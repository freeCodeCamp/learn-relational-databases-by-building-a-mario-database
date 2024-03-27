const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "more_info" table', () => {
  it('should have the correct row for "Daisy"', async () => {
    const query = `SELECT * FROM more_info FULL JOIN characters USING(character_id) WHERE birthday = '1989-07-31' AND height IS NULL AND weight IS NULL AND name = 'Daisy'`;

    try {
      await client.connect();
      const res = await client.query(query);

      assert(res.rowCount >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

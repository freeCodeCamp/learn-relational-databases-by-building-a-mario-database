const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "more_info" table', () => {
  it('should have the correct row for "Toad"', async () => {
    const query = `SELECT * FROM more_info FULL JOIN characters USING(character_id) WHERE birthday = '1950-01-10' AND height = 66 AND weight = 35.6 AND name = 'Toad'`;

    try {
      await client.connect();
      const res = await client.query(query);

      assert(res.rowCount >= 1);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

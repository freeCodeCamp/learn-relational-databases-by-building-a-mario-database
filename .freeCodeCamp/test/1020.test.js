const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "more_info" table', () => {
  it('should have the correct row for "Mario"', async () => {
    const query = `select * from more_info full join characters using(character_id) where birthday = '1981-07-09' AND height = 155 AND weight = 64.5 AND name='Mario'`;

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

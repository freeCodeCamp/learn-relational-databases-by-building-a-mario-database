const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "sounds" table', () => {
  it('should have a row for "its-a-me.wav"', async () => {
    const query = `SELECT * FROM sounds FULL JOIN characters USING(character_id) WHERE filename = 'its-a-me.wav' AND name = 'Mario'`;

    try {
      await client.connect();
      const res = await client.query(query);

  	  assert(res.rowCount > 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

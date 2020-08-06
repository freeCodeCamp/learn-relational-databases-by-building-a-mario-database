const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "sounds" table', () => {
  it('should have a row for "its-a-me.wav"', async () => {
    const query = `SELECT * FROM sounds WHERE filename = 'its-a-me.wav' AND character_id = 1;`;

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

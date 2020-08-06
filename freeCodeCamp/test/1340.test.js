/*const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "sounds" table', () => {
  it('should have a row for "oh-yeah.wav" that Luigi uses', async () => {
    const query = `SELECT * FROM sounds WHERE filename = 'oh-yeah.wav' AND character_id = 2;`;

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
});*/

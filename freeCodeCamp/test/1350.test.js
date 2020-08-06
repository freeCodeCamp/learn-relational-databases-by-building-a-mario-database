const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "sounds" table', () => {
  it('should have "yay.wav" and "woo-hoo.wav" rows that Peach uses', async () => {
    const query1 = `SELECT * FROM sounds WHERE filename = 'yay.wav' AND character_id = 3;`;
    const query2 = `SELECT * FROM sounds WHERE filename = 'woo-hoo.wav' AND character_id = 3;`;

    try {
      await client.connect();
      const res1 = await client.query(query1);
      const res2 = await client.query(query2);

  	  assert(!!res1 && !!res2);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

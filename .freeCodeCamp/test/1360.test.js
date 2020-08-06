const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "sounds" table', () => {
  it('should have "mm-hmm.wav" and "yahoo.wav" rows with the correct foreign key values', async () => {
    const query1 = `SELECT * FROM sounds WHERE filename = 'mm-hmm.wav' AND character_id = 3;`;
    const query2 = `SELECT * FROM sounds WHERE filename = 'yahoo.wav' AND character_id = 1;`;

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

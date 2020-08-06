const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "sounds" table', () => {
  it('should have "mm-hmm.wav" and "yahoo.wav" rows with the correct foreign key values', async () => {
    const query1 = `SELECT * FROM sounds FULL JOIN characters USING(character_id) WHERE filename = 'mm-hmm.wav' AND name = 'Peach'`;
    const query2 = `SELECT * FROM sounds FULL JOIN characters USING(character_id) WHERE filename = 'yahoo.wav' AND name = 'Mario'`;

    try {
      await client.connect();
      const res1 = await client.query(query1);
      const res2 = await client.query(query2);

  	  assert(res1.rowCount > 0 && res2.rowCount > 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

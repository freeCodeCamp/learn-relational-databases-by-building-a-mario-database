const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "character_actions" table', () => {
  it('should have three rows for Yoshi\'s actions', async () => {
    const query = `SELECT * FROM character_actions WHERE character_id = 7 AND action_id = 1 OR character_id = 7 AND action_id = 2 OR character_id = 7 AND action_id = 3;`;

    try {
      await client.connect();
      const res = await client.query(query);

  	  assert(res.rows.length >= 3);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

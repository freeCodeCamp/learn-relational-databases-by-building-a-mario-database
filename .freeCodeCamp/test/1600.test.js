const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "character_actions" table', () => {
  it('should have three rows for Luigi\'s actions', async () => {
    const query = `SELECT * FROM character_actions FULL JOIN characters USING(character_id) FULL JOIN actions USING(action_id) WHERE name = 'Luigi'`;

    try {
      await client.connect();
      const res = await client.query(query);

  	  assert(res.rowCount >= 3);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

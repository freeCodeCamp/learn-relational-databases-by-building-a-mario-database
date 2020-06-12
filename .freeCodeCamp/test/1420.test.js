const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "actions" table', () => {
  it('should have a row for "duck"', async () => {
    const query = `SELECT * FROM actions WHERE action = 'duck';`;

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

const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"mario_database"', () => {
  it('should have a table named "more_info"', async () => {
    const query = 'SELECT * FROM more_info;'

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

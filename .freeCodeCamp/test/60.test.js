const assert = require('assert');
const { Client } = require('pg');

const database = 'postgres';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('You', () => {
  it('should have a database named second_database', async () => {
    const query = "SELECT datname FROM pg_catalog.pg_database WHERE datname='second_database';";

    try {
      await client.connect();
      const res = await client.query(query);
      assert(res.rowCount && res.rowCount === 1);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

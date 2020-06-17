/*const assert = require('assert');
const { client } = require('./utils');

describe('You', () => {
  it('should have a database named "first_database"', async () => {
    const query = "SELECT datname FROM pg_catalog.pg_database WHERE datname='first_database';";

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
});*/

// solution

const assert = require('assert');
const { Client } = require('pg');

const database = 'second_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"second_table"', () => {
  it('should not have a "username" column', async () => {
    const query = `SELECT * FROM second_table;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const usernameColumn = res.fields.findIndex(column => {
        return column.name === 'username';
      })

      assert(usernameColumn < 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

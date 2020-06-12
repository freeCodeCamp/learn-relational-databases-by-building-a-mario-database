const assert = require('assert');
const { Client } = require('pg');

const database = 'second_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"second_table"', () => {
  it('should not have an "id" column', async () => {
    const query = `SELECT * FROM second_table;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const idColumn = res.fields.findIndex(column => {
        return column.name === 'id';
      })

      assert(idColumn < 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

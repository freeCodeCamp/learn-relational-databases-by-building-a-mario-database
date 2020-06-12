const assert = require('assert');
const { Client } = require('pg');

const database = 'second_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"second_table"', () => {
  it('should have a column named "username" and no column named "name"', async () => {
    const query = `SELECT * FROM second_table;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const nameColumn = res.fields.findIndex(column => {
        return column.name === 'name';
      });

      const usernameColumn = res.fields.findIndex(column => {
        return column.name === 'username' && column.dataTypeID === 1043 && column.dataTypeModifier === 34;
      })

      assert(nameColumn < 0 && usernameColumn >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

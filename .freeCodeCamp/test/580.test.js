const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"characters"', () => {
  it('should have a column named "homeland" of type "VARCHAR(60)"', async () => {
    const query = `SELECT * FROM characters;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const homelandColumn = res.fields.findIndex(column => {
        return column.name === 'homeland' && column.dataTypeID === 1043 && column.dataTypeModifier === 64;
      })

      assert(homelandColumn >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

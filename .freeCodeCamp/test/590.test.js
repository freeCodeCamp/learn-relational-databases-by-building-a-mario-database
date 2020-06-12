const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"characters"', () => {
  it('should have a column named "favorite_color" of type "VARCHAR(30)"', async () => {
    const query = `SELECT * FROM characters;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const favoriteColorColumn = res.fields.findIndex(column => {
        return column.name === 'favorite_color' && column.dataTypeID === 1043 && column.dataTypeModifier === 34;
      })

      assert(favoriteColorColumn >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

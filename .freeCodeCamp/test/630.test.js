const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"characters"', () => {
  it('should have the correct row for "Luigi"', async () => {
    const query = `SELECT * FROM characters;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const luigiRow = res.rows.findIndex(row => {
        return row.name === 'Luigi' && row.homeland === 'Mushroom Kingdom' && row.favorite_color === 'Green' && row.character_id;
      });

      assert(luigiRow >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

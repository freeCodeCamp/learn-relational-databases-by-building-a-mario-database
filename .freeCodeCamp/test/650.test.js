const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"characters"', () => {
  it('should have the correct row for "Peach"', async () => {
    const query = `SELECT * FROM characters;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const peachRow = res.rows.findIndex(row => {
        return row.name === 'Peach' && row.homeland === 'Mushroom Kingdom' && row.favorite_color === 'Pink' && row.character_id;
      });

      assert(peachRow >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

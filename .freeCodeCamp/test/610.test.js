const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"characters"', () => {
  it('should have the correct row for "Mario"', async () => {
    const query = `SELECT * FROM characters;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const marioRow = res.rows.findIndex(row => {
        return row.name === 'Mario' && row.homeland === 'Mushroom Kingdom' && row.favorite_color === 'Red' && row.character_id;
      });

      assert(marioRow >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

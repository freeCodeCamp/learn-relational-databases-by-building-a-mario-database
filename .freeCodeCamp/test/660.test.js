const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"characters"', () => {
  it('should have the correct rows for "Toadstool" and "Bowser"', async () => {
    const query = `SELECT * FROM characters;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const toadstoolRow = res.rows.findIndex(row => {
        return row.name === 'Toadstool' && row.homeland === 'Mushroom Kingdom' && row.favorite_color === 'Red' && row.character_id;
      });

      const bowserRow = res.rows.findIndex(row => {
        return row.name === 'Bowser' && row.homeland === 'Mushroom Kingdom' && row.favorite_color === 'Green' && row.character_id;
      });

      assert(toadstoolRow >= 0 && bowserRow >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

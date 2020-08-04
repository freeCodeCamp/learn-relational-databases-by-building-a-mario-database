const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('Toad', () => {
  it('should have the correct "favorite_color"', async () => {
    const query = `SELECT * FROM characters;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const toadRow = res.rows.findIndex(row => {
        return row.name === 'Toad' && row.homeland === 'Mushroom Kingdom' && row.favorite_color === 'Blue' && row.character_id;
      });

      assert(toadRow >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

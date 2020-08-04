const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('Bowser', () => {
  it('should have the correct "favorite_color"', async () => {
    const query = `SELECT * FROM characters;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const bowserRow = res.rows.findIndex(row => {
        return row.name === 'Bowser' && row.homeland === 'Mushroom Kingdom' && row.favorite_color === 'Yellow' && row.character_id;
      });

      assert(bowserRow >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

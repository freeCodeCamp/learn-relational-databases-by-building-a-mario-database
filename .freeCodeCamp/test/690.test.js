const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('You', () => {
  it('should have the correct values for "Daisy"', async () => {
    const query = `SELECT * FROM characters;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const daisyRow = res.rows.findIndex(row => {
        return row.name === 'Daisy' && row.homeland === 'Sarasaland' && row.favorite_color === 'Orange' && row.character_id;
      });

      assert(daisyRow >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

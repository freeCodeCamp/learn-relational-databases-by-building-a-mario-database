const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"characters"', () => {
  it('should have the correct rows for "Daisy" and "Yoshi"', async () => {
    const query = `SELECT * FROM characters;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const daisyRow = res.rows.findIndex(row => {
        return row.name === 'Daisy' && row.homeland === 'Sarasaland' && row.favorite_color === 'Yellow' && row.character_id;
      });

      const yoshiRow = res.rows.findIndex(row => {
        return row.name === 'Yoshi' && row.homeland === 'Dinosaur Land' && row.favorite_color === 'Green' && row.character_id;
      });

      assert(daisyRow >= 0 && yoshiRow >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

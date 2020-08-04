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

      const notToadRow = res.rows.findIndex(row => {
        return row.name === 'Toad' && row.homeland === 'Mushroom Kingdom' && row.favorite_color === 'Red' && row.character_id;
      });

      const correctRows = res.rows.filter(row => {
        const row1 = row.name === 'Luigi' && row.homeland === 'Mushroom Kingdom' && row.favorite_color === 'Green';
        const row2 = row.name === 'Peach' && row.homeland === 'Mushroom Kingdom' && row.favorite_color === 'Pink';
        const row3 = row.name === 'Bowser' && row.homeland === 'Mushroom Kingdom' && row.favorite_color === 'Green';
        const row4 = row.name === 'Yoshi' && row.homeland === 'Dinosaur Land' && row.favorite_color === 'Green';
        const row5 = row.name === 'Daisy' && row.homeland === 'Sarasaland' && row.favorite_color === 'Orange';
        const row6 = row.name === 'Toad' && row.homeland === 'Mushroom Kingdom' && row.favorite_color === 'Blue';
        const row7 = row.name === 'Mario' && row.homeland === 'Mushroom Kingdom' && row.favorite_color === 'Red';

        if(row1 || row2 || row3 || row4 || row5 || row6 || row7) {
          return row;
        }
      });

      assert(notToadRow < 0 && correctRows.length >= 7);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

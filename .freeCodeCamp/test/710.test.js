const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('You', () => {
  it('should have updated "Toad\'s" name', async () => {
    const query = `SELECT * FROM characters;`;

    try {
      await client.connect();
      const res = await client.query(query);

    	const toadstoolRow = res.rows.findIndex(row => {
        return row.name === 'Toadstool'
      });

      const toadRow = res.rows.findIndex(row => {
        return row.name === 'Toad'
      });

    	const marioRow = res.rows.findIndex(row => {
        return row.name === 'Mario'
      });

      assert(toadstoolRow < 0 && toadRow >= 0 && marioRow < 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

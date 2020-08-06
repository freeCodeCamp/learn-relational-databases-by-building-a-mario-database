const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "sounds" table', () => {
  it('should have a column named "filename" with the correct properties', async () => {
    const query = `SELECT * FROM sounds;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const filenameColumn = res.fields.findIndex(column => {
        return column.name === 'filename';
      });

      assert(filenameColumn >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

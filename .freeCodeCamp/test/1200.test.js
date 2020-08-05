const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "more_info" table', () => {
  it('should have a column named "height_in_cm" and no column named "height"', async () => {
    const query = `SELECT * FROM more_info;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const heightInCmColumn = res.fields.findIndex(column => {
        return column.name === 'height_in_cm' && column.dataTypeID === 23;
      });

      const heightColumn = res.fields.findIndex(column => {
        return column.name === 'height';
      });

      assert(heightInCmColumn >= 0 && heightColumn < 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

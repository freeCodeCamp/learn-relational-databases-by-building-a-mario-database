const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "more_info" table', () => {
  it('should have a column named "weight_in_kg" and no column named "weight"', async () => {
    const query = `SELECT * FROM more_info;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const weightInKgColumn = res.fields.findIndex(column => {
        return column.name === 'weight_in_kg' && column.dataTypeID === 1700 && column.dataTypeModifier === 262149;
      });

      const weightColumn = res.fields.findIndex(column => {
        return column.name === 'weight';
      });

      assert(weightInKgColumn >= 0 && weightColumn < 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

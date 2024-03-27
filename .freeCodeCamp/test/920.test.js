const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"more_info" table', () => {
  it('should have a column named "height" of type "INT"', async () => {
    const query = `SELECT * FROM more_info;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const heightColumn = res.fields.findIndex(column => {
        return column.name === 'height' && column.dataTypeID === 23;
      });

      assert(heightColumn >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

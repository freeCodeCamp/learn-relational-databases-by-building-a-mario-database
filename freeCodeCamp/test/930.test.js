const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"more_info" table', () => {
  it('should have a column named "weight" of type "NUMERIC(4, 1)"', async () => {
    const query = `SELECT * FROM more_info;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const weightColumn = res.fields.findIndex(column => {
        return column.name === 'weight' && column.dataTypeID === 1700 && column.dataTypeModifier === 262149;
      });

      assert(weightColumn >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

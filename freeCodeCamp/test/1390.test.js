const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "actions" table', () => {
  it('should have a column named "action" with the correct properties', async () => {
    const query = `SELECT * FROM actions;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const filenameColumn = res.fields.findIndex(column => {
        return column.name === 'action' && dataTypeID === 1043 && dataTypeModifier === 24;
      });

      assert(filenameColumn >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

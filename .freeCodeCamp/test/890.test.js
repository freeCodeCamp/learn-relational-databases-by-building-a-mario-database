const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"more_info"', () => {
  it('should have a column named "more_info_id" of type "SERIAL"', async () => {
    const query = `SELECT table_name, column_name, column_default, is_nullable FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = 'public';`;

    try {
      await client.connect();
      const res = await client.query(query);
      
      const moreInfoIdColumn = res.rows.findIndex(column => {
        return column.column_name === 'more_info_id' && column.table_name === 'more_info' && column.column_default && column.is_nullable === 'NO';
      });

      assert(moreInfoIdColumn >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

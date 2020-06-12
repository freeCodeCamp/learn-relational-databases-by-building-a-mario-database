const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"characters"', () => {
  it('should not have the "name" column as its primary key', async () => {
    const query = `SELECT c.table_name, c.column_name FROM information_schema.key_column_usage AS c LEFT JOIN information_schema.table_constraints AS t ON t.constraint_name = c.constraint_name WHERE t.constraint_type = 'PRIMARY KEY';`;

    try {
      await client.connect();
      const res = await client.query(query);

      const nameRow = res.rows.findIndex(row => {
        return row.table_name === 'characters' && row.column_name === 'name';
      });

      assert(nameRow < 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

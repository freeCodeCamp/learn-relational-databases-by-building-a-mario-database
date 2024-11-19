const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"mario_database"', () => {
  it('should have a table named "actions" that has an "action_id" column with the correct properties', async () => {
    const query1 = `SELECT c.table_name, c.column_name FROM information_schema.key_column_usage AS c LEFT JOIN information_schema.table_constraints AS t ON t.constraint_name = c.constraint_name WHERE t.constraint_type = 'PRIMARY KEY' AND t.table_name = 'actions' AND c.column_name = 'action_id';`;
    const query2 = `SELECT column_default FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = 'public' AND table_name = 'actions' AND column_name = 'action_id';`;

    try {
      await client.connect();
      const res1 = await client.query(query1);
      const res2 = await client.query(query2);

      assert(res1.rows.length >= 1 && res2.rows[0].column_default);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

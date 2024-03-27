const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "more_info" table', () => {
  it('should have a "character_id" column as a foreign key that references the correct column', async () => {
    const query = `SELECT tc.table_schema, tc.constraint_name, tc.table_name, kcu.column_name, ccu.table_name AS foreign_table_name, ccu.column_name AS foreign_column_name FROM information_schema.table_constraints tc JOIN information_schema.key_column_usage kcu ON tc.constraint_name = kcu.constraint_name JOIN information_schema.constraint_column_usage ccu ON ccu.constraint_name = tc.constraint_name WHERE constraint_type = 'FOREIGN KEY';`;

    try {
      await client.connect();
      const res = await client.query(query);

      const foreignKeyColumn = res.rows.findIndex(row => {
        return row.table_name === 'more_info' && row.column_name === 'character_id' && row.foreign_table_name === 'characters' && row.foreign_column_name === 'character_id';
      });

      assert(foreignKeyColumn >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

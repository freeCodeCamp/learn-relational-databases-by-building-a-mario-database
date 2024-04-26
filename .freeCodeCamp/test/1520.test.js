const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "character_actions" table', () => {
  it('should have a composite primary key made from the "character_id" and "action_id" columns', async () => {
    const query = `SELECT tc.table_schema, tc.constraint_name, tc.table_name, kcu.column_name, ccu.table_name AS foreign_table_name, ccu.column_name AS foreign_column_name FROM information_schema.table_constraints tc JOIN information_schema.key_column_usage kcu ON tc.constraint_name = kcu.constraint_name JOIN information_schema.constraint_column_usage ccu ON ccu.constraint_name = tc.constraint_name WHERE constraint_type = 'PRIMARY KEY';`;

    try {
      await client.connect();
      const res = await client.query(query);

      const compositeKey = res.rows.filter(row => {
				const test1 = row.table_name === 'character_actions' && row.column_name === 'character_id' && row.foreign_table_name === 'character_actions' && row.foreign_column_name === 'character_id';
				const test2 = row.table_name === 'character_actions' && row.column_name === 'character_id' && row.foreign_table_name === 'character_actions' && row.foreign_column_name === 'action_id';
				const test3 = row.table_name === 'character_actions' && row.column_name === 'action_id' && row.foreign_table_name === 'character_actions' && row.foreign_column_name === 'character_id';
				const test4 = row.table_name === 'character_actions' && row.column_name === 'action_id' && row.foreign_table_name === 'character_actions' && row.foreign_column_name === 'action_id';

				if(test1 || test2 || test3 || test4) {
					return row;
				}
      });

      assert(compositeKey.length === 4);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

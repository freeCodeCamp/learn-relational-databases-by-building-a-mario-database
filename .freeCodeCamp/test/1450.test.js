const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('The "character_actions" table', () => {
  it('should have a column named "character_id" with the correct properties', async () => {
    const query = `SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema = 'public' AND is_nullable = 'NO' AND table_name = 'character_actions' AND column_name = 'character_id' AND data_type = 'integer';`;
    
    try {
      await client.connect();
      const res = await client.query(query);
      assert(res.rows.length >= 1);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

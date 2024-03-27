const assert = require('assert');
const { Client } = require('pg');

const database = 'mario_database';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"more_info" table', () => {
  it('should have a column named "birthday" of type "DATE"', async () => {
    const query = `SELECT * FROM more_info;`;

    try {
      await client.connect();
      const res = await client.query(query);

      const birthdayColumn = res.fields.findIndex(column => {
        return column.name === 'birthday' && column.dataTypeID === 1082;
      });

      assert(birthdayColumn >= 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});

const fs = require('fs');
const util = require('util');
const path = require('path');
const { Client } = require('pg');

const readFile = util.promisify(fs.readFile);

const removeWhiteSpace = (str = '') => {
  return str.replace(/\s/g, '');
};

const getPsqlLogFile = async (dir = process.cwd()) => {
  const pathToPsqlLogFile = path.join(dir, './test', 'pg.log');
  const psqlLogFile = await readFile(pathToPsqlLogFile, 'utf8');

  if (!psqlLogFile) {
    throw new Error(`Could not find ${pathToPsqlLogFile}`);
  }
  return psqlLogFile;
};

const connectionString = 'postgresql://postgres@localhost:5432/postgres';
const client = new Client({
  connectionString: connectionString,
});

exports.removeWhiteSpace = removeWhiteSpace;
exports.getPsqlLogFile = getPsqlLogFile;
exports.connectionString = connectionString;
exports.client = client;

const fs = require('fs');
const util = require('util');
const path = require('path');
const { Client } = require('pg');

const readFile = util.promisify(fs.readFile);

const getPgLogs = async (dir = process.cwd()) => {
  const pathToPgLogs = path.join(dir, './test', 'pg.log');
  const pgLogs = await readFile(pathToPgLogs, 'utf8');

  if (!pgLogs) {
    throw new Error(`Could not find ${pathToPgLogs}`);
  }
  return pgLogs;
};

const connectionString = 'postgresql://postgres@localhost:5432/postgres';
const client = new Client({
  connectionString: connectionString,
});

const getLastLog = async (removeWhiteSpace = false) => {
  const pathToPgLogs = path.join(process.cwd(), './test', 'pg.log');
  const pgLogs = await readFile(pathToPgLogs, 'utf8');

  if (!pgLogs) {
    throw new Error(`Could not find ${pathToPgLogs}`);
  }

  const logsArray = pgLogs.split('LOG: ');
  const lastLog = logsArray[logsArray.length - 1];

  if(removeWhiteSpace) return lastLog.replace(/\s/g, '');
  
  return lastLog;
}

exports.getPgLogs = getPgLogs;
exports.getLastLog = getLastLog;
exports.connectionString = connectionString;
exports.client = client;

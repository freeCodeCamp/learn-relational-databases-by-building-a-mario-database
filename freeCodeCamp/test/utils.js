const fs = require('fs');
const util = require('util');
const path = require('path');

const readFile = util.promisify(fs.readFile);

const getPgLogs = async (dir = process.cwd()) => {
  const pathToPgLogs = path.join(dir, './test', 'pg.log');
  const pgLogs = await readFile(pathToPgLogs, 'utf8');

  if (!pgLogs) {
    throw new Error(`Could not find ${pathToPgLogs}`);
  }
  return pgLogs;
};

const getLastLog = async (removeWhiteSpace = false, logsBack = 1) => {
  const pathToPgLogs = path.join(process.cwd(), './test', 'pg.log');
  const pgLogs = await readFile(pathToPgLogs, 'utf8');

  if (!pgLogs) {
    throw new Error(`Could not find ${pathToPgLogs}`);
  }

  const logsArray = pgLogs.split('LOG: ');
  const previousLog = logsArray[logsArray.length - logsBack];

  if(removeWhiteSpace) return previousLog.replace(/\s/g, '');
  
  return previousLog;
}

exports.getPgLogs = getPgLogs;
exports.getLastLog = getLastLog;

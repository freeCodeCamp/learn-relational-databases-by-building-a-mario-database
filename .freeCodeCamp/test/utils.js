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

const getLastQueryResult = async () => {
  const pathToQueryResults = path.join(process.cwd(), './test', 'queryResults.log');
  const queryResults = await readFile(pathToQueryResults, 'utf8');

  if (!queryResults) {
    throw new Error(`Could not find ${pathToQueryResults}`);
  }

  const regexSplitter = /\n{2,}/g;
  const resultsArray = queryResults.split(regexSplitter);
  const lastResult = resultsArray[resultsArray.length - 2];

  return lastResult.replace(/\s/g, '');
}

exports.getPgLogs = getPgLogs;
exports.getLastLog = getLastLog;
exports.getLastQueryResult = getLastQueryResult;

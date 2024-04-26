const fs = require('fs');
const util = require('util');
const path = require('path');
const parseCommand = require('shell-quote').parse;

const readFile = util.promisify(fs.readFile);

const getLastCommand = async (howManyBack = 0, parse = true, dir = process.cwd()) => {
  const pathToBashLogs = path.join(dir, '../../', '.bash_history');
  const bashLogs = await readFile(pathToBashLogs, 'utf8');

  if (!bashLogs) {
    throw new Error(`Could not find ${pathToBashLogs}`);
  }

  const logs = bashLogs.split('\n');
  const lastLog = logs[logs.length - howManyBack - 2];

  if(parse) {
    return parseCommand(lastLog);
  } else {
    return lastLog;
  }
};

const getPgLogs = async (dir = process.cwd()) => {
  const pathToPgLogs = path.join(dir, '../../', 'pg.log');
  const pgLogs = await readFile(pathToPgLogs, 'utf8');

  if (!pgLogs) {
    throw new Error(`Could not find ${pathToPgLogs}`);
  }
  return pgLogs;
};

const getLastLog = async (removeWhiteSpace = false, logsBack = 1) => {
  const pathToPgLogs = path.join(process.cwd(), '../../', 'pg.log');
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
  const pathToQueryResults = path.join(process.cwd(), '../../', 'queryResults.log');
  const queryResults = await readFile(pathToQueryResults, 'utf8');

  if (!queryResults) {
    throw new Error(`Could not find ${pathToQueryResults}`);
  }

  const regexSplitter = /\n{2,}/g;
  const resultsArray = queryResults.split(regexSplitter);
  const lastResult = resultsArray[resultsArray.length - 2];

  return lastResult.replace(/\s/g, '');
}

exports.getLastCommand = getLastCommand;
exports.getPgLogs = getPgLogs;
exports.getLastLog = getLastLog;
exports.getLastQueryResult = getLastQueryResult;

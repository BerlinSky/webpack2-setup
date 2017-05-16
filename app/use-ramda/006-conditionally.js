import R from 'ramda';

const systemConfig1 = {
  env: "development"
}

const systemConfig2 = {
  env: "staging"
}

const systemConfig3 = {
  env: "preprod"
} 

const systemConfig4 = {
  env: "production"
}

const debugCrazy = (x) => {
  console.log("Increase log level to the maximum.", x);
}

const logAccess = (x) => {
  console.log("Log user access.", x);
}

const removeLogs = (x) => {
  console.log("Clean up all logs.", x);
}

const connectDB = (x) => {
  console.log("Connecting to database.", x);
}

const isDevEnv = R.propEq('env', 'development');
const isStagingEnv = R.propEq('env', 'staging');
const isPreprodEnv = R.propEq('env', 'preprod');
const isProdEnv = R.propEq('env', 'production');

export const checkSystemConfig = () => {
  // ifElse
  const action1 = R.ifElse(isDevEnv, R.curry(debugCrazy), R.curry(logAccess));

  console.info('action 1 ========')
  action1(systemConfig1);
  action1(systemConfig2);

  const action2 = R.ifElse(isDevEnv, R.curry(debugCrazy), R.identity);

  console.info('action 2 ========')
  action2(systemConfig1);
  action2(systemConfig2);

  const action3 = R.when(isDevEnv, R.curry(debugCrazy));

  console.info('action 3 ========')
  action3(systemConfig1);
  action3(systemConfig2);

  const action4 = R.unless(isDevEnv, R.curry(debugCrazy));

  console.info('action 4 ========')
  action4(systemConfig1);
  action4(systemConfig2);

  const actions5 = R.cond([
    [isDevEnv, R.curry(debugCrazy)],
    [isStagingEnv, R.curry(removeLogs)],
    [isPreprodEnv, R.curry(connectDB)],
    [isProdEnv, R.curry(logAccess)]
  ]);

  console.info('action 5 ========')
  actions5(systemConfig1);
  actions5(systemConfig2);
  actions5(systemConfig3);
  actions5(systemConfig4);
}
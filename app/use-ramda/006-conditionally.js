import R from 'ramda';

const systemConfig1 = {
  env: "development"
}

const systemConfig2 = {
  env: "staging"
}

// const systemConfig3 = {
//   env: "preprod"
// } 

// const systemConfig4 = {
//   env: "production"
// }

const debugCrazy = (x) => {
  console.log("Increase log level to the maximum.", x);
}

const logAccess = (x) => {
  console.log("Log user access.", x);
}

const isDevEnv = R.propEq('env', 'development');

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
}
const development = {
  name: 'development',
  asset_path: '/assets',
  port: 6141,
};

const production = {
  name: process.env.ENVIRONMENT,
  asset_path: process.env.ASSET_PATH,
  port: process.env.PORT,
};

module.exports = eval(
  process.env.ENVIRONMENT == undefined
    ? development
    : eval(process.env.ENVIRONMENT)
);

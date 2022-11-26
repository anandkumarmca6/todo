const development = {
  name: 'development',
  asset_path: '/assets',
  db: 'todo_development',
  port: 6264,
};

const production = {
  name: process.env.ENVIRONMENT,
  asset_path: process.env.ASSET_PATH,
  db: process.env.DB_NAME,
  port: process.env.PORT,
};

module.exports = eval(
  process.env.ENVIRONMENT == undefined
    ? development
    : eval(process.env.ENVIRONMENT)
);

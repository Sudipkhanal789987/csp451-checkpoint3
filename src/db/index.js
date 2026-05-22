const databaseConfig = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || "csp451db",
};

function connect() {
  return {
    connected: true,
    config: databaseConfig,
    timestamp: new Date().toISOString(),
  };
}

module.exports = {
  connect,
};

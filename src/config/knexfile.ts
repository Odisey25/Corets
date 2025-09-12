import * as dotenv from "dotenv";
dotenv.config();

const commonConfig = {
  client: "mssql",
  pool: { min: 0, max: 10 }
};

const config = {
  development: {
    ...commonConfig,
    connection: {
      server: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      options: {
        encrypt: false,
        trustServerCertificate: true
      }
    }
  },
  odbc: {
    client: "mssql",
    connection: {
      connectionString: process.env.ODBC_CONNECTION_STRING
    }
  }
};

export default config;

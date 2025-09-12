import knex from "knex";
import * as dotenv from "dotenv";

dotenv.config();

const useOdbc = process.env.DB_USE_ODBC === "true";

console.log("🔌 DB Configuración:", {
  modo: useOdbc ? "ODBC" : "Directa",
  host: useOdbc ? process.env.ODBC_CONNECTION_STRING : process.env.DB_HOST,
  db: process.env.DB_NAME
});

const db = knex({
  client: "mssql",
  connection: useOdbc
    ? { connectionString: process.env.ODBC_CONNECTION_STRING }
    : {
        server: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        options: { encrypt: false, trustServerCertificate: true }
      },
  pool: { min: 0, max: 10 }
});

export default db;

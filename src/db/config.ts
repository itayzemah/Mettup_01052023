import knex, { Knex } from "knex";

export function getDBConnection() {
  return knex(config);
}
const config: Knex.Config = {
  client: "mssql",
  debug: true,
  connection: {
    host: "localhost",
    port: 57000,
    user: "sa",
    password: "Str#ng_Passw#rd",
    database: "NODE_MEETUP",
    connectionTimeout: 30000,
  },
  pool: {
    min: 0,
    max: 200,
    idleTimeoutMillis: 1000,
  },
};

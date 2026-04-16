import pg from "pg";
import { dbConfig } from "./db.config";

const { Pool } = pg;

let pool: pg.Pool | null = null;

export function getPool(): pg.Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: dbConfig.connectionString,
      max: 5,
    });
  }
  return pool;
}

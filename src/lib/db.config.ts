/**
 * Database configuration for PostgreSQL.
 *
 * Set the DATABASE_URL environment variable on your server,
 * or edit the fallback connection string below for local development.
 *
 * Format: postgresql://user:password@host:port/database
 */
export const dbConfig = {
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://user:password@localhost:5432/sapiencehcm",
};

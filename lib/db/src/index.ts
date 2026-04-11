import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema/index.js";

const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL || "postgresql://user:password@localhost.tld/dbname";

if (!connectionString || connectionString.includes("localhost.tld")) {
  console.warn("⚠️ POSTGRES_URL or DATABASE_URL is not set! You need a Vercel Postgres connection string to run the database.");
}

const sql = neon(connectionString);

export const db = drizzle({ client: sql, schema });

export * from "./schema/index.js";


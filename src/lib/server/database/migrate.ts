import {drizzle} from "drizzle-orm/postgres-js";
import {migrate} from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const connectionString = import.meta.env.VITE_DATABASE_URL
console.log(connectionString)

if (!connectionString) {
    throw new Error("VITE_DATABASE_URL is required");
}

const sql = postgres(connectionString, {prepare: false, max: 1});

const db = drizzle(sql);

async function main() {
    try {
        await sql`SELECT 1 + 1 AS result`;
        console.log("Database connection successful");
        await migrate(db, {migrationsFolder: "drizzle"});
    } catch (error) {
        console.error(error);
        process.exit(1);
    } finally {
        await sql.end();
    }
}

main();
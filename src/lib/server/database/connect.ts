import {drizzle} from 'drizzle-orm/postgres-js'
import {VITE_DATABASE_URL} from "$env/static/private";
import postgres from 'postgres'

const connectionString = VITE_DATABASE_URL
console.log(`Connecting`, connectionString)

// Disable prefetch as it is not supported for "Transaction" pool mode
// @ts-ignore
const client = postgres(connectionString, {prepare: false})
const db = drizzle(client);

export default db
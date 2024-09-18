import {defineConfig, type Config} from 'drizzle-kit';
// @ts-ignore

// @ts-ignore
export default defineConfig({
    schema: './src/lib/server/database/schema.ts',
    out: './drizzle',
    dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
    dbCredentials: {
        url: process.env.VITE_DATABASE_URL,
    },
})satisfies Config;
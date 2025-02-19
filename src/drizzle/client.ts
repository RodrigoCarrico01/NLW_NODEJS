import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import { env } from '../env'
import { subscriptions } from './schema/subscriptions'
// Todas as vezes que eu mudar o schema tenho que dar o npx drizzle-kit generate e depois o migrate

export const pg = postgres(env.POSTGRES_URL)
export const db = drizzle(pg, {
    schema:{
        subscriptions,
    }
 })


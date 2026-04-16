

# Store Form Submissions in PostgreSQL with Configurable Connection

## Overview

Create a server-side layer that saves all form submissions (Request Demo, Request Quote, Webinars, Training Program, Getting Started) to a PostgreSQL database. A config file will hold the database connection string, which you can update later when hosting your own Postgres instance.

## Architecture

```text
Browser Form → createServerFn (POST) → pg client → PostgreSQL
                                            ↑
                                    src/lib/db.config.ts
                                    (connection string)
```

## Changes

### 1. Install `pg` npm package
Add `pg` (node-postgres) as a dependency — it works in the server runtime.

### 2. Create `src/lib/db.config.ts`
A config file where you set your PostgreSQL connection details later:
```ts
export const dbConfig = {
  connectionString: process.env.DATABASE_URL || "postgresql://user:password@localhost:5432/sapiencehcm",
};
```
Reads from `DATABASE_URL` env var at runtime, with a placeholder fallback you can edit.

### 3. Create `src/lib/db.server.ts`
A server-only module that exports a reusable `pg.Pool` instance using the config above.

### 4. Create `src/lib/submissions.functions.ts`
Server functions (one per form type) using `createServerFn` that:
- Accept validated form data
- Insert a row into a `form_submissions` table with columns: `id`, `form_type`, `data` (JSONB), `created_at`
- Return success/error status

### 5. Update all 5 form pages
Each form's `onSubmit` will call the corresponding server function, passing the collected form data. On success, show the thank-you message. On error, show a toast.

### 6. Provide SQL migration script
A `migrations/001_create_submissions.sql` file you can run on your local Postgres:
```sql
CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type VARCHAR(50) NOT NULL,
  data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Files

| Action | File |
|--------|------|
| **New** | `src/lib/db.config.ts` — connection string config |
| **New** | `src/lib/db.server.ts` — pg Pool instance |
| **New** | `src/lib/submissions.functions.ts` — server functions for all 5 forms |
| **New** | `migrations/001_create_submissions.sql` — table creation script |
| **Edit** | `src/routes/request-demo.tsx` — call server function on submit |
| **Edit** | `src/routes/request-quote.tsx` — call server function on submit |
| **Edit** | `src/routes/webinars.tsx` — call server function on submit |
| **Edit** | `src/routes/training-program.tsx` — call server function on submit |
| **Edit** | `src/routes/getting-started.tsx` — call server function on submit |

## Configuration

Once you have your Postgres running, either:
- Set `DATABASE_URL` as an environment variable, or
- Edit the fallback string in `src/lib/db.config.ts`

No code changes needed to switch databases — just update the connection string.


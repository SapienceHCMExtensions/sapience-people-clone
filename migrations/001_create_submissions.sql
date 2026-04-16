-- Run this on your PostgreSQL database to create the form_submissions table.
-- Usage: psql -U your_user -d sapiencehcm -f migrations/001_create_submissions.sql

CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type VARCHAR(50) NOT NULL,
  data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Optional: index on form_type for faster filtering
CREATE INDEX IF NOT EXISTS idx_form_submissions_type ON form_submissions (form_type);

-- Optional: index on created_at for date-range queries
CREATE INDEX IF NOT EXISTS idx_form_submissions_created ON form_submissions (created_at DESC);

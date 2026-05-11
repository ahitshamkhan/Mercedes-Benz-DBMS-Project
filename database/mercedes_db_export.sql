-- ============================================================
-- Mercedes-Benz Pakistan — Complete Database Export
-- This single file runs ALL SQL files in the correct order
-- Use this to set up the entire database in one shot
-- ============================================================

-- Drop existing database if you want a fresh start
DROP DATABASE IF EXISTS mercedes_benz;

SOURCE database/01_schema.sql;
SOURCE database/02_indexes.sql;
SOURCE database/03_views.sql;
SOURCE database/04_triggers.sql;
SOURCE database/05_procedures.sql;
SOURCE database/06_sample_data.sql;

-- Verify: Run these after setup
-- USE mercedes_benz;
-- SHOW TABLES;
-- SELECT COUNT(*) FROM users;
-- SELECT COUNT(*) FROM cars;
-- SELECT * FROM dashboard_stats;

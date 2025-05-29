const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://usuario:senha@localhost:5432/anamnese_db'
});
module.exports = pool;

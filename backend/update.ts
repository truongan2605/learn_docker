import mysql from 'mysql2/promise';

async function update() {
  const pool = mysql.createPool({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'rootpassword',
    database: 'vp_silk_db'
  });

  await pool.query('UPDATE users SET password = ? WHERE username = ?', ['$2b$10$n7cJOW9V3Y74E89Idzr6yOFFk5d5k/1RUPfAdPgHY.4xJguZoUNV6', 'admin']);
  console.log('Password updated successfully');
  process.exit(0);
}

update();

import 'dotenv/config';
import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: process.env.DB_HOST || 'host.docker.internal',
    user: process.env.DB_APP_USER,
    password: process.env.DB_APP_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
});

export default db;
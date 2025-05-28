import 'dotenv/config';
import mysql from 'mysql2/promise';

const db = mysql.createPool({
    // Uses DB_HOST from environment variables if defined, falls back to 'host.docker.internal' for Docker setups, and defaults to 'localhost' otherwise.
    host: process.env.DB_HOST || (process.env.DOCKER ? 'host.docker.internal' : 'localhost'),
    user: process.env.DB_APP_USER,
    password: process.env.DB_APP_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
});

export default db;
import mysql from 'mysql2/promise';
import { Pool } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();


const connection: Pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.PASSWORD_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DB_NOME
});








export default connection;





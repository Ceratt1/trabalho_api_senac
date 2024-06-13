import mysql from 'mysql2/promise';
import { Pool } from 'mysql2/promise';

const connection: Pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_loja'
});






export default connection;

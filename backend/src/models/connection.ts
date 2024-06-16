import mysql from 'mysql2/promise';
import { Pool } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();


// const connection: Pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.PASSWORD_DB,
//     password: process.env.PASSWORD_DB,
//     database: process.env.DB_NOME
// });

//caso não altere, é pq vc ta programando em 2 pc's diferentes, e um é windows :c

const connection: Pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: process.env.DB_NOME
});






export default connection;





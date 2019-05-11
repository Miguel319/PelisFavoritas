import mysql from 'promise-mysql';
import claves from './claves';

const pool = mysql.createPool(claves.database);

pool.getConnection()
    .then(conexion => {
        pool.releaseConnection(conexion);
        console.log('Base de datos conectada')
    });

export default pool;
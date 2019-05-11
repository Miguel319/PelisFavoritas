"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const claves_1 = __importDefault(require("./claves"));
const pool = promise_mysql_1.default.createPool(claves_1.default.database);
pool.getConnection()
    .then(conexion => {
    pool.releaseConnection(conexion);
    console.log('Base de datos conectada');
});
exports.default = pool;

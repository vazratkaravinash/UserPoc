"use strict"
const mysql = require('mysql');
const db = require('../database.json').dev;
const pool = mysql.createPool(db);

/**
 * Create a connection pool and return one connection to the user
 */
const mysqlConnection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            } else {
                resolve(connection);
            }
        });
    })
}

module.exports = {
    mysqlConnection
}
"use strict"

const UserSql = require("../migrations/query/user.query");
const db = require("../helpers/mysql");

/**
 * Funcion to add new user into the database.
 * @param {Object} userObject 
 */
const addUser = (userObject) => {
    return new Promise((resolve, reject) => {
        db.mysqlConnection().then(connection => {
            return connection.query(UserSql.addUser, userObject, (err, isUserAdded) => {
                if (!err) {
                    connection.release();
                    resolve(isUserAdded);
                }
                else {
                    reject(err);
                }
            })
        }).catch(error => {
            reject(error);
        });
    });
}

/**
 * Function to delete user.
 * @param {Number} id 
 */
const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        db.mysqlConnection().then(connection => {
            return connection.query(UserSql.deleteUser, [id], (err, isUserAdded) => {
                connection.release();
                if(!err) {
                    resolve(isUserAdded);
                }
                else {
                    reject(err);
                }
            })
        }).catch(error => {
            reject(error);
        });
    });
}

/**
 * Function to get all user details.
 */
const getAllUser = () => {
    return new Promise((resolve, reject) => {
        db.mysqlConnection().then(connection => {
            return connection.query(UserSql.getAllUsers, (err, users) => {
                connection.release();
                if(!err) {
                    resolve(users);
                }
                else {
                    reject(err);
                }
            })
        }).catch(error => {
            reject(error);
        });
    });
}

/**
 * Function to update user details.
 * @param {Object} userObj 
 */
const updateUser = (userObj) => {
    return new Promise((resolve, reject) => {
        db.mysqlConnection().then(connection => {
            let id = userObj.id;
            delete userObj.id;
            return connection.query(UserSql.updateUser,[userObj,id], (err, isUserUpdated) => {
                connection.release();
                if(!err) {
                    resolve(isUserUpdated);
                }
                else {
                    reject(err);
                }
            })
        }).catch(error => {
            reject(error);
        });
    });
}

/**
 * Function to get user details by id.
 * @param {Number} id 
 */
const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        db.mysqlConnection().then(connection => {
            return connection.query(UserSql.getUser,[id], (err, user) => {
                console.log(user)
                connection.release();
                if(!err) {
                    resolve(user);
                }
                else {
                    reject(err);
                }
            })
        }).catch(error => {
            reject(error);
        });
    });
} 

module.exports = {
    addUser,
    deleteUser,
    getAllUser,
    updateUser,
    getUserById
}
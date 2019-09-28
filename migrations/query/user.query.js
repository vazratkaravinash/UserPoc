"use strict"

var userSql = {
    // addUser: "INSERT INTO users (id, name, dob, address, city, state, mobile, email) VALUES ?",
    addUser: "INSERT INTO users SET ?",
    deleteUser: "DELETE FROM users WHERE id = ?",
    updateUser: "UPDATE users SET ? WHERE id = ?",
    getAllUsers: "SELECT * FROM users",
    getUser: "SELECT * FROM users WHERE id = ?"
}

module.exports = userSql;
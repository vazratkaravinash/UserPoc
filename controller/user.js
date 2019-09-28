"use strict";

const UserModel = require("../model/users");

const addUser = (req, res) => {
    if (!req.body) {
        res.render()
    }
    else {
        console.log(req.body)
        UserModel.addUser(req.body).then(isUserAdded => {
            res.render("user/addUsers", { layout: "userLayout", success: "Successfully added user" })
        }).catch(error => {
            res.render("user/addUsers", { layout: "userLayout", error: "Failed to add user" })
        })
    }
}

const getUser = (req, res) => {
    UserModel.getAllUser().then(users => {
        res.render("user/getUsers", { layout: "userLayout", data: users })
    }).catch(error => {
        res.render("error");
    })
}

const deleteUser = (req, res) => {
    UserModel.deleteUser(req.query.id).then(isUserDeleted => {
        UserModel.getAllUser().then(users => {
            res.render("user/getUsers", { layout: "userLayout", data: users, success: "Successfully deleted user" })
        })
    }).catch(error => {
        res.render("error");
    })
}

const getUserById = (req, res) => {
    UserModel.getUserById(req.query.id).then(user => {
        if (user.length) {
            res.render("user/updateUser", { layout: "userLayout", data: user[0] })
        }
        else {
            return UserModel.getAllUser().then(users => {
                res.render("user/getUsers", { layout: "userLayout", data: users, error: "Invalid userId" })
            })
        }
    }).catch(error => {
        res.render("error");
    })
}

const updateUser = (req, res) => {
    if (!req.body) {
        res.render()
    }
    else {
        console.log("->>>>----->>>",req.body)
        UserModel.updateUser(req.body).then(isUserAdded => {
            return UserModel.getAllUser().then(users => {
                res.render("user/getUsers", { layout: "userLayout", data: users, error: "Successfully Updated the User" })
            })
        }).catch(error => {
            res.render("user/addUsers", { layout: "userLayout", error: "Failed to add user" })
        })
    }
}
module.exports = {
    addUser,
    getUser,
    deleteUser,
    getUserById,
    updateUser
}
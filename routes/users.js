var express = require('express');
var router = express.Router();
const UserController = require("../controller/user");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/addUsers.hbs', { layout: "userLayout"});
});

/* GET home page. */
router.get('/getUser', UserController.getUser);

router.get("/deleteUser", UserController.deleteUser);
router.get("/updateUser", UserController.getUserById);
router.post("/updateUser", UserController.updateUser)
router.post("/addUser", UserController.addUser);

module.exports = router;

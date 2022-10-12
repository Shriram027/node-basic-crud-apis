const express = require('express');
const router = express.Router();
const userController = require("../Controllers/user.controller");

router.post("/signIn",userController.login);
router.post("/add-user",userController.register);
router.get("/user-list/",userController.users);
router.get("/user-detail/:cid",userController.usersDetail);
router.put("/update/:cid",userController.update);
router.delete("/remove-account/:cid",userController.delete);

module.exports = router;
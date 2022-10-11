const express = require('express');
const router = express.Router();
const userController = require("../Controllers/user.controller");

router.post("/signIn",userController.login);
router.post("/signUp",userController.register);
router.get("/user-list",userController.users);
router.put("/update",userController.update);
router.delete("/remove-account",userController.delete);

module.exports = router;
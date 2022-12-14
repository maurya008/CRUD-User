// URL Path
const express = require("express");
const { home, createUser, editUser, getUser, deleteUser } = require("../controllers/userController")
const router = express.Router();

router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUser", getUser);
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;




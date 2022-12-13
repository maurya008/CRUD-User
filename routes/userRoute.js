// URL Path
const express = require("express");
const { home, createUser, editUser } = require("../controllers/userController")
const router = express.Router();

router.get("/", home);
router.post("/createUser", createUser);
// router.put("/editUser/:id", editUser)
// router.delete("/")

module.exports = router;




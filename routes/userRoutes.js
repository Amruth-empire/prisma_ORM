const express = require("express");
const router = express.Router();
const { getAllUsers, createUser } = require("../controllers/userController");

// GET all users
router.get("/", getAllUsers);

// POST new user
router.post("/", createUser);

module.exports = router;

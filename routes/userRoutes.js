import { Router } from "express";
import { getAllUsers, createUser } from "../controller/userController.js";

const router = Router();

// GET all users
router.get("//users", getAllUsers);

// POST new user
router.post("//users", createUser);

export default router;

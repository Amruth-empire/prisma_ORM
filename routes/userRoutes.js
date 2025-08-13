import { Router } from "express";
import { getAllUsers, createUser } from "../controllers/userController.js";

const router = Router();

// GET all users
router.get("/", getAllUsers);

// POST new user
router.post("/", createUser);

export default router;

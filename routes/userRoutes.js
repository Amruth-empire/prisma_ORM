import { Router } from "express";
import { getAllUsers, createUser,getUserById ,updateUser,deleteUser} from "../controller/userController.js";

const router = Router();

// GET all users
router.get("/list", getAllUsers);

//GET user by ID
router.get("/:id", getUserById);

// POST new user
router.post("/create", createUser);

// PUT update user by ID
router.put("/:id", updateUser);

// DELETE user by ID
router.delete("/:id", deleteUser);

export default router;

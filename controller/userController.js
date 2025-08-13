import pkg from "@prisma/client";
import e from "express";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

// GET all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany(); //user is the model name in Prisma schema
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

//GET user by ID
export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) }, // Ensure id is an integer
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE user by ID
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) }, // Ensure id is an integer
      data: { name:name },
    });
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

//Delete user by ID

export const deleteUser = async (req, res) => {
  const { id } = req.params;  
  try {
    const deletedUser = await prisma.user.delete({
      where: { id: parseInt(id) }, // Ensure id is an integer
    });
    res.json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// CREATE new user
export const createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: { name:name, email:email },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

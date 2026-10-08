import { Router } from "express";
import {
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    updateUser,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";
import {validate} from "../middlewares/validate.js";
import {
    userIdValidation,
    createUserValidation,
    updateUserValidation,
} from "../middlewares/validations/user.validation.js";

export const userRouter = Router();

userRouter.post("/users", authMiddleware, adminMiddleware, createUserValidation, validate, createUser);
userRouter.get("/users", authMiddleware, getAllUsers);
userRouter.get("/users/:id", authMiddleware, adminMiddleware, userIdValidation, validate, getUserById);
userRouter.put("/users/:id", authMiddleware, adminMiddleware, userIdValidation, updateUserValidation, validate, updateUser);
userRouter.delete("/users/:id", authMiddleware, adminMiddleware, userIdValidation, validate, deleteUser);
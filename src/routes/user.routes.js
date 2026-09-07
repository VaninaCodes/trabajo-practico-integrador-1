import { Router } from "express";
import {
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    updateUser,
} from "../controllers/user.controller.js";

// import {validate} from "../middlewares/validate.js";
// import {
//   createUserValidation,
//   updateUserValidation,
// } from "../middlewares/validations/user.validation.js";

export const userRouter = Router();

userRouter.post("/api/users", createUser);
userRouter.get("/api/users", getAllUsers);
userRouter.get("/api/users/:id", getUserById);
userRouter.put("/api/users/:id", updateUser);
userRouter.delete("/api/users/:id", deleteUser);
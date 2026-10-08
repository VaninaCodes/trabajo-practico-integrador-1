import { Router} from "express";
import {login, logout, register, getProfile, updateProfile} from "../controllers/auth.controller.js";
import {authMiddleware} from "../middlewares/auth.middleware.js"

export const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/profile", authMiddleware, getProfile);
authRouter.put("/profile", authMiddleware, updateProfile);
authRouter.post("/logout", authMiddleware, logout);

export default authRouter;

import { Router } from "express";
import {
    createTag,
    deleteTag,
    getAllTags,
    getTagById,
    updateTag,
} from "../controllers/tag.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";
import {validate} from "../middlewares/validate.js";
import {
  tagIdValidation,
  createTagValidation,
  updateTagValidation,
} from "../middlewares/validations/tag.validation.js";

export const tagRouter = Router();

tagRouter.post("/tags", authMiddleware, adminMiddleware, createTagValidation, validate, createTag);
tagRouter.get("/tags", getAllTags);
tagRouter.get("/tags/:id", authMiddleware, adminMiddleware, tagIdValidation, validate, getTagById);
tagRouter.put("/tags/:id", authMiddleware, adminMiddleware, tagIdValidation, updateTagValidation, validate, updateTag);
tagRouter.delete("/tags/:id", authMiddleware, adminMiddleware, tagIdValidation, validate, deleteTag);
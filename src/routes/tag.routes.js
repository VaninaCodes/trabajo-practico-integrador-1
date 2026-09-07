import { Router } from "express";
import {
    createTag,
    deleteTag,
    getAllTags,
    getTagById,
    updateTag,
} from "../controllers/tag.controller.js";
import { getRounds } from "bcrypt";

// import {validate} from "../middlewares/validate.js";
// import {
//   createUserValidation,
//   updateUserValidation,
// } from "../middlewares/validations/user.validation.js";

export const tagRouter = Router();

tagRouter.post("/api/tags", createTag);
tagRouter.get("/api/tags", getAllTags);
tagRouter.get("/api/tags/:id", getTagById);
tagRouter.put("/api/tags/:id", updateTag);
tagRouter.delete("/api/tags/:id", deleteTag);
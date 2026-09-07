import { Router } from "express";
import {
    createTag,
    deleteTag,
    getAllTags,
    getTagById,
    updateTag,
} from "../controllers/tag.controller.js";

// import {validate} from "../middlewares/validate.js";
// import {
//   createUserValidation,
//   updateUserValidation,
// } from "../middlewares/validations/user.validation.js";

export const tagRouter = Router();

tagRouter.post("/tags", createTag);
tagRouter.get("/tags", getAllTags);
tagRouter.get("/tags/:id", getTagById);
tagRouter.put("/tags/:id", updateTag);
tagRouter.delete("/tags/:id", deleteTag);
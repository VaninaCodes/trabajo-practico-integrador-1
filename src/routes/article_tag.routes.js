import { Router } from "express";
import {
    addTagToArticle,
    removeTagFromArticle,
} from "../controllers/article_tag.controller.js";

// import {validate} from "../middlewares/validate.js";
// import {
//   createUserValidation,
//   updateUserValidation,
// } from "../middlewares/validations/user.validation.js";

export const articleTagRouter = Router();

articleTagRouter.post("/api/articles-tags", addTagToArticle);
articleTagRouter.delete("/api/articles-tags/:articleTagId", removeTagFromArticle);
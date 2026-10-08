import { Router } from "express";
import {
    createArticle,
    deleteArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
} from "../controllers/article.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {validate} from "../middlewares/validate.js";
import {
  articleIdValidation,
  createArticleValidation,
  updateArticleValidation,
} from "../middlewares/validations/article.validation.js";

export const articleRouter = Router();

articleRouter.post("/articles", authMiddleware, createArticleValidation, validate, createArticle);
articleRouter.get("/articles", getAllArticles);
articleRouter.get("/articles/:id", authMiddleware, articleIdValidation, validate, getArticleById);
articleRouter.put("/articles/:id", authMiddleware, articleIdValidation, updateArticleValidation, validate, updateArticle);
articleRouter.delete("/articles/:id", authMiddleware, articleIdValidation, validate, deleteArticle);
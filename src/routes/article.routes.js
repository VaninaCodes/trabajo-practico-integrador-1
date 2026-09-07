import { Router } from "express";
import {
    createArticle,
    deleteArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
} from "../controllers/article.controller.js";

// import {validate} from "../middlewares/validate.js";
// import {
//   createUserValidation,
//   updateUserValidation,
// } from "../middlewares/validations/user.validation.js";

export const articleRouter = Router();

articleRouter.post("/api/articles", createArticle);
articleRouter.get("/api/articles", getAllArticles);
articleRouter.get("/api/articles/:id", getArticleById);
articleRouter.put("/api/articles/:id", updateArticle);
articleRouter.delete("/api/articles/:id", deleteArticle);
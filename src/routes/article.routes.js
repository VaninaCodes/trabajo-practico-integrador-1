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

articleRouter.post("/articles", createArticle);
articleRouter.get("/articles", getAllArticles);
articleRouter.get("/articles/:id", getArticleById);
articleRouter.put("/articles/:id", updateArticle);
articleRouter.delete("/articles/:id", deleteArticle);
import { Router } from "express";
import homeController from "../controllers/HomeController";

const router = new Router();

// STORE/CRETE -> Cria um novo usuário -> POST
router.get("/", homeController.index);

export default router;

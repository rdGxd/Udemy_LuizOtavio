import { Router } from "express";
import homeController from "../controllers/HomeController";

const router = new Router();

// INDEX -> listar todos os usuários -> GET
router.get("/", homeController.index);

export default router;

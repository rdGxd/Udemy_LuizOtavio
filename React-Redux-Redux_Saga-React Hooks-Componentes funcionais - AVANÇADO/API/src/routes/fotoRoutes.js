import { Router } from "express";
import fotoController from "../controllers/FotoController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// STORE/CRETE -> Cria um novo usuário -> POST
router.post("/", loginRequired, fotoController.store);

export default router;

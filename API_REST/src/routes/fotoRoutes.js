import { Router } from "express";
import fotoController from "../controllers/FotoController";

const router = new Router();

// STORE/CRETE -> Cria um novo usuário -> POST
router.post("/", fotoController.store);

export default router;

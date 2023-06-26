import { Router } from "express";
import tokenController from "../controllers/TokenController";

const router = new Router();

// STORE/CRETE -> Cria um novo usuário -> POST
router.post("/", tokenController.store);

export default router;

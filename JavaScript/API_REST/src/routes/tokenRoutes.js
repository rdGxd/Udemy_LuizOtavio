import { Router } from "express";
import tokenController from "../controllers/TokenController";

const router = new Router();

// STORE/CRETE -> Cria um novo token -> POST
router.post("/", tokenController.store);

export default router;

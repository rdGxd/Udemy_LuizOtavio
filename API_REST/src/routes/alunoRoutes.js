import { Router } from "express";
import alunoController from "../controllers/AlunoController";

const router = new Router();

// INDEX -> listar todos os usuários -> GET
router.get("/", alunoController.index);

export default router;

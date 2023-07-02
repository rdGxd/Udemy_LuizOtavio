import { Router } from "express";
import alunoController from "../controllers/AlunoController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// INDEX -> listar todos os usuários -> GET
router.get("/", alunoController.index);

// SHOW -> Mostra um usuário -> GET
router.get("/:id", alunoController.show);

// STORE/CRETE -> Cria um novo usuário -> POST
router.post("/", loginRequired, alunoController.store);

// UPDATE -> Atualiza um usuário -> PATCH ou PUT
router.put("/:id", loginRequired, alunoController.update);

// DELETE -> Apaga um usuário -> DELETE
router.delete("/:id", loginRequired, alunoController.delete);

export default router;

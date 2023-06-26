import { Router } from "express";
import userController from "../controllers/UserController";

const router = new Router();

export default router;

// INDEX -> listar todos os usuários -> GET
router.get("/", userController.index);

// STORE/CRETE -> Cria um novo usuário -> POST
router.post("/", userController.store);

// SHOW -> Mostra um usuário -> GET
router.get("/:id", userController.show);

// UPDATE -> Atualiza um usuário -> PATCH ou PUT
router.put("/:id", userController.update);

// DELETE -> Apaga um usuário -> DELETE
router.delete("/:id", userController.delete);

/*
Patch quando você altera somente um valor
PUT quando você pega um objeto inteiro e troca ele por outro objeto inteiro
*/

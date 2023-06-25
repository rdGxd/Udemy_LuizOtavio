import { Router } from "express";
import userController from "../controllers/UserController";

const router = new Router();

router.post("/", userController.store);

export default router;

/*
NOME DOS MÉTODOS -> A gente pode ter em cada controller até 5 métodos

INDEX -> Precisa listar todos os usuários -> GET
STORE/CRETE -> Cria um novo usuário -> POST
DELETE -> Apaga um usuário -> DELETE
SHOW -> Mostra um usuário -> GET
UPDATE -> Atualiza um usuário -> PATCH ou PUT

Patch quando você altera somente um valor
PUT quando você pega um objeto inteiro e troca ele por outro objeto inteiro
*/

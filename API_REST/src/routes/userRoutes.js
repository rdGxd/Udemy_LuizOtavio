import { Router } from "express";
import userController from "../controllers/UserController";

// Importando o middlewares para verificação de token
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

export default router;

// NÃO DEVERIA EXISTIR
/*
// INDEX -> listar todos os usuários -> GET
router.get("/", userController.index);
// SHOW -> Mostra um usuário -> GET
router.get("/:id", userController.show);
*/

// SÃO NECESSÁRIOS

// STORE/CRETE -> Cria um novo usuário -> POST
router.post("/", userController.store);

// UPDATE -> Atualiza um usuário -> PATCH ou PUT
router.put("/", loginRequired, userController.update);

// DELETE -> Apaga um usuário -> DELETE
router.delete("/", loginRequired, userController.delete);

/*
Patch quando você altera somente um valor
PUT quando você pega um objeto inteiro e troca ele por outro objeto inteiro
*/

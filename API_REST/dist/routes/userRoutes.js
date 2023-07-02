"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

// Importando o middlewares para verificação de token
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

exports. default = router;

// NÃO DEVERIA EXISTIR
/*
// INDEX -> listar todos os usuários -> GET
router.get("/", userController.index);
// SHOW -> Mostra um usuário -> GET
router.get("/:id", userController.show);
*/

// SÃO NECESSÁRIOS

// STORE/CRETE -> Cria um novo usuário -> POST
router.post("/", _loginRequired2.default, _UserController2.default.store);

// UPDATE -> Atualiza um usuário -> PATCH ou PUT
router.put("/", _loginRequired2.default, _UserController2.default.update);

// DELETE -> Apaga um usuário -> DELETE
router.delete("/", _loginRequired2.default, _UserController2.default.delete);

/*
Patch quando você altera somente um valor
PUT quando você pega um objeto inteiro e troca ele por outro objeto inteiro
*/

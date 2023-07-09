"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// INDEX -> listar todos os usuários -> GET
router.get("/", _AlunoController2.default.index);

// SHOW -> Mostra um usuário -> GET
router.get("/:id", _AlunoController2.default.show);

// STORE/CRETE -> Cria um novo usuário -> POST
router.post("/", _loginRequired2.default, _AlunoController2.default.store);

// UPDATE -> Atualiza um usuário -> PATCH ou PUT
router.put("/:id", _loginRequired2.default, _AlunoController2.default.update);

// DELETE -> Apaga um usuário -> DELETE
router.delete("/:id", _loginRequired2.default, _AlunoController2.default.delete);

exports. default = router;

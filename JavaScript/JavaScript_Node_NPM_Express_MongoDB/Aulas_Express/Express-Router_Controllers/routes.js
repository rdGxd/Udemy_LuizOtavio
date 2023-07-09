const express = require("express");
const route = express.Router();
const homeController = require("./controllers/homeController");
const contatoController = require("./controllers/contatoController");
const sobreController = require("./controllers/sobreController");

// Rotas da home -> invés de você executar a função você só passa a referencia
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

// Rotas de contato
route.get("/contato", contatoController.paginaInicial);

// Rotas de sobre
route.get("/sobre", sobreController.paginaInicial);

// Exportando as rotas
module.exports = route;

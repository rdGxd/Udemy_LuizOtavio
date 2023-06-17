const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");
const sobreController = require("./src/controllers/sobreController");

// Setando o model dessa Rota que vai controlar os dados da base de dados e outras coisas, e o view que vai ser usado nessa aplicação, então o trabalho do controller é escolher qual que é o model e qual que é o view que vai ser utilizado

// invés de você executar a função você só passa a referencia

// Rotas da home
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

// Rotas de contato
route.get("/contato", contatoController.paginaInicial);

// Rotas de sobre
route.get("/sobre", sobreController.paginaInicial);

// Exportando as rotas
module.exports = route;

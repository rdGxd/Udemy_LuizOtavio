const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");

// Setando o model dessa Rota que vai controlar os dados da base de dados e outras coisas, e o view que vai ser usado nessa aplicação, então o trabalho do controller é escolher qual que é o model e qual que é o view que vai ser utilizado

// invés de você executar a função você só passa a referencia

// Rotas da home
route.get("/", homeController.index);

// Rotas de login
route.get("/login/", loginController.index);
route.post("/login/register", loginController.register);
route.post("/login/login", loginController.login);
route.get("/login/logout", loginController.logout);


// Exportando as rotas
module.exports = route;

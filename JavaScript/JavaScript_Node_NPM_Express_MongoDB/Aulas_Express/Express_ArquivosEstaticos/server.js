const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));

// Conteúdos Estáticos
app.use(express.static(path.resolve(__dirname, "public")));

// Falando pro express usar a pasta views usando o caminho absoluto
app.set("views", path.resolve(__dirname, "src", "views"));

// Escolhendo qual engine vai utilizar
app.set("view engine", "ejs");

// Falando pro express usar minhas rotas
app.use(routes);

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});

require("dotenv").config(); // Link da base de dados
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Conectando a base de dados
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.emit("pronto");
  })
  .catch((error) => console.log(error));

const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));

// Conteúdos Estáticos
app.use(express.static(path.resolve(__dirname, "public")));

// Falando pro express usar a pasta views usando o caminho absoluto
app.set("views", path.resolve(__dirname, "src", "views"));

// Escolhendo qual engine vai utilizar
app.set("view engine", "ejs");

// Falando pro express usar meu middleware em todas as rotas
app.use(middlewareGlobal);

// Falando pro express usar minhas rotas
app.use(routes);

// Sinalizando que o banco de dados foi conectado
app.on("pronto", () => {
  // Apenas escutando a porta
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
  });
});

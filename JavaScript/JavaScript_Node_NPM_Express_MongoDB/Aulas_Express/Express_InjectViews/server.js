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

// Criando a sessão
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));

// Conteúdos Estáticos
app.use(express.static(path.resolve(__dirname, "public")));

// Configurando a sessão
const sessionOptions = session({
  // Pode ser qualquer coisa
  secret: "sdljndfl123123213jnfdljnfdjnldfsjl ada das dasd asda dsa dasdasdas)((",
  // Falar onde vai salvar essa sessão, enviando o cliente de conexão do nosso mongoDB
  store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
  // Recomendação manda usar false
  resave: false,
  saveUninitialized: false,
  // Quanto tempo a sessão vai durar em Milissegundos
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});
app.use(sessionOptions);
app.use(flash());

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

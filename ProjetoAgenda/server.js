// Link Referente as variáveis de ambiente
require("dotenv").config();

// Iniciando o APP do express
const express = require("express");
const app = express();

// Mongoose para modelar a base de dados e garantir que os dados que a gente salve na base de dados são realmente da forma que a gente quer salvar, por isso a gente cria um Schema, RETORNA UMA PROMISE
const mongoose = require("mongoose");
// Conectando a base de dados
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Quando tiver conectado o app vai emitir o evento falando que o mongoose já esta conectado
    app.emit("pronto");
  })
  .catch((error) => console.log(error));

// Criando a sessão para identificar um navegador de um cliente a gente salva um cookie
const session = require("express-session");
// MongoStore para falar onde as sessões vão ser salvas dentro da base de dados
const MongoStore = require("connect-mongo");
// São flash mensagens, são aquelas mensagens auto-destrutivas, perfeito para mandar msgs de erro ou algum feedback para seu usuário, as msgs são salvas em sessões
const flash = require("connect-flash");
// São as rotas da aplicação(/home, /contato, /sobre) qualquer coisa que seja referente a rota da aplicação
const routes = require("./routes");
// Para trabalhar com caminhos
const path = require("path");
// Recomendação do próprio do express
const helmet = require("helmet");
// São nossos Tokens para os formulários todos os nossos formulários dentro da aplicação tem que ter um csrfToken isso faz com que nenhum aplicativo ou site externo consiga postar dentro da nossa aplicação
const csrf = require("csurf");
// Nossos middleware -> são funções que são executadas na rota
const {
  middlewareGlobal,
  checkCsrfError,
} = require("./src/middlewares/middleware");

// Utilizando o helmet
app.use(helmet());

// A gente pode postar formulários para dentro da nossa aplicação
app.use(express.urlencoded({ extended: true }));
// app.use(express.json()); // -> Outra opção

// Conteúdos Estáticos -> todos os arquivos que são estáticos na nossa aplicação e podemos acessar diretamente (IMG, CSS, JS) -> devem ser acessados diretamente
app.use(express.static(path.resolve(__dirname, "public")));

// Configurando a sessão -> Criando a sessão para identificar um navegador de um cliente a gente salva um cookie(id) no computador do cliente toda vez que ele conectar no computador, O navegador vai enviar esse cookie e o servidor vai checar esse cookie(id) e verificar se ele ja tinha conectado anteriormente
const sessionOptions = session({
  secret: "sdljndfl123123213jnfdljnfdjnldfsjladadasdaadasdasdas", // Secret pode ser qualquer coisa
  // MongoStore para falar onde as sessões vão ser salvas dentro da base de dados
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false, // Recomendação manda usar false
  saveUninitialized: false, // Recomendação manda usar false
  // Quanto tempo a sessão vai durar em Milissegundos
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});
app.use(sessionOptions);

// São flash mensagens, são aquelas mensagens auto-destrutivas, perfeito para mandar msgs de erro ou algum feedback para seu usuário, as msgs são salvas em sessões
app.use(flash());

// Falando pro express usar a pasta views usando o caminho absoluto -> Arquivos que a gente renderiza na tela
app.set("views", path.resolve(__dirname, "src", "views"));

// Escolhendo qual engine vai utilizar para renderizar o html
app.set("view engine", "ejs");

// Configurando o csrf tokken
app.use(csrf());

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);

// Chamando as rotas
app.use(routes);

// Sinalizando que o banco de dados foi conectado e já pode começar a ouvir requisições
app.on("pronto", () => {
  // Apenas escutando a porta
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
  });
});

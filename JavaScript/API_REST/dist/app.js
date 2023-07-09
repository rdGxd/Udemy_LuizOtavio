"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

// Chamando o INDEX dentro do database, ele vai ser executando automaticamente
require('./database');

var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _fotoRoutes = require('./routes/fotoRoutes'); var _fotoRoutes2 = _interopRequireDefault(_fotoRoutes);
var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);

// Configurando o CORS() -> Liberando apenas para alguns domínios
const whiteList = [
  "http://34.95.191.245",
  "http://34.95.191.245:81",
  "http://localhost:3000", // -> Liberando para acesso local
];

// Verificando se o site tem permissão
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

class App {
  // Inicializando tudo
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  // Registrando middlewares
  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_helmet2.default.call(void 0, ));
    // A gente pode postar formulários para dentro da nossa aplicação
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    // Configurando arquivos estáticos
    this.app.use(
      "/images/",
      _express2.default.static(_path.resolve.call(void 0, __dirname, "..", "uploads", "images")),
    );
  }

  // Registrando rotas
  routes() {
    this.app.use("/", _homeRoutes2.default);
    this.app.use("/users/", _userRoutes2.default);
    this.app.use("/tokens/", _tokenRoutes2.default);
    this.app.use("/alunos/", _alunoRoutes2.default);
    this.app.use("/fotos/", _fotoRoutes2.default);
  }
}

exports. default = new App().app;

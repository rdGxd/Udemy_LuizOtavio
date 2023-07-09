import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config();

// Chamando o INDEX dentro do database, ele vai ser executando automaticamente
import "./database";

import cors from "cors";
import express from "express";
import helmet from "helmet";

import alunoRoutes from "./routes/alunoRoutes";
import fotoRoutes from "./routes/fotoRoutes";
import homeRoutes from "./routes/homeRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import userRoutes from "./routes/userRoutes";

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
    this.app = express();
    this.middlewares();
    this.routes();
  }

  // Registrando middlewares
  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    // A gente pode postar formulários para dentro da nossa aplicação
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    // Configurando arquivos estáticos
    this.app.use(
      "/images/",
      express.static(resolve(__dirname, "..", "uploads", "images")),
    );
  }

  // Registrando rotas
  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/fotos/", fotoRoutes);
  }
}

export default new App().app;

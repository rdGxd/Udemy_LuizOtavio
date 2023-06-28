import multer from "multer";
import { extname, resolve } from "path";

const random = () => Math.floor(Math.random() * 10000 + 10000);

// extname vai extrair o nome do arquivo original

export default {
  // Aqui a gente vai salvar o arquivo dentro do disco no servidor
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // O cb(CallBack) é uma função e o primeiro parâmetro seria um erro
      // O Segundo parâmetro é caminho onde eu vou jogar os arquivos
      cb(null, resolve(__dirname, "..", "..", "uploads"));
    },
    // Nome do arquivo
    // o Date.now() e o random vão dar o nome do arquivo
    // o extname vai extrair o apenas a EXTENSÃO do arquivo original
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },
  }),
};

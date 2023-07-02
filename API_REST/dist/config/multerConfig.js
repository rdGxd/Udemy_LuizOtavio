"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');
// extname vai extrair o nome do arquivo original

const random = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  // Filtrando os arquivos recebidos
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
      return cb(new _multer2.default.MulterError("Arquivo precisa ser PNG ou JPEG"));
    }

    // Se o arquivo for válido ele vai pra frente
    return cb(null, true);
  },
  // Aqui a gente vai salvar o arquivo dentro do disco no servidor
  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      // O cb(CallBack) é uma função e o primeiro parâmetro seria um erro
      // O Segundo parâmetro é caminho onde eu vou jogar os arquivos
      cb(null, _path.resolve.call(void 0, __dirname, "..", "..", "uploads", "images"));
    },
    // o Date.now() e o random vão dar o nome do arquivo
    // o extname vai extrair o apenas a EXTENSÃO do arquivo original
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${_path.extname.call(void 0, file.originalname)}`);
    },
  }),
};

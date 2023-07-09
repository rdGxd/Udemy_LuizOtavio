"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);

var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

// Configurando o middleware de upload
// .single("nomeCampo") sinaliza que a gente só vai receber 1 arquivo
const upload = _multer2.default.call(void 0, _multerConfig2.default).single("foto");

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      // Verificando o arquivo
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        // Pegando o nome original e o nome do arquivo -> Usado para salvar na base de dados
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await _Foto2.default.create({ aluno_id, originalname, filename });

        // Retornando os dados da foto
        return res.json(foto);
      } catch (err) {
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }
    });
  }
}

exports. default = new FotoController();

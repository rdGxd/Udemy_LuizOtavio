import multer from "multer";
import multerConfig from "../config/multerConfig";

import Foto from "../models/Foto";

// Configurando o middleware de upload
// .single("nomeCampo") sinaliza que a gente só vai receber 1 arquivo
const upload = multer(multerConfig).single("foto");

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
        const foto = await Foto.create({ aluno_id, originalname, filename });

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

export default new FotoController();

import multer from "multer";
import multerConfig from "../config/multerConfig";

// Configurando o middleware de upload
// .single("nomeCampo") sinaliza que a gente só vai receber 1 arquivo
const upload = multer(multerConfig).single("foto");

class FotoController {
  async store(req, res) {
    return upload(req, res, (error) => {
      // Verificando o arquivo
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new FotoController();

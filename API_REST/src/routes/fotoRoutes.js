import { Router } from "express";
import multer from "multer";
import fotoController from "../controllers/FotoController";
import multerConfig from "../config/multerConfig";

// Configurando o middleware de upload
const upload = multer(multerConfig);

const router = new Router();

// STORE/CRETE -> Cria um novo usuário -> POST
// upload.single("nomeCampo") sinaliza que a gente só vai receber 1 arquivo
router.post("/", upload.single("foto"), fotoController.store);

export default router;

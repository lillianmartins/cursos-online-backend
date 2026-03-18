import { Router } from "express";
import CursoController from "../controller/CursoController.js";

const rotaCurso = Router();
const cursoController = new CursoController();

rotaCurso.post("/", (req, res) => cursoController.cadastrar(req, res));
rotaCurso.get("/", (req, res) => cursoController.consultar(req, res));
rotaCurso.get("/:id", (req, res) => cursoController.consultar(req, res));
rotaCurso.put("/:id", (req, res) => cursoController.atualizar(req, res));
rotaCurso.delete("/:id", (req, res) => cursoController.excluir(req, res));

export default rotaCurso;

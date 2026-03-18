import { Router } from "express";
import CategoriaController from "../controller/CategoriaController.js";

const rotaCategoria = Router();
const categoriaController = new CategoriaController();

rotaCategoria.post("/", (req, res) => categoriaController.cadastrar(req, res));
rotaCategoria.get("/", (req, res) => categoriaController.consultar(req, res));
rotaCategoria.get("/:id", (req, res) => categoriaController.consultar(req, res));
rotaCategoria.put("/:id", (req, res) => categoriaController.atualizar(req, res));
rotaCategoria.delete("/:id", (req, res) => categoriaController.excluir(req, res));

export default rotaCategoria;

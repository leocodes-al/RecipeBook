import express from "express";
import {
  listarReceitas,
  criarReceita,
  atualizarReceita,
  deletarReceita,
  buscarReceitas,
} from "../controllers/receitas.controller.js";

const router = express.Router();

// Listar - esta indo até o controllers
router.get("/", listarReceitas);

// Buscar - esta indo até o controllers
router.get("/buscar", buscarReceitas);

// Criar - esta indo até o controllers
router.post("/", criarReceita);

// Atualizar - esta indo até o controllers
router.put("/:id", atualizarReceita);

// Deletar - esta indo até o controllers
router.delete("/:id", deletarReceita);

export default router;

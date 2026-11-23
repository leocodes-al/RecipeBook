import {
  criarReceitaFavorita,
  listarReceitaFavorita,
  deletarReceitaFavorita,
} from "../controllers/favoritas.controller.js";

import express from "express";

const router = express.Router();

router.post("/", criarReceitaFavorita);

router.get("/", listarReceitaFavorita);

router.delete("/:id", deletarReceitaFavorita);

export default router;

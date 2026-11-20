import {
  criar,
  listar,
  atualizar,
  deletar,
} from "../services/receitas.service.js";

import { buscarReceita } from "../services/theMealDB.service.js";

// get - esta indo até o services
const listarReceitas = async (req, res) => {
  const receita = await listar();
  res.json(receita);
};

// post - esta indo até o services
const criarReceita = async (req, res) => {
  const novaReceita = req.body;

  const receita = await criar(novaReceita);

  res.status(201).json({
    message: "Receita adicionada!",
    receita: receita,
  });
};

// put - esta indo até o services
const atualizarReceita = async (req, res) => {
  const id = req.params.id;

  const novaReceita = req.body.nome;

  const receitaAtualizada = await atualizar(id, novaReceita);

  if (receitaAtualizada === null) {
    return res.status(404).json({ message: "Receita não encontrada!" });
  }

  return res.status(200).json({
    message: "Receita atualizada!",
    receita: receitaAtualizada,
  });
};

// delete - esta indo até o services
const deletarReceita = async (req, res) => {
  const id = req.params.id;

  const receitaDeletada = await deletar(id);

  if (receitaDeletada === null) {
    return res.status(404).json({
      message: "Erro ao deletar, receita não encontrada!",
    });
  }

  res.status(200).json({
    message: "Receita removida!",
    receita: receitaDeletada,
  });
};

//  ----------------------------  //

// get - theMealDB (API externa)
const buscarReceitas = async (req, res) => {
  const receitaNome = req.query.nome;

  const buscarReceitaNome = await buscarReceita(receitaNome);

  res.json(buscarReceitaNome);
};

export {
  listarReceitas,
  criarReceita,
  atualizarReceita,
  deletarReceita,
  buscarReceitas,
};

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

  if (!receitaNome) {
    //verifica se variavel esta vazia
    return res.status(400).json({ message: "nome da receita é obrigatório" });
  }

  let buscarReceitaNome;

  try {
    buscarReceitaNome = await buscarReceita(receitaNome);
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "ocorreu uma falha inesperada, tente novamente mais tarde!",
      });
  }

  if (buscarReceitaNome === null) {
    //verifica se algo foi encontrado
    return res.status(404).json({ message: "nenhuma receita foi encontrada" });
  }

  res.status(200).json(buscarReceitaNome);
};

export {
  listarReceitas,
  criarReceita,
  atualizarReceita,
  deletarReceita,
  buscarReceitas,
};

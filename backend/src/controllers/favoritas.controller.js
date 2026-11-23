import { criar, listar, deletar } from "../services/favoritas.service.js";

import validarCampo from "../utils/validarCampo.js";

// get - esta indo até o services
const listarReceitaFavorita = async (req, res) => {
  const listarFavorita = await listar();

  res.status(200).json({
    message: "lista de receitas favorita mostrada!",
    listaFavorita: listarFavorita,
  });
};

// post - esta indo até o services
const criarReceitaFavorita = async (req, res) => {
  const receitaFavorita = req.body;

  // verificação do campo nome sendo realizada no arquivo utils
  const erroNome = validarCampo(receitaFavorita.nome, "nome");

  if (erroNome !== null) {
    return res.status(400).json({
      message: erroNome,
    });
  }

  // verificação mealId sendo realizada no arquivo utils
  const erroMealId = validarCampo(receitaFavorita.mealId, "mealId");

  if (erroMealId !== null) {
    return res.status(400).json({
      message: erroMealId,
    });
  }

  // verificação da categoria sendo realizada no arquivo utils
  const erroCategoria = validarCampo(receitaFavorita.categoria, "categoria");

  if (erroCategoria !== null) {
    return res.status(400).json({
      message: erroCategoria,
    });
  }

  // verificação de origem sendo realizada no arquivo utils
  const erroOrigem = validarCampo(receitaFavorita.origem, "origem");

  if (erroOrigem !== null) {
    return res.status(400).json({
      message: erroOrigem,
    });
  }

  // Verificação da imagem sendo realizada no arquivo utils
  const erroImagem = validarCampo(receitaFavorita.imagem, "imagem");

  if (erroImagem !== null) {
    return res.status(400).json({
      message: erroImagem,
    });
  }

  const favoritaCriada = await criar(receitaFavorita);
  res.status(201).json({
    message: "receita favorita criada!",
    favorita: favoritaCriada,
  });
};

// delete - esta indo até o services
const deletarReceitaFavorita = async (req, res) => {
  const deletarFavoritaID = req.params.id;

  const receitaDeletada = await deletar(deletarFavoritaID);

  if (receitaDeletada === null) {
    return res.status(404).json({
      message: "Erro ao deletar, receita não encontrada!",
    });
  }
  if (receitaDeletada === "ID_INVALIDO") {
    return res.status(400).json({
      message: "ID inválido!",
    });
  }

  res.status(200).json({
    message: "receita favorita deletada!",
  });
};

export { listarReceitaFavorita, criarReceitaFavorita, deletarReceitaFavorita };

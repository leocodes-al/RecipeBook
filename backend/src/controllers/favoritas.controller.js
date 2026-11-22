import { criar, listar, deletar } from "../services/favoritas.service.js";

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

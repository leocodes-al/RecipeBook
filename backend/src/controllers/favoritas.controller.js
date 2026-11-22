import { criar, listar, deletar } from "../services/favoritas.service.js";

// get - esta indo até o services
const listarReceitaFavorita = async (req, res) => {
  const listarFavorita = await listar()

  res.status(200).json({
    message: "lista de receitas favorita mostrada!",
    listaFavorita: listarFavorita
  })
};

// post - esta indo até o services
const criarReceitaFavorita = async (req, res) => {
  const receitaFavorita = req.body;

  const favoritaCriada = await criar(receitaFavorita);
  res
    .status(201)
    .json({
      message: "receita favorita criada!",
      favorita: favoritaCriada,
    });
};

// delete - esta indo até o services
const deletarReceitaFavorita = async (req, res) => {
  const deletarFavoritaID = req.params.id

  await deletar(deletarFavoritaID)

  res.status(200).json({
    message:"receita favorita deletada!",
    deletada: favoritaDeletada
  })
};

export { listarReceitaFavorita, criarReceitaFavorita, deletarReceitaFavorita };

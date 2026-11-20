import axios from "axios";

const buscarReceita = async (nome) => {
  // Sua requisição aqui
  const resposta = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`,
  );
  // Retornar os dados aqui
  return resposta.data.meals;
};

export { buscarReceita };

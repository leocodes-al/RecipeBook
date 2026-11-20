import prisma from "../lib/prisma.js";

// get
const listar = async () => {
  return await prisma.receita.findMany();
};

// post
const criar = async (novaReceita) => {
  return await prisma.receita.create({
    data: novaReceita,
  });
};

// put - (try/catch - verificação)
const atualizar = async (id, novaReceita) => {
  try {
    return await prisma.receita.update({
      where: {
        id: id,
      },
      data: {
        nome: novaReceita,
      },
    });
  } catch (error) {
    if (error.code === "P2025") {
      return null;
    }
    throw error; // se error for diferente de P2025, lança o erro para quem chamou o service
  }
};

// delete
const deletar = async (id) => {
  try {
    return await prisma.receita.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    if (error.code === "P2025") {
      return null;
    }

    throw error;
  }
};

export { listar, criar, atualizar, deletar };

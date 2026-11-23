import prisma from "../lib/prisma.js";

// criar
const criar = async (dadosReceita) => {
  return await prisma.favorita.create({
    data: dadosReceita,
  });
};

// listar
const listar = async () => {
  return await prisma.favorita.findMany();
};

// deletar
const deletar = async (id) => {
  try {
    return await prisma.favorita.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    if (error.code === "P2025") {
      return null;
    }
    if (error.code === "P2023") {
      return "ID_INVALIDO";
    }

    throw error;
  }
};

export { criar, listar, deletar };

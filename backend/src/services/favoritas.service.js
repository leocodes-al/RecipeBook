import prisma from "../lib/prisma.js";

const criarFavorita = async (dadosReceita) => {
  return await prisma.favorita.create({
    data: dadosReceita,
  });
};

const listarFavoritas = async () => {
  return await prisma.favorita.findMany();
};

const deletarFavorita = async (id) => {
  return await prisma.favorita.delete({
    where: {
      id: id,
    },
  });
};

export { criarFavorita, listarFavoritas, deletarFavorita };

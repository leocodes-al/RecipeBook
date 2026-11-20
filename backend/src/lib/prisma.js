import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

prisma.$connect()
  .then(() => {
    console.log("Conexão com MongoDB estabelecida!");
  })
  .catch((error) => {
    console.error("Erro ao conectar:", error);
  });

export default prisma
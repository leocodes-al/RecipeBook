
import express from "express";
import receitasRoutes from "./routes/receitas.routes.js";

const app = express();

app.use(express.json());

// Rotas de receitas
app.use("/receitas", receitasRoutes); 

app.listen(3000, () => {
  console.log("Servidor rodando!");
});

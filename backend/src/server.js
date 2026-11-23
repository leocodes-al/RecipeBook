
import express from "express";
import receitasRoutes from "./routes/receitas.routes.js";
import favoritasRouter from "./routes/favoritas.routes.js"

const app = express();

app.use(express.json());

// Rotas de receitas
app.use("/receitas", receitasRoutes); 

// Rotas de receitas favoritas
app.use("/favoritas", favoritasRouter)

app.listen(3000, () => {
  console.log("Servidor rodando!");
});

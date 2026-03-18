import express from "express";
import rotaCurso from "./routes/RotaCurso.js";
import rotaCategoria from "./routes/RotaCategoria.js";

const localhost = "localhost";
const port = 3000;

const app = express();

app.use("/curso", rotaCurso);
app.use("/categoria", rotaCategoria);

app.listen(port, localhost, () => {
  console.log(`Servidor rodando em http://${localhost}:${port}`);
});

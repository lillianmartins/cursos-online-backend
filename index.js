import Curso from "./model/Curso.js";
import Categoria from "./model/Categoria.js";

const categoria = new Categoria(
  7,
  "Frontend",
  "Camada de interface gráfica e visual de uma aplicação com a qual os usuários interagem diretamente",
);
const curso = new Curso(
  7,
  "Javascript",
  "Linguagem de Programação",
  categoria,
  200,
  "2026-01-01",
  "2026-08-31",
);

// categoria
//   .cadastrar()
//   .then(() => {
//     console.log("Categoria cadastrada com sucesso!");
//   })
//   .catch((erro) => console.log(erro));
// curso
//   .cadastrar()
//   .then(() => {
//     console.log("Curso cadastrado com sucesso!");
//   })
//   .catch((erro) => console.log(erro));

// categoria
//   .consultar("Backend")
//   .then((lista) => {
//     for (const categoria of lista) console.log(categoria.toString());
//   })
//   .catch((erro) => console.log(erro.message));

// curso
//   .consultar("Java")
//   .then((lista) => {
//     for (const categoria of lista) console.log(categoria.toString());
//   })
//   .catch((erro) => console.log(erro.message));

// categoria
//   .excluir()
//   .then(() => {
//     console.log("Categoria excluida com sucesso!");
//   })
//   .catch((erro) => console.log(erro));
//   curso
//   .excluir()
//   .then(() => {
//     console.log("Curso excluido com sucesso!");
//   })
//   .catch((erro) => console.log(erro));

categoria
  .atualizar()
  .then(() => {
    console.log("Categoria atualizada com sucesso!");
  })
  .catch((erro) => console.log(erro));
curso
  .atualizar()
  .then(() => {
    console.log("Curso atualizada com sucesso!");
  })
  .catch((erro) => console.log(erro));

import Categoria from "../model/Categoria.js3";

export default class CategoriaController {
  cadastrar(req, res) {
    if (req.method === "POST" && req.is("application/json")) {
      const nome = req.body.nome;
      const descricao = req.body.descricao;

      if (nome && descricao) {
        const categoria = new Categoria(categoria.id);
        categoria
          .cadastrar()
          .then(() => {
            res.status(201).json({
              status: true,
              mensagem: "Categoria cadastrado com sucesso",
              id: categoria.id,
            });
          })
          .catch((erro) => {
            res.status(500).json({
              status: false,
              mensagem: `Erro ao cadastrar categoria: ${erro.message}`,
            });
          });
      } else {
        res.status(400).json({
          status: false,
          mensagem: "Todos os campos devem ser preenchidos.",
        });
      }
    } else {
      res.status(405).json({
        status: false,
        mensagem: "Método não permitido",
      });
    }
  }
}

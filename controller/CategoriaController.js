import Categoria from "../model/Categoria.js";

export default class CategoriaController {
  cadastrar(req, res) {
    if (req.method === "POST" && req.is("application/json")) {
      const nome = req.body.nome;
      const descricao = req.body.descricao;

      if (nome && descricao) {
        const categoria = new Categoria(0, nome, descricao);

        categoria
          .cadastrar()
          .then(() => {
            res.status(201).json({
              status: true,
              mensagem: "Categoria cadastrada com sucesso",
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

  consultar(req, res) {
    if (req.method === "GET") {
      const id = req.params.id;
      let termo;

      if (isNaN(id)) {
        termo = id;
      } else {
        termo = "";
      }

      const categoria = new Categoria();
      categoria
        .consultar(termo)
        .then((listaCategorias) => {
          res.status(200).json({
            status: true,
            mensagem: "Categoria consultada com sucesso",
            categorias: listaCategorias,
          });
        })
        .catch((erro) => {
          res.status(500).json({
            status: false,
            mensagem: `Erro ao consultar categoria: ${erro.message}`,
          });
        });
    } else {
      res.status(405).json({
        status: false,
        mensagem: "Método não permitido",
      });
    }
  }

  atualizar(req, res) {
    if (
      req.method === "PUT" ||
      (req.method === "PATCH" && req.is("application/json"))
    ) {
      const id = req.params.id;
      const nome = req.body.nome;
      const descricao = req.body.descricao;

      if (id > 0 && nome && descricao) {
        const categoria = new Categoria(0, nome, descricao);

        categoria
          .atualizar()
          .then(() => {
            res.status(200).json({
              status: true,
              mensagem: "Categoria atualizada com sucesso",
              id: categoria.id,
            });
          })
          .catch((erro) => {
            res.status(500).json({
              status: false,
              mensagem: `Erro ao atualizar categoria: ${erro.message}`,
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

  excluir(req, res) {
    if (req.method === "DELETE") {
      const id = req.params.id;

      if (id > 0) {
        const categoria = new Categoria(id);

        categoria
          .excluir()
          .then(() => {
            res.status(200).json({
              status: true,
              mensagem: "Categoria excluída com sucesso",
            });
          })
          .catch((erro) => {
            res.status(500).json({
              status: false,
              mensagem: `Erro ao excluir categoria: ${erro.message}`,
            });
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

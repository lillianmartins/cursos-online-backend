import Categoria from "../model/Categoria.js";
import Curso from "../model/Curso.js";

export default class CursoController {
  cadastrar(req, res) {
    if (req.method === "POST" && req.is("application/json")) {
      const nome = req.body.nome;
      const descricao = req.body.descricao;
      const categoria = req.body.categoria;
      const qtd_horas = req.body.qtd_horas;
      const data_inicio = req.body.data_inicio;
      const data_fim = req.body.data_fim;

      if (
        nome &&
        descricao &&
        categoria &&
        qtd_horas &&
        data_inicio &&
        data_fim
      ) {
        const categoriaObj = new Categoria(categoria.id);
        const curso = new Curso(
          0,
          nome,
          descricao,
          categoriaObj,
          qtd_horas,
          data_inicio,
          data_fim,
        );

        curso
          .cadastrar()
          .then(() => {
            res.status(201).json({
              status: true,
              mensagem: "Curso cadastrado com sucesso",
              id: curso.id,
            });
          })
          .catch((erro) => {
            res.status(500).json({
              status: false,
              mensagem: `Erro ao cadastrar curso: ${erro.message}`,
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
      const termo = req.params.id || "";

      const curso = new Curso();
      curso
        .consultar(termo)
        .then((listaCursos) => {
          res.status(200).json({
            status: true,
            mensagem: "Curso consultado com sucesso",
            cursos: listaCursos,
          });
        })
        .catch((erro) => {
          res.status(500).json({
            status: false,
            mensagem: `Erro ao consultar curso: ${erro.message}`,
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
      const categoria = req.body.categoria;
      const qtd_horas = req.body.qtd_horas;
      const data_inicio = req.body.data_inicio;
      const data_fim = req.body.data_fim;

      if (
        id > 0 &&
        nome &&
        descricao &&
        categoria &&
        qtd_horas &&
        data_inicio &&
        data_fim
      ) {
        const categoriaObj = new Categoria(categoria.id);
        const curso = new Curso(
          id,
          nome,
          descricao,
          categoriaObj,
          qtd_horas,
          data_inicio,
          data_fim,
        );

        curso
          .atualizar()
          .then(() => {
            res.status(200).json({
              status: true,
              mensagem: "Curso atualizado com sucesso",
              id: curso.id,
            });
          })
          .catch((erro) => {
            res.status(500).json({
              status: false,
              mensagem: `Erro ao atualizar curso: ${erro.message}`,
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
        const curso = new Curso(id);

        curso
          .excluir()
          .then(() => {
            res.status(200).json({
              status: true,
              mensagem: "Curso excluído com sucesso",
            });
          })
          .catch((erro) => {
            res.status(500).json({
              status: false,
              mensagem: `Erro ao excluir curso: ${erro.message}`,
            });
          });
      } else {
        res.status(400).json({
          status: false,
          mensagem: "Informe um ID válido para exclusão.",
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

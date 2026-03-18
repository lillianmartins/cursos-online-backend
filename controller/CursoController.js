import Categoria from "../model/Categoria.js3";
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
}

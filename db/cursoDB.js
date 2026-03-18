import obterConexao from "./obterConexao.js";
import Curso from "../model/Curso.js";
import Categoria from "../model/Categoria.js";

export default class CursoDB {
  async cadastrar(curso) {
    if (curso instanceof Curso) {
      const sql = `INSERT INTO curso(
      cur_nome, 
      cur_descricao, 
      cat_id, 
      cur_qtd_horas, 
      cur_data_inicio, 
      cur_data_fim
      ) VALUES (?, ?, ?, ?, ?, ?)`;
      const parametros = [
        curso.nome,
        curso.descricao,
        curso.categoria.id,
        curso.qtd_horas,
        curso.data_inicio,
        curso.data_fim,
      ];

      const conexao = await obterConexao();
      const resultado = await conexao.execute(sql, parametros);
      curso.id = resultado[0].insertId;
      conexao.release();
    }
  }

  async consultar(termo) {
    let sql = "";
    let parametros = [];

    if (!isNaN(Number(termo)) && Number(termo) > 0) {
      sql = `SELECT * FROM curso as cur
      JOIN categoria as cat ON cat.cat_id = cur.cat_id
      WHERE cur.cur_nome LIKE ?
      `;
      parametros = [`%${termo}%`];
    } else {
      sql = `SELECT * FROM curso as cur
      JOIN categoria as cat ON cat.cat_id = cur.cat_id
      WHERE cur.cur_id = ?
      `;
      parametros = [termo];
    }

    const conexao = await obterConexao();
    const resultados = await conexao.execute(sql, parametros);
    conexao.release();

    let listaCursos = [];
    for (const resultado of resultados[0]) {
      const categoria = new Categoria(
        resultado.cat_id,
        resultado.cat_nome,
        resultado.cat_descricao,
      );
      const curso = new Curso(
        resultado.cur_id,
        resultado.cur_nome,
        resultado.cur_descricao,
        categoria,
        resultado.cur_qtd_horas,
        resultado.cur_data_inicio,
        resultado.cur_data_fim,
      );
      listaCursos.push(curso);
    }

    return listaCursos;
  }

  async atualizar(curso) {
    if (curso instanceof Curso) {
      const sql = `UPDATE curso SET 
      cur_nome = ?, 
      cur_descricao = ?, 
      cat_id = ?, 
      cur_qtd_horas = ?, 
      cur_data_inicio = ?, 
      cur_data_fim = ?
        WHERE cur_id = ?`;
      const parametros = [
        curso.nome,
        curso.descricao,
        curso.categoria.id,
        curso.qtd_horas,
        curso.data_inicio,
        curso.data_fim,
        curso.id,
      ];
      const conexao = await obterConexao();
      await conexao.execute(sql, parametros);
      conexao.release();
    }
  }

  async excluir(curso) {
    if (curso instanceof Curso) {
      const sql = `DELETE FROM curso WHERE cur_id = ?`;
      const parametros = [curso.id];
      const conexao = await obterConexao();
      await conexao.execute(sql, parametros);
      conexao.release();
    }
  }
}

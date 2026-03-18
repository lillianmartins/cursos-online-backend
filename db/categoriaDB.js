import obterConexao from "./obterConexao.js";
import Categoria from "../model/Categoria.js";

export default class CategoriaDB {
  async cadastrar(categoria) {
    if (categoria instanceof Categoria) {
      const sql = `INSERT INTO categoria(
      cat_nome, 
      cat_descricao
      ) VALUES (?, ?)`;
      const parametros = [categoria.nome, categoria.descricao];

      const conexao = await obterConexao();
      const resultado = await conexao.execute(sql, parametros);
      categoria.id = resultado[0].insertId;
      conexao.release();
    }
  }

  async consultar(termo) {
    let sql = "";
    let parametros = [];
    
    if (!isNaN(Number(termo)) && termo !== "") {
        sql = `SELECT * FROM categoria WHERE cat_id = ?`;
        parametros = [termo];
    } else {
      sql = `SELECT * FROM categoria WHERE cat_nome LIKE ?`;
      parametros = [`%${termo}%`];
    }

    const conexao = await obterConexao();
    const resultados = await conexao.execute(sql, parametros);
    conexao.release();

    let listaCategorias = [];
    for (const resultado of resultados[0]) {
      const categoria = new Categoria(
        resultado.cat_id,
        resultado.cat_nome,
        resultado.cat_descricao,
      );
      listaCategorias.push(categoria);
    }

    return listaCategorias;
  }

  async atualizar(categoria) {
    if (categoria instanceof Categoria) {
      const sql = `UPDATE categoria SET 
      cat_nome = ?, 
      cat_descricao = ? 
        WHERE cat_id = ?`;
      const parametros = [categoria.nome, categoria.descricao, categoria.id];
      const conexao = await obterConexao();
      await conexao.execute(sql, parametros);
      conexao.release();
    }
  }

  async excluir(categoria) {
    if (categoria instanceof Categoria) {
      const sql = `DELETE FROM categoria WHERE cat_id = ?`;
      const parametros = [categoria.id];
      const conexao = await obterConexao();
      await conexao.execute(sql, parametros);
      conexao.release();
    }
  }
}

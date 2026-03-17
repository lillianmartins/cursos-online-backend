import CategoriaDB from "../db/categoriaDB.js";

export default class Categoria {
  #id;
  #nome;
  #descricao;

  constructor(id, nome, descricao) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
  }

  get id() {
    return this.#id;
  }
  get nome() {
    return this.#nome;
  }
  get descricao() {
    return this.#descricao;
  }

  set id(novo_id) {
    return (this.#id = novo_id);
  }
  set nome(novo_nome) {
    return (this.#nome = novo_nome);
  }
  set descricao(novo_descricao) {
    return (this.#descricao = novo_descricao);
  }

  toString() {
    return `
        Nome: ${this.#nome}
        Descrição: ${this.#descricao}
    `;
  }

    async cadastrar() {
      const categoriaDB = new CategoriaDB();
      await categoriaDB.cadastrar(this);
    }
  
    async consultar(termo) {
      const categoriaDB = new CategoriaDB();
      return await categoriaDB.consultar(termo);
    }
  
    async atualizar() {
      const categoriaDB = new CategoriaDB();
      await categoriaDB.atualizar(this);
    }
  
    async excluir() {
      const categoriaDB = new CategoriaDB();
      await categoriaDB.excluir(this);
    }
}

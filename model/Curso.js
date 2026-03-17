export default class Curso {
  #id;
  #nome;
  #descricao;
  #categoria;
  #qtd_horas;
  #data_inicio;
  #data_fim;

  constructor(
    id,
    nome,
    descricao,
    categoria,
    qtd_horas,
    data_inicio,
    data_fim,
  ) {
    this.#id = id;
    this.#nome = nome;
    this.#descricao = descricao;
    this.#categoria = categoria;
    this.#qtd_horas = qtd_horas;
    this.#data_inicio = data_inicio;
    this.#data_fim = data_fim;
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
  get categoria() {
    return this.#categoria;
  }
  get qtd_horas() {
    return this.#qtd_horas;
  }
  get data_inicio() {
    return this.#data_inicio;
  }
  get data_fim() {
    return this.#data_fim;
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
  set categoria(novo_categoria) {
    return (this.#categoria = novo_categoria);
  }
  set qtd_horas(novo_qtd_horas) {
    return (this.#qtd_horas = novo_qtd_horas);
  }
  set data_inicio(novo_data_inicio) {
    return (this.#data_inicio = novo_data_inicio);
  }
  set data_fim(novo_data_fim) {
    return (this.#data_fim = novo_data_fim);
  }

  toString() {
    return `
    Nome: ${this.#nome}
    Descrição: ${this.#descricao}
    Categoria: ${this.categoria}
    Carga Horária: ${this.qtd_horas}
    Data de ínício: ${this.#data_inicio}
    Data de fim: ${this.#data_fim}
    `;
  }
}

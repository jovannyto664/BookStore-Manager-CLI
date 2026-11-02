"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CEmprestimo = exports.CCliente = exports.CLivro = exports.CAutor = void 0;
class CAutor {
    id;
    nome;
    nacionalidade;
    data_nascimento;
    constructor(id, nome, nacionalidade, data_nascimento) {
        this.id = id;
        this.nome = nome;
        this.nacionalidade = nacionalidade;
        this.data_nascimento = data_nascimento;
    }
}
exports.CAutor = CAutor;
class CLivro {
    id;
    titulo;
    autor;
    genero;
    ano_publicacao;
    quantidade_total;
    quantidade_disponivel;
    constructor(id, titulo, autor, genero, ano_publicacao, quantidade_total, quantidade_disponivel) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.ano_publicacao = ano_publicacao;
        this.quantidade_total = quantidade_total;
        this.quantidade_disponivel = quantidade_disponivel;
    }
}
exports.CLivro = CLivro;
class CCliente {
    id;
    nome;
    email;
    telefone;
    data_cadastro;
    constructor(id, nome, email, telefone, data_cadastro) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.data_cadastro = data_cadastro;
    }
}
exports.CCliente = CCliente;
class CEmprestimo {
    id;
    id_livro;
    id_cliente;
    data_emprestimo;
    data_devolucao_prevista;
    data_devolucao;
    status;
    constructor(id, id_livro, id_cliente, data_emprestimo, data_devolucao_prevista, data_devolucao, status) {
        this.id = id;
        this.id_livro = id_livro;
        this.id_cliente = id_cliente;
        this.data_emprestimo = data_emprestimo;
        this.data_devolucao_prevista = data_devolucao_prevista;
        this.data_devolucao = data_devolucao;
        this.status = status;
    }
}
exports.CEmprestimo = CEmprestimo;
//# sourceMappingURL=Classes.js.map
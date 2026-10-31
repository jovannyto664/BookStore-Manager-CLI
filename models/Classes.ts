import type { IAutor } from "./Interfaces";
import type { ILivro } from "./Interfaces";
import type { ICliente } from "./Interfaces";
import type { IEmprestimo } from "./Interfaces"
import type { StatusEmprestimo } from "./Types";
export class CAutor implements IAutor {
    constructor(
        public id: number,
        public nome: string,
        public nacionalidade: string,
        public data_nascimento: Date
    ) { }
}

export class CLivro implements ILivro {
    constructor(
        public id: number,
        public titulo: string,
        public autor: number,
        public genero: string,
        public ano_publicacao: number,
        public quantidade_total: number,
        public quantidade_disponivel: number
    ) { }
}

export class CCliente implements ICliente {
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public telefone: string,
        public data_cadastro: Date
    ) { }
}

export class CEmprestimo implements IEmprestimo {
    constructor(
        public id: number,
        public id_livro: number,
        public id_cliente: number,
        public data_emprestimo: Date,
        public data_devolucao_prevista: Date,
        public data_devolucao: Date|null,
        public status: StatusEmprestimo,
    ) { }
}


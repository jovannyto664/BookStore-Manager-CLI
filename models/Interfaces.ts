import type { StatusEmprestimo } from "./Types"
export interface IAutor{
    id:number
    nome:string
    nacionalidade:string
    data_nascimento:Date
}

export interface ILivro{
    id:number
    titulo:string
    autor:number
    genero:string
    ano_publicacao:number
    quantidade_total:number
    quantidade_disponivel:number
}

export interface ICliente {
    id:number
    nome:string
    email:string
    telefone:string
    data_cadastro:Date
}

export interface IEmprestimo {
    id:number
    id_livro:number
    id_cliente:number
    data_emprestimo:Date
    data_devolucao_prevista:Date
    data_devolucao:Date|null
    status:StatusEmprestimo
}
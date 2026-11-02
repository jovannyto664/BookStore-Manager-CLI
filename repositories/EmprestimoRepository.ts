import { emprestimos } from "../data/seed";
import type { CEmprestimo } from "../models/Classes";

export class EmprestimoRepository {
    async listar(): Promise<CEmprestimo[]> {
        return [...emprestimos]
    }
    async buscarPorId(id: number): Promise<CEmprestimo | undefined> {
        return emprestimos.find((emprestimo) => emprestimo.id === id)
    }
    async salvar(emprestimo: CEmprestimo): Promise<CEmprestimo> {
        emprestimos.push(emprestimo)
        return emprestimo
    }
    async atualizar(emprestimo: CEmprestimo): Promise<CEmprestimo | undefined> {
        const indice = emprestimos.findIndex((emprestimoAtual) => emprestimoAtual.id === emprestimo.id);
        if (indice === -1) return undefined
        emprestimos[indice] = emprestimo
        return emprestimo
    }
    async remover(id: number): Promise<boolean> {
        const indice = emprestimos.findIndex((emprestimo) => emprestimo.id === id)
        if (indice === -1) return false
        emprestimos.splice(indice, 1)
        return true
    }
}
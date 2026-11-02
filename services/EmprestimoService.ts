import { EmprestimoRepository } from "../repositories/EmprestimoRepository"
import type { CEmprestimo } from "../models/Classes"

export class EmprestimoService {
    private readonly repository = new EmprestimoRepository()
    async listar(): Promise<CEmprestimo[]> {
        return this.repository.listar()
    }
    async buscarPorId(id: number): Promise<CEmprestimo | undefined> {
        return this.repository.buscarPorId(id)
    }
    async salvar(emprestimo: CEmprestimo): Promise<CEmprestimo> {
        return this.repository.salvar(emprestimo)
    }
    async atualizar(emprestimo: CEmprestimo): Promise<CEmprestimo | undefined> {
        return this.repository.atualizar(emprestimo)
    }
    async remover(id: number): Promise<boolean> {
        return this.repository.remover(id)
    }
}
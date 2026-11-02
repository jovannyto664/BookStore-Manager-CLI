import { EmprestimoService } from "../services/EmprestimoService"
import type { CEmprestimo } from "../models/Classes"

export class EmprestimoController {
    private readonly service = new EmprestimoService()

    async listar(): Promise<CEmprestimo[]> {
        return this.service.listar()
    }

    async buscarPorId(id: number): Promise<CEmprestimo | undefined> {
        return this.service.buscarPorId(id)
    }

    async salvar(emprestimo: CEmprestimo): Promise<CEmprestimo> {
        return this.service.salvar(emprestimo)
    }

    async atualizar(emprestimo: CEmprestimo): Promise<CEmprestimo | undefined> {
        return this.service.atualizar(emprestimo)
    }

    async remover(id: number): Promise<boolean> {
        return this.service.remover(id)
    }
}
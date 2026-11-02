import { LivroRepository } from "../repositories/LivroRepository"
import type { CLivro } from "../models/Classes"

export class LivroService {
    private readonly repository = new LivroRepository()
    async listar(): Promise<CLivro[]> {
        return this.repository.listar()
    }
    async buscarPorId(id: number): Promise<CLivro | undefined> {
        return this.repository.buscarPorId(id)
    }
    async salvar(livro: CLivro): Promise<CLivro> {
        return this.repository.salvar(livro)
    }
    async atualizar(livro: CLivro): Promise<CLivro | undefined> {
        return this.repository.atualizar(livro)
    }
    async remover(id: number): Promise<boolean> {
        return this.repository.remover(id)
    }
}
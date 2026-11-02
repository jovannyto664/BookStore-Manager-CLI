import { LivroService } from "../services/LivroService"
import type { CLivro } from "../models/Classes"

export class LivroController {
    private readonly service = new LivroService()
    async listar(): Promise<CLivro[]> {
        return this.service.listar()
    }
    async buscarPorId(id: number): Promise<CLivro | undefined> {
        return this.service.buscarPorId(id)
    }
    async salvar(livro: CLivro): Promise<CLivro> {
        return this.service.salvar(livro)
    }
    async atualizar(livro: CLivro): Promise<CLivro | undefined> {
        return this.service.atualizar(livro)
    }
    async remover(id: number): Promise<boolean> {
        return this.service.remover(id)
    }
}
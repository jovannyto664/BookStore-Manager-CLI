import { AutorRepository } from "../repositories/AutorRepository"
import type { CAutor } from "../models/Classes"

export class AutorService {
    private readonly repository = new AutorRepository()
    async listar(): Promise<CAutor[]> {
        return this.repository.listar()
    }
    async buscarPorId(id: number): Promise<CAutor | undefined> {
        return this.repository.buscarPorId(id)
    }
    async salvar(autor: CAutor): Promise<CAutor> {
        return this.repository.salvar(autor)
    }
    async atualizar(autor: CAutor): Promise<CAutor | undefined> {
        return this.repository.atualizar(autor)
    }
    async remover(id: number): Promise<boolean> {
        return this.repository.remover(id)
    }
}
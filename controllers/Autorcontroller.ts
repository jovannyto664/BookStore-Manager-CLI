import { AutorService } from "../services/AutorService"
import type { CAutor } from "../models/Classes"

export class AutorController {
    private readonly service = new AutorService()
    async listar(): Promise<CAutor[]> {
        return this.service.listar()
    }
    async buscarPorId(id: number): Promise<CAutor | undefined> {
        return this.service.buscarPorId(id)
    }
    async salvar(autor: CAutor): Promise<CAutor> {
        return this.service.salvar(autor)
    }
    async atualizar(autor: CAutor): Promise<CAutor | undefined> {
        return this.service.atualizar(autor)
    }
    async remover(id: number): Promise<boolean> {
        return this.service.remover(id)
    }
}
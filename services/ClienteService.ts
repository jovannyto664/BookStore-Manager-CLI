import { ClienteRepository } from "../repositories/ClienteRepository"
import type { CCliente } from "../models/Classes"

export class ClienteService {
    private readonly repository = new ClienteRepository()
    async listar(): Promise<CCliente[]> {
        return this.repository.listar()
    }
    async buscarPorId(id: number): Promise<CCliente | undefined> {
        return this.repository.buscarPorId(id)
    }
    async salvar(cliente: CCliente): Promise<CCliente> {
        return this.repository.salvar(cliente)
    }
    async atualizar(cliente: CCliente): Promise<CCliente | undefined> {
        return this.repository.atualizar(cliente)
    }
    async remover(id: number): Promise<boolean> {
        return this.repository.remover(id)
    }
}
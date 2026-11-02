import { ClienteService } from "../services/ClienteService"
import type { CCliente } from "../models/Classes"

export class ClienteController {
    private readonly service = new ClienteService()
    async listar(): Promise<CCliente[]> {
        return this.service.listar()
    }
    async buscarPorId(id: number): Promise<CCliente | undefined> {
        return this.service.buscarPorId(id)
    }
    async salvar(cliente: CCliente): Promise<CCliente> {
        return this.service.salvar(cliente)
    }
    async atualizar(cliente: CCliente): Promise<CCliente | undefined> {
        return this.service.atualizar(cliente)
    }
    async remover(id: number): Promise<boolean> {
        return this.service.remover(id)
    }
}
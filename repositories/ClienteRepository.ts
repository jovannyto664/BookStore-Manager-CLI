import { clientes } from "../data/seed";
import type { CCliente } from "../models/Classes";

export class ClienteRepository {
    async listar(): Promise<CCliente[]> {
        return [...clientes];
    }
    async buscarPorId(id: number): Promise<CCliente | undefined> {
        return clientes.find((cliente) => cliente.id === id);
    }
    async salvar(cliente: CCliente): Promise<CCliente> {
        clientes.push(cliente);
        return cliente;
    }
    async atualizar(cliente: CCliente): Promise<CCliente | undefined> {
        const indice = clientes.findIndex((clienteAtual) => clienteAtual.id === cliente.id);
        if (indice === -1) return undefined;
        clientes[indice] = cliente;
        return cliente;
    }
    async remover(id: number): Promise<boolean> {
        const indice = clientes.findIndex((cliente) => cliente.id === id);
        if (indice === -1) return false;

        clientes.splice(indice, 1);
        return true;
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRepository = void 0;
const seed_1 = require("../data/seed");
class ClienteRepository {
    async listar() {
        return [...seed_1.clientes];
    }
    async buscarPorId(id) {
        return seed_1.clientes.find((cliente) => cliente.id === id);
    }
    async salvar(cliente) {
        seed_1.clientes.push(cliente);
        return cliente;
    }
    async atualizar(cliente) {
        const indice = seed_1.clientes.findIndex((clienteAtual) => clienteAtual.id === cliente.id);
        if (indice === -1)
            return undefined;
        seed_1.clientes[indice] = cliente;
        return cliente;
    }
    async remover(id) {
        const indice = seed_1.clientes.findIndex((cliente) => cliente.id === id);
        if (indice === -1)
            return false;
        seed_1.clientes.splice(indice, 1);
        return true;
    }
}
exports.ClienteRepository = ClienteRepository;
//# sourceMappingURL=ClienteRepository.js.map
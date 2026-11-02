"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const ClienteRepository_1 = require("../repositories/ClienteRepository");
class ClienteService {
    repository = new ClienteRepository_1.ClienteRepository();
    async listar() {
        return this.repository.listar();
    }
    async buscarPorId(id) {
        return this.repository.buscarPorId(id);
    }
    async salvar(cliente) {
        return this.repository.salvar(cliente);
    }
    async atualizar(cliente) {
        return this.repository.atualizar(cliente);
    }
    async remover(id) {
        return this.repository.remover(id);
    }
}
exports.ClienteService = ClienteService;
//# sourceMappingURL=ClienteService.js.map
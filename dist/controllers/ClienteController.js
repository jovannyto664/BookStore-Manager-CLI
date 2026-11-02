"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const ClienteService_1 = require("../services/ClienteService");
class ClienteController {
    service = new ClienteService_1.ClienteService();
    async listar() {
        return this.service.listar();
    }
    async buscarPorId(id) {
        return this.service.buscarPorId(id);
    }
    async salvar(cliente) {
        return this.service.salvar(cliente);
    }
    async atualizar(cliente) {
        return this.service.atualizar(cliente);
    }
    async remover(id) {
        return this.service.remover(id);
    }
}
exports.ClienteController = ClienteController;
//# sourceMappingURL=ClienteController.js.map
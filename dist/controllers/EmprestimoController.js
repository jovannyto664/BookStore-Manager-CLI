"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoController = void 0;
const EmprestimoService_1 = require("../services/EmprestimoService");
class EmprestimoController {
    service = new EmprestimoService_1.EmprestimoService();
    async listar() {
        return this.service.listar();
    }
    async buscarPorId(id) {
        return this.service.buscarPorId(id);
    }
    async salvar(emprestimo) {
        return this.service.salvar(emprestimo);
    }
    async atualizar(emprestimo) {
        return this.service.atualizar(emprestimo);
    }
    async remover(id) {
        return this.service.remover(id);
    }
}
exports.EmprestimoController = EmprestimoController;
//# sourceMappingURL=EmprestimoController.js.map
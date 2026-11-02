"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoService = void 0;
const EmprestimoRepository_1 = require("../repositories/EmprestimoRepository");
class EmprestimoService {
    repository = new EmprestimoRepository_1.EmprestimoRepository();
    async listar() {
        return this.repository.listar();
    }
    async buscarPorId(id) {
        return this.repository.buscarPorId(id);
    }
    async salvar(emprestimo) {
        return this.repository.salvar(emprestimo);
    }
    async atualizar(emprestimo) {
        return this.repository.atualizar(emprestimo);
    }
    async remover(id) {
        return this.repository.remover(id);
    }
}
exports.EmprestimoService = EmprestimoService;
//# sourceMappingURL=EmprestimoService.js.map
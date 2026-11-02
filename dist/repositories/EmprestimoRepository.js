"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoRepository = void 0;
const seed_1 = require("../data/seed");
class EmprestimoRepository {
    async listar() {
        return [...seed_1.emprestimos];
    }
    async buscarPorId(id) {
        return seed_1.emprestimos.find((emprestimo) => emprestimo.id === id);
    }
    async salvar(emprestimo) {
        seed_1.emprestimos.push(emprestimo);
        return emprestimo;
    }
    async atualizar(emprestimo) {
        const indice = seed_1.emprestimos.findIndex((emprestimoAtual) => emprestimoAtual.id === emprestimo.id);
        if (indice === -1)
            return undefined;
        seed_1.emprestimos[indice] = emprestimo;
        return emprestimo;
    }
    async remover(id) {
        const indice = seed_1.emprestimos.findIndex((emprestimo) => emprestimo.id === id);
        if (indice === -1)
            return false;
        seed_1.emprestimos.splice(indice, 1);
        return true;
    }
}
exports.EmprestimoRepository = EmprestimoRepository;
//# sourceMappingURL=EmprestimoRepository.js.map
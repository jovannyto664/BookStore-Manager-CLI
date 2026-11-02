"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroService = void 0;
const LivroRepository_1 = require("../repositories/LivroRepository");
class LivroService {
    repository = new LivroRepository_1.LivroRepository();
    async listar() {
        return this.repository.listar();
    }
    async buscarPorId(id) {
        return this.repository.buscarPorId(id);
    }
    async salvar(livro) {
        return this.repository.salvar(livro);
    }
    async atualizar(livro) {
        return this.repository.atualizar(livro);
    }
    async remover(id) {
        return this.repository.remover(id);
    }
}
exports.LivroService = LivroService;
//# sourceMappingURL=LivroService.js.map
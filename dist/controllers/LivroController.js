"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroController = void 0;
const LivroService_1 = require("../services/LivroService");
class LivroController {
    service = new LivroService_1.LivroService();
    async listar() {
        return this.service.listar();
    }
    async buscarPorId(id) {
        return this.service.buscarPorId(id);
    }
    async salvar(livro) {
        return this.service.salvar(livro);
    }
    async atualizar(livro) {
        return this.service.atualizar(livro);
    }
    async remover(id) {
        return this.service.remover(id);
    }
}
exports.LivroController = LivroController;
//# sourceMappingURL=LivroController.js.map
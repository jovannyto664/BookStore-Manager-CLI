"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutorService = void 0;
const AutorRepository_1 = require("../repositories/AutorRepository");
class AutorService {
    repository = new AutorRepository_1.AutorRepository();
    async listar() {
        return this.repository.listar();
    }
    async buscarPorId(id) {
        return this.repository.buscarPorId(id);
    }
    async salvar(autor) {
        return this.repository.salvar(autor);
    }
    async atualizar(autor) {
        return this.repository.atualizar(autor);
    }
    async remover(id) {
        return this.repository.remover(id);
    }
}
exports.AutorService = AutorService;
//# sourceMappingURL=AutorService.js.map
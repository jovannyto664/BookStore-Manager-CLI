"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutorController = void 0;
const AutorService_1 = require("../services/AutorService");
class AutorController {
    service = new AutorService_1.AutorService();
    async listar() {
        return this.service.listar();
    }
    async buscarPorId(id) {
        return this.service.buscarPorId(id);
    }
    async salvar(autor) {
        return this.service.salvar(autor);
    }
    async atualizar(autor) {
        return this.service.atualizar(autor);
    }
    async remover(id) {
        return this.service.remover(id);
    }
}
exports.AutorController = AutorController;
//# sourceMappingURL=Autorcontroller.js.map
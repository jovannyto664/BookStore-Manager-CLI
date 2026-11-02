"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutorRepository = void 0;
const seed_1 = require("../data/seed");
class AutorRepository {
    async listar() {
        return [...seed_1.autores];
    }
    async buscarPorId(id) {
        return seed_1.autores.find((autor) => autor.id === id);
    }
    async salvar(autor) {
        seed_1.autores.push(autor);
        return autor;
    }
    async atualizar(autor) {
        const indice = seed_1.autores.findIndex((autorAtual) => autorAtual.id === autor.id);
        if (indice === -1)
            return undefined;
        seed_1.autores[indice] = autor;
        return autor;
    }
    async remover(id) {
        const indice = seed_1.autores.findIndex((autor) => autor.id === id);
        if (indice === -1)
            return false;
        seed_1.autores.splice(indice, 1);
        return true;
    }
}
exports.AutorRepository = AutorRepository;
//# sourceMappingURL=AutorRepository.js.map
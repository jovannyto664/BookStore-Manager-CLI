"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroRepository = void 0;
const seed_1 = require("../data/seed");
class LivroRepository {
    async listar() {
        return [...seed_1.livros];
    }
    async buscarPorId(id) {
        return seed_1.livros.find((livro) => livro.id === id);
    }
    async salvar(livro) {
        seed_1.livros.push(livro);
        return livro;
    }
    async atualizar(livro) {
        const indice = seed_1.livros.findIndex((livroAtual) => livroAtual.id === livro.id);
        if (indice === -1)
            return undefined;
        seed_1.livros[indice] = livro;
        return livro;
    }
    async remover(id) {
        const indice = seed_1.livros.findIndex((livro) => livro.id === id);
        if (indice === -1)
            return false;
        seed_1.livros.splice(indice, 1);
        return true;
    }
}
exports.LivroRepository = LivroRepository;
//# sourceMappingURL=LivroRepository.js.map
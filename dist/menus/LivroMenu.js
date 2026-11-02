"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarMenuLivros = executarMenuLivros;
const LivroController_1 = require("../controllers/LivroController");
const Classes_1 = require("../models/Classes");
const CrudMenu_1 = require("./CrudMenu");
const FormHelpers_1 = require("./FormHelpers");
async function executarMenuLivros(io) {
    const controlador = new LivroController_1.LivroController();
    await (0, CrudMenu_1.executarMenuCrud)({
        titulo: "Livros",
        controlador,
        io,
        formatar: (livro) => `#${livro.id} | ${livro.titulo} | Autor ID: ${livro.autor} | ${livro.genero} | ${livro.ano_publicacao} | Disponíveis: ${livro.quantidade_disponivel}/${livro.quantidade_total}`,
        criar: async (id) => new Classes_1.CLivro(id, await (0, FormHelpers_1.pedirTexto)(io, "Título"), await (0, FormHelpers_1.pedirNumero)(io, "ID do autor", undefined, 1), await (0, FormHelpers_1.pedirTexto)(io, "Gênero"), await (0, FormHelpers_1.pedirNumero)(io, "Ano de publicação", undefined, 0), await (0, FormHelpers_1.pedirNumero)(io, "Quantidade total", undefined, 0), await (0, FormHelpers_1.pedirNumero)(io, "Quantidade disponível", undefined, 0)),
        editar: async (livro) => new Classes_1.CLivro(livro.id, await (0, FormHelpers_1.pedirTexto)(io, "Título", livro.titulo), await (0, FormHelpers_1.pedirNumero)(io, "ID do autor", livro.autor, 1), await (0, FormHelpers_1.pedirTexto)(io, "Gênero", livro.genero), await (0, FormHelpers_1.pedirNumero)(io, "Ano de publicação", livro.ano_publicacao, 0), await (0, FormHelpers_1.pedirNumero)(io, "Quantidade total", livro.quantidade_total, 0), await (0, FormHelpers_1.pedirNumero)(io, "Quantidade disponível", livro.quantidade_disponivel, 0))
    });
}
//# sourceMappingURL=LivroMenu.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarMenuAutores = executarMenuAutores;
const Autorcontroller_1 = require("../controllers/Autorcontroller");
const Classes_1 = require("../models/Classes");
const CrudMenu_1 = require("./CrudMenu");
const FormHelpers_1 = require("./FormHelpers");
async function executarMenuAutores(io) {
    const controlador = new Autorcontroller_1.AutorController();
    await (0, CrudMenu_1.executarMenuCrud)({
        titulo: "Autores",
        controlador,
        io,
        formatar: (autor) => `#${autor.id} | ${autor.nome} | ${autor.nacionalidade} | Nascimento: ${(0, FormHelpers_1.formatarData)(autor.data_nascimento)}`,
        criar: async (id) => new Classes_1.CAutor(id, await (0, FormHelpers_1.pedirTexto)(io, "Nome"), await (0, FormHelpers_1.pedirTexto)(io, "Nacionalidade"), await (0, FormHelpers_1.pedirData)(io, "Data de nascimento")),
        editar: async (autor) => new Classes_1.CAutor(autor.id, await (0, FormHelpers_1.pedirTexto)(io, "Nome", autor.nome), await (0, FormHelpers_1.pedirTexto)(io, "Nacionalidade", autor.nacionalidade), await (0, FormHelpers_1.pedirData)(io, "Data de nascimento", autor.data_nascimento))
    });
}
//# sourceMappingURL=AutorMenu.js.map
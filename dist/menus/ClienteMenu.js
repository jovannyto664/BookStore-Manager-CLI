"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarMenuClientes = executarMenuClientes;
const ClienteController_1 = require("../controllers/ClienteController");
const Classes_1 = require("../models/Classes");
const CrudMenu_1 = require("./CrudMenu");
const FormHelpers_1 = require("./FormHelpers");
async function executarMenuClientes(io) {
    const controlador = new ClienteController_1.ClienteController();
    await (0, CrudMenu_1.executarMenuCrud)({
        titulo: "Clientes",
        controlador,
        io,
        formatar: (cliente) => `#${cliente.id} | ${cliente.nome} | ${cliente.email} | ${cliente.telefone} | Cadastro: ${(0, FormHelpers_1.formatarData)(cliente.data_cadastro)}`,
        criar: async (id) => new Classes_1.CCliente(id, await (0, FormHelpers_1.pedirTexto)(io, "Nome"), await (0, FormHelpers_1.pedirTexto)(io, "E-mail"), await (0, FormHelpers_1.pedirTexto)(io, "Telefone"), await (0, FormHelpers_1.pedirData)(io, "Data de cadastro")),
        editar: async (cliente) => new Classes_1.CCliente(cliente.id, await (0, FormHelpers_1.pedirTexto)(io, "Nome", cliente.nome), await (0, FormHelpers_1.pedirTexto)(io, "E-mail", cliente.email), await (0, FormHelpers_1.pedirTexto)(io, "Telefone", cliente.telefone), await (0, FormHelpers_1.pedirData)(io, "Data de cadastro", cliente.data_cadastro))
    });
}
//# sourceMappingURL=ClienteMenu.js.map
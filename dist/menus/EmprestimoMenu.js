"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarMenuEmprestimos = executarMenuEmprestimos;
const EmprestimoController_1 = require("../controllers/EmprestimoController");
const Classes_1 = require("../models/Classes");
const CrudMenu_1 = require("./CrudMenu");
const FormHelpers_1 = require("./FormHelpers");
async function pedirStatus(io, valorAtual) {
    const opcoes = ["EMPRESTADO", "DEVOLVIDO", "ATRASADO"];
    while (true) {
        const sufixo = valorAtual === undefined ? "" : ` (${valorAtual})`;
        const entrada = (await io.perguntar(`Status ${opcoes.join("/")}${sufixo}: `)).trim().toUpperCase();
        if (entrada.length === 0 && valorAtual !== undefined)
            return valorAtual;
        if (opcoes.includes(entrada))
            return entrada;
        io.exibir("Status inválido.");
    }
}
function formatarDataOuPendente(data) {
    return data ? (0, FormHelpers_1.formatarData)(data) : "Pendente";
}
async function executarMenuEmprestimos(io) {
    const controlador = new EmprestimoController_1.EmprestimoController();
    await (0, CrudMenu_1.executarMenuCrud)({
        titulo: "Empréstimos",
        controlador,
        io,
        formatar: (emprestimo) => `#${emprestimo.id} | Livro ID: ${emprestimo.id_livro} | Cliente ID: ${emprestimo.id_cliente} | Empréstimo: ${(0, FormHelpers_1.formatarData)(emprestimo.data_emprestimo)} | Prevista: ${(0, FormHelpers_1.formatarData)(emprestimo.data_devolucao_prevista)} | Devolução: ${formatarDataOuPendente(emprestimo.data_devolucao)} | ${emprestimo.status}`,
        criar: async (id) => new Classes_1.CEmprestimo(id, await (0, FormHelpers_1.pedirNumero)(io, "ID do livro", undefined, 1), await (0, FormHelpers_1.pedirNumero)(io, "ID do cliente", undefined, 1), new Date(), await (0, FormHelpers_1.pedirData)(io, "Data prevista para devolução"), null, "EMPRESTADO"),
        editar: async (emprestimo) => new Classes_1.CEmprestimo(emprestimo.id, await (0, FormHelpers_1.pedirNumero)(io, "ID do livro", emprestimo.id_livro, 1), await (0, FormHelpers_1.pedirNumero)(io, "ID do cliente", emprestimo.id_cliente, 1), await (0, FormHelpers_1.pedirData)(io, "Data do empréstimo", emprestimo.data_emprestimo), await (0, FormHelpers_1.pedirData)(io, "Data prevista para devolução", emprestimo.data_devolucao_prevista), await (0, FormHelpers_1.pedirDataOpcional)(io, "Data de devolução", emprestimo.data_devolucao), await pedirStatus(io, emprestimo.status))
    });
}
//# sourceMappingURL=EmprestimoMenu.js.map
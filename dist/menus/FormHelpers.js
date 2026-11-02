"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatarData = void 0;
exports.pedirTexto = pedirTexto;
exports.pedirNumero = pedirNumero;
exports.pedirData = pedirData;
exports.pedirDataOpcional = pedirDataOpcional;
const utils_1 = require("../utils");
Object.defineProperty(exports, "formatarData", { enumerable: true, get: function () { return utils_1.formatarData; } });
async function pedirTexto(io, rotulo, valorAtual) {
    while (true) {
        const sufixo = valorAtual === undefined ? "" : ` (${valorAtual})`;
        const valor = (await io.perguntar(`${rotulo}${sufixo}: `)).trim();
        if (valor.length > 0)
            return valor;
        if (valorAtual !== undefined)
            return valorAtual;
        io.exibir("O valor não pode ficar vazio.");
    }
}
async function pedirNumero(io, rotulo, valorAtual, minimo = 0) {
    while (true) {
        const sufixo = valorAtual === undefined ? "" : ` (${valorAtual})`;
        const entrada = (await io.perguntar(`${rotulo}${sufixo}: `)).trim();
        if (entrada.length === 0 && valorAtual !== undefined)
            return valorAtual;
        const valor = Number(entrada);
        if (Number.isInteger(valor) && valor >= minimo)
            return valor;
        io.exibir(`Informe um número inteiro maior ou igual a ${minimo}.`);
    }
}
async function pedirData(io, rotulo, valorAtual) {
    while (true) {
        const dataAtual = valorAtual?.toISOString().slice(0, 10);
        const sufixo = dataAtual === undefined ? "" : ` (${dataAtual})`;
        const entrada = (await io.perguntar(`${rotulo} (AAAA-MM-DD)${sufixo}: `)).trim();
        if (entrada.length === 0 && valorAtual !== undefined)
            return valorAtual;
        if ((0, utils_1.validarFormatoDataISO)(entrada)) {
            return new Date(`${entrada}T00:00:00`);
        }
        io.exibir("Informe uma data válida no formato AAAA-MM-DD.");
    }
}
async function pedirDataOpcional(io, rotulo, valorAtual) {
    const dataAtual = valorAtual?.toISOString().slice(0, 10);
    const sufixo = dataAtual === undefined ? "" : ` (${dataAtual})`;
    const entrada = (await io.perguntar(`${rotulo} (AAAA-MM-DD, vazio para nenhuma)${sufixo}: `)).trim();
    if (entrada.length === 0)
        return valorAtual;
    if ((0, utils_1.validarFormatoDataISO)(entrada)) {
        return new Date(`${entrada}T00:00:00`);
    }
    io.exibir("Data inválida, mantendo o valor atual.");
    return valorAtual;
}
//# sourceMappingURL=FormHelpers.js.map
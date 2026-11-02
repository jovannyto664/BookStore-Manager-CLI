"use strict";
/**
 * Utilitários para formatação e manipulação de datas no sistema.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatarData = formatarData;
exports.formatarDataHora = formatarDataHora;
exports.validarFormatoDataISO = validarFormatoDataISO;
function formatarData(data) {
    return data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
}
function formatarDataHora(data) {
    return data.toLocaleString("pt-BR", { timeZone: "UTC" });
}
function validarFormatoDataISO(entrada) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(entrada))
        return false;
    const data = new Date(`${entrada}T00:00:00`);
    return !Number.isNaN(data.getTime()) && data.toISOString().slice(0, 10) === entrada;
}
//# sourceMappingURL=dateUtils.js.map
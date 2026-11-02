"use strict";
/**
 * Utilitários para validação de dados de entrada de usuário.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarEmail = validarEmail;
exports.validarTelefone = validarTelefone;
exports.validarTextoNaoVazio = validarTextoNaoVazio;
exports.validarNumeroInteiroPositivo = validarNumeroInteiroPositivo;
function validarEmail(email) {
    const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padrao.test(email.trim());
}
function validarTelefone(telefone) {
    const limpo = telefone.replace(/\D/g, "");
    return limpo.length >= 10 && limpo.length <= 11;
}
function validarTextoNaoVazio(texto) {
    return texto.trim().length > 0;
}
function validarNumeroInteiroPositivo(valor) {
    return Number.isInteger(valor) && valor > 0;
}
//# sourceMappingURL=validationUtils.js.map
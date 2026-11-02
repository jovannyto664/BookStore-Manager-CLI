
export function validarEmail(email: string): boolean {
    const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padrao.test(email.trim());
}

export function validarTelefone(telefone: string): boolean {
    const limpo = telefone.replace(/\D/g, "");
    return limpo.length >= 10 && limpo.length <= 11;
}

export function validarTextoNaoVazio(texto: string): boolean {
    return texto.trim().length > 0;
}

export function validarNumeroInteiroPositivo(valor: number): boolean {
    return Number.isInteger(valor) && valor > 0;
}

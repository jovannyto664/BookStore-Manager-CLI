import type { ConsoleIO } from "./ConsoleIO"
import { formatarData, validarFormatoDataISO } from "../utils"

export { formatarData }

export async function pedirTexto(
    io: ConsoleIO,
    rotulo: string,
    valorAtual?: string
): Promise<string> {
    while (true) {
        const sufixo = valorAtual === undefined ? "" : ` (${valorAtual})`
        const valor = (await io.perguntar(`${rotulo}${sufixo}: `)).trim()

        if (valor.length > 0) return valor
        if (valorAtual !== undefined) return valorAtual

        io.exibir("O valor não pode ficar vazio.")
    }
}

export async function pedirNumero(
    io: ConsoleIO,
    rotulo: string,
    valorAtual?: number,
    minimo = 0
): Promise<number> {
    while (true) {
        const sufixo = valorAtual === undefined ? "" : ` (${valorAtual})`
        const entrada = (await io.perguntar(`${rotulo}${sufixo}: `)).trim()

        if (entrada.length === 0 && valorAtual !== undefined) return valorAtual

        const valor = Number(entrada)
        if (Number.isInteger(valor) && valor >= minimo) return valor

        io.exibir(`Informe um número inteiro maior ou igual a ${minimo}.`)
    }
}

export async function pedirData(
    io: ConsoleIO,
    rotulo: string,
    valorAtual?: Date
): Promise<Date> {
    while (true) {
        const dataAtual = valorAtual?.toISOString().slice(0, 10)
        const sufixo = dataAtual === undefined ? "" : ` (${dataAtual})`
        const entrada = (await io.perguntar(`${rotulo} (AAAA-MM-DD)${sufixo}: `)).trim()

        if (entrada.length === 0 && valorAtual !== undefined) return valorAtual

        if (validarFormatoDataISO(entrada)) {
            return new Date(`${entrada}T00:00:00`)
        }

        io.exibir("Informe uma data válida no formato AAAA-MM-DD.")
    }
}

export async function pedirDataOpcional(
    io: ConsoleIO,
    rotulo: string,
    valorAtual: Date | null
): Promise<Date | null> {
    const dataAtual = valorAtual?.toISOString().slice(0, 10)
    const sufixo = dataAtual === undefined ? "" : ` (${dataAtual})`
    const entrada = (await io.perguntar(`${rotulo} (AAAA-MM-DD, vazio para nenhuma)${sufixo}: `)).trim()

    if (entrada.length === 0) return valorAtual

    if (validarFormatoDataISO(entrada)) {
        return new Date(`${entrada}T00:00:00`)
    }

    io.exibir("Data inválida, mantendo o valor atual.")
    return valorAtual
}

import type { ConsoleIO } from "./ConsoleIO"

export function formatarData(data: Date): string {
    return data.toLocaleDateString("pt-BR", { timeZone: "UTC" })
}

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

        const data = new Date(`${entrada}T00:00:00`)
        if (
            /^\d{4}-\d{2}-\d{2}$/.test(entrada) &&
            !Number.isNaN(data.getTime()) &&
            data.toISOString().slice(0, 10) === entrada
        ) {
            return data
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

    const data = new Date(`${entrada}T00:00:00`)
    if (
        /^\d{4}-\d{2}-\d{2}$/.test(entrada) &&
        !Number.isNaN(data.getTime()) &&
        data.toISOString().slice(0, 10) === entrada
    ) {
        return data
    }

    io.exibir("Data inválida, mantendo o valor atual.")
    return valorAtual
}

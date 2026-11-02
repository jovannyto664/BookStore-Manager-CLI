import { EmprestimoController } from "../controllers/EmprestimoController"
import { CEmprestimo } from "../models/Classes"
import type { StatusEmprestimo } from "../models/Types"
import type { ConsoleIO } from "./ConsoleIO"
import { executarMenuCrud } from "./CrudMenu"
import { formatarData, pedirData, pedirDataOpcional, pedirNumero } from "./FormHelpers"

async function pedirStatus(
    io: ConsoleIO,
    valorAtual?: StatusEmprestimo
): Promise<StatusEmprestimo> {
    const opcoes: StatusEmprestimo[] = ["EMPRESTADO", "DEVOLVIDO", "ATRASADO"]

    while (true) {
        const sufixo = valorAtual === undefined ? "" : ` (${valorAtual})`
        const entrada = (await io.perguntar(`Status ${opcoes.join("/")}${sufixo}: `)).trim().toUpperCase()

        if (entrada.length === 0 && valorAtual !== undefined) return valorAtual
        if (opcoes.includes(entrada as StatusEmprestimo)) return entrada as StatusEmprestimo

        io.exibir("Status inválido.")
    }
}

function formatarDataOuPendente(data: Date | null): string {
    return data ? formatarData(data) : "Pendente"
}

export async function executarMenuEmprestimos(io: ConsoleIO): Promise<void> {
    const controlador = new EmprestimoController()

    await executarMenuCrud({
        titulo: "Empréstimos",
        controlador,
        io,
        formatar: (emprestimo) =>
            `#${emprestimo.id} | Livro ID: ${emprestimo.id_livro} | Cliente ID: ${emprestimo.id_cliente} | Empréstimo: ${formatarData(emprestimo.data_emprestimo)} | Prevista: ${formatarData(emprestimo.data_devolucao_prevista)} | Devolução: ${formatarDataOuPendente(emprestimo.data_devolucao)} | ${emprestimo.status}`,
        criar: async (id) =>
            new CEmprestimo(
                id,
                await pedirNumero(io, "ID do livro", undefined, 1),
                await pedirNumero(io, "ID do cliente", undefined, 1),
                new Date(),
                await pedirData(io, "Data prevista para devolução"),
                null,
                "EMPRESTADO"
            ),
        editar: async (emprestimo) =>
            new CEmprestimo(
                emprestimo.id,
                await pedirNumero(io, "ID do livro", emprestimo.id_livro, 1),
                await pedirNumero(io, "ID do cliente", emprestimo.id_cliente, 1),
                await pedirData(io, "Data do empréstimo", emprestimo.data_emprestimo),
                await pedirData(io, "Data prevista para devolução", emprestimo.data_devolucao_prevista),
                await pedirDataOpcional(io, "Data de devolução", emprestimo.data_devolucao),
                await pedirStatus(io, emprestimo.status)
            )
    })
}
